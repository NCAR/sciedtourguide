// from: https://github.com/p-sebastian/ionic2-pinchzoom
import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, Gesture, Content } from 'ionic-angular';
import { ExhibitsListPage } from '../exhibitslist/exhibitslist';
import { Events } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    constructor(private navCtrl: NavController, private events:Events) {

    }
  loadPage(item){
    this.events.publish('change-tab', 0, item);
  }
}
