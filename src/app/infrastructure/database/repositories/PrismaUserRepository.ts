import bcrypt from "bcryptjs";
import { User } from "@prisma/client";

import prisma from "../prisma/client";
import { UserRepository } from "@/app/core/domain/repositories/user/UserRepository";
export class PrismaUserRepository implements UserRepository {
  async create(user: User): Promise<User> {
    const hashedPassword = await bcrypt.hash(user.password, 10);
    return prisma.user.create({
      data: {
        ...user,
        password: hashedPassword,
      },
    });
  }

  async findByEmail(email: string): Promise<User | null> {
    return prisma.user.findUnique({
      where: { email },
    });
  }
}
