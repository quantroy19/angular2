import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gender',
})
export class GenderPipe implements PipeTransform {
  transform(value: any, ...args: any): any {
    let result = '';
    if (value == 1) {
      result = 'Nam';
    } else if (value == 2) {
      result = 'Nữ';
    } else {
      result = 'Khác';
    }
    if (args == 'lower') {
      return result.toLowerCase();
    }
    return result.toUpperCase();
  }
}
