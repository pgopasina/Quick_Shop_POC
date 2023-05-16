import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-mens',
  templateUrl: './mens.component.html',
  styleUrls: ['./mens.component.css']
})
export class MensComponent implements OnInit {

  constructor(private data: ServiceService, private route:Router) { }
  myData: any
  ngOnInit(): void {
    this.data.getData().subscribe((x: any) => {
      this.myData = x
    })
    this.clothing()
  }

  clothing() {
    // let x = this.myData.filter((x: any) => x.category = "men's clothing")
    let x = this.myData
    this.data.list.next(x);
    this.route.navigateByUrl('fashion/category')
  }
}
