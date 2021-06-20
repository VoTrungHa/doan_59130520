import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BangdiemComponent } from './bangdiem.component';

describe('BangdiemComponent', () => {
  let component: BangdiemComponent;
  let fixture: ComponentFixture<BangdiemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BangdiemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BangdiemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
