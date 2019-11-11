import { TurkishService } from './../turkish.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-categ-details',
  templateUrl: './categ-details.page.html',
  styleUrls: ['./categ-details.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CategDetailsPage implements OnInit {
  categ;
  constructor(private turkish: TurkishService) {}

  ngOnInit() {
    this.turkish.selectedCateg.subscribe(cat => {
      this.categ = cat;
    });
  }
}
