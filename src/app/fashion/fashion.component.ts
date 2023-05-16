import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-fashion',
  templateUrl: './fashion.component.html',
  styleUrls: ['./fashion.component.css']
})
export class FashionComponent implements OnInit {

  constructor(private service: ServiceService) { }
  myData: any = []
  ngOnInit(): void {
    this.service.getData().subscribe((products: any) => {
      this.myData = products
    })
  }

}
