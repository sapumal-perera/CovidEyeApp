import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientQrComponent } from './client-qr.component';

describe('ClientQrComponent', () => {
  let component: ClientQrComponent;
  let fixture: ComponentFixture<ClientQrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientQrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientQrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
