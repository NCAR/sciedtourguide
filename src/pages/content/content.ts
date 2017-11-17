import { Component } from '@angular/core';
import { SharedVars } from '../../providers/shared-vars';
import { NavController, NavParams} from 'ionic-angular';

@Component({
  selector: 'page-content',
  templateUrl: 'content.html'
})
export class ContentPage {
  selectedItem: any;
  specialBtn:string;

  constructor(private navParams: NavParams, private navCtrl: NavController,  public sharedVars: SharedVars) {
    this.selectedItem = this.navParams.get('item');
    this.specialBtn = 'audioBtn';
    sharedVars.trackView('Content - '+this.selectedItem.id);
  }

  ionViewWillLeave() {
    // need to se
   this.navCtrl.popToRoot();
}
}
