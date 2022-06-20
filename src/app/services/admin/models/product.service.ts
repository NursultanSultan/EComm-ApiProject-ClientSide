import { Injectable } from '@angular/core';
import { Product_Create } from 'src/app/contracts/product_create';
import { HttpClientService } from '../../common/http-client.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClientService : HttpClientService) { }

  create(product : Product_Create , successCallBack? :any) {

    this.httpClientService.post({
      Controller : "products"
    }, product).subscribe(request => {
      successCallBack();
    });

  }
}
