import { Component, NgZone } from "@angular/core";
import { CallNumber } from "@ionic-native/call-number/ngx";
import { TurkishService } from "../turkish.service";

@Component({
  selector: "app-tab3",
  templateUrl: "tab3.page.html",
  styleUrls: ["tab3.page.scss"]
})
export class Tab3Page {
  callString;
  phone;
  constructor(
    private callNumber: CallNumber,
    private turkish: TurkishService,
    private zone: NgZone
  ) {}
  ionViewWillEnter() {
    console.log("will enter");

    this.turkish.lang.subscribe(lng => {
      console.log(lng);
      lng == "he"
        ? (this.callString = `חייג עכשיו להזמנה!`)
        : this.callString =  'اتصل الان للطلب';
    });
    console.log("callstring ", this.callString);
  }

  orderNow() {
    this.callNumber
      .callNumber("0545265178", true)
      .then(res => console.log("Launched dialer!", res))
      .catch(err => console.log("Error launching dialer", err));
  }
}
