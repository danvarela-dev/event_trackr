import { Category } from './category.interface';

export interface Events {
  id?: number;
  name: string;
  category: Category;
  event_date: Date;
  notes: string;
  eventType?: number;
  source?: string;
}
