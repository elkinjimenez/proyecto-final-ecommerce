import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Client } from 'src/app/Interfaces/client';
import { Product } from 'src/app/Interfaces/product';
import { Sale } from 'src/app/Interfaces/sale';
import { SaleProduct } from 'src/app/Interfaces/sale-product';
import { ClientService } from 'src/app/Services/client.service';
import { ProductService } from 'src/app/Services/product.service';
import { SaleProductService } from 'src/app/Services/sale-product.service';
import { SaleService } from 'src/app/Services/sale.service';

@Component({
  selector: 'app-view-sale',
  templateUrl: './view-sale.component.html',
  styleUrls: ['./view-sale.component.css']
})
export class ViewSaleComponent implements OnInit {

  listAll = [] as SaleProduct[];
  idObj: number;
  message = '';
  sale = {} as Sale;
  client = { person: {} } as Client;

  constructor(
    public _myService: SaleProductService,
    private route: ActivatedRoute,
    private _sale: SaleService,
    private _product: ProductService,
    private _client: ClientService,
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
    this._client.searchById((this.sale.client as Client).id).subscribe(
      data => {
        console.log('Client search: ', data);
        let resp = data as any;
        this.client = resp.data[0] as Client;
      }
    )
  }

  confirmSale(): void {
    this.sale.state = true;
    this.sale.client = (this.sale.client as Client).id;
    this._sale.update(this.sale).subscribe(
      saleD => {
        console.log('Update sale: ', this.sale);
        console.log('Update sale: ', saleD);
      }
    )
    this.listAll.forEach(x => {
      let p = x.product as Product;
      p.stock -= x.amount;
      this._product.update(p).subscribe(
        prodD => {
          console.log('Product Update: ', prodD);
        }
      )
    })
  }

}
