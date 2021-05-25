import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/Services/cart.service';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(
    public _myService: ProductService,
    public _myCart: CartService,
  ) { }

  ngOnInit(): void {
  }

  add(id: number) {
    let pr = this._myService.listAll.find(x => x.id == id);
    this._myCart.listAll.push({
      amount: 1,
      product: pr,
      sale: null,
      createdAt: parseInt((new Date().toISOString()).replace(/-/g, '').replace(/:/g, '').replace(/Z/g, '').replace(/T/g, '').replace(/\./g, '')),
      updatedAt: parseInt((new Date().toISOString()).replace(/-/g, '').replace(/:/g, '').replace(/Z/g, '').replace(/T/g, '').replace(/\./g, '')),
    })
    console.log('TOTAL: ', this._myCart.listAll);
  }

}
