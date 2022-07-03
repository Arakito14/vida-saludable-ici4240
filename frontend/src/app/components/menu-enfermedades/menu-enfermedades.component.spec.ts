import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuEnfermedadesComponent } from './menu-enfermedades.component';

describe('MenuEnfermedadesComponent', () => {
  let component: MenuEnfermedadesComponent;
  let fixture: ComponentFixture<MenuEnfermedadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuEnfermedadesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuEnfermedadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
