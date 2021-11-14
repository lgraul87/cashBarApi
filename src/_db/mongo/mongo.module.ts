import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
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
      entities: [User],
      synchronize: true,
      retryAttempts: 10,
      retryDelay: 1000,
      useUnifiedTopology: true,
    }),
  ],
})
export class MongoModule {}
