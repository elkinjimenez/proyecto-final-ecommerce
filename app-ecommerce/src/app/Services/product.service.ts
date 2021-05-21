import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../Interfaces/product';
import { RespProduct } from '../Interfaces/resp-product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  listAll = [] as Product[];

  constructor(
    private http: HttpClient,
  ) {
    this.getList();
  }

  getList() {
    return this.http.get('http://localhost:1337/api/product/list').subscribe(
      data => {
        console.log('Listado de product: ', data);
        let resp = data as RespProduct;
        if (resp.success == true) {
          this.listAll = resp.data;
        } else {

        }
      }
    )
  }

}
