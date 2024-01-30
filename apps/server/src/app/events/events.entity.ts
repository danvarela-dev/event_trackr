import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

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

  //relations

}
