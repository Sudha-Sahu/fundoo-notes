import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/noteservice/note.service';

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

  constructor(private note:NoteService) { }

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
    this.note.addNotes(data).subscribe((notedata:any)=>{console.log(notedata);})
  }

}
