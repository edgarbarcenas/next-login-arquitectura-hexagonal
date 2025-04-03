import { NextResponse } from "next/server";
import { CreateUserDTO } from "./dto";
import { PrismaUserRepository } from "@/app/infrastructure/database/repositories/PrismaUserRepository";
import { CreateUser } from "@/app/core/application/use-cases/user/CreateUser";

export async function createUserController(request: Request) {
  try {
    const body: CreateUserDTO = await request.json();
    const { name, email, password, phone, role, image } = body;

    if (!name || !email || !password) {
      return NextResponse.json({ error: "Name, email, and password are required" }, { status: 400 });
    }

    const userRepository = new PrismaUserRepository();
    const createUser = new CreateUser(userRepository);

    const user = await createUser.execute({ name, email, password, phone, role, image });

    return NextResponse.json(user, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error || "Internal Server Error" }, { status: 500 });
  }
}
