import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutModule } from '@angular/cdk/layout';
import { ListCategoryComponent } from './category/list-category/list-category.component';
import { AppRoutingModule } from '../app-routing.module';
import { FormCategoryComponent } from './category/form-category/form-category.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../angular-material/angular-material.module';

@NgModule({
  declarations: [
    DashboardComponent,
    ListCategoryComponent,
    FormCategoryComponent
  ],
  imports: [
    CommonModule,
    LayoutModule,
    AppRoutingModule,
    AngularMaterialModule,
    ReactiveFormsModule,
  ],
  exports: [
    DashboardComponent,
  ]
})
export class AdminModule { }