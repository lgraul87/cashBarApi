import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SpiritDrinksService } from './spirit-drinks.service';
import { CreateSpiritDrinkDto } from './dto/create-spirit-drink.dto';
import { UpdateSpiritDrinkDto } from './dto/update-spirit-drink.dto';

@Controller('spirit-drinks')
export class SpiritDrinksController {
  constructor(private readonly spiritDrinksService: SpiritDrinksService) {}

  @Post()
  create(@Body() createSpiritDrinkDto: CreateSpiritDrinkDto) {
    return this.spiritDrinksService.create(createSpiritDrinkDto);
  }

  @Get()
  findAll() {
    return this.spiritDrinksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.spiritDrinksService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSpiritDrinkDto: UpdateSpiritDrinkDto) {
    return this.spiritDrinksService.update(+id, updateSpiritDrinkDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.spiritDrinksService.remove(+id);
  }
}
