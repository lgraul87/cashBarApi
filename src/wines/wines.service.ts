import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateWineDto } from './dto/create-wine.dto';
import { UpdateWineDto } from './dto/update-wine.dto';
import { Wine } from './entities/wine.entity';

@Injectable()
export class WinesService {
  constructor(
    @InjectRepository(Wine) private readonly wineRepository: Repository<Wine>,
  ) {}
  create(createWineDto: CreateWineDto) {
    return this.wineRepository.create(createWineDto);
  }

  findAll() {
    return this.wineRepository.find();
  }

  findOne(id: number) {
    return this.wineRepository.findOne(id);
  }

  async update(id: number, updateWineDto: UpdateWineDto) {
    const toUpdateWine = await this.wineRepository.findOne(id);
    toUpdateWine.name = updateWineDto.name ?? toUpdateWine.name;
    toUpdateWine.details = updateWineDto.details ?? toUpdateWine.details;
    toUpdateWine.type = updateWineDto.type ?? toUpdateWine.type;
    toUpdateWine.liters = updateWineDto.liters ?? toUpdateWine.liters;
    toUpdateWine.units = updateWineDto.units ?? toUpdateWine.units;
    toUpdateWine.purchasePrice =
      updateWineDto.purchasePrice ?? toUpdateWine.purchasePrice;
    toUpdateWine.salePrice = updateWineDto.salePrice ?? toUpdateWine.salePrice;
    toUpdateWine.seller = updateWineDto.seller ?? toUpdateWine.seller;
    toUpdateWine.image = updateWineDto.image ?? toUpdateWine.image;
    return this.wineRepository.save(toUpdateWine);
  }

  remove(id: number) {
    return this.wineRepository.delete(id);
  }
}
