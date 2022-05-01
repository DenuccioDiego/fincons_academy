import { Injectable } from '@angular/core';
import { Product } from 'src/app/shared/model/product-model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class ProductService {

  private prodList: Product[] = [];

  constructor(private http: HttpClient) { }

  public getAllProducts(): Observable<Product[]> {
    const url = environment.baseUrl + '/products';
    return this.http.get<Product[]>(url);
  }


}
