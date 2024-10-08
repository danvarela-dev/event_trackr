import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Gender, Role } from '@event-trackr/shared';
import { RolesEntity } from './roles.entity';
import { GendersEntity } from './genders.entity';

@Entity('users')
export class UsersEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  name: string;

  @Column()
  photo: string;

  @Column()
  email: string;

  @Column()
  telephone: string;

  @Column()
  password: string;

  @ManyToOne(() => RolesEntity, role => role.id)
  @JoinColumn({ name: 'id_role' })
  role: Role;

  @ManyToOne(() => GendersEntity, gender => gender.id)
  @JoinColumn({ name: 'id_gender' })
  gender: Gender;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at: Date;
}
