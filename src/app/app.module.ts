import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { ExibirProdutosComponent } from './views/components/exibir-produtos/exibir-produtos.component';
import { CarrinhoComponent } from './views/components/carrinho/carrinho.component';
import { AppRoutingModule } from './app-routing.module';
import { ProdutosCompradosComponent } from './views/components/produtos-comprados/produtos-comprados.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ConfirmacaoCompraModalComponent } from './views/components/confirmacao-compra-modal/confirmacao-compra-modal.component';
import { CurrencyBrPipe } from './currency-br.pipe';

import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { NavbarComponent } from './views/components/navbar/navbar.component';
import { FooterComponent } from './views/components/footer/footer.component';
import { DetalhesProdutosComponent } from './views/components/detalhes-produtos/detalhes-produtos.component';
import { PesquisaProdutosComponent } from './views/components/pesquisa-produtos/pesquisa-produtos.component';
import { FormsModule } from '@angular/forms';

registerLocaleData(localePt, 'pt-BR');

@NgModule({
  declarations: [
    AppComponent,
    ExibirProdutosComponent,
    CarrinhoComponent,
    ProdutosCompradosComponent,
    ConfirmacaoCompraModalComponent,
    CurrencyBrPipe,
    NavbarComponent,
    FooterComponent,
    DetalhesProdutosComponent,
    PesquisaProdutosComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ModalModule.forRoot(),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
