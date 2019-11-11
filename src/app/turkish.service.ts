import { Injectable } from '@angular/core';
import { Subject, Observable, BehaviorSubject } from 'rxjs';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TurkishService {
  apiLink = 'http://localhost:3000';
  selectedLang = '';
  selectedCat = 0;
  lang = new BehaviorSubject<any>(this.selectedLang);
  selectedCateg = new BehaviorSubject<any>(this.selectedCat);

  constructor(private http: HttpClient) {}

  setLanguage(lang) {
    this.lang.next(lang);
    this.selectedLang = lang;
  }

  setCateg(cat) {
    this.selectedCateg.next(cat);
  }

  getMenu(): Observable<any> {
    return this.http.get(`${this.apiLink}/turkishcateg?lang=${this.lang}`);
  }
}
