import { Module } from '@nestjs/common';
import { JuicesService } from './juices.service';
import { JuicesController } from './juices.controller';

@Module({
  controllers: [JuicesController],
  providers: [JuicesService]
})
export class JuicesModule {}
