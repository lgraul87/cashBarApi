import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SoftDrink } from './entities/soft-drink.entity';
import { CreateSoftDrinkDto } from './dto/create-soft-drink.dto';
import { UpdateSoftDrinkDto } from './dto/update-soft-drink.dto';

@Injectable()
export class SoftDrinksService {
  constructor(
    @InjectRepository(SoftDrink)
    private readonly softDrinkRepository: Repository<SoftDrink>,
  ) {}
  create(createSoftDrinkDto: CreateSoftDrinkDto) {
    return this.softDrinkRepository.create(createSoftDrinkDto);
  }

  findAll() {
    return this.softDrinkRepository.find();
  }

  findOne(id: number) {
    return this.softDrinkRepository.findOne(id);
  }

  async update(id: number, updateSoftDrinkDto: UpdateSoftDrinkDto) {
    const toUpdateSoftDrink = await this.softDrinkRepository.findOne(id);
    toUpdateSoftDrink.name = updateSoftDrinkDto.name ?? toUpdateSoftDrink.name;
    toUpdateSoftDrink.details =
      updateSoftDrinkDto.details ?? toUpdateSoftDrink.details;
    toUpdateSoftDrink.type = updateSoftDrinkDto.type ?? toUpdateSoftDrink.type;
    toUpdateSoftDrink.liters =
      updateSoftDrinkDto.liters ?? toUpdateSoftDrink.liters;
    toUpdateSoftDrink.units =
      updateSoftDrinkDto.units ?? toUpdateSoftDrink.units;
    toUpdateSoftDrink.purchasePrice =
      updateSoftDrinkDto.purchasePrice ?? toUpdateSoftDrink.purchasePrice;
    toUpdateSoftDrink.salePrice =
      updateSoftDrinkDto.salePrice ?? toUpdateSoftDrink.salePrice;
    toUpdateSoftDrink.seller =
      updateSoftDrinkDto.seller ?? toUpdateSoftDrink.seller;
    toUpdateSoftDrink.image =
      updateSoftDrinkDto.image ?? toUpdateSoftDrink.image;
    return toUpdateSoftDrink;
  }

  remove(id: number) {
    return this.softDrinkRepository.delete(id);
  }
}
