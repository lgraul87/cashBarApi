import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Juice } from './entities/juice.entity';
import { CreateJuiceDto } from './dto/create-juice.dto';
import { UpdateJuiceDto } from './dto/update-juice.dto';
@Injectable()
export class JuicesService {
  constructor(
    @InjectRepository(Juice)
    private readonly juiceRepository: Repository<Juice>,
  ) {}
  create(createJuiceDto: CreateJuiceDto) {
    return this.juiceRepository.create(createJuiceDto);
  }

  findAll() {
    return this.juiceRepository.find();
  }

  findOne(id: number) {
    return this.juiceRepository.findOne(id);
  }

  async update(id: number, updateJuiceDto: UpdateJuiceDto) {
    const toUpdateJuice = await this.juiceRepository.findOne(id);
    toUpdateJuice.name = updateJuiceDto.name ?? toUpdateJuice.name;
    toUpdateJuice.details = updateJuiceDto.details ?? toUpdateJuice.details;
    toUpdateJuice.type = updateJuiceDto.type ?? toUpdateJuice.type;
    toUpdateJuice.liters = updateJuiceDto.liters ?? toUpdateJuice.liters;
    toUpdateJuice.units = updateJuiceDto.units ?? toUpdateJuice.units;
    toUpdateJuice.purchasePrice =
      updateJuiceDto.purchasePrice ?? toUpdateJuice.purchasePrice;
    toUpdateJuice.salePrice =
      updateJuiceDto.salePrice ?? toUpdateJuice.salePrice;
    toUpdateJuice.seller = updateJuiceDto.seller ?? toUpdateJuice.seller;
    toUpdateJuice.image = updateJuiceDto.image ?? toUpdateJuice.image;
    return toUpdateJuice;
  }

  remove(id: number) {
    return this.juiceRepository.delete(id);
  }
}
