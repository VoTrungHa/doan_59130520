import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InforbyuserComponent } from './inforbyuser.component';

describe('InforbyuserComponent', () => {
  let component: InforbyuserComponent;
  let fixture: ComponentFixture<InforbyuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InforbyuserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InforbyuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
