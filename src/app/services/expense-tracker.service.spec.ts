import { TestBed } from '@angular/core/testing';

import { ExpenseTrackerService } from './expense-tracker.service';

describe('ExpenseTrackerService', () => {
  let service: ExpenseTrackerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExpenseTrackerService);
  });

  it('should create a expense tracker service', () => {
    expect(service).toBeTruthy();
  });

  it('should set income correctly', () => {
    const income = 1000;
    service.setIncome(income);
    service.income$.subscribe((value) => {
      expect(value).toBe(income);
    });
  });

});
