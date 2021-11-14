import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SalesHistoryService } from './sales-history.service';
import { CreateSalesHistoryDto } from './dto/create-sales-history.dto';
import { UpdateSalesHistoryDto } from './dto/update-sales-history.dto';

@Controller('sales-history')
export class SalesHistoryController {
  constructor(private readonly salesHistoryService: SalesHistoryService) {}

  @Post()
  create(@Body() createSalesHistoryDto: CreateSalesHistoryDto) {
    return this.salesHistoryService.create(createSalesHistoryDto);
  }

  @Get()
  findAll() {
    return this.salesHistoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.salesHistoryService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSalesHistoryDto: UpdateSalesHistoryDto) {
    return this.salesHistoryService.update(+id, updateSalesHistoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.salesHistoryService.remove(+id);
  }
}
