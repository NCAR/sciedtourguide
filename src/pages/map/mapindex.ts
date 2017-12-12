// from: https://github.com/p-sebastian/ionic2-pinchzoom
import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { SharedVars } from '../../providers/shared-vars';
import { MapPage } from './map';
import { MapAccessPage } from './mapaccess';

@Component({
  selector: 'page-map-index',
  templateUrl: 'mapindex.html'
})
export class MapIndexPage {



    constructor(public sharedVars:SharedVars, private navCtrl: NavController) {

      sharedVars.trackView('Map Index');
    }
    openPage(event, item) {
      switch (item ){
        case 'mapreg':
          this.navCtrl.push(MapPage);
          break;
        case 'mapaccess':
          this.navCtrl.push(MapAccessPage);
          break;
      }
    }

}
