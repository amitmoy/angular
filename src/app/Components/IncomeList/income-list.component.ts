import {Component, OnInit, OnDestroy} from '@angular/core';
import {IncomeService} from '../../income.service';
import{Income} from '../../Types/Income';
import {Subscription} from 'rxjs';

@Component({
  selector:'income-list',
  templateUrl:'./income-list.component.html',
  styleUrls:['./income-list.component.css']
})
export class IncomeList implements OnInit,OnDestroy{
  private totalIncomeSub : Subscription;
  private incomesSub : Subscription;
  incomeList : Income[];
  totalIncome : number;

  constructor(private incomesrv: IncomeService){}

  ngOnInit(){
    this.totalIncome = this.incomesrv.totalIncome;
    this.incomeList = this.incomesrv.incomes;
    this.incomesSub = this.incomesrv.incomesChanged.subscribe();
    this.totalIncomeSub = this.incomesrv.totalIncomeChanged.subscribe();
  }


  ngOnDestroy(){
    this.incomesSub.unsubscribe();
    this.totalIncomeSub.unsubscribe();
  }
}
