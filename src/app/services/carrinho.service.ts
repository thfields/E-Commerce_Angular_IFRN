import { ProdutosCompradosService } from './produtos-comprados.service';
// carrinho.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ProdutosService } from './produtos.service';
import { Produto } from '../model/produtos';

@Injectable({
  providedIn: 'root',
})
export class CarrinhoService {
  private itensCarrinho: { produto: any; quantidade: number, subtotal: number }[] = [];
  private carrinhoSubject = new BehaviorSubject<{ produto: any; quantidade: number, subtotal: number }[]>([]);
  private valorTotalSubject = new BehaviorSubject<number>(0);

  constructor(private produtosCompradosService: ProdutosCompradosService, private produtosService: ProdutosService,) {}


   // Métodos privados

  // Atualiza o valor total do carrinho
  private atualizarValorTotal() {
    const valorTotal = this.itensCarrinho.reduce((total, item) => total + item.subtotal, 0);
    this.valorTotalSubject.next(valorTotal);
  }

  // Atualiza os subtotais dos itens no carrinho
  private atualizarSubtotais() {
    this.itensCarrinho.forEach((item) => {
      item.subtotal = item.produto.price * item.quantidade;
    });
    this.atualizarValorTotal();
  }

  // Métodos públicos

  // Adiciona um produto ao carrinho
  adicionarAoCarrinho(produto: any) {
    const index = this.itensCarrinho.findIndex((item) => item.produto.id === produto.id);

    if (index !== -1) {
      this.itensCarrinho[index].quantidade += 1;
    } else {
      this.itensCarrinho.push({ produto, quantidade: 1, subtotal: produto.price });
    }

    this.atualizarSubtotais();
    this.carrinhoSubject.next([...this.itensCarrinho]);

    alert(`Produto ${produto.title} adicionado ao carrinho`);
  }

  // Remove um item do carrinho
  removerDoCarrinho(index: number) {
    this.itensCarrinho.splice(index, 1);

    this.atualizarSubtotais();
    this.carrinhoSubject.next([...this.itensCarrinho]);
  }

  // Obtém os itens do carrinho como um Observable
  obterItensCarrinho(): Observable<{ produto: any; quantidade: number; subtotal: number }[]> {
    return this.carrinhoSubject.asObservable();
  }

  // Obtém o valor total do carrinho como um Observable
  obterValorTotal(): Observable<number> {
    return this.valorTotalSubject.asObservable();
  }

  // Decrementa a quantidade de um item no carrinho
  decrementarQuantidade(item: { produto: any; quantidade: number; subtotal: number }) {
    if (item.quantidade > 1) {
      item.quantidade -= 1;
      item.subtotal -= item.produto.price;
    } else {
      const index = this.itensCarrinho.findIndex((i) => i.produto.id === item.produto.id);
      if (index !== -1) {
        this.itensCarrinho.splice(index, 1);
      }
    }

    this.atualizarSubtotais();
    this.carrinhoSubject.next([...this.itensCarrinho]);
  }

  // Incrementa a quantidade de um item no carrinho
  incrementarQuantidade(item: { produto: any; quantidade: number; subtotal: number }) {
    (this.podeIncrementarQuantidade(item))
      item.quantidade += 1;
      item.subtotal += item.produto.price;
      this.atualizarSubtotais();
      this.carrinhoSubject.next([...this.itensCarrinho]);
  }

  // Verifica se é possível incrementar a quantidade de um item
  podeIncrementarQuantidade(item: { produto: any; quantidade: number; subtotal: number }): boolean {
    return item.quantidade < item.produto.stock;
  }

  // Finaliza a compra
  finalizarCompra(produto?: Produto) {
    const dataCompra = new Date(); // Obter a data atual

    if (produto) {
      const produtoComprado = {
        produto: produto,
        quantidade: 1,
        subtotal: produto.price,
        dataCompra: dataCompra
      };
      this.produtosCompradosService.adicionarProdutoComprado(produtoComprado);
    } else {
      // Adicione os produtos comprados ao serviço de produtos comprados
    this.itensCarrinho.forEach((item) => {
      const produtoComprado = {
        produto: item.produto,
        quantidade: item.quantidade,
        subtotal: item.subtotal,
        dataCompra: dataCompra, // Adicionar a data da compra
      };
      this.produtosCompradosService.adicionarProdutoComprado(produtoComprado);
    });

    // Limpar o carrinho
    this.itensCarrinho = [];
    this.carrinhoSubject.next([]);
    this.valorTotalSubject.next(0);
    }
  }
}
