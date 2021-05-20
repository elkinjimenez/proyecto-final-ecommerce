import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../Interfaces/category';
import { RespGeneral } from '../Interfaces/resp-general';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  listCategory = [] as Category[];

  constructor(
    private http: HttpClient,
  ) {
    this.getCategories();
  }

  getCategories() {
    return this.http.get('http://localhost:1337/api/category/list').subscribe(
      data => {
        console.log('Listado de categorías: ', data);
        let resp = data as RespGeneral;
        if (resp.success == true) {
          this.listCategory = resp.data;
        } else {

        }
      }
    )
  }

  createCategory(category: Category) {
    return this.http.post('http://localhost:1337/api/category/create', category);
  }

}
