import { TurkishService } from './../turkish.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-language',
  templateUrl: './language.page.html',
  styleUrls: ['./language.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LanguagePage implements OnInit {
  constructor(
    private router: Router,
    private turkish: TurkishService,
    private loading: LoadingController
  ) {}

  ngOnInit() {}
  async presentLoading(msg) {
    const loading = await this.loading.create({
      spinner: null,
      duration: 5000,
      message: msg,
      translucent: true,
      cssClass: 'custom-class custom-loading'
    });
    return await loading.present();
  }
  move(lang) {
    this.turkish.setLanguage(lang);
    this.router.navigateByUrl('tabs');
  }
}
