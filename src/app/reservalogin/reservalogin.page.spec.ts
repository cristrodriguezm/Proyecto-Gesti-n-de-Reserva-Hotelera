import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReservaloginPage } from './reservalogin.page';

describe('ReservaloginPage', () => {
  let component: ReservaloginPage;
  let fixture: ComponentFixture<ReservaloginPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ReservaloginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
