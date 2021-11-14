import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { JuicesService } from './juices.service';
import { CreateJuiceDto } from './dto/create-juice.dto';
import { UpdateJuiceDto } from './dto/update-juice.dto';

@Controller('juices')
export class JuicesController {
  constructor(private readonly juicesService: JuicesService) {}

  @Post()
  create(@Body() createJuiceDto: CreateJuiceDto) {
    return this.juicesService.create(createJuiceDto);
  }

  @Get()
  findAll() {
    return this.juicesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.juicesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateJuiceDto: UpdateJuiceDto) {
    return this.juicesService.update(+id, updateJuiceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.juicesService.remove(+id);
  }
}
