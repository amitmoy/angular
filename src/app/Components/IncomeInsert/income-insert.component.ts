import { IncomeService } from './../../income.service';
import { Subscription, from } from 'rxjs';
import { Component } from '@angular/core';
import { Income } from '../../Types/Income';


@Component({
    selector: 'app-income-insert',
    templateUrl: './income-insert.component.html',
    styleUrls: ['./income-insert.component.css']
})
export class IncomeInsertComponent{
    ammountInput: number;
    descriptionInput: string;

    constructor(private incomeSrv: IncomeService){}

    onClick(): void{
        if (isNaN(this.ammountInput)){
            this.ammountInput = 0;
        }
        this.incomeSrv.addIncome(new Income(this.ammountInput, this.descriptionInput));
        this.ammountInput = NaN;
        this.descriptionInput = '';
        console.log(this.incomeSrv.totalIncome);
    }
}
