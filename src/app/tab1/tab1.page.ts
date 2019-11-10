import { TurkishService } from "./../turkish.service";
import { Component, OnInit, NgZone } from "@angular/core";
import * as $ from "jquery";
import { LoadingController } from "@ionic/angular";

@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"]
})
export class Tab1Page implements OnInit {
  currId: string;
  categories;
  currLang;
  constructor(
    private loading: LoadingController,
    private turkish: TurkishService,
    private zone: NgZone
  ) {}

  makeshow(item) {
    $("ion-list").addClass("z-depth-1-half ");
    this.currId = "#" + item + " .menu";
    console.log(item);
    $(this.currId).slideToggle();
  }
  changeTextColor() {
    $("#myButton").text("white");
  }

  async presentLoading(msg) {
    const loading = await this.loading.create({
      duration: 5000,
      message: msg,
      translucent: true,
      cssClass: "custom-class custom-loading"
    });
    return await loading.present();
  }

  ngOnInit() {
    this.getCategories();
    console.log("currLang", this.currLang);
  }

  getCategories() {
    this.presentLoading("מעדכן תפריט")
      .then(async () => {
        await this.turkish.getMenu().subscribe(d => {
          console.log("getting ctegories");
          console.log(d);
          this.categories = d;
        });
      })
      .then(() => {
        console.log("setting lang");
        this.turkish.lang.subscribe(lng => {
          console.log("lng", lng);

          this.currLang = lng;
        });
      })
      .then(() => {
        console.log("dismissing");
        this.loading.dismiss();
      });
  }
}
