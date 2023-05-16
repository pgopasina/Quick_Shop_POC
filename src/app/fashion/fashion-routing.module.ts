import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { FashionComponent } from './fashion.component';
import { KidsComponent } from './kids/kids.component';
import { MensComponent } from './mens/mens.component';
import { WomensComponent } from './womens/womens.component';

const routes: Routes = [
  { path: '', component: FashionComponent },
  { path: 'mens', component: MensComponent },
  { path: 'womens', component: WomensComponent },
  { path: 'kids', component: KidsComponent },
  {path:'category', component:CategoryComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FashionRoutingModule { }
