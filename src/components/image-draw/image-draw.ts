// https://plnkr.co/edit/BrbAoBlLcbDcx8iDXACv?p=preview
import {Directive, HostListener, Input} from '@angular/core';
import { Platform } from 'ionic-angular';

@Directive({
 selector: '[draw-text]'
})
export class ImageDrawTextDirective {

  constructor(private platform:Platform) {}

    loaded = false;
    @Input() text: string;
    @Input() color: string;
    @Input() bkg: string;
    @HostListener('load', ['$event.target'])

  onLoad(img) {
    if(this.loaded) {
      return;
    }
    //load bkg img
    let bkgObject = document.createElement("img");
    bkgObject.src = this.bkg;
    this.loaded = true;
    let canvas = document.createElement('canvas');
    let context = canvas.getContext('2d');
    canvas.height = this.platform.height();
    canvas.width = this.platform.width();

    // draw bkg img
    context.drawImage(bkgObject, 0, canvas.width/2);

    // draw user image
    context.drawImage(img, canvas.height/2, canvas.width/2);
    context.font = "100px impact";
    let textWidth = context.measureText(this.text).width;

    if (textWidth > canvas.offsetWidth) {
      context.font = "40px impact";
    }

    context.textAlign = 'center';
    context.fillStyle = this.color;
    context.fillText(this.text, canvas.width / 2, canvas.height * 0.8);

    img.src = canvas.toDataURL();
  }
}
