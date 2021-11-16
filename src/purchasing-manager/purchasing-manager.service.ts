import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PurchasingManager } from './entities/purchasing-manager.entity';
import { CreatePurchasingManagerDto } from './dto/create-purchasing-manager.dto';
import { UpdatePurchasingManagerDto } from './dto/update-purchasing-manager.dto';

@Injectable()
export class PurchasingManagerService {
  constructor(
    @InjectRepository(PurchasingManager)
    private readonly purchasingManagerRepository: Repository<PurchasingManager>,
  ) {}
  create(createPurchasingManagerDto: CreatePurchasingManagerDto) {
    return this.purchasingManagerRepository.create(createPurchasingManagerDto);
  }

  findAll() {
    return this.purchasingManagerRepository.find();
  }

  findOne(id: number) {
    return this.purchasingManagerRepository.findOne(id);
  }

  update(id: number, updatePurchasingManagerDto: UpdatePurchasingManagerDto) {
    return this.purchasingManagerRepository.update(
      id,
      updatePurchasingManagerDto,
    );
  }

  remove(id: number) {
    return this.purchasingManagerRepository.delete(id);
  }
}
