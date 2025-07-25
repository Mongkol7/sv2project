import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dollarToKhmer'
})
export class DollarToKhmerPipe implements PipeTransform {

  transform(value: string): number {
      return (parseFloat(value) * 4100)
  }

}
