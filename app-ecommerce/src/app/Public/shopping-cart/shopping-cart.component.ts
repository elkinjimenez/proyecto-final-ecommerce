import { Component, OnInit } from '@angular/core';
import { Sale } from 'src/app/Interfaces/sale';
import { CartService } from 'src/app/Services/cart.service';
import { SaleService } from 'src/app/Services/sale.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  constructor(
    public _myService: CartService,
    public _mySale: SaleService,
  ) { }

  ngOnInit(): void {
  }

  remove(i: number) {
    this._myService.listAll.splice(i, 1);
  }

  buy(): void {
    let body = {
      state: false,
      client: 1,
      saleDate: parseInt((new Date().toISOString()).replace(/-/g, '').replace(/:/g, '').replace(/Z/g, '').replace(/T/g, '').replace(/\./g, '')),
      createdAt: parseInt((new Date().toISOString()).replace(/-/g, '').replace(/:/g, '').replace(/Z/g, '').replace(/T/g, '').replace(/\./g, '')),
      updatedAt: parseInt((new Date().toISOString()).replace(/-/g, '').replace(/:/g, '').replace(/Z/g, '').replace(/T/g, '').replace(/\./g, '')),
    } as Sale;
    this._mySale.create(body).subscribe(
      data => {
        console.log('Create sale: ', data);
      }
    )
  }

}
