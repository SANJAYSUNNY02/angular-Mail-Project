import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMailsComponent } from './user-mails.component';

describe('UserMailsComponent', () => {
  let component: UserMailsComponent;
  let fixture: ComponentFixture<UserMailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserMailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserMailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
