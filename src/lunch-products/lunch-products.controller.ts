import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { LunchProductsService } from './lunch-products.service';
import { CreateLunchProductDto } from './dto/create-lunch-product.dto';
import { UpdateLunchProductDto } from './dto/update-lunch-product.dto';
@Controller('lunch-products')
export class LunchProductsController {
  constructor(private readonly lunchProductsService: LunchProductsService) {}

  @Post()
  create(@Body() createLunchProductDto: CreateLunchProductDto) {
    return this.lunchProductsService.create(createLunchProductDto);
  }

  @Get()
  findAll() {
    return this.lunchProductsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.lunchProductsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateLunchProductDto: UpdateLunchProductDto,
  ) {
    return this.lunchProductsService.update(+id, updateLunchProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.lunchProductsService.remove(id);
  }
}
