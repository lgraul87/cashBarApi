import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BreakfastProduct } from './entities/breakfast-product.entity';
import { CreateBreakfastProductDto } from './dto/create-breakfast-product.dto';
import { UpdateBreakfastProductDto } from './dto/update-breakfast-product.dto';
@Injectable()
export class BreakfastProductsService {
  constructor(
    @InjectRepository(BreakfastProduct)
    private readonly breakfastProductRepository: Repository<BreakfastProduct>,
  ) {}
  create(createBreakfastProductDto: CreateBreakfastProductDto) {
    return this.breakfastProductRepository.create(createBreakfastProductDto);
  }

  findAll() {
    return this.breakfastProductRepository.find();
  }

  findOne(id: number) {
    return this.breakfastProductRepository.findOne(id);
  }

  async update(
    id: number,
    updateBreakfastProductDto: UpdateBreakfastProductDto,
  ) {
    const toUpdateBreakfast = await this.breakfastProductRepository.findOne(id);
    toUpdateBreakfast.name =
      updateBreakfastProductDto.name ?? toUpdateBreakfast.name;
    toUpdateBreakfast.details =
      updateBreakfastProductDto.details ?? toUpdateBreakfast.details;
    toUpdateBreakfast.type =
      updateBreakfastProductDto.type ?? toUpdateBreakfast.type;
    toUpdateBreakfast.liters =
      updateBreakfastProductDto.liters ?? toUpdateBreakfast.liters;
    toUpdateBreakfast.units =
      updateBreakfastProductDto.units ?? toUpdateBreakfast.units;
    toUpdateBreakfast.kilograms =
      updateBreakfastProductDto.kilograms ?? toUpdateBreakfast.kilograms;
    toUpdateBreakfast.purchasePrice =
      updateBreakfastProductDto.purchasePrice ??
      toUpdateBreakfast.purchasePrice;
    toUpdateBreakfast.salePrice =
      updateBreakfastProductDto.salePrice ?? toUpdateBreakfast.salePrice;
    toUpdateBreakfast.seller =
      updateBreakfastProductDto.seller ?? toUpdateBreakfast.seller;
    toUpdateBreakfast.image =
      updateBreakfastProductDto.image ?? toUpdateBreakfast.image;
    return this.breakfastProductRepository.save(toUpdateBreakfast);
  }

  remove(id: number) {
    return this.breakfastProductRepository.delete(id);
  }
}
