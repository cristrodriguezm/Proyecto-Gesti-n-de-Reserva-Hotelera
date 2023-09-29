import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClientereservaspanelPage } from './clientereservaspanel.page';

describe('ClientereservaspanelPage', () => {
  let component: ClientereservaspanelPage;
  let fixture: ComponentFixture<ClientereservaspanelPage>;

  beforeEach(async() => {
    fixture = TestBed.createComponent(ClientereservaspanelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
