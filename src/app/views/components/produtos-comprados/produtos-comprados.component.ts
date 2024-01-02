// produtos-comprados.component.ts
import { Component, OnInit } from '@angular/core';
import { ProdutosCompradosService } from 'src/app/services/produtos-comprados.service';

@Component({
  selector: 'app-produtos-comprados',
  templateUrl: './produtos-comprados.component.html',
  styleUrls: ['./produtos-comprados.component.css'],
})
export class ProdutosCompradosComponent implements OnInit {
  produtosComprados: any[] = [];

  constructor(private produtosCompradosService: ProdutosCompradosService) {}

  ngOnInit(): void {
    this.produtosComprados = this.produtosCompradosService.obterProdutosComprados();
  }
}
