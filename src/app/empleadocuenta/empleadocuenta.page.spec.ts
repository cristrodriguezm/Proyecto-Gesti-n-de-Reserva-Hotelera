import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmpleadocuentaPage } from './empleadocuenta.page';

describe('EmpleadocuentaPage', () => {
  let component: EmpleadocuentaPage;
  let fixture: ComponentFixture<EmpleadocuentaPage>;

  beforeEach(async() => {
    fixture = TestBed.createComponent(EmpleadocuentaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
