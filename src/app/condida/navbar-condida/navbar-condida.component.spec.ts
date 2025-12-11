import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarCondidaComponent } from './navbar-condida.component';

describe('NavbarCondidaComponent', () => {
  let component: NavbarCondidaComponent;
  let fixture: ComponentFixture<NavbarCondidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavbarCondidaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarCondidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
