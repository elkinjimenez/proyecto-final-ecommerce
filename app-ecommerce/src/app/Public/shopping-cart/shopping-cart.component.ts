import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Product } from 'src/app/Interfaces/product';
import { Sale } from 'src/app/Interfaces/sale';
import { CartService } from 'src/app/Services/cart.service';
import { SaleProductService } from 'src/app/Services/sale-product.service';
import { SaleService } from 'src/app/Services/sale.service';
import { ModalLoginComponent } from '../modal-login/modal-login.component';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  constructor(
    public _myService: CartService,
    public _mySale: SaleService,
    public dialog: MatDialog,
    public _saleProduct: SaleProductService,
  ) {
    if (this._myService.listAll.length <= 0) {
      this._myService.listAll = JSON.parse(sessionStorage.getItem(btoa('myProducts')));
    }
  }

  ngOnInit(): void { }

  remove(i: number) {
    this._myService.listAll.splice(i, 1);
    sessionStorage.setItem(btoa('myProducts'), JSON.stringify(this._myService.listAll));
  }

  buy(): void {
    if (sessionStorage.getItem(btoa('client'))) {
      let body = {
        state: false,
        client: JSON.parse(sessionStorage.getItem(btoa('client'))).id,
      } as Sale;
      this._mySale.create(body).subscribe(
        data => {
          console.log('Create sale: ', data);
          let resp = data as any;
          let bandera = 0;
          this._myService.listAll.forEach(p => {
            p.sale = resp.data.id;
            p.product = (p.product as Product).id;
            this._saleProduct.create(p).subscribe(
              saleP => {
                console.log('Sale Producto create: ', saleP);
                bandera += 1;
              }
            )
          })
        }
      )
    } else {
      const dialogRef = this.dialog.open(ModalLoginComponent);
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
        if (result != undefined) {
          this.buy();
        }
      });
    }


  }

}
