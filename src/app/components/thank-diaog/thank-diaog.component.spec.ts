import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThankDiaogComponent } from './thank-diaog.component';

describe('ThankDiaogComponent', () => {
  let component: ThankDiaogComponent;
  let fixture: ComponentFixture<ThankDiaogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThankDiaogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThankDiaogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
