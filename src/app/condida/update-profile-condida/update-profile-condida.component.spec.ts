import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateProfileCondidaComponent } from './update-profile-condida.component';

describe('UpdateProfileCondidaComponent', () => {
  let component: UpdateProfileCondidaComponent;
  let fixture: ComponentFixture<UpdateProfileCondidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateProfileCondidaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateProfileCondidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
