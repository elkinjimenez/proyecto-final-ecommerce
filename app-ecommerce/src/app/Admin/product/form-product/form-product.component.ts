import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/Interfaces/product';
import { CategoryService } from 'src/app/Services/category.service';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css']
})
export class FormProductComponent implements OnInit {

  rFormsObj: FormGroup;
  idObj: number;
  obj = {} as Product;

  constructor(
    private fb: FormBuilder,
    public _myService: ProductService,
    public _myC: CategoryService,
    private route: ActivatedRoute,
    private ro: Router,
  ) {
    this.idObj = this.route.snapshot.params.id;
    this.rFormsObj = fb.group({
      'name': ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z]+')])],
      'category': ['', Validators.required],
      'description': ['', Validators.required],
      'brand': ['', Validators.required],
      'price': ['', Validators.required],
      'image': ['', Validators.required],
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
        this.rFormsObj.patchValue(
          {
            'name': myObj.name,
            'description': myObj.description,
            'brand': myObj.brand,
            'price': myObj.price,
            'image': myObj.image,
            'category': myObj.category
          }
        )
      }
    } else {
      setTimeout(() => {
        this.buscar();
      }, 500);
    }
  };

  create() {
    this.obj = {
      name: this.rFormsObj.controls['name'].value,
      brand: this.rFormsObj.controls['brand'].value,
      description: this.rFormsObj.controls['description'].value,
      category: this.rFormsObj.controls['category'].value,
      image: this.rFormsObj.controls['image'].value,
      state: true,
      registerUser: 'ELKIN',
      stock: 0,
      price: this.rFormsObj.controls['price'].value,
      createdAt: parseInt((new Date().toISOString()).replace(/-/g, '').replace(/:/g, '').replace(/Z/g, '').replace(/T/g, '').replace(/\./g, '')),
      updatedAt: parseInt((new Date().toISOString()).replace(/-/g, '').replace(/:/g, '').replace(/Z/g, '').replace(/T/g, '').replace(/\./g, '')),
    }
    this._myService.create(this.obj).subscribe(
      data => {
        console.log('Create Obj: ', data);
        this._myService.getList();
        this.ro.navigate(['/dashboard/product/list']);
      }
    )
  }

  update() {
    this.obj.name = this.rFormsObj.controls['name'].value;
    this.obj.description = this.rFormsObj.controls['description'].value;
    this.obj.brand = this.rFormsObj.controls['brand'].value;
    this.obj.category = this.rFormsObj.controls['category'].value;
    this.obj.price = this.rFormsObj.controls['price'].value;
    this.obj.image = this.rFormsObj.controls['image'].value;
    this._myService.update(this.obj).subscribe(
      data => {
        console.log('Update Obj: ', data);
        this.ro.navigate(['/dashboard/product/list']);
      }
    )
  }

}
