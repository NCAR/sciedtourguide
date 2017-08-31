import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { TranslateService } from 'ng2-translate';
import { SharedVars } from '../../providers/shared-vars';

@Component({
  selector: 'page-visit',
  templateUrl: 'visit.html'
})
export class VisitPage {
  constructor(private navCtrl: NavController, private translate:TranslateService,public sharedVars:SharedVars) {
    sharedVars.trackView('Terms of Use');

  }

}
