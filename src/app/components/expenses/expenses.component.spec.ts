import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpensesComponent } from './expenses.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('ExpensesComponent', () => {
  let component: ExpensesComponent;
  let fixture: ComponentFixture<ExpensesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExpensesComponent],
      schemas:[NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(ExpensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the expenses component', () => {
    expect(component).toBeTruthy();
  });

  it('should add an expense to the list', () => {
    const initialExpenseCount = component.expenses.length;
    component.expenseDescription = 'Test Expense';
    component.expenseValue = 100;
    component.addExpense();
    fixture.detectChanges();

    expect(component.expenses.length).toEqual(initialExpenseCount + 1);
  });

  it('should delete an expense from the list', () => {
    component.expenseDescription = 'Test Expense';
    component.expenseValue = 100;
    component.addExpense();
    fixture.detectChanges();

    const initialExpenseCount = component.expenses.length;
    const expenseToDelete = component.expenses[0];
    component.deleteExpense(expenseToDelete);
    fixture.detectChanges();

    expect(component.expenses.length).toEqual(initialExpenseCount - 1);
    expect(component.expenses.indexOf(expenseToDelete)).toBe(-1);
  });

  it('should initialize with an empty expenses list', () => {
    expect(component.expenses).toEqual([]);
  });

  it('should not add an expense with an empty description', () => {
    const initialExpenseCount = component.expenses.length;
    component.expenseDescription = '';
    component.expenseValue = 100;
    component.addExpense();
    fixture.detectChanges();

    expect(component.expenses.length).toEqual(initialExpenseCount);
  });

  it('should not add an expense with a negative value', () => {
    const initialExpenseCount = component.expenses.length;
    component.expenseDescription = 'Test Expense';
    component.expenseValue = -50;
    component.addExpense();
    fixture.detectChanges();

    expect(component.expenses.length).toEqual(initialExpenseCount);
  });
});
