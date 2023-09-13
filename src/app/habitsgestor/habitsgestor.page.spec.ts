import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HabitsgestorPage } from './habitsgestor.page';

describe('HabitsgestorPage', () => {
  let component: HabitsgestorPage;
  let fixture: ComponentFixture<HabitsgestorPage>;

  beforeEach(async() => {
    fixture = TestBed.createComponent(HabitsgestorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
