import { Counter } from 'src/counter/entities/counter.entity';
import { CreateTableDto } from 'src/tables/dto/create-table.dto';
import { TakeAway } from 'src/take-away/entities/take-away.entity';
import { Waiter } from 'src/waiters/entities/waiter.entity';
import { Column, Entity, ObjectIdColumn, Table } from 'typeorm';
@Entity()
export class SalesHistory {
  @ObjectIdColumn()
  id: string;

  @Column()
  table: Table;

  @Column()
  counter: Counter;

  @Column()
  takeAway: TakeAway;

  @Column()
  waiters: Waiter;

  @Column()
  date: Date;

  @Column()
  bill: number;
}
