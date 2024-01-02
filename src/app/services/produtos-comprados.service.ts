import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProdutosCompradosService {
  private produtosComprados: any[] = [];

  adicionarProdutoComprado(produto: any) {
    this.produtosComprados.push(produto);
  }

  obterProdutosComprados() {
    return this.produtosComprados;
  }
}
