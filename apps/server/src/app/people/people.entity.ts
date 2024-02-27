import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('people')
export class PeopleEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column()
  birth_date: Date;

  @Column()
  death_date: Date;

  // todo: relations
}
