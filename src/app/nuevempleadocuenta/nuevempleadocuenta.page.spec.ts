import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NuevempleadocuentaPage } from './nuevempleadocuenta.page';

describe('NuevempleadocuentaPage', () => {
  let component: NuevempleadocuentaPage;
  let fixture: ComponentFixture<NuevempleadocuentaPage>;

  beforeEach(async() => {
    fixture = TestBed.createComponent(NuevempleadocuentaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
