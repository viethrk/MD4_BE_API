import { Column, PrimaryGeneratedColumn } from "typeorm";

export class BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  created_at: string;

  @Column()
  updated_at: string;
}
