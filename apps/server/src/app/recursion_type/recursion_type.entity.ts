import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('recursion_type')
export class RecursionType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255, nullable: true })
  recursion_type: string;
}
