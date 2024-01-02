import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  termoPesquisa: string = '';

  constructor(private router: Router) {}

  buscarProduto(): void {
    if (this.termoPesquisa && this.termoPesquisa.trim() !== '') {
      console.log('Navegando para:', this.termoPesquisa.trim());
      this.router.navigateByUrl(`/pesquisa-produto/${this.termoPesquisa.trim()}`);
    }
  }

}
