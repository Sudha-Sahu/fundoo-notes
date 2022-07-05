import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/noteservice/note.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {
  archnote:any

  constructor(private note:NoteService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.note.getArchiveNote().subscribe((res:any)=>{
      this.archnote=res.data.data
      console.log(this.archnote)
    })
  }

}
