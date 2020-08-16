import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BhsComponent } from './bhs.component';

describe('BhsComponent', () => {
  let component: BhsComponent;
  let fixture: ComponentFixture<BhsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BhsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BhsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
