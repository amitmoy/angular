import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Components
import { AppComponent } from './app.component';
import {IncomeList} from './Components/IncomeList/income-list.component';

@NgModule({
  declarations: [
    AppComponent, IncomeList
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
