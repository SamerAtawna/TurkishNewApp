import { Injectable } from '@angular/core';
import { Subject, Observable, BehaviorSubject } from 'rxjs';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TurkishService {
  apiLink = 'http://localhost:3000';
  selectedLang = '';
  lang = new BehaviorSubject<any>(this.selectedLang);

  constructor(private http: HttpClient) {}

  setLanguage(lang) {
    this.lang.next(lang);
    this.selectedLang = lang;
  }

  getMenu(): Observable<any> {
    return this.http.get(`${this.apiLink}/turkishcateg?lang=${this.lang}`);
  }
}
