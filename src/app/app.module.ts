import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { IncomeComponent } from './components/income/income.component';
import { ExpensesComponent } from './components/expenses/expenses.component';
import { TrackerComponent } from './components/tracker/tracker.component';
import { ExpenseTrackerService } from './services/expense-tracker.service';

@NgModule({
  declarations: [
    AppComponent,
    IncomeComponent,
    ExpensesComponent,
    TrackerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ExpenseTrackerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
