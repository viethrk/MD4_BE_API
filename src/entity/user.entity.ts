import { BeforeInsert, Column, Entity, OneToMany } from "typeorm";
import { BaseEntity } from "./base.entity";
import { Book } from "./book.entity";

@Entity()
export class User extends BaseEntity {
  @Column()
  user_name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  address: string;

  @Column()
  role?: string;

  @OneToMany(() => Book, (book) => book.user)
  books: Book[];
}
