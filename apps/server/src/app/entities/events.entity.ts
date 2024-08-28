import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UsersEntity } from './users.entity';
import { CategoriesEntity } from './categories.entity';

@Entity('events')
export class EventsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ name: 'start_date', type: 'datetime' })
  startDate: Date;

  @Column({ type: 'varchar', length: 255, nullable: true })
  notes: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  source: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  frequency: string;

  @Column({ name: 'end_date', type: 'datetime', nullable: true })
  endDate: Date;

  @Column({ type: 'int', nullable: true })
  occurrences: number;

  @ManyToOne(() => CategoriesEntity, category => category.id)
  @JoinColumn({ name: 'category_id' })
  category: CategoriesEntity;

  @ManyToOne(() => UsersEntity, user => user.id)
  @JoinColumn({ name: 'created_by' })
  createdBy: UsersEntity;

  @ManyToOne(() => UsersEntity, user => user.id)
  @JoinColumn({ name: 'updated_by' })
  updatedBy: UsersEntity;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
    name: 'created_at',
  })
  createdAt: Date;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
    name: 'updated_at',
  })
  updatedAt: Date;
}
