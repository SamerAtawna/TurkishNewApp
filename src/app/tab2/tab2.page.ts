import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  title: string = 'My first AGM project';
  lat: number = 31.305568;
  lng: number = 34.923114;
}
