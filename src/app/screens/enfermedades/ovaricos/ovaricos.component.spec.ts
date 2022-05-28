import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OvaricosComponent } from './ovaricos.component';

describe('OvaricosComponent', () => {
  let component: OvaricosComponent;
  let fixture: ComponentFixture<OvaricosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OvaricosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OvaricosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
