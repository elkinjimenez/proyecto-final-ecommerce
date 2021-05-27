import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  constructor(
    public _myService: ProductService,
  ) {
    _myService.getList();
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
