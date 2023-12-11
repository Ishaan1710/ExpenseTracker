import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackerComponent } from './tracker.component';

describe('TrackerComponent', () => {
  let component: TrackerComponent;
  let fixture: ComponentFixture<TrackerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrackerComponent]
    });
    fixture = TestBed.createComponent(TrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the tracker component', () => {
    expect(component).toBeTruthy();
  });

  it('should display the correct total income', () => {
    component.totalIncome = 1000;
    fixture.detectChanges();
    const totalIncomeElement = fixture.nativeElement.querySelector('.main-card:nth-child(1) p:nth-child(2)');
    expect(totalIncomeElement.textContent).toContain('$ 1000');
  });

  it('should display the correct total expenses', () => {
    component.totalExpenses = 500;
    fixture.detectChanges();
    const totalExpensesElement = fixture.nativeElement.querySelector('.main-card:nth-child(2) p:nth-child(2)');
    expect(totalExpensesElement.textContent).toContain('$ 500');
  });

  it('should display the correct available balance', () => {
    component.totalIncome = 1000;
    component.totalExpenses = 1000;
    fixture.detectChanges();
  
    const availableBalanceElement = fixture.nativeElement.querySelector('.main-card:nth-child(3) p:nth-child(2)');
    const expectedBalance = component.totalIncome - component.totalExpenses;
    expect(availableBalanceElement.textContent).toContain('$ ' + expectedBalance);
  });  
  
});
