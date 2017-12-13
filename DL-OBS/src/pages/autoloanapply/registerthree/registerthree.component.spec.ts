import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterthreeComponent } from './registerthree.component';

describe('RegisterthreeComponent', () => {
  let component: RegisterthreeComponent;
  let fixture: ComponentFixture<RegisterthreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterthreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterthreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
