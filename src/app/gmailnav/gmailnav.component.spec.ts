import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GmailnavComponent } from './gmailnav.component';

describe('GmailnavComponent', () => {
  let component: GmailnavComponent;
  let fixture: ComponentFixture<GmailnavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GmailnavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GmailnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
