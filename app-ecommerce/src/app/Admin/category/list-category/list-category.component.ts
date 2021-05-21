import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/Services/category.service';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.css']
})
export class ListCategoryComponent implements OnInit {

  constructor(
    public _myService: CategoryService,
  ) { }

  ngOnInit(): void { }

  remove(id: number) {
    let obj = this._myService.listAll.find(x => x.id == id);
    obj.state = !obj.state;
    this._myService.update(obj).subscribe(
      data => {
        console.log('Actualizar obj: ', data);
      }
    )
  }

}
