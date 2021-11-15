import { Entity, Column, ObjectIdColumn } from 'typeorm';
@Entity()
export class DinnerProduct {
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
  kilograms: number;

  @Column()
  image: string;

  @Column()
  seller: string;

  @Column()
  purchasePrice: number;

  @Column()
  salePrice: number;
}
