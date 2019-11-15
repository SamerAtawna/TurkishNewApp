import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import { AgmCoreModule } from '@agm/core';
import { LaunchNavigator } from '@ionic-native/launch-navigator/ngx';


@NgModule({
  imports: [
    
    IonicModule,
    CommonModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCbFIFsUmkqOUQtNTrJqrRRsw-DtmOpjEg'
    }),
    RouterModule.forChild([{ path: '', component: Tab2Page }])
  ],
  declarations: [Tab2Page],
  providers: [LaunchNavigator]
})
export class Tab2PageModule {}
