import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SharedVars } from '../../providers/shared-vars';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private sharedVars: SharedVars) {

        sharedVars.trackView('Map');
  }

}
