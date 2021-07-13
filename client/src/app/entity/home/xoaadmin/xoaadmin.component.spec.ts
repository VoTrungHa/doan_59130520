import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XoaadminComponent } from './xoaadmin.component';

describe('XoaadminComponent', () => {
  let component: XoaadminComponent;
  let fixture: ComponentFixture<XoaadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XoaadminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XoaadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
