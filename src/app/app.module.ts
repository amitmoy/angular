import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Components
import { AppComponent } from './app.component';
import {IncomeListComponent} from './Components/IncomeList/income-list.component';
import { IncomeInsertComponent } from './Components/IncomeInsert/income-insert.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent, IncomeListComponent, IncomeInsertComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
