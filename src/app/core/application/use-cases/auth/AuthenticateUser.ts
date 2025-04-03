import bcrypt from "bcryptjs";

import { User } from "@/app/core/domain/entities/User";
import { UserRepository } from "@/app/core/domain/repositories/user/UserRepository";

export class AuthenticateUser {
  constructor(private userRepository: UserRepository) {}

  async execute(email: string, password: string): Promise<User | null> {
    if (!email || !password) {
      throw new Error("Email and password are required");
    }

    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      throw new Error("No user found with this email");
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      throw new Error("Invalid password");
    }

    return user;
  }
}
