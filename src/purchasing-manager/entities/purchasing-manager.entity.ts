import { Column, Entity, ObjectIdColumn } from 'typeorm';
import { Beer } from 'src/beers/entities/beer.entity';
import { BreakfastProduct } from 'src/breakfast-products/entities/breakfast-product.entity';
import { DinnerProduct } from 'src/dinner-products/entities/dinner-product.entity';
import { Juice } from 'src/juices/entities/juice.entity';
import { LunchProduct } from 'src/lunch-products/entities/lunch-product.entity';
import { SoftDrink } from 'src/soft-drinks/entities/soft-drink.entity';
import { SpiritDrink } from 'src/spirit-drinks/entities/spirit-drink.entity';
@Entity()
export class PurchasingManager {
  @ObjectIdColumn()
  id: string;

  @Column()
  beerProduct: Beer;

  @Column()
  breakfastProduct: BreakfastProduct;

  @Column()
  dinnerProduct: DinnerProduct;

  @Column()
  juiceProduct: Juice;

  @Column()
  lunchProduct: LunchProduct;

  @Column()
  softDrinkProduct: SoftDrink;

  @Column()
  spiritDrinkProduct: SpiritDrink;

  @Column()
  units: number;

  @Column()
  liters: number;

  @Column()
  kilograms: number;

  @Column()
  price: number;

  @Column()
  date: Date;
}
