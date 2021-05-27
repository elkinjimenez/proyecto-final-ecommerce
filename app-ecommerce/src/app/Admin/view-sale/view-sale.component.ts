import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/Interfaces/product';
import { Sale } from 'src/app/Interfaces/sale';
import { SaleProduct } from 'src/app/Interfaces/sale-product';
import { SaleProductService } from 'src/app/Services/sale-product.service';

@Component({
  selector: 'app-view-sale',
  templateUrl: './view-sale.component.html',
  styleUrls: ['./view-sale.component.css']
})
export class ViewSaleComponent implements OnInit {

  listAll = [] as SaleProduct[];
  idObj: number;
  message = '';

  constructor(
    public _myService: SaleProductService,
    private route: ActivatedRoute,
  ) {
    this.idObj = this.route.snapshot.params.id;
  }

  ngOnInit(): void {
    this.buscar();
  }

  buscar() {
    if (this._myService.listAll.length > 0) {
      let myObj = this._myService.listAll.filter(x => (x.sale as Sale).id == this.idObj);
      if (myObj) {
        this.listAll = myObj;
        this.validarStock();
      }
    } else {
      setTimeout(() => {
        this.buscar();
      }, 500);
    }
  };

  validarStock() {
    let message = '';
    this.listAll.forEach(x => {
      if (x.amount > (x.product as Product).stock) {
        message += `${(x.product as Product).name},`
      }
    })
    if (message != '') {
      this.message = `Los productos: ${message} superan la cantidad en stock.`;
    }
  }

}
