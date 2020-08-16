import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScpcrComponent } from './scpcr.component';

describe('ScpcrComponent', () => {
  let component: ScpcrComponent;
  let fixture: ComponentFixture<ScpcrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScpcrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScpcrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
