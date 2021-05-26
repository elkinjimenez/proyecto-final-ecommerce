import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SaleProduct } from '../Interfaces/sale-product';

@Injectable({
  providedIn: 'root'
})
export class SaleProductService {

  constructor(
    private http: HttpClient,
  ) { }

  create(obj: SaleProduct) {
    return this.http.post('http://localhost:1337/api/sale-product/create', obj);
  }
}
