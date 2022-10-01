import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { CreateProductDTO, Product, UpdateProductDTO } from './../models/product.model';

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
  getAllProducts(limit?: number , offset?: number) {
    let params = new HttpParams();
    if (limit && offset){
      params = params.set('limit', limit)
      params = params.set('offset', limit)

    }
    return this.http.get<Product[]>(this.apiUrl, { params })
  }

  getProductsByPage(limit: number , offset: number){
    return this.http.get<Product[]>(`${this.apiUrl}`, {
      params: {limit , offset}
    } )

  }


  /* solo el id */
  getProduct(id: string) {
    return this.http.get<Product>(`${this.apiUrl}/${id}`)
  }

  /* crear un solo producto */
  create (dto: CreateProductDTO){
    return this.http.post <Product> (this.apiUrl, dto);   
  }

  /* funciona como un get() */
  /* patch manda todo el objeto | put en partes */
  update(id: string, dto: UpdateProductDTO){
    return this.http.put <Product> (`${this.apiUrl}/${id}`, dto);
  }

  /* algunas apis devuelven un boolean */
  delete(id: string){
    return this.http.delete <boolean>(`${this.apiUrl}/${id}`)
  }
}
