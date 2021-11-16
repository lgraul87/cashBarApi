import { CreateBeerDto } from 'src/beers/dto/create-beer.dto';
import { CreateBreakfastProductDto } from 'src/breakfast-products/dto/create-breakfast-product.dto';
import { CreateDinnerProductDto } from 'src/dinner-products/dto/create-dinner-product.dto';
import { CreateJuiceDto } from 'src/juices/dto/create-juice.dto';
import { CreateLunchProductDto } from 'src/lunch-products/dto/create-lunch-product.dto';

export class CreatePurchasingManagerDto {
  beerProduct: CreateBeerDto;
  breakfastProduct: CreateBreakfastProductDto;
  dinnerProduct: CreateDinnerProductDto;
  juiceProduct: CreateJuiceDto;
  lunchProduct: CreateLunchProductDto;
}
