import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PagoresumenPage } from './pagoresumen.page';

describe('PagoresumenPage', () => {
  let component: PagoresumenPage;
  let fixture: ComponentFixture<PagoresumenPage>;

  beforeEach(async() => {
    fixture = TestBed.createComponent(PagoresumenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
