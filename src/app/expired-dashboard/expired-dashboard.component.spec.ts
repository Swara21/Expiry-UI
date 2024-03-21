import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpiredDashboardComponent } from './expired-dashboard.component';

describe('ExpiredDashboardComponent', () => {
  let component: ExpiredDashboardComponent;
  let fixture: ComponentFixture<ExpiredDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExpiredDashboardComponent]
    });
    fixture = TestBed.createComponent(ExpiredDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
