import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NoteService } from 'src/app/services/noteservice/note.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-createnote',
  templateUrl: './createnote.component.html',
  styleUrls: ['./createnote.component.scss']
})
export class CreatenoteComponent implements OnInit {
  showNote=false;
  showIcon=true;
  title:any;
  desc:any;

  constructor(private note:NoteService, private snackbar:MatSnackBar) { }
  @Output() messageEvent = new EventEmitter<string>();
  ngOnInit(): void {
  }
  
  show(){
    this.showNote=true
    this.showIcon=false
  }
  close(){
    this.showNote=false
    this.showIcon=true
    console.log(this.title, this.desc)
    let data={
      title:this.title,
      description:this.desc
    }
    this.note.addNotes(data).subscribe((notedata:any)=>{
      console.log(notedata);
      this.snackbar.open("Note created successfully", "", { duration: 3000 });
      this.messageEvent.emit(notedata);
    })
    
  }

}
