import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Sale } from 'src/app/Interfaces/sale';
import { CartService } from 'src/app/Services/cart.service';
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
  ) { }

  ngOnInit(): void { }

  remove(i: number) {
    this._myService.listAll.splice(i, 1);
  }

  buy(): void {
    if (sessionStorage.getItem(btoa('client'))) {
      let body = {
        state: false,
        client: 1,
      } as Sale;
      this._mySale.create(body).subscribe(
        data => {
          console.log('Create sale: ', data);
        }
      )
    } else {
      const dialogRef = this.dialog.open(ModalLoginComponent);
      dialogRef.afterClosed().subscribe(result => {
        this.buy();
      });
    }


  }

}
