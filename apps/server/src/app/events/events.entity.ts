import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
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

  @OneToOne(() => CategoriesEntity)
  category: CategoriesEntity;
}
