import { Inject, inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private httpClient : HttpClient , @Inject("baseUrl") private baseUrl : string ) { }

  private Url(requestParametr : Partial<RequestParametr>) : string{
    return `${requestParametr.baseUrl ? requestParametr.baseUrl : this.baseUrl}/${requestParametr.Controller}${requestParametr.Action ? `/${requestParametr.Action}`: ""}` ;
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

  post<T>(requestParametr : Partial<RequestParametr> , body : Partial<T>) : Observable<T>{

    let url : string = "";

    if(requestParametr.fullEndPoint){
      url = requestParametr.fullEndPoint;
    }
    else{
      url = `${this.Url(requestParametr)}`;
    }

    return this.httpClient.post<T>(url , body, {headers : requestParametr.headers});
    
  }

  put<T>(requestParametr : Partial<RequestParametr> , body : Partial<T>) : Observable<T>{

    let url : string = "";

    if(requestParametr.fullEndPoint){
      url = requestParametr.fullEndPoint;
    }
    else{
      url = `${this.Url(requestParametr)}`;
    }

    return this.httpClient.put<T>(url , body, {headers : requestParametr.headers});
    
  }

  delete<T>(requestParametr : Partial<RequestParametr> , id : string) : Observable<T>{
    let url : string = "";

    if(requestParametr.fullEndPoint){
      url = requestParametr.fullEndPoint;
    }
    else{
      url = `${this.Url(requestParametr)}/${id}`;
    }

    return this.httpClient.delete<T>(url , {headers : requestParametr.headers});
  }

 
  
}

export class RequestParametr{

  Controller? : string;
  Action? : string;

  headers? : HttpHeaders;
  baseUrl? : string;
  fullEndPoint : string;

}
function body<T>(url: string, body: any, arg2: { Headers: HttpHeaders; }) {
  throw new Error('Function not implemented.');
}

