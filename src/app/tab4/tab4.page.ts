import { LoadingController } from '@ionic/angular';
import { TurkishService } from './../turkish.service';
import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss']
})
export class Tab4Page implements OnInit {
  feedbacks;
  name = '';
  post = '';
  constructor(
    private turkish: TurkishService,
    private loading: LoadingController,
    public toastController: ToastController
  ) {}

  ngOnInit() {
    this.getFeedbacks();
  }
  async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

  getFeedbacks() {
    this.presentLoading('טוען תגובות').then(async () => {
      await this.turkish.getFeedBacks().subscribe(s => {
        this.feedbacks = s;
        this.loading.dismiss();
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
  doPost() {
    const time = new Date();
    const date = `${time.getMonth() +
      1}/${time.getDate()}/${time.getFullYear()}`;
    console.log('DATE', date);
    this.presentLoading('שולח').then(async () => {
      console.log(this.name, this.post);
      await this.turkish.postFeedBack(this.post, this.name).subscribe(s => {
        console.log(s);
        localStorage.setItem('postTime', date);
      });
      this.loading.dismiss();
      this.getFeedbacks();
    });
  }
  postFeedBack() {
    console.log(this.name, this.post);
    if (this.name === '' && this.post === '') {
      this.turkish.lang.subscribe(lng => {
        lng == 'he'
          ? this.presentToast('יש למלא לפחות שדה אחד')
          : this.presentToast('يجب تسجيل حقل واحد على الاقل');
      });
      return
    }
    const time = new Date();
    const date = `${time.getMonth() +
      1}/${time.getDate()}/${time.getFullYear()}`;
    if (!localStorage.getItem('postTime')) {
      console.log('no data -- posting...');
      this.doPost();
    } else {
      console.log('found local data...');
      const storedDate = localStorage.getItem('postTime');
      console.log('time from localStorage', storedDate);
      if (date == storedDate) {
        console.log('same date!......');
        console.log('cant post');
        this.turkish.lang.subscribe(lng => {
          lng == 'he'
            ? this.presentToast('צריך שיעבור 24 שעות על תגובתכם האחרונה')
            : this.presentToast('يجب ان يمر 24 ساعه على تعقيبك الاخير');
        });
      } else {
        console.log('different date...');
        this.doPost();
      }
    }
  }
}
