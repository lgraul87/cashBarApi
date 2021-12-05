import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTableDto } from './dto/create-table.dto';
import { UpdateTableDto } from './dto/update-table.dto';
import { Table } from './entities/table.entity';

@Injectable()
export class TablesService {
  constructor(
    @InjectRepository(Table)
    private readonly tableRepository: Repository<Table>,
  ) {}
  create(createTableDto: CreateTableDto) {
    return this.tableRepository.create(createTableDto);
  }

  findAll() {
    return this.tableRepository.find();
  }

  findOne(id: number) {
    return this.tableRepository.findOne(id);
  }

  async update(id: number, updateTableDto: UpdateTableDto) {
    const toUpdateTableDto = await this.tableRepository.findOne(id);
    toUpdateTableDto.number = updateTableDto.number ?? toUpdateTableDto.number;
    toUpdateTableDto.location =
      updateTableDto.location ?? toUpdateTableDto.location;
    toUpdateTableDto.nameClient =
      updateTableDto.nameClient ?? toUpdateTableDto.nameClient;
    return toUpdateTableDto;
  }

  remove(id: number) {
    return this.tableRepository.delete(id);
  }
}
