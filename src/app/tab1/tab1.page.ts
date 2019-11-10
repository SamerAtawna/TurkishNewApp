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
      message: msg,
      translucent: true,
      cssClass: "custom-class custom-loading"
    });
    return await loading.present();
  }

  ngOnInit() {
    this.getCategories();
  }
  getLanguage() {
    console.log("1 - getting lang");
    return new Promise((res, rej) => {
      this.currLang = this.turkish.selectedLang;
      res();
    });
  }

  getCategories() {
    this.presentLoading("מעדכן תפריט")
      .then(async () => {
        await this.getLanguage().then(s => {
          console.log("currLang: ", s);
          this.turkish.getMenu().subscribe(d => {
            console.log("2 - getting ctegories");
            console.log(d);
            this.categories = d;
          });
        });
      })
      .then(() => {
        console.log("3 - dismissing");
        this.turkish.setLanguage(this.currLang);
        this.loading.dismiss();
      });
  }
}
