import { Column, Entity, ManyToOne } from "typeorm";
import { BaseEntity } from "./base.entity";
import { User } from "./user.entity";

@Entity()
export class Book extends BaseEntity {
  @Column()
  name: string;

  @ManyToOne(() => User, (user) => user.books)
  user: User;
}
