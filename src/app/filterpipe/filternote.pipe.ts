import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filternote'
})
export class FilternotePipe implements PipeTransform {

  transform(value: any, filterString?: string){
    // if (value.length === 0 || filterString === ''){
    //   return value;
    // }
    if(!filterString ){
      return value;
    }else{
      filterString=filterString.toLocaleLowerCase();
    }
    const fnote = [];
    for (const note of value){
      if (note['title'].includes(filterString) || note['description'].includes(filterString)){
        fnote.push(note);
      }
    }
    return fnote;
  }

}
