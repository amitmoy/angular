import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import {IncomeListComponent} from './Components/IncomeList/income-list.component';
import { IncomeInsertComponent } from './Components/IncomeInsert/income-insert.component';


@NgModule({
  declarations: [
    AppComponent, IncomeListComponent, IncomeInsertComponent
  ],
  imports: [
    BrowserModule, FormsModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
