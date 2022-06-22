import { Component, OnInit } from '@angular/core';
import { HttpClientService } from 'src/app/services/common/http-client.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(private httpClientService : HttpClientService) { }

  ngOnInit(): void { 
    // this.httpClientService.get({Controller : "products"} 
    // ).subscribe(data => console.log(data));


    // this.httpClientService.post(
    //   {Controller : "products"},
    //   {
    //     name : "Sneaker",
    //     stock : 100,
    //     price : 200
    //   }
    // ).subscribe();


    // this.httpClientService.put(
    //   {Controller : "products"},
    //   {
    //     id : 
    //     name : "",
    //     stock : ,
    //     price : 
    //   }
    // ).subscribe();


    // this.httpClientService.delete(
    //   {Controller : "products"},"8df91677-ab16-4ff9-823e-2c23b50b702a").subscribe();


    // this.httpClientService.get(
      
    //   { baseUrl : "https://jsonplaceholder.typicode.com",
    //     Controller : "posts"}
    // ).subscribe(data => console.log(data));

  }



}
