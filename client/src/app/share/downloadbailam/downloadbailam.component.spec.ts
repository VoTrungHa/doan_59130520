import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadbailamComponent } from './downloadbailam.component';

describe('DownloadbailamComponent', () => {
  let component: DownloadbailamComponent;
  let fixture: ComponentFixture<DownloadbailamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DownloadbailamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloadbailamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
