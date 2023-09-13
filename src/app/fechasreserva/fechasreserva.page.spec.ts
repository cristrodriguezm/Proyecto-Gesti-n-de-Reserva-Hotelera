import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FechasreservaPage } from './fechasreserva.page';

describe('FechasreservaPage', () => {
  let component: FechasreservaPage;
  let fixture: ComponentFixture<FechasreservaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FechasreservaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
