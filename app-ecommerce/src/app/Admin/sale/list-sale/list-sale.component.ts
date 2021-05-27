import { Component, OnInit } from '@angular/core';
import { SaleProductService } from 'src/app/Services/sale-product.service';
import { SaleService } from 'src/app/Services/sale.service';

@Component({
  selector: 'app-list-sale',
  templateUrl: './list-sale.component.html',
  styleUrls: ['./list-sale.component.css']
})
export class ListSaleComponent implements OnInit {

  constructor(
    public _myService: SaleService,
    private _saleProduct: SaleProductService,
  ) {
    _saleProduct.getList();
  }

  ngOnInit(): void {
  }

  remove(id: number) {
    let obj = this._myService.listAll.find(x => x.id == id);
    obj.state = !obj.state;
    this._myService.update(obj).subscribe(
      data => {
        console.log('Update obj: ', data);
      }
    )
  }
}
