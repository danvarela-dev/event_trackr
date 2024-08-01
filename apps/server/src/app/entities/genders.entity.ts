import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('genders')
export class GendersEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
