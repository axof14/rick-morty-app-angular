import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterCharacters'
})
export class FilterCharactersPipe implements PipeTransform {

  transform(list: any, filter: string = '') {
    const lowerCaseFilter: string = filter?.toLowerCase()?.trim();

    const filteredList: any = list.filter((el:any) => {
      return el.name.toLowerCase().includes(lowerCaseFilter);
    });

    return filteredList
  }
}
