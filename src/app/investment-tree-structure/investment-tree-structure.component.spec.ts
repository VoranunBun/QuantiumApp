import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentTreeStructureComponent } from './investment-tree-structure.component';

describe('InvestmentTreeStructureComponent', () => {
  let component: InvestmentTreeStructureComponent;
  let fixture: ComponentFixture<InvestmentTreeStructureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvestmentTreeStructureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestmentTreeStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
