import { Component } from '@angular/core';
import { ExpenseTrackerService } from '../../services/expense-tracker.service';

@Component({
  selector: 'app-tracker',
  templateUrl: './tracker.component.html',
  styleUrls: ['./tracker.component.css'],
})
export class TrackerComponent {
  totalIncome: number = 0;
  totalExpenses: number = 0;
  remaining: number = 0;

  constructor(private expenseTrackerService: ExpenseTrackerService) {}

  ngOnInit() {
    this.expenseTrackerService.incomes$.subscribe((incomes) => {
      this.totalIncome = incomes.reduce((total, income) => total + income.value, 0);
      this.calculateRemaining();
    });

    this.expenseTrackerService.expenses$.subscribe((expenses) => {
      this.totalExpenses = expenses.reduce((total, expense) => total + expense.value, 0);
      this.calculateRemaining();
    });
  }

  private calculateRemaining() {
    this.remaining = this.totalIncome - this.totalExpenses;
  }
}
