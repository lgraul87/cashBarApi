import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Beer } from './entities/beer.entity';
import { CreateBeerDto } from './dto/create-beer.dto';
import { UpdateBeerDto } from './dto/update-beer.dto';

@Injectable()
export class BeersService {
  constructor(
    @InjectRepository(Beer) private beerRepository: Repository<Beer>,
  ) {}
  create(createBeerDto: CreateBeerDto) {
    return this.beerRepository.create(createBeerDto);
  }

  findAll() {
    return this.beerRepository.find();
  }

  findOne(id: number) {
    return this.beerRepository.findOne(id);
  }

  async update(id: number, updateBeerDto: UpdateBeerDto) {
    const toUpdateBeer = await this.beerRepository.findOne(id);
    toUpdateBeer.name = updateBeerDto.name ?? toUpdateBeer.name;
    toUpdateBeer.details = updateBeerDto.details ?? toUpdateBeer.details;
    toUpdateBeer.type = updateBeerDto.type ?? toUpdateBeer.type;
    toUpdateBeer.liters = updateBeerDto.liters ?? toUpdateBeer.liters;
    toUpdateBeer.units = updateBeerDto.units ?? toUpdateBeer.units;
    toUpdateBeer.purchasePrice =
      updateBeerDto.purchasePrice ?? toUpdateBeer.purchasePrice;
    toUpdateBeer.salePrice = updateBeerDto.salePrice ?? toUpdateBeer.salePrice;
    toUpdateBeer.seller = updateBeerDto.seller ?? toUpdateBeer.seller;
    toUpdateBeer.image = updateBeerDto.image ?? toUpdateBeer.image;
    return this.beerRepository.save(toUpdateBeer);
  }

  remove(id: number) {
    return this.beerRepository.delete(id);
  }
}
