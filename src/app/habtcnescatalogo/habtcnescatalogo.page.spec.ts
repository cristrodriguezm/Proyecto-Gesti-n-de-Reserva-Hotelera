import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HabtcnescatalogoPage } from './habtcnescatalogo.page';

describe('HabtcnescatalogoPage', () => {
  let component: HabtcnescatalogoPage;
  let fixture: ComponentFixture<HabtcnescatalogoPage>;

  beforeEach(async() => {
    fixture = TestBed.createComponent(HabtcnescatalogoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
