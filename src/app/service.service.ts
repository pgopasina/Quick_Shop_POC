import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  list = new Subject()

  getData() {
    return this.http.get('https://fakestoreapi.com/products/');
  }
}