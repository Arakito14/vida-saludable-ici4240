import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CajaDeComentariosComponent } from './caja-de-comentarios.component';

describe('CajaDeComentariosComponent', () => {
  let component: CajaDeComentariosComponent;
  let fixture: ComponentFixture<CajaDeComentariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CajaDeComentariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CajaDeComentariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
