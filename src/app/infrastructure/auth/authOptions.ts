import { NextAuthOptions, User as NextAuthUser, Session, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaUserRepository } from "../database/repositories/PrismaUserRepository";
import { AuthenticateUser } from "@/app/core/application/use-cases/auth/AuthenticateUser";
import { AdapterUser } from "next-auth/adapters";

const userRepository = new PrismaUserRepository();
const authenticateUser = new AuthenticateUser(userRepository);

export interface AuthUser extends NextAuthUser {
  id: string;
  email: string;
  role: string;
}
declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      email: string;
      role: string;
      name?: string | null;
    };
  }
}

const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "text",
          placeholder: "example@domain.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials): Promise<AuthUser | null> {
        if (!credentials?.email || !credentials.password) {
          throw new Error("Email and password are required");
        }
        const user = await authenticateUser.execute(
          credentials.email,
          credentials.password
        );

        if (!user) {
          return null;
        }

        return {
          id: user.id?.toString() || "",
          name: user.name || user.email,
          email: user.email,
          role: user.role || "USER",
        };
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
  jwt: {
    secret: process.env.NEXTAUTH_SECRET,
    maxAge: 3 * 24 * 60 * 60,
  },
  callbacks: {
    async redirect({ url, baseUrl }: { url: string; baseUrl: string }) {
      return url.startsWith("/login")
        ? new URL(url, baseUrl).toString()
        : baseUrl;
    },
    async jwt({ token, user }: { token: Record<string, unknown>; user?: User | AdapterUser }) {
      if (user) {
        token.id = (user as AuthUser).id || "";
        token.email = user.email || "";
        token.role = (user as AuthUser).role || "USER";
      }
      return token;
    },
    async session({ session, token }: { session: Session; token: any }) {
      if (session.user) {
        session.user.id = token.id;
        session.user.email = token.email;
        session.user.role = token.role;
        session.user.name = token.name
      }
      return session;
    },
  },
};

export default authOptions;
