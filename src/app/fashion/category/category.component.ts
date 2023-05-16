import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  productsData :any
  constructor(private data: ServiceService) { }

  ngOnInit(): void {
    this.data.list.subscribe((x:any)=>{
      this.productsData = x
      console.log(x,'jhbdf');
      
    }); 
  }

}
