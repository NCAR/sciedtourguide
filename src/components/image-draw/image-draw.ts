// https://plnkr.co/edit/BrbAoBlLcbDcx8iDXACv?p=preview
import {Directive, HostListener, Input} from '@angular/core';

@Directive({
 selector: '[draw-text]'
})
export class ImageDrawTextDirective {
  loaded = false;
  @Input() text: string;
  @HostListener('load', ['$event.target'])
  onLoad(img) {
    if(this.loaded) {
      return;
    }
    this.loaded = true;
    let canvas = document.createElement('canvas');
    let context = canvas.getContext('2d');

    canvas.height = img.height;
    canvas.width = img.width;

    context.drawImage(img, 0, 0);
    context.font = "100px impact";
    context.textAlign = 'center';
    context.fillStyle = 'black';
    context.fillText(this.text, canvas.width / 2, canvas.height * 0.8);

    img.src = canvas.toDataURL();
  }
}
