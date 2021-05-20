import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../Interfaces/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
    private http: HttpClient,
  ) { }

  listCategory() {
    return this.http.get('http://localhost:1337/api/category/list');
  }

  createCategory(category: Category) {
    return this.http.post('http://localhost:1337/api/category/create', category);
  }

}
