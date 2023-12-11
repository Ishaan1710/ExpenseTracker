import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomeComponent } from './income.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('IncomeComponent', () => {
  let component: IncomeComponent;
  let fixture: ComponentFixture<IncomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IncomeComponent],
      schemas:[NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(IncomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the income component', () => {
    expect(component).toBeTruthy();
  });

  it('should add an income to the list', () => {
    const initialIncomeCount = component.incomes.length;
    component.incomeDescription = 'Test Income';
    component.incomeValue = 100;
    component.addIncome();
    fixture.detectChanges();

    expect(component.incomes.length).toEqual(initialIncomeCount + 1);
  });

  it('should delete an income from the list', () => {
    component.incomeDescription = 'Test Income';
    component.incomeValue = 100;
    component.addIncome();
    fixture.detectChanges();

    const initialIncomeCount = component.incomes.length;
    const incomeToDelete = component.incomes[0];
    component.deleteIncome(incomeToDelete);
    fixture.detectChanges();

    expect(component.incomes.length).toEqual(initialIncomeCount - 1);
    expect(component.incomes.indexOf(incomeToDelete)).toBe(-1);
  });

  it('should initialize with an empty incomes list', () => {
    expect(component.incomes).toEqual([]);
  });

  it('should not add an income with an empty description', () => {
    const initialIncomeCount = component.incomes.length;
    component.incomeDescription = '';
    component.incomeValue = 100;
    component.addIncome();
    fixture.detectChanges();

    expect(component.incomes.length).toEqual(initialIncomeCount);
  });

  it('should not add an income with a negative value', () => {
    const initialIncomeCount = component.incomes.length;
    component.incomeDescription = 'Test Income';
    component.incomeValue = -50;
    component.addIncome();
    fixture.detectChanges();

    expect(component.incomes.length).toEqual(initialIncomeCount);
  });
});
