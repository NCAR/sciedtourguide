import { Component } from '@angular/core';
import { SharedVars } from '../../providers/shared-vars';
import { NavController, NavParams, Events} from 'ionic-angular';
import { TranscriptPage } from '../../pages/transcript/transcript';

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
console.log(this.selectedItem.content.audio[0].runningTime);
    this.titlebarColor = this.selectedParent;
    this.sharedVars.trackView('Content - '+this.selectedParent+':'+this.selectedItem.id);

    this.events.subscribe('reset-exhibits', (tab) => {
      this.navCtrl.popToRoot();
    });
  }
  openTranscript(event) {
    this.navCtrl.push(TranscriptPage, {
      item: this.selectedItem,
      parent: this.titlebarColor
    });

  }
  checkStatus() {
    if (typeof this.selectedItem == "object" && typeof this.selectedItem.id == "string" && (this.selectedItem.id == "library" || this.selectedItem.id == "supercomputer")) {
      return false;
    }
    return true;
  }
  /*loadMap(item) {
    this.events.publish('change-tab-map', 1, item);
  }
*/
}
