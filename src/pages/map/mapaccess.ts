// from: https://github.com/p-sebastian/ionic2-pinchzoom
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SharedVars } from '../../providers/shared-vars';
import svgPanZoom from 'svg-pan-zoom';

@Component({
  selector: 'page-map-access',
  templateUrl: 'mapaccess.html'
})
export class MapAccessPage {
  options: any;
  panZoom:any;

  constructor(public sharedVars: SharedVars, private navCtrl: NavController) { }
  ngOnInit() {
    this.options = {
      viewportSelector: '.svg',
      controlIconsEnabled: false,
    };

    this.panZoom = svgPanZoom('#svg', this.options);
  }
  ionViewDidEnter(): void {
    this.sharedVars.trackView('Map - Accessible');

  }
  ionViewWillLeave() {
    // need to se
    this.navCtrl.popToRoot();
  }
}
