import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SelccresmPage } from './selccresm.page';

describe('SelccresmPage', () => {
  let component: SelccresmPage;
  let fixture: ComponentFixture<SelccresmPage>;

  beforeEach(async() => {
    fixture = TestBed.createComponent(SelccresmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
