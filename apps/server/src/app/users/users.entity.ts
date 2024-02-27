import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';


@Entity('users')
export class UsersEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  email: string;

  @Column()
  token: string;
}
