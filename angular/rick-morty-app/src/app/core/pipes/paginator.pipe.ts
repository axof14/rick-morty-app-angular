import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'paginator'
})
export class PaginatorPipe implements PipeTransform {

  transform(list: any, page: number = 0) {

  
    return list.slice(page,page+5)
  }
}
