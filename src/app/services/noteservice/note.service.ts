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
  // getNotesbyId(){
  //   console.log(this.token);

  //   let header={
  //     headers: new HttpHeaders({
  //       'Content-type': 'application/json',
  //       'Authorization': this.token
  //     })
  //   }
  //   return this.http.getService('notes/getNotesDetail', true, header)
  // }
  updateNote(data:any){
    console.log(data);

    let header={
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': this.token
      })
    }
    return this.http.postService('notes/updateNotes', data, true, header)
  }
  deleteNote(data:any){
    console.log(this.token);

    let header={
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': this.token
      })
    }
    return this.http.postService('notes/trashNotes',data, true, header)
  }
  archiveNote(data:any){
    let header={
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.token
      })
    }
    return this.http.postService('notes/archiveNotes', data, true, header)
  }
  colorNote(data:any){
    let header={
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.token
      })
    }
    return this.http.postService('notes/changesColorNotes', data, true, header)
  }
  getArchiveNote(){
    let header={
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.token
      })
    }
    return this.http.getService('notes/getArchiveNotesList', true, header)
  }
  getDeletedNote(){
    let header={
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.token
      })
    }
    return this.http.getService('notes/getTrashNotesList', true, header)
  }
}
