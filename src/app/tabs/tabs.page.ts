import { Component } from '@angular/core';
import { TurkishService } from '../turkish.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  lang;
  subscriber;
  translate = {
    he: {
      menu: 'תפריט',
      address: 'כתובת',
      order: 'הזמנה',
      feedback: 'תגובות'
    },
    ar: {
      menu: 'القائمة',
      address: 'العنوان',
      order: 'الطلب',
      feedback: 'التعقيبات'
    }
  };

  langObj;

  constructor(private turkish: TurkishService) {}

  ionViewWillEnter() {
  this.turkish.lang.subscribe(lng => {
      this.lang = lng;
      if (lng === 'he') {
        console.log('slected is hebrew');
        this.langObj = this.translate.he;
      } else {
        console.log('--selected is not hebrew');
        console.log(this.translate.ar);
        this.langObj = this.translate.ar;
      }
      console.log('lngIbg', this.langObj);
      console.log('language for  menuuuu', lng);
    });
  }
  ionViewWillLeave() {

  }
}
