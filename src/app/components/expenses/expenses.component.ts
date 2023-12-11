import { Component } from '@angular/core';
import { ExpenseTrackerService } from '../../services/expense-tracker.service';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css'],
})
export class ExpensesComponent {
  expenseDescription: string = '';
  expenseValue: number = 0;
  expenses: { description: string; value: number }[] = [];

  constructor(private expenseTrackerService: ExpenseTrackerService) {}

  addExpense() {
    if (this.expenseDescription && this.expenseValue > 0) {
      this.expenses.push({ description: this.expenseDescription, value: this.expenseValue });
      this.expenseDescription = '';
      this.expenseValue = 0;
      this.expenseTrackerService.updateExpenses(this.expenses);
    }
  }

  deleteExpense(expense: { description: string; value: number }) {
    const index = this.expenses.indexOf(expense);
    if (index !== -1) {
      this.expenses.splice(index, 1);
      this.expenseTrackerService.updateExpenses(this.expenses);
    }
  }
}
