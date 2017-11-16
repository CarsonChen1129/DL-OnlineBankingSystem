import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterfourComponent } from './registerfour.component';

describe('RegisterfourComponent', () => {
  let component: RegisterfourComponent;
  let fixture: ComponentFixture<RegisterfourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterfourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterfourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
