import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TfPayOthersComponent } from './tf-pay-others.component';

describe('TfPayOthersComponent', () => {
  let component: TfPayOthersComponent;
  let fixture: ComponentFixture<TfPayOthersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TfPayOthersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TfPayOthersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
