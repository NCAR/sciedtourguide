import { Component } from '@angular/core';
import { SharedVars } from '../../providers/shared-vars';
import { Events} from 'ionic-angular';
@Component({
  selector: 'page-visit',
  templateUrl: 'visit.html'
})
export class VisitPage {
  bkgImg:String = 'assets/images/ncar.png';
  show_accessibleParking = false;
  show_accessibleElevators = false;
  show_accessibleRestrooms = false;
  icon_parking = 'ios-arrow-forward';
  icon_elevators = 'ios-arrow-forward';
  icon_restrooms = 'ios-arrow-forward';

  constructor(public sharedVars:SharedVars, private events:Events) {
    sharedVars.trackView('Visitor Information');
  }
  loadMapPage(type){
    this.events.publish('change-tab-map', 1, type);
  }
  toggleAccessibleInformation(value){
    switch(value){
      case 'parking':
        if(this.show_accessibleParking == true){
          this.sharedVars.trackEvent('AccessibilityInfo','toggle','Hide Parking');
          this.show_accessibleParking = false;
          this.icon_parking = 'ios-arrow-forward';
        } else {
          this.sharedVars.trackEvent('AccessibilityInfo','toggle','Show Parking');
          this.show_accessibleParking = true;
          this.icon_parking = 'ios-arrow-down';
        }

        break;

      case 'elevators':
        if(this.show_accessibleElevators == true){
          this.sharedVars.trackEvent('AccessibilityInfo','toggle','Hide Elevators');
          this.show_accessibleElevators = false;
          this.icon_elevators = 'ios-arrow-forward';
        } else {
          this.sharedVars.trackEvent('AccessibilityInfo','toggle','Show Elevators');
          this.show_accessibleElevators = true;
          this.icon_elevators = 'ios-arrow-down';
        }

        break;

      case 'restrooms':
        if(this.show_accessibleRestrooms == true){
          this.sharedVars.trackEvent('AccessibilityInfo','toggle','Hide Restrooms');
          this.show_accessibleRestrooms = false;
          this.icon_restrooms = 'ios-arrow-forward';
        } else {
          this.sharedVars.trackEvent('AccessibilityInfo','toggle','Show Restrooms');
          this.show_accessibleRestrooms = true;
          this.icon_restrooms = 'ios-arrow-down';
        }

        break;
    }
  }
}
