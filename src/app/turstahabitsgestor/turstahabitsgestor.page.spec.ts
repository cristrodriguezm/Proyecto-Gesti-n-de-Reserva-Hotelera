import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TurstahabitsgestorPage } from './turstahabitsgestor.page';

describe('TurstahabitsgestorPage', () => {
  let component: TurstahabitsgestorPage;
  let fixture: ComponentFixture<TurstahabitsgestorPage>;

  beforeEach(async() => {
    fixture = TestBed.createComponent(TurstahabitsgestorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
