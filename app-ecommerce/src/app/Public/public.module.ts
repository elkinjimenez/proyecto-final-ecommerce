import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { LandingPagesComponent } from './landing-pages/landing-pages.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    ProductsComponent,
    ShoppingCartComponent,
    LandingPagesComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
  ],
  exports:[
    LandingPagesComponent,
  ]
})
export class PublicModule { }
