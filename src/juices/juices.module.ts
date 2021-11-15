import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JuicesService } from './juices.service';
import { JuicesController } from './juices.controller';
import { Juice } from './entities/juice.entity';
@Module({
  imports: [TypeOrmModule.forFeature([Juice])],
  controllers: [JuicesController],
  providers: [JuicesService],
})
export class JuicesModule {}
