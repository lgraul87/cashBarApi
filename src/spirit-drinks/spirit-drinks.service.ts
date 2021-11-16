import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SpiritDrink } from './entities/spirit-drink.entity';
import { CreateSpiritDrinkDto } from './dto/create-spirit-drink.dto';
import { UpdateSpiritDrinkDto } from './dto/update-spirit-drink.dto';
@Injectable()
export class SpiritDrinksService {
  constructor(
    @InjectRepository(SpiritDrink)
    private readonly spiritDrinkRepository: Repository<SpiritDrink>,
  ) {}
  create(createSpiritDrinkDto: CreateSpiritDrinkDto) {
    return this.spiritDrinkRepository.create(createSpiritDrinkDto);
  }

  findAll() {
    return this.spiritDrinkRepository.find();
  }

  findOne(id: number) {
    return this.spiritDrinkRepository.findOne(id);
  }

  async update(id: number, updateSpiritDrinkDto: UpdateSpiritDrinkDto) {
    const toUpdateSpiritDrink = await this.spiritDrinkRepository.findOne(id);
    toUpdateSpiritDrink.name =
      updateSpiritDrinkDto.name ?? toUpdateSpiritDrink.name;
    toUpdateSpiritDrink.details =
      updateSpiritDrinkDto.details ?? toUpdateSpiritDrink.details;
    toUpdateSpiritDrink.type =
      updateSpiritDrinkDto.type ?? toUpdateSpiritDrink.type;
    toUpdateSpiritDrink.liters =
      updateSpiritDrinkDto.liters ?? toUpdateSpiritDrink.liters;
    toUpdateSpiritDrink.units =
      updateSpiritDrinkDto.units ?? toUpdateSpiritDrink.units;
    toUpdateSpiritDrink.purchasePrice =
      updateSpiritDrinkDto.purchasePrice ?? toUpdateSpiritDrink.purchasePrice;
    toUpdateSpiritDrink.salePrice =
      updateSpiritDrinkDto.salePrice ?? toUpdateSpiritDrink.salePrice;
    toUpdateSpiritDrink.seller =
      updateSpiritDrinkDto.seller ?? toUpdateSpiritDrink.seller;
    toUpdateSpiritDrink.image =
      updateSpiritDrinkDto.image ?? toUpdateSpiritDrink.image;
    return toUpdateSpiritDrink;
  }

  remove(id: number) {
    return this.spiritDrinkRepository.delete(id);
  }
}
