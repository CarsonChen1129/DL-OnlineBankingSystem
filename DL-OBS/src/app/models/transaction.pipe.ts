import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'displayShortLabel'})
export class displayShortLabelPipe implements PipeTransform {
  transform(input: string): string {
    return 'To Acct #' + input.substr(input.length - 4);
  }
}