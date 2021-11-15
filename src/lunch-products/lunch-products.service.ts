import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateLunchProductDto } from './dto/create-lunch-product.dto';
import { UpdateLunchProductDto } from './dto/update-lunch-product.dto';
import { LunchProduct } from './entities/lunch-product.entity';
@Injectable()
export class LunchProductsService {
  constructor(
    @InjectRepository(LunchProduct)
    private readonly lunchProductRepository: Repository<LunchProduct>,
  ) {}
  create(createLunchProductDto: CreateLunchProductDto) {
    return this.lunchProductRepository.create(createLunchProductDto);
  }

  findAll() {
    return this.lunchProductRepository.find();
  }

  findOne(id: number) {
    return this.lunchProductRepository.findOne(id);
  }

  async update(id: number, updateLunchProductDto: UpdateLunchProductDto) {
    const toUpdateLunchProduct = await this.lunchProductRepository.findOne(id);
    toUpdateLunchProduct.name =
      updateLunchProductDto.name ?? toUpdateLunchProduct.name;
    toUpdateLunchProduct.details =
      updateLunchProductDto.details ?? toUpdateLunchProduct.details;
    toUpdateLunchProduct.type =
      updateLunchProductDto.type ?? toUpdateLunchProduct.type;
    toUpdateLunchProduct.liters =
      updateLunchProductDto.liters ?? toUpdateLunchProduct.liters;
    toUpdateLunchProduct.units =
      updateLunchProductDto.units ?? toUpdateLunchProduct.units;
    toUpdateLunchProduct.kilograms =
      updateLunchProductDto.kilograms ?? toUpdateLunchProduct.kilograms;
    toUpdateLunchProduct.purchasePrice =
      updateLunchProductDto.purchasePrice ?? toUpdateLunchProduct.purchasePrice;
    toUpdateLunchProduct.salePrice =
      updateLunchProductDto.salePrice ?? toUpdateLunchProduct.salePrice;
    toUpdateLunchProduct.seller =
      updateLunchProductDto.seller ?? toUpdateLunchProduct.seller;
    toUpdateLunchProduct.image =
      updateLunchProductDto.image ?? toUpdateLunchProduct.image;
    return this.lunchProductRepository.save(toUpdateLunchProduct);
  }

  remove(id: number) {
    return this.lunchProductRepository.delete(id);
  }
}
