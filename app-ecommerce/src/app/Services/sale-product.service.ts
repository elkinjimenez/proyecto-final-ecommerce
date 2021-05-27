import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RespSaleProduct } from '../Interfaces/resp-sale-product';
import { SaleProduct } from '../Interfaces/sale-product';

@Injectable({
  providedIn: 'root'
})
export class SaleProductService {

  listAll = [] as SaleProduct[];

  constructor(
    private http: HttpClient,
  ) {
    this.getList();
  }

  getList() {
    return this.http.get('http://localhost:1337/api/sale-product/list').subscribe(
      data => {
        console.log('Listado de categorías: ', data);
        let resp = data as RespSaleProduct;
        if (resp.success == true) {
          this.listAll = resp.data;
        } else {

        }
      }
    )
  }

  create(obj: SaleProduct) {
    return this.http.post('http://localhost:1337/api/sale-product/create', obj);
  }
}
