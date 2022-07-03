import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobreNosotrosScreenComponent } from './sobre-nosotros-screen.component';

describe('SobreNosotrosScreenComponent', () => {
  let component: SobreNosotrosScreenComponent;
  let fixture: ComponentFixture<SobreNosotrosScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SobreNosotrosScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SobreNosotrosScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
