import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormCategoryComponent } from './Admin/category/form-category/form-category.component';
import { ListCategoryComponent } from './Admin/category/list-category/list-category.component';

const routes: Routes = [
  { path: 'dashboard/category/list', component: ListCategoryComponent },
  { path: 'dashboard/category/create', component: FormCategoryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
