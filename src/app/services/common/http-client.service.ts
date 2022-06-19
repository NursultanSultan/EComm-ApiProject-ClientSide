import { Inject, inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private httpClient : HttpClient , @Inject("baseUrl") private baseUrl : string ) { }

  private Url(requestParametr : Partial<RequestParametr>) : string{
    return `${requestParametr.baseUrl ? requestParametr.baseUrl : this.baseUrl} /
            ${requestParametr.Controller} ${requestParametr.Action ? `/${requestParametr.Action}`: ""}` ;
  }


  get<T>(requestParametr : Partial<RequestParametr> , id? :string) : Observable<T>{

    let url : string = "";

    if(requestParametr.fullEndPoint){
      url = requestParametr.fullEndPoint;
    }
    else{
      url = `${this.Url(requestParametr)}${id ? `/${id}` : ""}`;
    }

    return this.httpClient.get<T>(url , {headers : requestParametr.headers});
    
  }

  post(){

  }

  Put(){

  }

  Delete(){

  }

 
  
}

export class RequestParametr{

  Controller? : string;
  Action? : string;

  headers? : HttpHeaders;
  baseUrl? : string;
  fullEndPoint : string;

}
