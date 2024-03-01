import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { CategoriesEntity } from '../categories/categories.entity';

@Entity('events')
export class EventsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  event_date: Date;

  @Column()
  notes: string;

  @ManyToOne(() => CategoriesEntity, category => category.id)
  @JoinColumn({ name: 'category_id' })
  category: CategoriesEntity;
}
