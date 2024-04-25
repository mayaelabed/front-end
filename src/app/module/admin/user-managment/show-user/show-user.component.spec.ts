import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowUserComponent } from './show-user.component';

describe('ShowroomComponent', () => {
  let component: ShowUserComponent;
  let fixture: ComponentFixture<ShowUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowUserComponent]
    });
    fixture = TestBed.createComponent(ShowUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
