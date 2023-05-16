import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InputTextModule } from 'primeng/inputtext';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarModule } from 'primeng/sidebar';
import { SlideMenuModule } from 'primeng/slidemenu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenubarModule } from 'primeng/menubar';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { DialogModule } from 'primeng/dialog';
import { RippleModule } from 'primeng/ripple';
import { RatingModule } from 'primeng/rating';
import { DataViewModule } from 'primeng/dataview';
import { DemoComponent } from './demo/demo.component';
import {CardModule} from 'primeng/card';
import { ServiceService } from 'src/app/service.service';
import { AllcategoryComponent } from './allcategory/allcategory.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    AllcategoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InputTextModule,
    SidebarModule,
    SlideMenuModule,
    BrowserAnimationsModule,
    MenubarModule,
    FormsModule,
    PanelModule,
    ButtonModule,
    HttpClientModule,
    DialogModule,
    RippleModule,
    RatingModule,
    DataViewModule,
    CardModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
