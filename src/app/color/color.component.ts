import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.scss']
})
export class ColorComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
  }
  colors: Array<any> = [
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
      { code: '#D3D3D3', name: 'grey'}
    ]

}
