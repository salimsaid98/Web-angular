import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YearUpdateComponent } from './year-update.component';

describe('YearUpdateComponent', () => {
  let component: YearUpdateComponent;
  let fixture: ComponentFixture<YearUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YearUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YearUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
