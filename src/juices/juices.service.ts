import { Injectable } from '@nestjs/common';
import { CreateJuiceDto } from './dto/create-juice.dto';
import { UpdateJuiceDto } from './dto/update-juice.dto';

@Injectable()
export class JuicesService {
  create(createJuiceDto: CreateJuiceDto) {
    return 'This action adds a new juice';
  }

  findAll() {
    return `This action returns all juices`;
  }

  findOne(id: number) {
    return `This action returns a #${id} juice`;
  }

  update(id: number, updateJuiceDto: UpdateJuiceDto) {
    return `This action updates a #${id} juice`;
  }

  remove(id: number) {
    return `This action removes a #${id} juice`;
  }
}
