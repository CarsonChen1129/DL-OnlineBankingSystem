import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisteroneComponent } from './registerone.component';

describe('RegisteroneComponent', () => {
  let component: RegisteroneComponent;
  let fixture: ComponentFixture<RegisteroneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisteroneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisteroneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
