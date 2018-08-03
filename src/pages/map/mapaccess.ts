// from: https://github.com/p-sebastian/ionic2-pinchzoom
import { Component } from '@angular/core';
import { IonicPage} from 'ionic-angular';
import { SharedVars } from '../../providers/shared-vars';
import svgPanZoom from 'svg-pan-zoom';
import Hammer from 'hammerjs';

@IonicPage()
@Component({
  selector: 'page-map-access',
  templateUrl: 'mapaccess.html'
})
export class MapAccessPage {
  panZoom:any;

  constructor(public sharedVars: SharedVars) { }
  ngOnInit() {
    let eventsHandler;

        eventsHandler = {
          haltEventListeners: ['touchstart', 'touchend', 'touchmove', 'touchleave', 'touchcancel']
        , init: function(options) {
            var instance = options.instance
              , initialScale = 1
              , pannedX = 0
              , pannedY = 0

            // Init Hammer
            // Listen only for pointer and touch events
            this.hammer = Hammer(options.svgElement, {
              inputClass: Hammer.SUPPORT_POINTER_EVENTS ? Hammer.PointerEventInput : Hammer.TouchInput
            })

            // Enable pinch
            this.hammer.get('pinch').set({enable: true})

            // Handle double tap
            this.hammer.on('doubletap', function(ev){
              instance.zoomIn()
            })

            // Handle pan
            this.hammer.on('panstart panmove', function(ev){
              if (ev.type === 'panstart') {
                pannedX = 0
                pannedY = 0
              }

              // Pan only the difference
              instance.panBy({x: ev.deltaX - pannedX, y: ev.deltaY - pannedY})
              pannedX = ev.deltaX
              pannedY = ev.deltaY
            })

            // Handle pinch
            this.hammer.on('pinchstart pinchmove', function(ev){
              if (ev.type === 'pinchstart') {
                initialScale = instance.getZoom()
                instance.zoom(initialScale * ev.scale)
              }

              instance.zoom(initialScale * ev.scale)

            })

            // Prevent moving the page on some devices when panning over SVG
            options.svgElement.addEventListener('touchmove', (e) => { e.preventDefault(); });
          }

        , destroy: function(){
            this.hammer.destroy()
          }
        }


    let options = {
      controlIconsEnabled: false,
      customEventsHandler: eventsHandler
    };

    this.panZoom = svgPanZoom('#svg', options);
  }
  ionViewDidEnter(): void {
    this.sharedVars.trackView('Map - Accessible');

  }
}
