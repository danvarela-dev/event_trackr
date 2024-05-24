import { Category } from './category.interface';
import { RecursionTypeI } from './recursion_type.interface';

export interface Events {
  id?: number;
  name: string;
  category: Category;
  event_date: Date;
  notes: string;
  eventType?: number;
  source?: string;
  recursion: RecursionTypeI;
  recursion_unit: number;
  rrule?: string;
}
