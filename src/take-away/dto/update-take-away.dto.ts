import { CreateBeerDto } from 'src/beers/dto/create-beer.dto';
import { CreateBreakfastProductDto } from 'src/breakfast-products/dto/create-breakfast-product.dto';
import { CreateDinnerProductDto } from 'src/dinner-products/dto/create-dinner-product.dto';
import { CreateJuiceDto } from 'src/juices/dto/create-juice.dto';
import { CreateLunchProductDto } from 'src/lunch-products/dto/create-lunch-product.dto';
import { CreateSoftDrinkDto } from 'src/soft-drinks/dto/create-soft-drink.dto';
import { CreateSpiritDrinkDto } from 'src/spirit-drinks/dto/create-spirit-drink.dto';
import { CreateWaiterDto } from 'src/waiters/dto/create-waiter.dto';
import { CreateWineDto } from 'src/wines/dto/create-wine.dto';

export class UpdateTakeAwayDto {
  beerProduct?: CreateBeerDto;
  breakfastProduct?: CreateBreakfastProductDto;
  dinnerProduct?: CreateDinnerProductDto;
  juiceProduct?: CreateJuiceDto;
  lunchProduct?: CreateLunchProductDto;
  softDrinkProduct?: CreateSoftDrinkDto;
  spiritDrinkProduct?: CreateSpiritDrinkDto;
  wineProduct?: CreateWineDto;
  units?: number;
  liters?: number;
  kilograms?: number;
  price?: number;
  waiter?: CreateWaiterDto;
  date?: Date;
  bill?: number;
}
