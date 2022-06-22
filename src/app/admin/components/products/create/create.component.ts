import { Component, OnInit } from '@angular/core';
import { Product_Create } from 'src/app/contracts/product_create';
import { AlertifyService, MessageType, Position } from 'src/app/services/admin/alertify.service';
import { ProductService } from 'src/app/services/admin/models/product.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  constructor(private productService : ProductService , private alertify : AlertifyService) { }

  ngOnInit(): void {
    
  }

  create(name : HTMLInputElement , stock : HTMLInputElement , price : HTMLInputElement){
    const product_create : Product_Create = new Product_Create();
    product_create.Name =  name.value;
    product_create.Stock = parseInt(stock.value);
    product_create.Price = parseFloat(price.value);

    this.productService.create(product_create , () => {
      this.alertify.message("Product create succesed" , {
        messageType : MessageType.Success,
        position : Position.TopRigth
      });
    } , errorMessage =>{
      this.alertify.message(errorMessage , {
        messageType : MessageType.Error,
        position : Position.TopRigth
      })
    });
    
  }

}
