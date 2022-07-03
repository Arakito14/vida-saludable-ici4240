import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiroideComponent } from './tiroide.component';

describe('TiroideComponent', () => {
  let component: TiroideComponent;
  let fixture: ComponentFixture<TiroideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TiroideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TiroideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
