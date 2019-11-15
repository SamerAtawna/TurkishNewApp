import { Component } from '@angular/core';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator/ngx';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
   options: LaunchNavigatorOptions = {
   
  }
  constructor(private launchNavigator: LaunchNavigator){ }
  title = 'My first AGM project';
  lat = 31.305568;
  lng = 34.923114;

  navigate(){
    this.launchNavigator.navigate([31.305552, 34.922627], this.options)
  .then(
    success => console.log('Launched navigator'),
    error => console.log('Error launching navigator', error)
  );
  }
}
