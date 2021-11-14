import { Injectable } from '@nestjs/common';
import { CreateSpiritDrinkDto } from './dto/create-spirit-drink.dto';
import { UpdateSpiritDrinkDto } from './dto/update-spirit-drink.dto';

@Injectable()
export class SpiritDrinksService {
  create(createSpiritDrinkDto: CreateSpiritDrinkDto) {
    return 'This action adds a new spiritDrink';
  }

  findAll() {
    return `This action returns all spiritDrinks`;
  }

  findOne(id: number) {
    return `This action returns a #${id} spiritDrink`;
  }

  update(id: number, updateSpiritDrinkDto: UpdateSpiritDrinkDto) {
    return `This action updates a #${id} spiritDrink`;
  }

  remove(id: number) {
    return `This action removes a #${id} spiritDrink`;
  }
}
