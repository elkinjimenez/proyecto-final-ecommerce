import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/Interfaces/category';
import { CategoryService } from 'src/app/Services/category.service';

@Component({
  selector: 'app-form-category',
  templateUrl: './form-category.component.html',
  styleUrls: ['./form-category.component.css']
})
export class FormCategoryComponent implements OnInit {

  rFormsCategory: FormGroup;
  idCategory: number;

  constructor(
    private fb: FormBuilder,
    public _category: CategoryService,
    private route: ActivatedRoute,
    private ro: Router,
  ) {
    this.idCategory = this.route.snapshot.params.id;
    this.rFormsCategory = fb.group({
      'name': ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z]+')])]
    })
  }

  ngOnInit(): void {
    this.buscarCategoria();
  }

  buscarCategoria() {
    if (this._category.listCategory.length > 0) {
      let cat = this._category.listCategory.find(x => x.id == this.idCategory);
      console.log('ID: ', this.idCategory);
      if (cat) {
        this.rFormsCategory.patchValue(
          {
            'name': cat.name,
          }
        )
      }
    } else {
      setTimeout(() => {
        this.buscarCategoria();
      }, 500);
    }
  };

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
        this._category.getCategories();
        this.ro.navigate(['/dashboard/category/list']);
      }
    )
  }

}
