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

  update(id: number, updateSalesHistoryDto: UpdateSalesHistoryDto) {
    return this.salesHistoryRepository.update(id, updateSalesHistoryDto);
  }

  remove(id: number) {
    return this.salesHistoryRepository.delete(id);
  }
}
