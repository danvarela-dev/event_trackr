import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { CategoriesEntity } from '../categories/categories.entity';
import { RecursionType } from '../recursion_type/recursion_type.entity';

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

  @Column()
  source: string;

  @ManyToOne(() => RecursionType, recursion_type_id => recursion_type_id.id)
  @JoinColumn({ name: 'recursion_type_id' })
  recursion: RecursionType;

  @Column()
  recursion_unit: number;
}
