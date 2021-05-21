import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../Interfaces/category';
import { RespCategory } from '../Interfaces/resp-category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  listAll = [] as Category[];

  constructor(
    private http: HttpClient,
  ) {
    this.getList();
  }

  getList() {
    return this.http.get('http://localhost:1337/api/category/list').subscribe(
      data => {
        console.log('Listado de categorías: ', data);
        let resp = data as RespCategory;
        if (resp.success == true) {
          this.listAll = resp.data;
        } else {

        }
      }
    )
  }

  createCategory(category: Category) {
    return this.http.post('http://localhost:1337/api/category/create', category);
  }

  update(category: Category) {
    return this.http.put('http://localhost:1337/api/category/update/' + category.id, category);
  }

}
