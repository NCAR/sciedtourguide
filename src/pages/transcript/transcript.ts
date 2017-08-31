import { Component } from '@angular/core';
import { SharedDataService } from '../../providers/shared-data-service';
import { SharedVars } from '../../providers/shared-vars';
import { ViewController, NavController, NavParams} from 'ionic-angular';
import { TranslateService } from 'ng2-translate';
@Component({
  selector: 'page-transcript',
  templateUrl: 'transcript.html'
})
export class TranscriptPage {
selectedItem:any;

  constructor(private sharedDataService:SharedDataService, private viewCtrl: ViewController, private navCtrl: NavController, private navParams: NavParams, private translate:TranslateService, public sharedVars:SharedVars) {
    this.selectedItem = navParams.get('item');

    console.log(this.selectedItem);
    sharedVars.trackView('Cloud Transcript');
  }

}
