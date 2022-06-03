import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepresionComponent } from './depresion.component';

describe('DepresionComponent', () => {
  let component: DepresionComponent;
  let fixture: ComponentFixture<DepresionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepresionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepresionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
