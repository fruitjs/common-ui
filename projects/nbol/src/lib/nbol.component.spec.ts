import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NbolComponent } from './nbol.component';

describe('NbolComponent', () => {
  let component: NbolComponent;
  let fixture: ComponentFixture<NbolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NbolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NbolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
