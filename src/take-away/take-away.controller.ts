import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TakeAwayService } from './take-away.service';
import { CreateTakeAwayDto } from './dto/create-take-away.dto';
import { UpdateTakeAwayDto } from './dto/update-take-away.dto';

@Controller('take-away')
export class TakeAwayController {
  constructor(private readonly takeAwayService: TakeAwayService) {}

  @Post()
  create(@Body() createTakeAwayDto: CreateTakeAwayDto) {
    return this.takeAwayService.create(createTakeAwayDto);
  }

  @Get()
  findAll() {
    return this.takeAwayService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.takeAwayService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTakeAwayDto: UpdateTakeAwayDto) {
    return this.takeAwayService.update(+id, updateTakeAwayDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.takeAwayService.remove(+id);
  }
}
