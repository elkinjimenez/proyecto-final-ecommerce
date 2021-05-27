import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormCategoryComponent } from './Admin/category/form-category/form-category.component';
import { ListCategoryComponent } from './Admin/category/list-category/list-category.component';
import { LandingAdminComponent } from './Admin/landing-admin/landing-admin.component';
import { AddStockProductComponent } from './Admin/product/add-stock-product/add-stock-product.component';
import { FormProductComponent } from './Admin/product/form-product/form-product.component';
import { ListProductComponent } from './Admin/product/list-product/list-product.component';
import { ListSaleComponent } from './Admin/sale/list-sale/list-sale.component';
import { ViewSaleComponent } from './Admin/view-sale/view-sale.component';
import { HomeComponent } from './Public/home/home.component';
import { MyShoppingComponent } from './Public/my-shopping/my-shopping.component';
import { ProductsComponent } from './Public/products/products.component';
import { ShoppingCartComponent } from './Public/shopping-cart/shopping-cart.component';

const routes: Routes = [
  // PUBLIC
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'shopping-cart', component: ShoppingCartComponent },
  { path: 'my-shopping', component: MyShoppingComponent },

  // PRIVATE
  { path: 'dashboard', component: LandingAdminComponent },
  { path: 'dashboard/category/list', component: ListCategoryComponent },
  { path: 'dashboard/category/create', component: FormCategoryComponent },
  { path: 'dashboard/category/edit/:id', component: FormCategoryComponent },

  { path: 'dashboard/product/list', component: ListProductComponent },
  { path: 'dashboard/product/create', component: FormProductComponent },
  { path: 'dashboard/product/edit/:id', component: FormProductComponent },
  { path: 'dashboard/product/stock/:id', component: AddStockProductComponent },

  { path: 'dashboard/sales/list', component: ListSaleComponent },
  { path: 'dashboard/sales/view/:id', component: ViewSaleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
