import { Component, OnInit, Input } from '@angular/core';
import { NoteService } from 'src/app/services/noteservice/note.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  @Input() childmessage: any;
  color_array:any=[];
  constructor(private note:NoteService) { }

  ngOnInit(): void {
  }

  delNote(){
    console.log(this.childmessage)
    let req = {
        noteIdList: [this.childmessage],
        isDeleted: true,
    }
    this.note.deleteNote(req).subscribe((result:any)=>{
    console.log(result);

  })
  }
  archNote(){
    let req={
      noteIdList: [this.childmessage],
      isArchived: true,
    }
    this.note.archiveNote(req).subscribe((result:any)=>{
      console.log(result)
    })
  }
  colorPalette(){
    this.color_array=[
      {name:"pink", id:1},
      {name:"dd", id:2},
      {name:"ss", id:3},
      {name:"ss", id:4},
      {name:"ss", id:5},
      {name:"ss", id:6},
      {name:"ss", id:7},
      {name:"ss", id:8},
      {name:"ss", id:9},
      {name:"ss", id:10},
      {name:"ss", id:11},
      {name:"ss", id:12}

    ]
    return this.color_array
  }
}
 