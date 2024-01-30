import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('categories')
export class CategoriesEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
