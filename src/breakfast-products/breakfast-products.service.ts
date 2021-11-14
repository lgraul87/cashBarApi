import { Injectable } from '@nestjs/common';
import { CreateBreakfastProductDto } from './dto/create-breakfast-product.dto';
import { UpdateBreakfastProductDto } from './dto/update-breakfast-product.dto';

@Injectable()
export class BreakfastProductsService {
  create(createBreakfastProductDto: CreateBreakfastProductDto) {
    return 'This action adds a new breakfastProduct';
  }

  findAll() {
    return `This action returns all breakfastProducts`;
  }

  findOne(id: number) {
    return `This action returns a #${id} breakfastProduct`;
  }

  update(id: number, updateBreakfastProductDto: UpdateBreakfastProductDto) {
    return `This action updates a #${id} breakfastProduct`;
  }

  remove(id: number) {
    return `This action removes a #${id} breakfastProduct`;
  }
}
