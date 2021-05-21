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
    this.rFormsObj = fb.group({
      'name': ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z]+')])],
      'category': ['', Validators.required],
      'description': ['', Validators.required],
      'brand': ['', Validators.required],
      'amount': ['', Validators.required],
      'price': ['', Validators.required],
    })
  }

  ngOnInit(): void {
  }

  create(){
    
  }

}
