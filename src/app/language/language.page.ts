import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-language',
  templateUrl: './language.page.html',
  styleUrls: ['./language.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LanguagePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  move(lang){
    console.log(lang);
    this.router.navigateByUrl('tabs');

  }

}
