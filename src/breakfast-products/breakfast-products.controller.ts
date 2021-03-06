import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { BreakfastProductsService } from './breakfast-products.service';
import { CreateBreakfastProductDto } from './dto/create-breakfast-product.dto';
import { UpdateBreakfastProductDto } from './dto/update-breakfast-product.dto';
@Controller('breakfast-products')
export class BreakfastProductsController {
  constructor(
    private readonly breakfastProductsService: BreakfastProductsService,
  ) {}

  @Post()
  create(@Body() createBreakfastProductDto: CreateBreakfastProductDto) {
    return this.breakfastProductsService.create(createBreakfastProductDto);
  }

  @Get()
  findAll() {
    return this.breakfastProductsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.breakfastProductsService.findOne(+id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateBreakfastProductDto: UpdateBreakfastProductDto,
  ) {
    return this.breakfastProductsService.update(+id, updateBreakfastProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.breakfastProductsService.remove(id);
  }
}
