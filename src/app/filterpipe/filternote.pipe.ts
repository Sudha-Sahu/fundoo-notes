import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filternote'
})
export class FilternotePipe implements PipeTransform {

  transform(value: any, filterString: string){
    if (value.length === 0 || filterString === ''){
      return value;
    }
    const fnote = [];
    for (const note of value){
      if (note.title === filterString){
        fnote.push(note);
      }
    }
    return fnote;
  }

}
