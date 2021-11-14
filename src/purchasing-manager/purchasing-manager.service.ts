import { Injectable } from '@nestjs/common';
import { CreatePurchasingManagerDto } from './dto/create-purchasing-manager.dto';
import { UpdatePurchasingManagerDto } from './dto/update-purchasing-manager.dto';

@Injectable()
export class PurchasingManagerService {
  create(createPurchasingManagerDto: CreatePurchasingManagerDto) {
    return 'This action adds a new purchasingManager';
  }

  findAll() {
    return `This action returns all purchasingManager`;
  }

  findOne(id: number) {
    return `This action returns a #${id} purchasingManager`;
  }

  update(id: number, updatePurchasingManagerDto: UpdatePurchasingManagerDto) {
    return `This action updates a #${id} purchasingManager`;
  }

  remove(id: number) {
    return `This action removes a #${id} purchasingManager`;
  }
}
