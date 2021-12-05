import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateWaiterDto } from './dto/create-waiter.dto';
import { UpdateWaiterDto } from './dto/update-waiter.dto';
import { Waiter } from './entities/waiter.entity';

@Injectable()
export class WaitersService {
  constructor(
    @InjectRepository(Waiter)
    private readonly waiterRepository: Repository<Waiter>,
  ) {}
  create(createWaiterDto: CreateWaiterDto) {
    return this.waiterRepository.create(createWaiterDto);
  }

  findAll() {
    return this.waiterRepository.find();
  }

  findOne(id: number) {
    return this.waiterRepository.findOne(id);
  }

  async update(id: number, updateWaiterDto: UpdateWaiterDto) {
    const toUpdateWaiterDto = await this.waiterRepository.findOne(id);
    toUpdateWaiterDto.name = updateWaiterDto.name ?? toUpdateWaiterDto.name;
    toUpdateWaiterDto.position =
      updateWaiterDto.position ?? toUpdateWaiterDto.position;
    return toUpdateWaiterDto;
  }

  remove(id: number) {
    return this.waiterRepository.delete(id);
  }
}
