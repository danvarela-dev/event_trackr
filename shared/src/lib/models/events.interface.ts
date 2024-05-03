import { Category } from '@event-trackr/shared';

export interface Events {
  id?: number;
  name: string;
  category: Category;
  event_date: Date;
  notes: string;
}
