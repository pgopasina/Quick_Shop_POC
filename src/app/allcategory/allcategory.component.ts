import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-allcategory',
  templateUrl: './allcategory.component.html',
  styleUrls: ['./allcategory.component.css']
})
export class AllcategoryComponent implements OnInit {

  constructor(private data: ServiceService) { }
  myData: any
  ngOnInit(): void {
    this.data.getData().subscribe((x: any) => {
      this.myData = x
    })
  }

}
