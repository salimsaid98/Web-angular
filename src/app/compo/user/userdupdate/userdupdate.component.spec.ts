import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserdupdateComponent } from './userdupdate.component';

describe('UserdupdateComponent', () => {
  let component: UserdupdateComponent;
  let fixture: ComponentFixture<UserdupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserdupdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserdupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
