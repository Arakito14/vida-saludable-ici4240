import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlimentacionScreenComponent } from './alimentacion-screen.component';

describe('AlimentacionScreenComponent', () => {
  let component: AlimentacionScreenComponent;
  let fixture: ComponentFixture<AlimentacionScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlimentacionScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlimentacionScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
