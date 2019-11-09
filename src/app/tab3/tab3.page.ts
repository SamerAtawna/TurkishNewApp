import { Component } from '@angular/core';
import { CallNumber } from '@ionic-native/call-number/ngx';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})

export class Tab3Page {
  constructor(private callNumber: CallNumber) {

  }
  orderNow() {
    this.callNumber.callNumber('18001010101', true)
    .then(res => console.log('Launched dialer!', res))
    .catch(err => console.log('Error launching dialer', err));
  }
}
