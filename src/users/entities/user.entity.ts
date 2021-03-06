import { Entity, ObjectIdColumn, Column } from 'typeorm';
@Entity()
export class User {
  @ObjectIdColumn()
  id: string;

  @Column()
  email: string;

  @Column()
  password: string;
}
