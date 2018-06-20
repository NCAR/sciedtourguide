import { Component } from '@angular/core';
import { SharedVars } from '../../providers/shared-vars';
import { NavController, NavParams, Events} from 'ionic-angular';

@Component({
  selector: 'page-content',
  templateUrl: 'content.html'
})
export class ContentPage {
  selectedItem: any;
  selectedParent:any;
  specialBtn:string;
  titlebarColor:string;

  constructor(private navParams: NavParams, private navCtrl: NavController, public sharedVars: SharedVars, private events: Events) {
    this.selectedItem = this.navParams.get('item');
    this.selectedParent = this.navParams.get('parent');
    this.specialBtn = 'audioBtn';

    this.titlebarColor = this.selectedParent;
    this.sharedVars.trackView('Content - '+this.selectedParent+':'+this.selectedItem.id);

    this.events.subscribe('reset-exhibits', (tab) => {
      this.navCtrl.popToRoot();
    });
  }

  /*loadMap(item) {
    this.events.publish('change-tab-map', 1, item);
  }
*/
}
