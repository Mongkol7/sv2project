import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'khmerCurrency'
})
export class KhmerCurrencyPipe implements PipeTransform {

  transform(value: string, case_:string): number {
    if(case_ == 'in'){
      return (Math.ceil(parseFloat(value) / 100)) * 100
    }else{
      return (Math.floor(parseFloat(value) / 100)) * 100
    }

  }

}
