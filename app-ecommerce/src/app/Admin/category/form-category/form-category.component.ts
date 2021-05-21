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

  rFormsObj: FormGroup;
  idObj: number;
  obj = {} as Category;

  constructor(
    private fb: FormBuilder,
    public _myService: CategoryService,
    private route: ActivatedRoute,
    private ro: Router,
  ) {
    this.idObj = this.route.snapshot.params.id;
    this.rFormsObj = fb.group({
      'name': ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z]+')])]
    })
  }

  ngOnInit(): void {
    this.buscarCategoria();
  }

  buscarCategoria() {
    if (this._myService.listAll.length > 0) {
      let cat = this._myService.listAll.find(x => x.id == this.idObj);
      if (cat) {
        this.obj = cat;
        this.rFormsObj.patchValue(
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
    let cat = {
      name: this.rFormsObj.controls['name'].value,
      registerUser: 'ELKIN',
      state: true,
      createdAt: parseInt((new Date().toISOString()).replace(/-/g, '').replace(/:/g, '').replace(/Z/g, '').replace(/T/g, '').replace(/\./g, '')),
      updatedAt: parseInt((new Date().toISOString()).replace(/-/g, '').replace(/:/g, '').replace(/Z/g, '').replace(/T/g, '').replace(/\./g, '')),
      modifyUser: 'FELIPE'
    } as Category;
    this._myService.createCategory(cat).subscribe(
      data => {
        console.log('Crear categoría: ', data);
        this._myService.getList();
        this.ro.navigate(['/dashboard/category/list']);
      }
    )
  }

  update() {
    this.obj.name = this.rFormsObj.controls['name'].value;
    this._myService.update(this.obj).subscribe(
      data => {
        console.log('Update Obj: ', data);
        this.ro.navigate(['/dashboard/category/list']);
      }
    )
  }

}
