// from: https://github.com/p-sebastian/ionic2-pinchzoom
import { Component } from '@angular/core';
import { NavController, NavParams, Events} from 'ionic-angular';
import { SharedVars } from '../../providers/shared-vars';
import { MapPage } from './map';
import { MapAccessPage } from './mapaccess';

@Component({
  selector: 'page-map-index',
  templateUrl: 'mapindex.html'
})
export class MapIndexPage {

  selectedItem: any = '';

  constructor(public sharedVars: SharedVars, private navParams: NavParams, private navCtrl: NavController, private events: Events) {
    this.selectedItem = this.navParams.get('item');
    this.events.subscribe('change-tab-map', (tab, item) => {
      this.selectedItem = item;
      switch (this.selectedItem) {
        case 'access':
          //load the accessible map
          this.navCtrl.push(MapAccessPage);
          break;
      }
    });


    sharedVars.trackView('Map - Index');
  }
  openPage(event, item) {
    switch (item) {
      case 'mapreg':
        this.navCtrl.push(MapPage);
        break;
      case 'mapaccess':
        this.navCtrl.push(MapAccessPage);
        break;
    }
  }

}
