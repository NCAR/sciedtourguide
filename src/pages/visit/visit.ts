import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
import { TranslateService } from 'ng2-translate';
import { SharedVars } from '../../providers/shared-vars';

@Component({
  selector: 'page-visit',
  templateUrl: 'visit.html'
})
export class VisitPage {
  selectedItem:any;
  pageTitle:any;
  constructor(private navCtrl: NavController, private navParams: NavParams, private translate:TranslateService, public sharedVars:SharedVars) {
    this.selectedItem = navParams.get('item');
    sharedVars.trackView('Visitor Information');


    switch(this.selectedItem) {
      case 'parking':
      case 'elevators':
      case 'restrooms':
        this.pageTitle = this.selectedItem;
        break;
      default:
        this.pageTitle = 'visitor';

    }

  }
  openPage(event, item) {
    this.navCtrl.push(VisitPage, {
      item: item
    });

  }
}
