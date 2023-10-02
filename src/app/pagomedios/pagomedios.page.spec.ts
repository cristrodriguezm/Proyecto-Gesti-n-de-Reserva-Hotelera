import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PagomediosPage } from './pagomedios.page';

describe('PagomediosPage', () => {
  let component: PagomediosPage;
  let fixture: ComponentFixture<PagomediosPage>;

  beforeEach(async() => {
    fixture = TestBed.createComponent(PagomediosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
