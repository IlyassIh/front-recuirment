import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffreIdComponent } from './offre-id.component';

describe('OffreIdComponent', () => {
  let component: OffreIdComponent;
  let fixture: ComponentFixture<OffreIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OffreIdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OffreIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
