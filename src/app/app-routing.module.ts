import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExibirProdutosComponent } from './views/components/exibir-produtos/exibir-produtos.component';
import { CarrinhoComponent } from './views/components/carrinho/carrinho.component';
import { ProdutosCompradosComponent } from './views/components/produtos-comprados/produtos-comprados.component';
import { DetalhesProdutosComponent } from './views/components/detalhes-produtos/detalhes-produtos.component';
import { PesquisaProdutosComponent } from './views/components/pesquisa-produtos/pesquisa-produtos.component';

const routes: Routes = [
  { path: '', component: ExibirProdutosComponent },
  { path: 'carrinho', component: CarrinhoComponent },
  { path: 'produtos-comprados', component: ProdutosCompradosComponent },
  { path: 'detalhes-produto/:id', component: DetalhesProdutosComponent},
  { path: 'pesquisa-produto/:termo', component: PesquisaProdutosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
