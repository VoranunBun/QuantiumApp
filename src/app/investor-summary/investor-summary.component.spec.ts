import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestorSummaryComponent } from './investor-summary.component';

describe('InvestorSummaryComponent', () => {
  let component: InvestorSummaryComponent;
  let fixture: ComponentFixture<InvestorSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvestorSummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestorSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
