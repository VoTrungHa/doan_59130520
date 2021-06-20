import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaobaithiComponent } from './taobaithi.component';

describe('TaobaithiComponent', () => {
  let component: TaobaithiComponent;
  let fixture: ComponentFixture<TaobaithiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaobaithiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaobaithiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
