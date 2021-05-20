import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Category } from 'src/app/Interfaces/category';
import { CategoryService } from 'src/app/Services/category.service';

@Component({
  selector: 'app-form-category',
  templateUrl: './form-category.component.html',
  styleUrls: ['./form-category.component.css']
})
export class FormCategoryComponent implements OnInit {

  rFormsCategory: FormGroup;

  constructor(
    private fb: FormBuilder,
    public _category: CategoryService,
  ) {
    this.rFormsCategory = fb.group({
      'name': ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z]+')])]
    })
  }

  ngOnInit(): void {
  }

  crearCategoria() {
    console.log('Prueba: ', this.rFormsCategory.controls['name'].value);
    let cat = {
      name: this.rFormsCategory.controls['name'].value,
      registerUser: 'ELKIN',
      state: true,
      createdAt: parseInt((new Date().toISOString()).replace(/-/g, '').replace(/:/g, '').replace(/Z/g, '').replace(/T/g, '').replace(/\./g, '')),
      updatedAt: parseInt((new Date().toISOString()).replace(/-/g, '').replace(/:/g, '').replace(/Z/g, '').replace(/T/g, '').replace(/\./g, '')),
      modifyUser: 'FELIPE'
    } as Category;
    this._category.createCategory(cat).subscribe(
      data => {
        console.log('Crear categoría: ', data);
      }
    )
  }

}
