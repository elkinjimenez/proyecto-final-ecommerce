import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RespSale } from '../Interfaces/resp-sale';
import { Sale } from '../Interfaces/sale';

@Injectable({
  providedIn: 'root'
})
export class SaleService {

  listAll = [] as Sale[];

  constructor(
    private http: HttpClient,
  ) {
    this.getList();
  }

  getList() {
    return this.http.get('http://localhost:1337/api/sale/list').subscribe(
      data => {
        console.log('List Objs: ', data);
        let resp = data as RespSale;
        if (resp.success == true) {
          this.listAll = resp.data;
        } else {

        }
      }
    )
  }

  create(obj: Sale) {
    return this.http.post('http://localhost:1337/api/sale/create', obj);
  }

  update(obj: Sale) {
    return this.http.put('http://localhost:1337/api/sale/update/' + obj.id, obj);
  }

}
