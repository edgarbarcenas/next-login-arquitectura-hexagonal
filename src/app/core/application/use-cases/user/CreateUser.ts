import { User } from "@/app/core/domain/entities/User";
import { UserRepository } from "@/app/core/domain/repositories/user/UserRepository";
export class CreateUser {
  constructor(private userRepository: UserRepository) {}

  async execute(userData: User): Promise<User> {
    const existingUser = await this.userRepository.findByEmail(userData.email);
    if (existingUser) {
      throw new Error("Email already exists");
    }
    return this.userRepository.create(userData);
  }
}