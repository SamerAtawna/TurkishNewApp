import { Component } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

currId: string;
  makeshow(item) {
    $("ion-list").addClass('z-depth-1-half ');
    this.currId = '#' + item + ' .menu';
    console.log(item);
      $(this.currId).slideToggle();
  }
  changeTextColor() {
    $('#myButton').text('white');
  }


}
