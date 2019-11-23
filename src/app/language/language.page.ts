import { TurkishService } from './../turkish.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { GoogleAnalytics } from '@ionic-native/google-analytics/ngx';

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
    private loading: LoadingController,
    private ga: GoogleAnalytics,
    private platform: Platform
  ) {}

  ngOnInit() {
    this.platform.ready().then(() => {
      this.ga
        .startTrackerWithId('UA-153139039-1')
        .then(() => {
          console.log('Google analytics is ready now');
          this.ga.trackView('Language Selection');
          // Tracker is ready
          // You can now track pages or set additional information such as AppVersion or UserId
        })
        .catch(e => console.log('Error starting GoogleAnalytics', e));
    });
  }
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
    console.log('lang: ', lang);
    this.turkish.setLanguage(lang);
    this.router.navigateByUrl('tabs');
  }
}
