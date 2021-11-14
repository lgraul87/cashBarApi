import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SoftDrinksService } from './soft-drinks.service';
import { CreateSoftDrinkDto } from './dto/create-soft-drink.dto';
import { UpdateSoftDrinkDto } from './dto/update-soft-drink.dto';

@Controller('soft-drinks')
export class SoftDrinksController {
  constructor(private readonly softDrinksService: SoftDrinksService) {}

  @Post()
  create(@Body() createSoftDrinkDto: CreateSoftDrinkDto) {
    return this.softDrinksService.create(createSoftDrinkDto);
  }

  @Get()
  findAll() {
    return this.softDrinksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.softDrinksService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSoftDrinkDto: UpdateSoftDrinkDto) {
    return this.softDrinksService.update(+id, updateSoftDrinkDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.softDrinksService.remove(+id);
  }
}
