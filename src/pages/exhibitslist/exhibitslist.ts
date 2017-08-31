import { Component } from '@angular/core';

import { ContentPage } from '../content/content';

import { SharedDataService } from '../../providers/shared-data-service';
import { SharedVars } from '../../providers/shared-vars';
import { ViewController, NavController, NavParams} from 'ionic-angular';
import { TranslateService } from 'ng2-translate';




@Component({
  selector: 'page-exhibitslist',
  templateUrl: 'exhibitslist.html'
})
export class ExhibitsListPage {
  menu_list:any = [];
  title = 'apptitle';
  constructor(private sharedDataService:SharedDataService, private viewCtrl: ViewController, private navCtrl: NavController, private navParams: NavParams, private translate:TranslateService, public sharedVars:SharedVars) {

    sharedVars.trackView('Cloud List');
  }

  /**
  *
  **/
ionViewDidLoad(){
  let dataPromise = this.sharedDataService.load();

  dataPromise.then(data => {
      this.menu_list = data;
  });

  }

  openPage(event, item) {
        this.navCtrl.push(ContentPage, {
          item: item
        });

  }

}
