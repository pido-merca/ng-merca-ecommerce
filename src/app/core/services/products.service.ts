import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as ENV } from '@environment';
import { ListProducts } from '@core/models/products.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  fetchAllProducts(): Observable<ListProducts[]> {
    return this.http.get<ListProducts[]>(ENV.api.products);
  }

  fetchAllProductsByCategory(category: string): Observable<ListProducts[]> {
    return this.http.get<ListProducts[]>(
      `${ENV.api.productsBycategories}/${category}.json`
    );
  }
}
