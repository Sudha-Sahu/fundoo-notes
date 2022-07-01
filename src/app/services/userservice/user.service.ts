import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpservice/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  token:any;

  constructor(private http:HttpService) { 
    
  }

  register(data:any){
    console.log(data);

    let header={
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      })
    }
    return this.http.postService('user/userSignUp', data, false, header)
  }

  login(data:any){
    console.log("login details api", data);

    let header={
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Accept': 'application/json'
      })
    }
    return this.http.postService('user/login', data, false, header)
  }
  forget(data:any){
    console.log("forget details api", data);

    let header={
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Accept': 'application/json'
      })
    }
    return this.http.postService('user/reset', data, false, header)
  }
  encode(data: any) {
    const formBody = [];
    for (const property in data) {
      const encodedKey = encodeURIComponent(property);
      const encodedValue = encodeURIComponent(data[property]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    return formBody.join('&');
  }

  resetpass(data:any, token:any){
    console.log("reset details", data, token);

    let header={
      headers: new HttpHeaders({
        'Content-type': 'application/x-www-form-urlencoded',
        'Authorization': token
      })
    }
    return this.http.postService('user/reset-password', this.encode(data), true, header)
  }
}
