import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongoModule } from './_db/mongo/mongo.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { SalesHistoryModule } from './sales-history/sales-history.module';
import { BreakfastProductsModule } from './breakfast-products/breakfast-products.module';
import { LunchProductsModule } from './lunch-products/lunch-products.module';
import { DinnerProductsModule } from './dinner-products/dinner-products.module';
import { BeersModule } from './beers/beers.module';
import { WinesModule } from './wines/wines.module';
import { SoftDrinksModule } from './soft-drinks/soft-drinks.module';
import { JuicesModule } from './juices/juices.module';
import { SpiritDrinksModule } from './spirit-drinks/spirit-drinks.module';
import { PurchasingManagerModule } from './purchasing-manager/purchasing-manager.module';
import { TablesModule } from './tables/tables.module';
import { WaitersModule } from './waiters/waiters.module';
import { CounterModule } from './counter/counter.module';
import { TakeAwayModule } from './take-away/take-away.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongoModule,
    UsersModule,
    SalesHistoryModule,
    BreakfastProductsModule,
    LunchProductsModule,
    DinnerProductsModule,
    BeersModule,
    WinesModule,
    SoftDrinksModule,
    JuicesModule,
    SpiritDrinksModule,
    PurchasingManagerModule,
    TablesModule,
    WaitersModule,
    CounterModule,
    TakeAwayModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
