import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClientcuentasPage } from './clientcuentas.page';

describe('ClientcuentasPage', () => {
  let component: ClientcuentasPage;
  let fixture: ComponentFixture<ClientcuentasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ClientcuentasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
