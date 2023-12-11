import { Component } from '@angular/core';
import { ExpenseTrackerService } from '../../services/expense-tracker.service';

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.css'],
})
export class IncomeComponent {
  incomeDescription: string = '';
  incomeValue: number = 0;
  incomes: { description: string; value: number }[] = [];

  constructor(private expenseTrackerService: ExpenseTrackerService) {}

  addIncome() {
    if (this.incomeDescription && this.incomeValue > 0) {
      this.incomes.push({ description: this.incomeDescription, value: this.incomeValue });
      this.incomeDescription = '';
      this.incomeValue = 0;
      this.expenseTrackerService.updateIncomes(this.incomes);
    }
  }

  deleteIncome(income: { description: string; value: number }) {
    const index = this.incomes.indexOf(income);
    if (index !== -1) {
      this.incomes.splice(index, 1);
      this.expenseTrackerService.updateIncomes(this.incomes);
    }
  }
}
