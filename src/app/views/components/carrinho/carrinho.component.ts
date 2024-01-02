import { Component, OnInit, OnDestroy, TemplateRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { CarrinhoService } from 'src/app/services/carrinho.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ConfirmacaoCompraModalComponent } from '../confirmacao-compra-modal/confirmacao-compra-modal.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css'],
})
export class CarrinhoComponent implements OnInit, OnDestroy {
  itensCarrinho: { produto: any; quantidade: number; subtotal: number }[] = [];
  valorTotal: number = 0;
  modalRef!: BsModalRef;
  private carrinhoItensSubscription: Subscription = new Subscription();
  private valorTotalSubscription: Subscription = new Subscription();
  private mensagemErroSubscription: Subscription = new Subscription();


  constructor(private carrinhoService: CarrinhoService, private modalService: BsModalService, private router: Router) {
  }

  ngOnInit(): void {
    this.carrinhoItensSubscription = this.carrinhoService.obterItensCarrinho().subscribe((itens) => {
      this.itensCarrinho = itens;
    });

    this.valorTotalSubscription = this.carrinhoService.obterValorTotal().subscribe((total) => {
      this.valorTotal = total;
    });
  }

  ngOnDestroy(): void {
    this.carrinhoItensSubscription.unsubscribe();
    this.valorTotalSubscription.unsubscribe();
    this.mensagemErroSubscription.unsubscribe();
  }

  removerItem(index: number) {
    this.carrinhoService.removerDoCarrinho(index);
  }

  decrementarQuantidade(item: { produto: any; quantidade: number; subtotal: number }) {
    this.carrinhoService.decrementarQuantidade(item);
  }

  incrementarQuantidade(item: { produto: any; quantidade: number; subtotal: number }) {
    this.carrinhoService.incrementarQuantidade(item);
  }

  confirmarCompra(template: TemplateRef<any>) {
    const initialState = {
      mensagemConfirmacao: 'Você deseja finalizar a compra?',
      fecharModalCallback: this.finalizarCompra.bind(this)  // Passando a referência do método
    };

    this.modalRef = this.modalService.show(ConfirmacaoCompraModalComponent, {
      initialState,
      class: 'modal-md'
    });
  }

  finalizarCompra() {
    this.carrinhoService.finalizarCompra();
    this.modalRef.hide();
    this.router.navigate(['/']);
  }
}
