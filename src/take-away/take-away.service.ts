import { Injectable } from '@nestjs/common';
import { CreateTakeAwayDto } from './dto/create-take-away.dto';
import { UpdateTakeAwayDto } from './dto/update-take-away.dto';

@Injectable()
export class TakeAwayService {
  create(createTakeAwayDto: CreateTakeAwayDto) {
    return 'This action adds a new takeAway';
  }

  findAll() {
    return `This action returns all takeAway`;
  }

  findOne(id: number) {
    return `This action returns a #${id} takeAway`;
  }

  update(id: number, updateTakeAwayDto: UpdateTakeAwayDto) {
    return `This action updates a #${id} takeAway`;
  }

  remove(id: number) {
    return `This action removes a #${id} takeAway`;
  }
}
