// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { AppComponent } from './app.component';
// import { Component } from '@angular/core';

// @Component({ selector: 'app-tracker', template: '' })
// class TrackerComponent {}

// @Component({ selector: 'app-income', template: '' })
// class IncomeComponent {}

// @Component({ selector: 'app-expenses', template: '' })
// class ExpensesComponent {}

// describe('MonthlyExpenseTrackerComponent', () => {
//   let component: AppComponent;
//   let fixture: ComponentFixture<AppComponent>;

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       declarations: [
//         AppComponent,
//         TrackerComponent,
//         IncomeComponent,
//         ExpensesComponent,
//       ],
//     });

//     fixture = TestBed.createComponent(AppComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should render a header with the current month', () => {
//     component.currentMonth = 'January';
//     fixture.detectChanges();
//     const headerElement = fixture.nativeElement.querySelector('h1');
//     expect(headerElement.textContent).toContain(
//       'Monthly Expense Tracker - January'
//     );
//   });

//   it('should render the Tracker Income and Expenses components', () => {
//     const trackerElement = fixture.nativeElement.querySelector('app-tracker');
//     const incomeElement = fixture.nativeElement.querySelector('app-income');
//     const expensesElement = fixture.nativeElement.querySelector('app-expenses');

//     expect(trackerElement).toBeDefined();
//     expect(incomeElement).toBeDefined();
//     expect(expensesElement).toBeDefined();
//   });
// });
