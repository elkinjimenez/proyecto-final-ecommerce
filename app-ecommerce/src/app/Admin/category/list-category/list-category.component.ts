import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/Interfaces/category';
import { RespGeneral } from 'src/app/Interfaces/resp-general';
import { CategoryService } from 'src/app/Services/category.service';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.css']
})
export class ListCategoryComponent implements OnInit {

  constructor(
    public _category: CategoryService,
  ) { }

  ngOnInit(): void { }

}
