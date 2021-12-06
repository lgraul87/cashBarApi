import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTakeAwayDto } from './dto/create-take-away.dto';
import { UpdateTakeAwayDto } from './dto/update-take-away.dto';
import { TakeAway } from './entities/take-away.entity';

@Injectable()
export class TakeAwayService {
  constructor(
    @InjectRepository(TakeAway)
    private readonly takeAwayRepository: Repository<TakeAway>,
  ) {}
  create(createTakeAwayDto: CreateTakeAwayDto) {
    return this.takeAwayRepository.create(createTakeAwayDto);
  }

  findAll() {
    return this.takeAwayRepository.find();
  }

  findOne(id: number) {
    return this.takeAwayRepository.findOne(id);
  }

  async update(id: number, updateTakeAwayDto: UpdateTakeAwayDto) {
    const toUpdateTakeAwayDto = await this.takeAwayRepository.findOne(id);
    toUpdateTakeAwayDto.beerProduct =
      updateTakeAwayDto.beerProduct ?? toUpdateTakeAwayDto.beerProduct;
    toUpdateTakeAwayDto.bill =
      updateTakeAwayDto.bill ?? toUpdateTakeAwayDto.bill;
    toUpdateTakeAwayDto.breakfastProduct =
      updateTakeAwayDto.breakfastProduct ??
      toUpdateTakeAwayDto.breakfastProduct;
    toUpdateTakeAwayDto.date =
      updateTakeAwayDto.date ?? toUpdateTakeAwayDto.date;
    toUpdateTakeAwayDto.dinnerProduct =
      updateTakeAwayDto.dinnerProduct ?? toUpdateTakeAwayDto.dinnerProduct;
    toUpdateTakeAwayDto.juiceProduct =
      updateTakeAwayDto.juiceProduct ?? toUpdateTakeAwayDto.juiceProduct;
    toUpdateTakeAwayDto.kilograms =
      updateTakeAwayDto.kilograms ?? toUpdateTakeAwayDto.kilograms;
    toUpdateTakeAwayDto.liters =
      updateTakeAwayDto.liters ?? toUpdateTakeAwayDto.liters;
    toUpdateTakeAwayDto.lunchProduct =
      updateTakeAwayDto.lunchProduct ?? toUpdateTakeAwayDto.lunchProduct;
    toUpdateTakeAwayDto.price =
      updateTakeAwayDto.price ?? toUpdateTakeAwayDto.price;
    toUpdateTakeAwayDto.softDrinkProduct =
      updateTakeAwayDto.softDrinkProduct ??
      toUpdateTakeAwayDto.softDrinkProduct;
    toUpdateTakeAwayDto.spiritDrinkProduct =
      updateTakeAwayDto.spiritDrinkProduct ??
      toUpdateTakeAwayDto.spiritDrinkProduct;
    toUpdateTakeAwayDto.units =
      updateTakeAwayDto.units ?? toUpdateTakeAwayDto.units;
    toUpdateTakeAwayDto.waiter =
      updateTakeAwayDto.waiter ?? toUpdateTakeAwayDto.waiter;
    toUpdateTakeAwayDto.wineProduct =
      updateTakeAwayDto.wineProduct ?? toUpdateTakeAwayDto.wineProduct;
    return toUpdateTakeAwayDto;
  }

  remove(id: number) {
    return this.takeAwayRepository.delete(id);
  }
}
