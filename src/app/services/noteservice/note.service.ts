import { Injectable } from '@angular/core';
import { HttpService } from '../httpservice/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  token:any;

  constructor(private http:HttpService) {
    this.token=localStorage.getItem('token')
   }

  addNotes(data:any){
    console.log(data);

    let header={
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': this.token
      })
    }
    return this.http.postService('notes/addNotes', data, true, header)
  }
  getNotes(){
    console.log(this.token);

    let header={
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': this.token
      })
    }
    return this.http.getService('notes/getNotesList', true, header)
  }
}
