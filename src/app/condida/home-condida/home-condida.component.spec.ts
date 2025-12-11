import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCondidaComponent } from './home-condida.component';

describe('HomeCondidaComponent', () => {
  let component: HomeCondidaComponent;
  let fixture: ComponentFixture<HomeCondidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeCondidaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeCondidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
