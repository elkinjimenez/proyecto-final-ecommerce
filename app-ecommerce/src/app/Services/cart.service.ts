import { Injectable } from '@angular/core';
import { SaleProduct } from '../Interfaces/sale-product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  listAll = [] as SaleProduct[];

  constructor() { }
}
