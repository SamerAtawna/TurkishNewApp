import { TurkishService } from './../turkish.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-categ-details',
  templateUrl: './categ-details.page.html',
  styleUrls: ['./categ-details.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CategDetailsPage implements OnInit {
  categ;
  menu;
  lng;
  constructor(
    private turkish: TurkishService,
    private loading: LoadingController
  ) {}

  ngOnInit() {
    this.presentLoading('מעדכן תפריט').then(async () => {
      await this.getCateg()
        .then(d => {
          this.turkish.getMenuDetails(d).subscribe(m => {
            console.log(m);
            this.menu = m;
          });
        })
        .then(() => {
          this.loading.dismiss();
        });
    });
  }
  getCateg() {
    return new Promise((res, rej) => {
      this.turkish.selectedCateg.subscribe(cat => {
        this.categ = cat;
        this.turkish.lang.subscribe(lang=>{
          this.lng = lang;
        })
        res(cat);
      });
    });
  }

  async presentLoading(msg) {
    const loading = await this.loading.create({
      message: msg,
      translucent: true,
      cssClass: 'custom-class custom-loading'
    });
    return await loading.present();
  }
}
