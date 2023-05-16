import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllcategoryComponent } from './allcategory/allcategory.component';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';

const routes: Routes = [
  {path:'demo',component:DemoComponent},
  {path:'allcategory',component:AllcategoryComponent},
  { path: 'fashion', loadChildren: () => import('./fashion/fashion.module').then(m => m.FashionModule) },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
