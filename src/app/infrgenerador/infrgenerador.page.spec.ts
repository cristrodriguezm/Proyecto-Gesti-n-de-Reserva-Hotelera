import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InfrgeneradorPage } from './infrgenerador.page';

describe('InfrgeneradorPage', () => {
  let component: InfrgeneradorPage;
  let fixture: ComponentFixture<InfrgeneradorPage>;

  beforeEach(async () => {
    fixture = TestBed.createComponent(InfrgeneradorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  } );

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
