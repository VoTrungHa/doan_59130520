import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaodocsComponent } from './taodocs.component';

describe('TaodocsComponent', () => {
  let component: TaodocsComponent;
  let fixture: ComponentFixture<TaodocsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaodocsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaodocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
