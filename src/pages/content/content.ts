import { Component } from '@angular/core';
import { SharedVars } from '../../providers/shared-vars';
import { NavParams} from 'ionic-angular';

@Component({
  selector: 'page-content',
  templateUrl: 'content.html'
})
export class ContentPage {
  selectedItem: any;
  specialBtn:string;

  constructor(private navParams: NavParams,  public sharedVars: SharedVars) {
    this.selectedItem = this.navParams.get('item');
    this.specialBtn = 'audioBtn';
    sharedVars.trackView('Content - '+this.selectedItem.id);
  }
}
