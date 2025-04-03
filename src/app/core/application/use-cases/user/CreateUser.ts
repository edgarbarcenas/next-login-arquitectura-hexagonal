import { User } from "@/app/core/domain/entities/User";
import { UserRepository } from "@/app/core/domain/repositories/user/UserRepository";

export class CreateUser {
  constructor(private userRepository: UserRepository) {}

  async execute(name: string, email: string): Promise<void> {
    const existingUser = await this.userRepository.findByEmail(email);
    if (existingUser) {
      throw new Error("User already exists with this email");
    }
    const user = new User(Date.now().toString(), name, email);
    await this.userRepository.save(user);
  }
}