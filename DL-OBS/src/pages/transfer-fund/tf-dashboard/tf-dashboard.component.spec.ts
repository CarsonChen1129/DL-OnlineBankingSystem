import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TfDashboardComponent } from './tf-dashboard.component';

describe('TfDashboardComponent', () => {
  let component: TfDashboardComponent;
  let fixture: ComponentFixture<TfDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TfDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TfDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
