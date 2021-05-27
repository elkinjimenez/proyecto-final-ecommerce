import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/Interfaces/product';
import { Sale } from 'src/app/Interfaces/sale';
import { SaleProduct } from 'src/app/Interfaces/sale-product';
import { ProductService } from 'src/app/Services/product.service';
import { SaleProductService } from 'src/app/Services/sale-product.service';
import { SaleService } from 'src/app/Services/sale.service';
import { ModalInvoiceComponent } from '../modal-invoice/modal-invoice.component';

@Component({
  selector: 'app-view-my-shopping',
  templateUrl: './view-my-shopping.component.html',
  styleUrls: ['./view-my-shopping.component.css']
})
export class ViewMyShoppingComponent implements OnInit {

  listAll = [] as SaleProduct[];
  idObj: number;
  sale = {} as Sale;

  constructor(
    public _myService: SaleProductService,
    private route: ActivatedRoute,
    private _sale: SaleService,
    public dialog: MatDialog,
  ) {
    _myService.getList();
    this.idObj = this.route.snapshot.params.id;
  }

  ngOnInit(): void {
    this.buscar();
  }

  buscar() {
    if (this._myService.listAll.length > 0) {
      this.sale = this._sale.listAll.find(x => x.id == this.idObj);
      console.log('Sale: ', this.sale);
      let myObj = this._myService.listAll.filter(x => (x.sale as Sale).id == this.idObj);
      if (myObj) {
        this.listAll = myObj;
      }
    } else {
      setTimeout(() => {
        this.buscar();
      }, 500);
    }
  };

  invoice(): void {
    const dialogRef = this.dialog.open(ModalInvoiceComponent, {
      data: { sale: this.sale, listAll: this.listAll },
      minWidth: '600px'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      if (result != undefined) {

      }
    });
  }

}
