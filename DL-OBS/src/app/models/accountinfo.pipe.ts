import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'formatAccountNumber'})
export class formatAccountNumberPipe implements PipeTransform {
  transform(input: string):string {
    return input.substr(0, 4) + "-" + input.substr(4, 8) + '-' + input.substr(8, 12) + "-" + input.substr(12, 16);
  }
}