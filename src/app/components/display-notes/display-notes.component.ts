import { Component, OnInit, Input , Output, EventEmitter} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { NoteService } from 'src/app/services/noteservice/note.service';
import { UpdateComponent } from '../update/update.component';
import { DataService } from 'src/app/services/dataservice/data.service';


@Component({
  selector: 'app-display-notes',
  templateUrl: './display-notes.component.html',
  styleUrls: ['./display-notes.component.scss']
})
export class DisplayNotesComponent implements OnInit {
  @Input() childMessage: any;
  noteId:any;
  @Output() messageEvent = new EventEmitter<any>();
  filterString:string='';
  isview:boolean=true;
  
  constructor(private dialog:MatDialog, private note:NoteService, private data: DataService) { }

  ngOnInit(): void {
    this.data.currentMessage.subscribe((message:any) => {
      this.filterString = message;
      console.log(this.filterString);
    })
    this.data.currentView.subscribe((nview:any) => {
      this.isview = nview;
      console.log(this.isview);
    })
  }
  
  openDialog(note:any): void {
    const dialogRef = this.dialog.open(UpdateComponent, {
      panelClass: 'my-custom-dialog-class', 
      // width: '500px',
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
    this.messageEvent.emit(e)
  }
  ngOnDestroy() {
    // this.subscription.unsubscribe();
  }
  





  // clickIcon(id:any){
  //   this.noteId=id;
  //   console.log(this.noteId)
  // }
  
}

