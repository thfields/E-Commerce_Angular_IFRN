import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PesquisaService {

  private URL = 'https://dummyjson.com/products/search?q=';

  constructor(private http: HttpClient) {}

  pesquisar(termo: string): Observable<any> {
    return this.http.get(`${this.URL}${termo}`);
  }
}
