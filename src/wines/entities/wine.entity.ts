import { Column, Entity, ObjectIdColumn } from 'typeorm';
@Entity()
export class Wine {
  @ObjectIdColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  details: string;

  @Column()
  type: string;

  @Column()
  liters: number;

  @Column()
  units: number;

  @Column()
  image: string;

  @Column()
  seller: string;

  @Column()
  purchasePrice: number;

  @Column()
  salePrice: number;
}
