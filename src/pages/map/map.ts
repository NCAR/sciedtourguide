// from: https://github.com/p-sebastian/ionic2-pinchzoom
import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, Gesture, Events, Content } from 'ionic-angular';
import { ExhibitsListPage } from '../exhibitslist/exhibitslist';
import { SharedVars } from '../../providers/shared-vars';

@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})
export class MapPage {

  @ViewChild(Content) content: Content;
  @ViewChild('zoom') zoom: ElementRef;
  showIndex: Boolean = true;
  showMapReg: Boolean = false;
  showMapAccess: Boolean = false;

    constructor(public sharedVars:SharedVars, private navCtrl: NavController, private events:Events) {

      sharedVars.trackView('Map');
    }

  loadPage(item){
    this.events.publish('reset-exhibits', 0);
    this.events.publish('change-tab', 0, item);
  }
  pinchEvent(e){
    alert(e);
  }

  ionViewDidEnter(): void {
    // Page must be fully rendered, ionViewDidLoad, doesnt work for this. Because it shows clientHeight without the margin of the header
    this._pinchZoom(this.zoom.nativeElement, this.content);
  }

  private _pinchZoom(elm: HTMLElement, content: Content): void {
    const _gesture = new Gesture(elm);

    // max translate x = (container_width - element absolute_width)px
    // max translate y = (container_height - element absolute_height)px
    let ow = 0;
    let oh = 0;
    for (let i = 0; i < elm.children.length; i++) {
      let c = <HTMLElement>elm.children.item(i);
      ow = c.offsetWidth;
      oh += c.offsetHeight;
    }
    const original_x = content.contentWidth - ow;
    const original_y = content.contentHeight - oh;
    let max_x = original_x;
    let max_y = original_y;
    let min_x = 0;
    let min_y = 0;
    let x = 0;
    let y = 0;
    let last_x = 0;
    let last_y = 0;
    let scale = 1;
    let base = scale;

    _gesture.listen();
    _gesture.on('pan', onPan);
    _gesture.on('panend', onPanend);
    _gesture.on('pancancel', onPanend);
    _gesture.on('pinch', onPinch);
    _gesture.on('pinchend', onPinchend);
    _gesture.on('pinchcancel', onPinchend);

    function onPan(ev) {
      setCoor(ev.deltaX, ev.deltaY);
      transform();
    }
    function onPanend() {
      // remembers previous position to continue panning.
      last_x = x;
      last_y = y;
    }
    function onPinch(ev) {
      // formula to append scale to new scale
      scale = base + (ev.scale * scale - scale)/scale

      setBounds();
      transform();
    }
    function onPinchend(ev) {
      if (scale > 3) {
        scale = 3;
      }
      if (scale < 1) {
        scale = 1;
      }
      // lets pinch know where the new base will start
      base = scale;
      setBounds();
      transform();
    }
    function setBounds() {
      // I am scaling the container not the elements
      // since container is fixed, the container scales from the middle, while the
      // content scales down and right, with the top and left of the container as boundaries
      // scaled = absolute width * scale - already set width divided by 2;
      let scaled_x = Math.ceil((elm.offsetWidth * scale - elm.offsetWidth) / 2);
      let scaled_y = Math.ceil((elm.offsetHeight * scale - elm.offsetHeight) / 2);
      // for max_x && max_y; adds the value relevant to their overflowed size
      let overflow_x = Math.ceil(original_x * scale - original_x); // returns negative
      let overflow_y = Math.ceil(oh * scale - oh);

      max_x = original_x - scaled_x + overflow_x;
      min_x = 0 + scaled_x;
      // remove added height from container
      max_y = original_y + scaled_y - overflow_y;
      min_y = 0 + scaled_y;

      setCoor(-scaled_x, scaled_y);
      console.info(`x: ${x}, scaled_x: ${scaled_x}, y: ${y}, scaled_y: ${scaled_y}`)
    }
    function setCoor(xx: number, yy: number) {
      x = Math.min(Math.max((last_x + xx), max_x), min_x);
      y = Math.min(Math.max((last_y + yy), max_y), min_y);
    }
    // xx && yy are for resetting the position when the scale return to 1.
    function transform(xx?: number, yy?: number) {
      elm.style.webkitTransform = `translate3d(${xx || x}px, ${yy || y}px, 0) scale3d(${scale}, ${scale}, 1)`;
    }
  }

}
