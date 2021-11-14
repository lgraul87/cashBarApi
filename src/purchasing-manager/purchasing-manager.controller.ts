import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PurchasingManagerService } from './purchasing-manager.service';
import { CreatePurchasingManagerDto } from './dto/create-purchasing-manager.dto';
import { UpdatePurchasingManagerDto } from './dto/update-purchasing-manager.dto';

@Controller('purchasing-manager')
export class PurchasingManagerController {
  constructor(private readonly purchasingManagerService: PurchasingManagerService) {}

  @Post()
  create(@Body() createPurchasingManagerDto: CreatePurchasingManagerDto) {
    return this.purchasingManagerService.create(createPurchasingManagerDto);
  }

  @Get()
  findAll() {
    return this.purchasingManagerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.purchasingManagerService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePurchasingManagerDto: UpdatePurchasingManagerDto) {
    return this.purchasingManagerService.update(+id, updatePurchasingManagerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.purchasingManagerService.remove(+id);
  }
}
