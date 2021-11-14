import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DinnerProductsService } from './dinner-products.service';
import { CreateDinnerProductDto } from './dto/create-dinner-product.dto';
import { UpdateDinnerProductDto } from './dto/update-dinner-product.dto';

@Controller('dinner-products')
export class DinnerProductsController {
  constructor(private readonly dinnerProductsService: DinnerProductsService) {}

  @Post()
  create(@Body() createDinnerProductDto: CreateDinnerProductDto) {
    return this.dinnerProductsService.create(createDinnerProductDto);
  }

  @Get()
  findAll() {
    return this.dinnerProductsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dinnerProductsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDinnerProductDto: UpdateDinnerProductDto) {
    return this.dinnerProductsService.update(+id, updateDinnerProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dinnerProductsService.remove(+id);
  }
}
