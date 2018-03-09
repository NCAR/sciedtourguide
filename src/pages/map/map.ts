// from: https://github.com/p-sebastian/ionic2-pinchzoom
import { Component } from '@angular/core';
import { NavController, Events } from 'ionic-angular';
import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { SharedVars } from '../../providers/shared-vars';
import svgPanZoom from 'svg-pan-zoom';

@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})
export class MapPage {
  options: any;
  panZoom:any;

  constructor(public sharedVars: SharedVars, private events: Events, private navCtrl: NavController) {

  }

  ngOnInit() {
    this.options = {
      viewportSelector: '.svg',
      controlIconsEnabled: false,
    };

    this.panZoom = svgPanZoom('#svg', this.options);

  }

  ionViewDidEnter(): void {
    this.sharedVars.trackView('Map - Interactive');
  }
  ionViewWillLeave() {
    // need to se
    this.navCtrl.popToRoot();
  }
  loadPage(item) {
    this.events.publish('reset-exhibits', 0);
    this.events.publish('change-tab', 0, item);
  }
}
