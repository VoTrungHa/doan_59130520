import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyhomequestionComponent } from './myhomequestion.component';

describe('MyhomequestionComponent', () => {
  let component: MyhomequestionComponent;
  let fixture: ComponentFixture<MyhomequestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyhomequestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyhomequestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
