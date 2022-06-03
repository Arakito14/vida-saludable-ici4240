import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjerciciosScreenComponent } from './ejercicios-screen.component';

describe('EjerciciosScreenComponent', () => {
  let component: EjerciciosScreenComponent;
  let fixture: ComponentFixture<EjerciciosScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EjerciciosScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EjerciciosScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
