import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { LandingPagesComponent } from './landing-pages/landing-pages.component';
import { AppRoutingModule } from '../app-routing.module';
import { HomeComponent } from './home/home.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalLoginComponent } from './modal-login/modal-login.component';
import { ModalFinallyBuyComponent } from './modal-finally-buy/modal-finally-buy.component';
import { MyShoppingComponent } from './my-shopping/my-shopping.component';

@NgModule({
  declarations: [
    ProductsComponent,
    ShoppingCartComponent,
    LandingPagesComponent,
    HomeComponent,
    ModalLoginComponent,
    ModalFinallyBuyComponent,
    MyShoppingComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    AngularMaterialModule,
    LayoutModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports:[
    LandingPagesComponent,
  ]
})
export class PublicModule { }
