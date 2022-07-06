import { Component, OnInit} from '@angular/core';
import { NoteService } from 'src/app/services/noteservice/note.service';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {
  trashnote:any;
  
  constructor(private note:NoteService) { }

  ngOnInit(): void {
    this.getDelNotes();
  }
  getDelNotes(){
    this.note.getDeletedNote().subscribe((res:any)=>{
      console.log(res);
      this.trashnote=res.data.data;
    })
  }
  receiveMessage(event:any){
    console.log(event);
    this.getDelNotes();
  }
  
  }



