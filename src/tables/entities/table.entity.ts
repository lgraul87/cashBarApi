import { Column, Entity, ObjectIdColumn } from 'typeorm';
@Entity()
export class Table {
  @ObjectIdColumn()
  id: string;

  @Column()
  number: number;

  @Column()
  nameClient: string;

  @Column()
  location: string;
}
