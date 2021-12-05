import { Column, Entity, ObjectIdColumn } from 'typeorm';
@Entity()
export class Waiter {
  @ObjectIdColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  position: string;
}
