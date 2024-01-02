import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  private URL = 'https://dummyjson.com'

  constructor(private http: HttpClient) {

  }

  getAll(): Observable<any> {
    return this.http.get(`${this.URL}/products?limit=100`)
  }

  getById(id: number): Observable<any> {
    return this.http.get(`${this.URL}/products/${id}`)
  }
}
