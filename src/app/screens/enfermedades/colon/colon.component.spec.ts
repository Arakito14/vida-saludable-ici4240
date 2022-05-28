import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColonComponent } from './colon.component';

describe('ColonComponent', () => {
  let component: ColonComponent;
  let fixture: ComponentFixture<ColonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
