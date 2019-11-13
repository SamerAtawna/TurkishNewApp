import { LoadingController } from "@ionic/angular";
import { TurkishService } from "./../turkish.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-tab4",
  templateUrl: "./tab4.page.html",
  styleUrls: ["./tab4.page.scss"]
})
export class Tab4Page implements OnInit {
  feedbacks;
  name;
  post;
  constructor(
    private turkish: TurkishService,
    private loading: LoadingController
  ) {}

  ngOnInit() {
    this.getFeedbacks();
  }

  getFeedbacks() {
    this.presentLoading("טוען תגובות").then(async () => {
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
      cssClass: "custom-class custom-loading"
    });
    return await loading.present();
  }

  postFeedBack() {
    this.presentLoading("שולח").then(async () => {
      console.log(this.name, this.post);
      await this.turkish.postFeedBack(this.post, this.name).subscribe(s=>{
        console.log(s);
      });
       this.loading.dismiss();
      this.getFeedbacks();
    });
  }
}
