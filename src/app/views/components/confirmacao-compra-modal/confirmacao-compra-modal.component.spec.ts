import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmacaoCompraModalComponent } from './confirmacao-compra-modal.component';

describe('ConfirmacaoCompraModalComponent', () => {
  let component: ConfirmacaoCompraModalComponent;
  let fixture: ComponentFixture<ConfirmacaoCompraModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfirmacaoCompraModalComponent]
    });
    fixture = TestBed.createComponent(ConfirmacaoCompraModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
