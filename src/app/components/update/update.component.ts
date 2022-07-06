import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { NoteService } from 'src/app/services/noteservice/note.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  title:any;
  desc:any;
  ncolor:any;
  // noteId:any
  @Output() messageEvent = new EventEmitter<any>();

  constructor(
    public dialogRef: MatDialogRef<UpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private note:NoteService,
    private snackbar:MatSnackBar
  ) {}

  
  ngOnInit(): void {
    console.log(this.data)
    this.title=this.data.title;
    this.desc=this.data.description;
    this.ncolor=this.data.color;
    console.log(this.title, this.desc, this.data.id)
  }
  
  onNoClick(): void {
    this.dialogRef.close();
    console.log(this.title, this.desc)
    let dataa={
      noteId:this.data.id,
      title:this.title,
      description:this.desc
    }
    this.note.updateNote(dataa).subscribe((notedata:any)=>{
      console.log(notedata);
      this.snackbar.open("Note updated successfully", "", { duration: 3000 });
    })
  }
  updateMessage(e:any) {
    console.log(e);
    this.ncolor=e;
    // this.messageEvent.emit(e)
  }

}
