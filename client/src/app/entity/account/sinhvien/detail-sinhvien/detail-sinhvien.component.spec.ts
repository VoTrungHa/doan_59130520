import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailSinhvienComponent } from './detail-sinhvien.component';

describe('DetailSinhvienComponent', () => {
  let component: DetailSinhvienComponent;
  let fixture: ComponentFixture<DetailSinhvienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailSinhvienComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailSinhvienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
