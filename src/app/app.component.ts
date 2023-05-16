import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ServiceService } from './service.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'quickshop';
    constructor(private service: ServiceService) { }
  myData: any=[]
  ngOnInit(): void {
    this.service.getData().subscribe((products: any) => {
      this.myData = products
      console.log(products);
    })
  }
}
