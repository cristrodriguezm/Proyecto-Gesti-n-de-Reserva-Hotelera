import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HotelAdmnPage } from './hotel-admn.page';

describe('HotelAdmnPage', () => {
  let component: HotelAdmnPage;
  let fixture: ComponentFixture<HotelAdmnPage>;

  beforeEach(async() => {
    fixture = TestBed.createComponent(HotelAdmnPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
