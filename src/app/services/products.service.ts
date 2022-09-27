import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  /* para no repetir */
  private apiUrl = 'https://young-sands-07814.herokuapp.com/api/products';

  constructor(
    /* para hacer peticiones */
    private http: HttpClient
  ) { }
  /* llamada al api */
  getAllProducts() {
    return this.http.get<Product[]>(this.apiUrl)
  }
  /* solo el id */
  getProduct(id: string) {
    return this.http.get<Product>(`${this.apiUrl}/${id}`)
  }
}
