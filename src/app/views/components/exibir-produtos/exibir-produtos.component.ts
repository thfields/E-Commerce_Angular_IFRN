import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from '../../../model/produtos';
import { ProdutosService } from '../../../services/produtos.service';
import { CarrinhoService } from 'src/app/services/carrinho.service';

@Component({
  selector: 'app-exibir-produtos',
  templateUrl: './exibir-produtos.component.html',
  styleUrls: ['./exibir-produtos.component.css']
})
export class ExibirProdutosComponent implements OnInit {
  produtos: Produto[] = [];

  constructor(
    private ps: ProdutosService,
    private carrinhoService: CarrinhoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.ps.getAll().subscribe((res) => {
      this.produtos = res.products;
    });
  }

  adicionarAoCarrinho(produto: Produto) {
    this.carrinhoService.adicionarAoCarrinho(produto);
  }

  verDetalhes(produto: Produto) {
    // Navegue para o componente detalhes-produtos e passe o ID do produto
    this.router.navigate(['/detalhes-produto', produto.id]);
  }
}
