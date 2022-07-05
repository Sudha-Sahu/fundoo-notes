import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/noteservice/note.service';

@Component({
  selector: 'app-get-all-notes',
  templateUrl: './get-all-notes.component.html',
  styleUrls: ['./get-all-notes.component.scss']
})
export class GetAllNotesComponent implements OnInit {
  noteArray:any;
  filternote:any;

  constructor(private note:NoteService) { }

  ngOnInit(): void {
    this.getAllNotes();
  }

  getAllNotes(){
    this.note.getNotes().subscribe((allnote:any)=>{
      console.log(allnote.data.data);
      this.noteArray=allnote.data.data;
      this.filternote=this.noteArray.filter((note:any)=>{
        return note.isDeleted===false && note.isArchived===false
      })
    })
  }
  receiveMessage(event:any){
    console.log(event);
    this.getAllNotes();
  }
  // updateMessage(e:any) {
  //   console.log(e);
  //   this.getAllNotes();
  // }
  
}
