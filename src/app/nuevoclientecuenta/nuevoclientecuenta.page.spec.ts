import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NuevoclientecuentaPage } from './nuevoclientecuenta.page';

describe('NuevoclientecuentaPage', () => {
  let component: NuevoclientecuentaPage;
  let fixture: ComponentFixture<NuevoclientecuentaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NuevoclientecuentaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
