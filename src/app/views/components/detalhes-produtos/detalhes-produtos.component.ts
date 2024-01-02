import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProdutosService } from 'src/app/services/produtos.service';
import { Produto } from 'src/app/model/produtos';
import { CarrinhoService } from 'src/app/services/carrinho.service';
import { ConfirmacaoCompraModalComponent } from '../confirmacao-compra-modal/confirmacao-compra-modal.component';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detalhes-produtos',
  templateUrl: './detalhes-produtos.component.html',
  styleUrls: ['./detalhes-produtos.component.css']
})
export class DetalhesProdutosComponent implements OnInit {
  produtoDetalhado: Produto | undefined = undefined;
  modalRef!: BsModalRef;

  constructor(
    private route: ActivatedRoute,
    private produtosService: ProdutosService,
    private carrinhoService: CarrinhoService,
    private modalService: BsModalService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const produtoId = this.route.snapshot.paramMap.get('id');
    if (produtoId) {
      this.produtosService.getById(+produtoId).subscribe(
        data => {
          this.produtoDetalhado = data;
        },
        error => {
          console.error('Erro ao carregar os detalhes do produto:', error);
        }
      );
    }
  }

  // Tornando o método público
  adicionarAoCarrinho(produto: Produto) {
    this.carrinhoService.adicionarAoCarrinho(produto);
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
    this.carrinhoService.finalizarCompra(this.produtoDetalhado);
    this.modalRef.hide();
    this.router.navigate(['/']);
  }
}
