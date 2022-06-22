import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product_Create } from 'src/app/contracts/product_create';
import { HttpClientService } from '../../common/http-client.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClientService : HttpClientService) { }

  create(product : Product_Create , successCallBack? :any , errorCallBack? : any) {

    this.httpClientService.post({
      Controller : "products"
    }, product).subscribe(request => {
      successCallBack();
    } , (errorResponse : HttpErrorResponse) => {
      const _error : Array<{key : string , value : Array<string>}> = errorResponse.error;
      let message = ""
      _error.forEach((errValue , index) => {
        errValue.value.forEach((_value , _index) => {
          message += `${_value} <br>`;
        });
      });
      errorCallBack(message);
    });

  }
}
