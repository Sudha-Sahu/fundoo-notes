import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-createnote',
  templateUrl: './createnote.component.html',
  styleUrls: ['./createnote.component.scss']
})
export class CreatenoteComponent implements OnInit {
  showNote=false;
  showIcon=true;

  constructor() { }

  ngOnInit(): void {
  }
  show(){
    this.showNote=true
    this.showIcon=false
  }
  close(){
    this.showNote=false
    this.showIcon=true
  }

}
