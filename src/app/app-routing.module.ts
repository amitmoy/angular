import { IncomeInsertComponent } from './Components/IncomeInsert/income-insert.component';
import { IncomeListComponent } from './Components/IncomeList/income-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
    {path: '', component: IncomeListComponent},
    {path: 'insert', component: IncomeInsertComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}
