import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NoteService } from 'src/app/services/noteservice/note.service';
import { ActivatedRoute } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  @Input() childmessage: any;
  color_array:any=[];
  param:any;
  @Output() messageEvent = new EventEmitter<any>();

  constructor(private note:NoteService, private route: ActivatedRoute, private snackbar:MatSnackBar) { }

  ngOnInit(): void {
    this.param=this.route.snapshot.url[0].path;
    // console.log(this.param)
  }

  delNote(){
    console.log(this.childmessage)
    let req = {
        noteIdList: [this.childmessage],
        isDeleted: true,
    }
    this.note.deleteNote(req).subscribe((result:any)=>{
    console.log(result);
    this.messageEvent.emit(result);
    this.snackbar.open("Note trashed", "", { duration: 3000 });
  })
  }
  archNote(){
    let req={
      noteIdList: [this.childmessage],
      isArchived: true,
    }
    this.note.archiveNote(req).subscribe((result:any)=>{
      console.log(result);
      this.messageEvent.emit(result);
      this.snackbar.open("Note archived", "", { duration: 3000 });
    })
  }
  restoreNote(){
    console.log(this.childmessage)
    let req = {
        noteIdList: [this.childmessage],
        isDeleted: false,
    }
    this.note.deleteNote(req).subscribe((result:any)=>{
    console.log(result);
    this.messageEvent.emit(result);
    this.snackbar.open("Note restored from trash", "", { duration: 3000 });
  })
  }
  unArchNote(){
    let req={
      noteIdList: [this.childmessage],
      isArchived: false,
    }
    this.note.archiveNote(req).subscribe((result:any)=>{
      console.log(result);
      this.messageEvent.emit(result);
      this.snackbar.open("Note unarchived", "", { duration: 3000 });
    })
  }
  delForeverNote(){
    console.log(this.childmessage)
    let req = {
        noteIdList: [this.childmessage],
        isDeleted: true,
    }
    this.note.deleteForeverNote(req).subscribe((result:any)=>{
    console.log(result);
    this.messageEvent.emit(result);
    this.snackbar.open("Note deleted successfully", "", { duration: 3000 });

  })
  }
  colorPalette(){
    this.color_array=[
      { code: '#ffffff', name: 'white' },
      { code: '#FF6347', name: 'red' },
      { code: '#FF4500', name: 'orange' },
      { code: '#FFFF00', name: 'yellow' },
      { code: '#ADFF2F', name: 'green' },
      { code: '#43C6DB', name: 'teal' },
      { code: '#728FCE', name: 'Blue' },
      { code: '#2B65EC', name: 'darkblue' },
      { code: '#D16587', name: 'purple' },
      { code: '#F9A7B0', name: 'pink' },
      { code: '#E2A76F', name: 'brown' },
      { code: '#D3D3D3', name: 'grey'}]
    return this.color_array
  }
    // colors: Array<any> = [
    //   { code: '#ffffff', name: 'white' },
    //   { code: '#FF6347', name: 'red' },
    //   { code: '#FF4500', name: 'orange' },
    //   { code: '#FFFF00', name: 'yellow' },
    //   { code: '#ADFF2F', name: 'green' },
    //   { code: '#43C6DB', name: 'teal' },
    //   { code: '#728FCE', name: 'Blue' },
    //   { code: '#2B65EC', name: 'darkblue' },
    //   { code: '#D16587', name: 'purple' },
    //   { code: '#F9A7B0', name: 'pink' },
    //   { code: '#E2A76F', name: 'brown' },
    //   { code: '#D3D3D3', name: 'grey'}
    // ]
    color_note(data:any){
      console.log(data)
      let req={
        noteIdList: [this.childmessage],
        color: data
      }
      // this.param=this.route.snapshot.params;
      // console.log(this.param)
      this.note.colorNote(req).subscribe((result:any)=>{
        console.log(result);
        this.messageEvent.emit(result);
        this.snackbar.open("Note color changed", "", { duration: 3000 });
      })
    }
}
 