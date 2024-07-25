import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarksCalculatorComponent } from './marks-calculator.component';

describe('MarksCalculatorComponent', () => {
  let component: MarksCalculatorComponent;
  let fixture: ComponentFixture<MarksCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarksCalculatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarksCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
