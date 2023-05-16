import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FashionRoutingModule } from './fashion-routing.module';
import { FashionComponent } from './fashion.component';
import { MensComponent } from './mens/mens.component';
import { WomensComponent } from './womens/womens.component';
import { KidsComponent } from './kids/kids.component';
import { CategoryComponent } from './category/category.component';


@NgModule({
  declarations: [
    FashionComponent,
    MensComponent,
    WomensComponent,
    KidsComponent,
    CategoryComponent
  ],
  imports: [
    CommonModule,
    FashionRoutingModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class FashionModule { }
