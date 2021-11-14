import { Injectable } from '@nestjs/common';
import { CreateSalesHistoryDto } from './dto/create-sales-history.dto';
import { UpdateSalesHistoryDto } from './dto/update-sales-history.dto';

@Injectable()
export class SalesHistoryService {
  create(createSalesHistoryDto: CreateSalesHistoryDto) {
    return 'This action adds a new salesHistory';
  }

  findAll() {
    return `This action returns all salesHistory`;
  }

  findOne(id: number) {
    return `This action returns a #${id} salesHistory`;
  }

  update(id: number, updateSalesHistoryDto: UpdateSalesHistoryDto) {
    return `This action updates a #${id} salesHistory`;
  }

  remove(id: number) {
    return `This action removes a #${id} salesHistory`;
  }
}
