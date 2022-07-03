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
      this.note.colorNote(req).subscribe((result:any)=>{
        console.log(result)
      })
    }
}
 