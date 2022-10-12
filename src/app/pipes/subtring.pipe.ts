import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'subtring'
})
export class SubtringPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return   value.substring(29)  ;
  }

}
