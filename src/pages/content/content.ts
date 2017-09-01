import { Component } from '@angular/core';
import { SharedDataService } from '../../providers/shared-data-service';
import { SharedVars } from '../../providers/shared-vars';
import { TranslateService } from 'ng2-translate';
import { NavController, NavParams} from 'ionic-angular';


import { TabsPage } from '../tabs/tabs';
import { TranscriptPage } from '../transcript/transcript';

@Component({
  selector: 'page-content',
  templateUrl: 'content.html'
})
export class ContentPage {

  selectedItem: any;


  constructor(private sharedDataService: SharedDataService, private navCtrl: NavController, private navParams: NavParams, private translate: TranslateService, public sharedVars: SharedVars) {
    this.selectedItem = navParams.get('item');


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
