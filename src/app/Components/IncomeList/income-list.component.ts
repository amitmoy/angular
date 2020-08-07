import {Component, OnInit, OnDestroy} from '@angular/core';
import {IncomeService} from '../../income.service';
import {Income} from '../../Types/Income';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-income-list',
  templateUrl: './income-list.component.html',
  styleUrls: ['./income-list.component.css']
})
export class IncomeListComponent implements OnInit, OnDestroy{
  private totalIncomeSub: Subscription;
  private incomesSub: Subscription;
  incomeList: Income[];
  totalIncome = 0;

  constructor(private incomesrv: IncomeService){}

  ngOnInit(): void{
    this.totalIncome = this.incomesrv.totalIncome;
    this.incomeList = this.incomesrv.incomes;
    this.incomesSub = this.incomesrv.incomesChanged.subscribe();
    this.totalIncomeSub = this.incomesrv.totalIncomeChanged.subscribe((value) => {
      this.totalIncome = +value;
    });
  }


  ngOnDestroy(): void{
    this.incomesSub.unsubscribe();
    this.totalIncomeSub.unsubscribe();
  }

}
