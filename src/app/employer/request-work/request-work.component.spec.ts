import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestWorkComponent } from './request-work.component';

describe('RequestWorkComponent', () => {
  let component: RequestWorkComponent;
  let fixture: ComponentFixture<RequestWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RequestWorkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
