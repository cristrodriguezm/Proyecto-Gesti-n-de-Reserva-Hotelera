import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PremumhabitsgestorPage } from './premumhabitsgestor.page';

describe('PremumhabitsgestorPage', () => {
  let component: PremumhabitsgestorPage;
  let fixture: ComponentFixture<PremumhabitsgestorPage>;

  beforeEach(async() => {
    fixture = TestBed.createComponent(PremumhabitsgestorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
