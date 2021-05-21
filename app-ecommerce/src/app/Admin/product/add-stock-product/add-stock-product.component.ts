import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/Interfaces/product';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-add-stock-product',
  templateUrl: './add-stock-product.component.html',
  styleUrls: ['./add-stock-product.component.css']
})
export class AddStockProductComponent implements OnInit {

  rFormsObj: FormGroup;
  idObj: number;
  obj = {} as Product;

  constructor(
    private fb: FormBuilder,
    public _myService: ProductService,
    private route: ActivatedRoute,
    private ro: Router,
  ) {
    this.idObj = this.route.snapshot.params.id;
    this.rFormsObj = fb.group({
      'value': ['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.buscar();
  }

  buscar() {
    if (this._myService.listAll.length > 0) {
      let myObj = this._myService.listAll.find(x => x.id == this.idObj);
      if (myObj) {
        this.obj = myObj;
      }
    } else {
      setTimeout(() => {
        this.buscar();
      }, 500);
    }
  };

  add() {
    this.obj.stock += this.rFormsObj.controls['value'].value;
    this._myService.update(this.obj).subscribe(
      data => {
        console.log('Update Obj: ', data);
        this.ro.navigate(['/dashboard/product/list']);
      }
    )
  }

}
