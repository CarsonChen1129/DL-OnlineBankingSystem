import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TfCheckDepositComponent } from './tf-check-deposit.component';

describe('TfCheckDepositComponent', () => {
  let component: TfCheckDepositComponent;
  let fixture: ComponentFixture<TfCheckDepositComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TfCheckDepositComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TfCheckDepositComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
