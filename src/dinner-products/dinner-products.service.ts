import { Injectable } from '@nestjs/common';
import { CreateDinnerProductDto } from './dto/create-dinner-product.dto';
import { UpdateDinnerProductDto } from './dto/update-dinner-product.dto';

@Injectable()
export class DinnerProductsService {
  create(createDinnerProductDto: CreateDinnerProductDto) {
    return 'This action adds a new dinnerProduct';
  }

  findAll() {
    return `This action returns all dinnerProducts`;
  }

  findOne(id: number) {
    return `This action returns a #${id} dinnerProduct`;
  }

  update(id: number, updateDinnerProductDto: UpdateDinnerProductDto) {
    return `This action updates a #${id} dinnerProduct`;
  }

  remove(id: number) {
    return `This action removes a #${id} dinnerProduct`;
  }
}
