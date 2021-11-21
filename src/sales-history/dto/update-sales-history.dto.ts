import { CreateCounterDto } from 'src/counter/dto/create-counter.dto';
import { CreateTableDto } from 'src/tables/dto/create-table.dto';
import { CreateTakeAwayDto } from 'src/take-away/dto/create-take-away.dto';
import { CreateWaiterDto } from 'src/waiters/dto/create-waiter.dto';
export class UpdateSalesHistoryDto {
  table?: CreateTableDto;
  counter?: CreateCounterDto;
  takeAway?: CreateTakeAwayDto;
  waiters: CreateWaiterDto;
  date: Date;
  bill: number;
}
