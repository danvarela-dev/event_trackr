import { VaultCategoryEntity } from './vault-category.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('vault')
export class VaultEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  description: string;

  @Column()
  uri: string;

  @Column()
  created_at: Date;

  @Column()
  updated_at: Date;

  @ManyToOne(() => VaultCategoryEntity, vaultCategory => vaultCategory.id)
  @JoinColumn({ name: 'id_vault_category' })
  vaultCategory: VaultCategoryEntity;
}
