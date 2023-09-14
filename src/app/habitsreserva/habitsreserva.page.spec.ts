import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HabitsreservaPage } from './habitsreserva.page';

describe('HabitsreservaPage', () => {
  let component: HabitsreservaPage;
  let fixture: ComponentFixture<HabitsreservaPage>;

  beforeEach(async() => {
    fixture = TestBed.createComponent(HabitsreservaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
