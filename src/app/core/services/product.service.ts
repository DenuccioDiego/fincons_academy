import { Injectable } from '@angular/core';
import { Product } from 'src/app/shared/model/product-model';
import { HttpClient } from '@angular/common/http';
import { Observable, ObservableInput } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class ProductService {

  private prodList: Product[] = [];

  constructor(private http: HttpClient) { }

  public getAllProducts(): Observable<Product[]> {
    const url = environment.baseUrl + '/products';
    return this.http.get<Product[]>(url);
  }

  public getOneProduct(id: number): Observable<Product> {
    const url = environment.baseUrl + '/products/' + id;
    return this.http.get<Product>(url);
  }

  public deleteProduct(id: number): Observable<any> {
    const url = environment.baseUrl + '/products/' + id;
    return this.http.delete<any>(url);
  }

  public editProduct(product: Product): Observable<Product> {
    const url = environment.baseUrl + '/products/' + product.id;
    return this.http.put<Product>(url, product);
  }

  public createProduct(product: Product): Observable<any> {
    const url = environment.baseUrl + '/products'
    return this.http.post(url, product)
  }

}
