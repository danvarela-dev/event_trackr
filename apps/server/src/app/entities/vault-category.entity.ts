import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('vault_category')
export class VaultCategoryEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  image: string;

  @Column()
  icon: string;

  @Column()
  created_at: Date;

  @Column()
  updated_at: Date;
}
