import { Entity, ObjectIdColumn, Column } from 'typeorm';
@Entity()
export class BreakfastProduct {
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
