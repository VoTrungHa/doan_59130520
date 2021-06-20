import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyhomeinforComponent } from './myhomeinfor.component';

describe('MyhomeinforComponent', () => {
  let component: MyhomeinforComponent;
  let fixture: ComponentFixture<MyhomeinforComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyhomeinforComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyhomeinforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
