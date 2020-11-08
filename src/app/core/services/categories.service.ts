import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListCategories } from '@core/models/categories.interface';
import { environment as ENV } from '@environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(
    private http: HttpClient
  ) { }

  fetchAllCategories(): Observable<ListCategories[]> {
    return this.http.get<ListCategories[]>(ENV.api.categories);
  }
}
