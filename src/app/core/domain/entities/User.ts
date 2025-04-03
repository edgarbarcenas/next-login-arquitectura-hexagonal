export interface User {
  id?: number;
  name: string;
  email: string;
  password: string;
  phone?: string | null;
  role?: string;
  image?: string | null;
  active?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
