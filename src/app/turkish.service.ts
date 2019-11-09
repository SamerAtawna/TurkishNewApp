import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TurkishService {
  lang = new Subject<any>();
  constructor() {}

  setLanguage(lang){
    this.lang.next(lang);
  }
}
