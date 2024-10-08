import { Gender } from './gender.interface';
import { Role } from './role.interface';

export interface User {
  id: number;
  username: string;
  name: string;
  photo: string;
  email: string;
  telephone: string;
  token: string;
  password?: string;
  created_at: Date;
  updated_at: Date;
  role: Role;
  gender: Gender;
}
