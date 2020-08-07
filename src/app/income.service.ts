import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {Income} from './Types/Income';

@Injectable({
  providedIn: 'root'
})
export class IncomeService{
  totalIncome : number = 0;
  incomes : Income[];
  incomesChanged = new Subject<Income[]>();
  totalIncomeChanged = new Subject<number>();


  addIncome(income : Income){
    this.incomes.push(income);
    this.incomesChanged.next(this.incomes);
    this.totalIncome += +income.get_value();
    this.totalIncomeChanged.next(this.totalIncome);
    console.log(this.incomes);
  }
}
