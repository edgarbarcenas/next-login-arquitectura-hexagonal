import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req: NextRequest) {
  const JWT_SECRET = process.env.NEXTAUTH_SECRET;
  if (!JWT_SECRET) {
    console.error(
      "NEXTAUTH_SECRET is not defined in the environment variables."
    );
    return NextResponse.json(
      { message: "Server configuration error" },
      { status: 500 }
    );
  }

  if (req.nextUrl.pathname.startsWith("/api/dashboard")) {
    try {
      const decode = await getToken({ req, secret: JWT_SECRET });
      if (!decode) {
        return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
      }
      return NextResponse.next();
    } catch (error) {
      console.log("error", error);
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/api/dashboard/:path*"], // Solo aplica el middleware a rutas bajo /api/dashboard
};
