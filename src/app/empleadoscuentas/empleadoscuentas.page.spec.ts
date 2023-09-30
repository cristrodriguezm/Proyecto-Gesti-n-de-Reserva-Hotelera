import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmpleadoscuentasPage } from './empleadoscuentas.page';

describe('EmpleadoscuentasPage', () => {
  let component: EmpleadoscuentasPage;
  let fixture: ComponentFixture<EmpleadoscuentasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EmpleadoscuentasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
