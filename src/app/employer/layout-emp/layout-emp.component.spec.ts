import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutEmpComponent } from './layout-emp.component';

describe('LayoutEmpComponent', () => {
  let component: LayoutEmpComponent;
  let fixture: ComponentFixture<LayoutEmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LayoutEmpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
