import { Component } from '@angular/core';
import { SharedVars } from '../../providers/shared-vars';
import { IonicPage, NavController, NavParams, Events} from 'ionic-angular';

@IonicPage({
  name: 'ContentPage',
  priority:'high'
})
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
  openTranscript(event) {
    this.navCtrl.push('TranscriptPage', {
      item: this.selectedItem,
      parent: this.titlebarColor
    });

  }
  checkStatus() {
    if (typeof this.selectedItem == "object" && typeof this.selectedItem.id == "string" && typeof this.selectedItem.content.audio == "object") {
      return true;
    }
    return false;
  }
  /*loadMap(item) {
    this.events.publish('change-tab-map', 1, item);
  }
*/
}
