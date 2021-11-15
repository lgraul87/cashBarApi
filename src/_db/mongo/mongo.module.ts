import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Beer } from 'src/beers/entities/beer.entity';
import { BreakfastProduct } from 'src/breakfast-products/entities/breakfast-product.entity';
import { DinnerProduct } from 'src/dinner-products/entities/dinner-product.entity';
import { Juice } from 'src/juices/entities/juice.entity';
import { User } from 'src/users/entities/user.entity';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      host: '127.0.0.1',
      port: 27017,
      username: 'root',
      password: '',
      database: 'cashbar',
      entities: [User, Beer, BreakfastProduct, DinnerProduct, Juice],
      synchronize: true,
      retryAttempts: 10,
      retryDelay: 1000,
      useUnifiedTopology: true,
    }),
  ],
})
export class MongoModule {}
