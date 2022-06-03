import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardiacosComponent } from './cardiacos.component';

describe('CardiacosComponent', () => {
  let component: CardiacosComponent;
  let fixture: ComponentFixture<CardiacosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardiacosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardiacosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
