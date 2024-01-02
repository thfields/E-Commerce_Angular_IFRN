import { Component, OnInit } from '@angular/core';
import { PesquisaService } from '../../../services/pesquisa.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pesquisa-produtos',
  templateUrl: './pesquisa-produtos.component.html',
  styleUrls: ['./pesquisa-produtos.component.css']
})
export class PesquisaProdutosComponent implements OnInit {
  resultados: any[] = [];
  termoPesquisa: string | undefined;

  constructor(private pesquisaService: PesquisaService, private route: ActivatedRoute) {}

ngOnInit(): void {
  this.route.params.subscribe(params => {
    this.termoPesquisa = params['termo'];
    if (this.termoPesquisa) {
      this.realizarPesquisa(this.termoPesquisa);
    }
  });
}

  realizarPesquisa(termo: string): void {
    this.pesquisaService.pesquisar(termo).subscribe(
      data => {
        this.resultados = data.products;
      },
      error => {
        console.error('Erro ao realizar pesquisa:', error);
      }
    );
  }
}
