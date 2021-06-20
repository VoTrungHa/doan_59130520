import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetaildocsComponent } from './detaildocs.component';

describe('DetaildocsComponent', () => {
  let component: DetaildocsComponent;
  let fixture: ComponentFixture<DetaildocsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetaildocsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetaildocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
