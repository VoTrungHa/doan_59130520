import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyhomesinhvienComponent } from './myhomesinhvien.component';

describe('MyhomesinhvienComponent', () => {
  let component: MyhomesinhvienComponent;
  let fixture: ComponentFixture<MyhomesinhvienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyhomesinhvienComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyhomesinhvienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
