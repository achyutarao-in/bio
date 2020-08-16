import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CitizenAdsComponent } from './citizen-ads.component';

describe('CitizenAdsComponent', () => {
  let component: CitizenAdsComponent;
  let fixture: ComponentFixture<CitizenAdsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CitizenAdsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitizenAdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
