import { Component, Input, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-confirmacao-compra-modal',
  templateUrl: './confirmacao-compra-modal.component.html',
  styleUrls: ['./confirmacao-compra-modal.component.css'],
})
export class ConfirmacaoCompraModalComponent implements OnInit {
  mensagemConfirmacao: string = '';
  fecharModalCallback: () => void = () => {};

  constructor(public modalRef: BsModalRef) {}

  ngOnInit(): void {}

  fecharModal() {
    this.modalRef.hide();
  }

  finalizarCompraNoCarrinho() {
    this.fecharModalCallback();
  }
}
