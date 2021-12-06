import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { SalesHistory } from './entities/sales-history.entity';
import { CreateSalesHistoryDto } from './dto/create-sales-history.dto';
import { UpdateSalesHistoryDto } from './dto/update-sales-history.dto';

@Injectable()
export class SalesHistoryService {
  constructor(
    @InjectRepository(SalesHistory)
    private readonly salesHistoryRepository: Repository<SalesHistory>,
  ) {}
  create(createSalesHistoryDto: CreateSalesHistoryDto) {
    return this.salesHistoryRepository.create(createSalesHistoryDto);
  }

  findAll() {
    return this.salesHistoryRepository.find();
  }

  findOne(id: number) {
    return this.salesHistoryRepository.findOne(id);
  }

  async update(id: number, updateSalesHistoryDto: UpdateSalesHistoryDto) {
    const toUpdateSalesHistory = await this.salesHistoryRepository.findOne(id);
    toUpdateSalesHistory.beerProduct =
      updateSalesHistoryDto.beerProduct ?? toUpdateSalesHistory.beerProduct;
    toUpdateSalesHistory.bill =
      updateSalesHistoryDto.bill ?? toUpdateSalesHistory.bill;
    toUpdateSalesHistory.breakfastProduct =
      updateSalesHistoryDto.breakfastProduct ??
      toUpdateSalesHistory.breakfastProduct;
    toUpdateSalesHistory.date =
      updateSalesHistoryDto.date ?? toUpdateSalesHistory.date;
    toUpdateSalesHistory.dinnerProduct =
      updateSalesHistoryDto.dinnerProduct ?? toUpdateSalesHistory.dinnerProduct;
    toUpdateSalesHistory.juiceProduct =
      updateSalesHistoryDto.juiceProduct ?? toUpdateSalesHistory.juiceProduct;
    toUpdateSalesHistory.kilograms =
      updateSalesHistoryDto.kilograms ?? toUpdateSalesHistory.kilograms;
    toUpdateSalesHistory.liters =
      updateSalesHistoryDto.liters ?? toUpdateSalesHistory.liters;
    toUpdateSalesHistory.lunchProduct =
      updateSalesHistoryDto.lunchProduct ?? toUpdateSalesHistory.lunchProduct;
    toUpdateSalesHistory.price =
      updateSalesHistoryDto.price ?? toUpdateSalesHistory.price;
    toUpdateSalesHistory.softDrinkProduct =
      updateSalesHistoryDto.softDrinkProduct ??
      toUpdateSalesHistory.softDrinkProduct;
    toUpdateSalesHistory.spiritDrinkProduct =
      updateSalesHistoryDto.spiritDrinkProduct ??
      toUpdateSalesHistory.spiritDrinkProduct;
    toUpdateSalesHistory.units =
      updateSalesHistoryDto.units ?? toUpdateSalesHistory.units;
    toUpdateSalesHistory.waiter =
      updateSalesHistoryDto.waiter ?? toUpdateSalesHistory.waiter;
    toUpdateSalesHistory.wineProduct =
      updateSalesHistoryDto.wineProduct ?? toUpdateSalesHistory.wineProduct;
    toUpdateSalesHistory.counter =
      updateSalesHistoryDto.counter ?? toUpdateSalesHistory.counter;
    toUpdateSalesHistory.table =
      updateSalesHistoryDto.table ?? toUpdateSalesHistory.table;
    toUpdateSalesHistory.takeAway =
      updateSalesHistoryDto.takeAway ?? toUpdateSalesHistory.takeAway;
    return toUpdateSalesHistory;
  }

  remove(id: number) {
    return this.salesHistoryRepository.delete(id);
  }
}
