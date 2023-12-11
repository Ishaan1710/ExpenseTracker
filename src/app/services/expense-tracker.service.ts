import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ExpenseTrackerService {
  private incomeSource = new BehaviorSubject<number>(0);
  private expensesSource = new BehaviorSubject<{ description: string; value: number }[]>([]);
  private incomesSource = new BehaviorSubject<{ description: string; value: number }[]>([]);

  income$ = this.incomeSource.asObservable();
  expenses$ = this.expensesSource.asObservable();
  incomes$ = this.incomesSource.asObservable();

  setIncome(income: number) {
    this.incomeSource.next(income);
  }

  updateExpenses(expenses: { description: string; value: number }[]) {
    this.expensesSource.next(expenses);
  }

  updateIncomes(incomes: { description: string; value: number }[]) {
    this.incomesSource.next(incomes);
  }

  // Rest of your service methods
}
