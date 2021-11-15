import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DinnerProduct } from './entities/dinner-product.entity';

import { CreateDinnerProductDto } from './dto/create-dinner-product.dto';
import { UpdateDinnerProductDto } from './dto/update-dinner-product.dto';
import { Repository } from 'typeorm';

@Injectable()
export class DinnerProductsService {
  constructor(
    @InjectRepository(DinnerProduct)
    private readonly dinnerProductRepository: Repository<DinnerProduct>,
  ) {}
  create(createDinnerProductDto: CreateDinnerProductDto) {
    return this.dinnerProductRepository.create(createDinnerProductDto);
  }

  findAll() {
    return this.dinnerProductRepository.find();
  }

  findOne(id: number) {
    return this.dinnerProductRepository.findOne(id);
  }

  async update(id: number, updateDinnerProductDto: UpdateDinnerProductDto) {
    const toUpdateDinnerProduct = await this.dinnerProductRepository.findOne(
      id,
    );
    toUpdateDinnerProduct.name =
      updateDinnerProductDto.name ?? toUpdateDinnerProduct.name;
    toUpdateDinnerProduct.details =
      updateDinnerProductDto.details ?? toUpdateDinnerProduct.details;
    toUpdateDinnerProduct.type =
      updateDinnerProductDto.type ?? toUpdateDinnerProduct.type;
    toUpdateDinnerProduct.liters =
      updateDinnerProductDto.liters ?? toUpdateDinnerProduct.liters;
    toUpdateDinnerProduct.units =
      updateDinnerProductDto.units ?? toUpdateDinnerProduct.units;
    toUpdateDinnerProduct.kilograms =
      updateDinnerProductDto.kilograms ?? toUpdateDinnerProduct.kilograms;
    toUpdateDinnerProduct.purchasePrice =
      updateDinnerProductDto.purchasePrice ??
      toUpdateDinnerProduct.purchasePrice;
    toUpdateDinnerProduct.salePrice =
      updateDinnerProductDto.salePrice ?? toUpdateDinnerProduct.salePrice;
    toUpdateDinnerProduct.seller =
      updateDinnerProductDto.seller ?? toUpdateDinnerProduct.seller;
    toUpdateDinnerProduct.image =
      updateDinnerProductDto.image ?? toUpdateDinnerProduct.image;
    return this.dinnerProductRepository.save(toUpdateDinnerProduct);
  }

  remove(id: number) {
    return this.dinnerProductRepository.delete(id);
  }
}
