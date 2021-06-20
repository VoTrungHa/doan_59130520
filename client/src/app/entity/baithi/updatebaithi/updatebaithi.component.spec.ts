import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatebaithiComponent } from './updatebaithi.component';

describe('UpdatebaithiComponent', () => {
  let component: UpdatebaithiComponent;
  let fixture: ComponentFixture<UpdatebaithiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatebaithiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatebaithiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
