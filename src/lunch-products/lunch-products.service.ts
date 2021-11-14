import { Injectable } from '@nestjs/common';
import { CreateLunchProductDto } from './dto/create-lunch-product.dto';
import { UpdateLunchProductDto } from './dto/update-lunch-product.dto';

@Injectable()
export class LunchProductsService {
  create(createLunchProductDto: CreateLunchProductDto) {
    return 'This action adds a new lunchProduct';
  }

  findAll() {
    return `This action returns all lunchProducts`;
  }

  findOne(id: number) {
    return `This action returns a #${id} lunchProduct`;
  }

  update(id: number, updateLunchProductDto: UpdateLunchProductDto) {
    return `This action updates a #${id} lunchProduct`;
  }

  remove(id: number) {
    return `This action removes a #${id} lunchProduct`;
  }
}
