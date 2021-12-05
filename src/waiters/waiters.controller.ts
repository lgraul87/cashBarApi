import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { WaitersService } from './waiters.service';
import { CreateWaiterDto } from './dto/create-waiter.dto';
import { UpdateWaiterDto } from './dto/update-waiter.dto';

@Controller('waiters')
export class WaitersController {
  constructor(private readonly waitersService: WaitersService) {}

  @Post()
  create(@Body() createWaiterDto: CreateWaiterDto) {
    return this.waitersService.create(createWaiterDto);
  }

  @Get()
  findAll() {
    return this.waitersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.waitersService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateWaiterDto: UpdateWaiterDto) {
    return this.waitersService.update(+id, updateWaiterDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.waitersService.remove(id);
  }
}
