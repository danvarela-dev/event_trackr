import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Role } from '@event-trackr/shared';
import { RolesEntity } from '../roles/roles.entity';

@Entity('users')
export class UsersEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  name: string;

  @Column()
  gender: string;

  @Column()
  photo: string;

  @Column()
  email: string;

  @Column()
  telephone: string;

  @Column()
  password: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @ManyToOne(() => RolesEntity, role => role.id)
  @JoinColumn({ name: 'id_role' })
  role: Role;
}
