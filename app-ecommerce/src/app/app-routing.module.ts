import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormCategoryComponent } from './Admin/category/form-category/form-category.component';
import { ListCategoryComponent } from './Admin/category/list-category/list-category.component';
import { AddStockProductComponent } from './Admin/product/add-stock-product/add-stock-product.component';
import { FormProductComponent } from './Admin/product/form-product/form-product.component';
import { ListProductComponent } from './Admin/product/list-product/list-product.component';

const routes: Routes = [
  { path: 'dashboard/category/list', component: ListCategoryComponent },
  { path: 'dashboard/category/create', component: FormCategoryComponent },
  { path: 'dashboard/category/edit/:id', component: FormCategoryComponent },

  { path: 'dashboard/product/list', component: ListProductComponent },
  { path: 'dashboard/product/create', component: FormProductComponent },
  { path: 'dashboard/product/edit/:id', component: FormProductComponent },
  { path: 'dashboard/product/stock/:id', component: AddStockProductComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
