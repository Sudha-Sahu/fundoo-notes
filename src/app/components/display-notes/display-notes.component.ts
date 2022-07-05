import { Component, OnInit, Input , Output, EventEmitter} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { NoteService } from 'src/app/services/noteservice/note.service';
import { UpdateComponent } from '../update/update.component';

@Component({
  selector: 'app-display-notes',
  templateUrl: './display-notes.component.html',
  styleUrls: ['./display-notes.component.scss']
})
export class DisplayNotesComponent implements OnInit {
  @Input() childMessage: any;
  noteId:any;
  @Output() messageEvent = new EventEmitter<any>();
  constructor(private dialog:MatDialog, private note:NoteService) { }

  ngOnInit(): void {

  }
  
  openDialog(note:any): void {
    const dialogRef = this.dialog.open(UpdateComponent, {
      width: '500px',
      panelClass: note.color,
      data: note
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      // console.log(this.note)
      console.log(this.childMessage)
    });
  }
  updateMessage(e:any) {
    console.log(e);
  }
  // clickIcon(id:any){
  //   this.noteId=id;
  //   console.log(this.noteId)
  // }
  
}

