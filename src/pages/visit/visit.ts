import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { TranslateService } from 'ng2-translate';
import { SharedVars } from '../../providers/shared-vars';

@Component({
  selector: 'page-visit',
  templateUrl: 'visit.html'
})
export class VisitPage {
  bkgImg:String = 'assets/images/ncar.png';
  pageTitle:any;
  show_accessibleParking = false;
  show_accessibleElevators = false;
  show_accessibleRestrooms = false;
  icon_parking = 'ios-arrow-forward';
  icon_elevators = 'ios-arrow-forward';
  icon_restrooms = 'ios-arrow-forward';

  constructor(private navCtrl: NavController, private translate:TranslateService, public sharedVars:SharedVars) {
    this.pageTitle = 'visitor';
    sharedVars.trackView('Visitor Information');
  }
  toggleAccessibleInformation(value){
    switch(value){
      case 'parking':
        if(this.show_accessibleParking == true){
          this.show_accessibleParking = false;
          this.icon_parking = 'ios-arrow-forward';
        } else {
          this.show_accessibleParking = true;
          this.icon_parking = 'ios-arrow-down';
        }

        break;

      case 'elevators':
        if(this.show_accessibleElevators == true){
          this.show_accessibleElevators = false;
          this.icon_elevators = 'ios-arrow-forward';
        } else {
          this.show_accessibleElevators = true;
          this.icon_elevators = 'ios-arrow-down';
        }

        break;

      case 'restrooms':
        if(this.show_accessibleRestrooms == true){
          this.show_accessibleRestrooms = false;
          this.icon_restrooms = 'ios-arrow-forward';
        } else {
          this.show_accessibleRestrooms = true;
          this.icon_restrooms = 'ios-arrow-down';
        }

        break;
    }
  }
}
