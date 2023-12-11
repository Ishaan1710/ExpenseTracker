import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Monthly Expense Tracker';
  currentMonth: string;
  incomeList: any[] = [];
  expenseList: any[] = [];

  constructor() {
    this.currentMonth = ''; // Assign an empty string in the constructor
  }

  ngOnInit() {
    this.updateMonth();
  }

  updateMonth() {
    const currentDate = new Date();
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    this.currentMonth = months[currentDate.getMonth()];
  }
}
