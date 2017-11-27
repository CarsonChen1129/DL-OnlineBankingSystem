import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TfInternalTransferComponent } from './tf-internal-transfer.component';

describe('TfInternalTransferComponent', () => {
  let component: TfInternalTransferComponent;
  let fixture: ComponentFixture<TfInternalTransferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TfInternalTransferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TfInternalTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
