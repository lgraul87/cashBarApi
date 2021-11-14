import { Injectable } from '@nestjs/common';
import { CreateSoftDrinkDto } from './dto/create-soft-drink.dto';
import { UpdateSoftDrinkDto } from './dto/update-soft-drink.dto';

@Injectable()
export class SoftDrinksService {
  create(createSoftDrinkDto: CreateSoftDrinkDto) {
    return 'This action adds a new softDrink';
  }

  findAll() {
    return `This action returns all softDrinks`;
  }

  findOne(id: number) {
    return `This action returns a #${id} softDrink`;
  }

  update(id: number, updateSoftDrinkDto: UpdateSoftDrinkDto) {
    return `This action updates a #${id} softDrink`;
  }

  remove(id: number) {
    return `This action removes a #${id} softDrink`;
  }
}
