import { Category } from './category.interface';
import { User } from './users.interface';

export interface Events {
  id?: number;
  name: string;
  startDate: Date;
  notes: string;
  source?: string;
  frequency?: string;
  endDate: Date;
  occurrences: number;
  category: Category;
  createdBy: User;
  updatedBy?: User;
  createdAt?: Date;
  updatedAt?: Date;
}
