import { CreateBeerDto } from 'src/beers/dto/create-beer.dto';
import { CreateBreakfastProductDto } from 'src/breakfast-products/dto/create-breakfast-product.dto';
import { CreateDinnerProductDto } from 'src/dinner-products/dto/create-dinner-product.dto';
import { CreateJuiceDto } from 'src/juices/dto/create-juice.dto';
import { CreateLunchProductDto } from 'src/lunch-products/dto/create-lunch-product.dto';
import { CreateSoftDrinkDto } from 'src/soft-drinks/dto/create-soft-drink.dto';
import { CreateSpiritDrinkDto } from 'src/spirit-drinks/dto/create-spirit-drink.dto';
import { CreateWaiterDto } from 'src/waiters/dto/create-waiter.dto';
import { CreateWineDto } from 'src/wines/dto/create-wine.dto';
import { Column, Entity, ObjectIdColumn } from 'typeorm';
@Entity()
export class TakeAway {
  @ObjectIdColumn()
  id: string;

  @Column()
  beerProduct: CreateBeerDto;

  @Column()
  breakfastProduct: CreateBreakfastProductDto;

  @Column()
  dinnerProduct: CreateDinnerProductDto;

  @Column()
  juiceProduct: CreateJuiceDto;

  @Column()
  lunchProduct: CreateLunchProductDto;

  @Column()
  softDrinkProduct: CreateSoftDrinkDto;

  @Column()
  spiritDrinkProduct: CreateSpiritDrinkDto;

  @Column()
  wineProduct: CreateWineDto;

  @Column()
  units: number;

  @Column()
  liters: number;

  @Column()
  kilograms: number;

  @Column()
  price: number;

  @Column()
  waiter: CreateWaiterDto;

  @Column()
  date: Date;

  @Column()
  bill: number;
}
