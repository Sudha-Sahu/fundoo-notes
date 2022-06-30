import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  BaseURL= environment.baseUrl;

  constructor(private httpclient:HttpClient) { }

  postService(url:string, reqdata:any, token:boolean=false, httpOptions:any){

    console.log(reqdata);
    return this.httpclient.post(this.BaseURL+url, reqdata, token && httpOptions)
  }

  getService(url:string, token:boolean=false, httpOptions:any){
    return this.httpclient.get(this.BaseURL+url, token && httpOptions)
  }

  putService(){}

  
  deleteService(){}
}
