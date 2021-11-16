import { Entity, Column, ObjectIdColumn } from 'typeorm';
@Entity()
export class SpiritDrink {
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
