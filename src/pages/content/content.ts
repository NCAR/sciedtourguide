import { Component } from '@angular/core';
import { SharedDataService } from '../../providers/shared-data-service';
import { SharedVars } from '../../providers/shared-vars';
import { NavController, NavParams} from 'ionic-angular';


import { TabsPage } from '../tabs/tabs';
import { TranscriptPage } from '../transcript/transcript';

@Component({
  selector: 'page-content',
  templateUrl: 'content.html'
})
export class ContentPage {

  selectedItem: any;
  specialBtn:string;


  constructor(private sharedDataService: SharedDataService, private navCtrl: NavController, private navParams: NavParams,  public sharedVars: SharedVars) {
    this.selectedItem = navParams.get('item');
    this.specialBtn = 'audioBtn';

  }
  goHome() {
    this.navCtrl.setRoot(TabsPage);
  }


  openTranscript(event, item) {
    this.navCtrl.push(TranscriptPage, {
      item: item
    });

  }

}
