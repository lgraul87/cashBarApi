import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Beer } from 'src/beers/entities/beer.entity';
import { BreakfastProduct } from 'src/breakfast-products/entities/breakfast-product.entity';
import { DinnerProduct } from 'src/dinner-products/entities/dinner-product.entity';
import { Juice } from 'src/juices/entities/juice.entity';
import { LunchProduct } from 'src/lunch-products/entities/lunch-product.entity';
import { PurchasingManager } from 'src/purchasing-manager/entities/purchasing-manager.entity';
import { SalesHistory } from 'src/sales-history/entities/sales-history.entity';
import { SoftDrink } from 'src/soft-drinks/entities/soft-drink.entity';
import { SpiritDrink } from 'src/spirit-drinks/entities/spirit-drink.entity';
import { User } from 'src/users/entities/user.entity';
import { Wine } from 'src/wines/entities/wine.entity';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      host: '127.0.0.1',
      port: 27017,
      username: 'root',
      password: '',
      database: 'cashbar',
      entities: [
        User,
        Beer,
        BreakfastProduct,
        DinnerProduct,
        Juice,
        LunchProduct,
        SoftDrink,
        SpiritDrink,
        PurchasingManager,
        Wine,
        SalesHistory,
      ],
      synchronize: true,
      retryAttempts: 10,
      retryDelay: 1000,
      useUnifiedTopology: true,
    }),
  ],
})
export class MongoModule {}
