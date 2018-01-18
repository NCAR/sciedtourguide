import { Component } from '@angular/core';
import { SharedVars } from '../../providers/shared-vars';
import { NavController, NavParams, Events} from 'ionic-angular';

@Component({
  selector: 'page-content',
  templateUrl: 'content.html'
})
export class ContentPage {
  selectedItem: any;
  specialBtn:string;

  constructor(private navParams: NavParams, private navCtrl: NavController,  public sharedVars: SharedVars, private events: Events) {
    this.selectedItem = this.navParams.get('item');
    this.specialBtn = 'audioBtn';
    sharedVars.trackView('Content - '+this.selectedItem.id);

    this.events.subscribe('reset-exhibits', (tab) => {
      this.navCtrl.popToRoot();
    });
  }


}
