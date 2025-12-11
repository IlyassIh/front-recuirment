import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutCondidaComponent } from './layout-condida.component';

describe('LayoutCondidaComponent', () => {
  let component: LayoutCondidaComponent;
  let fixture: ComponentFixture<LayoutCondidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LayoutCondidaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutCondidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
