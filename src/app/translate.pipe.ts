import { TurkishService } from './turkish.service';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'translate'
})
export class TranslatePipe implements PipeTransform {
  constructor(public trans: TurkishService) {}
  transform(value: any, args?: any): any {
    console.log(value);
    if (this.trans.selectedLang == 'ar') {
      return value.NameAr;
    }
    return value;
  }
}
