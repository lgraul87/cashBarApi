import { UpdateBeerDto } from 'src/beers/dto/update-beer.dto';
import { UpdateBreakfastProductDto } from 'src/breakfast-products/dto/update-breakfast-product.dto';
import { UpdateDinnerProductDto } from 'src/dinner-products/dto/update-dinner-product.dto';
import { UpdateJuiceDto } from 'src/juices/dto/update-juice.dto';
import { UpdateLunchProductDto } from 'src/lunch-products/dto/update-lunch-product.dto';
import { UpdateSoftDrinkDto } from 'src/soft-drinks/dto/update-soft-drink.dto';
import { UpdateSpiritDrinkDto } from 'src/spirit-drinks/dto/update-spirit-drink.dto';
export class UpdatePurchasingManagerDto {
  beerProduct?: UpdateBeerDto;
  breakfastProduct?: UpdateBreakfastProductDto;
  dinnerProduct?: UpdateDinnerProductDto;
  juiceProduct?: UpdateJuiceDto;
  lunchProduct?: UpdateLunchProductDto;
  softDrinkProduct?: UpdateSoftDrinkDto;
  spiritDrinkProduct?: UpdateSpiritDrinkDto;
  units?: number;
  liters?: number;
  kilograms?: number;
  price: number;
  date: Date;
}
