import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PagomedioselccPage } from './pagomedioselcc.page';

describe('PagomedioselccPage', () => {
  let component: PagomedioselccPage;
  let fixture: ComponentFixture<PagomedioselccPage>;

  beforeEach(async() => {
    fixture = TestBed.createComponent(PagomedioselccPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
