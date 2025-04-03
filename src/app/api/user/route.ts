import { CreateUser } from "@/app/core/application/use-cases/user/CreateUser";
import { PrismaUserRepository } from "@/app/infrastructure/database/repositories/PrismaUserRepository";
import { NextRequest, NextResponse } from "next/server";

const userRepository = new PrismaUserRepository();

const createUser = new CreateUser(userRepository);

export async function POST(req: NextRequest) {
  try {
    const { name, email } = await req.json();

    await createUser.execute(name, email);

    return NextResponse.json(
      { message: "Usuario creado exitosamente" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ error }, { status: 400 });
  }
}