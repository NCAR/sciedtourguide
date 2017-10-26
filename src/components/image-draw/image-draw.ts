// https://plnkr.co/edit/BrbAoBlLcbDcx8iDXACv?p=preview
import {Directive, HostListener, Input} from '@angular/core';
import { Platform } from 'ionic-angular';

@Directive({
 selector: '[draw-text]'
})
export class ImageDrawTextDirective {

  constructor(private platform:Platform) {}

    loaded = false;
    message = '';
    @Input() text: string;
    @Input() color: string;
    @Input() bkg: string;
    @Input() orientation: string;
    @HostListener('load', ['$event.target'])

  onLoad(img) {
    if(this.loaded) {
      return;
    }

    function getLines(ctx, text, maxWidth) {
        var words = text.split(" ");
        var lines = [];
        var currentLine = words[0];

        for (var i = 1; i < words.length; i++) {
            var word = words[i];
            var width = ctx.measureText(currentLine + " " + word).width;
            if (width < maxWidth) {
                currentLine += " " + word;
            } else {
                lines.push(currentLine);
                currentLine = word;
            }
        }
        lines.push(currentLine);
        return lines;
    }



    this.loaded = true;

    let canvas = document.createElement('canvas');
    let context = canvas.getContext('2d');

    //load bkg img
    let bkgObject = document.createElement("img");
    bkgObject.onload = (data) => {
    // set canvas the size of the bkgobject
      canvas.height = bkgObject.height;
      canvas.width = bkgObject.width;

      // draw bkg img
      context.drawImage(bkgObject, 0, 0, canvas.width, canvas.height);

      if(this.orientation == 'portrait'){
        // draw user image
        // get scaled down width and height for user image
        let scaled_width = (canvas.width/2)-50;
        let scaled_height = ((scaled_width * img.height)/img.width)-50;
        context.drawImage(img, 100, 100, scaled_width, scaled_height);

        // draw transparent text bkg
        context.fillStyle = 'rgba(225,225,225,0.5)';
        let textbox = {'x': scaled_width+200, 'y': (scaled_height/2)+100, 'width': canvas.width-(scaled_width+350), 'height': (scaled_height/2)};
        let max_width = textbox.width - 150;
        context.fillRect(textbox.x, textbox.y, textbox.width, textbox.height);


        // draw message
        context.font = "100px impact";
        let textWidth = context.measureText(this.text).width;


        context.textAlign = 'left';
        context.fillStyle = this.color;
        let lines = getLines(context,this.text,max_width);
        console.log(lines);
        let lines_y = textbox.y+150;
        let line_height = 150;
        lines.forEach(line => {
          console.log(line);
          context.fillText(line, scaled_width+250, lines_y, max_width);
          lines_y += line_height;
        });
      } else {
        //if not portrait then landscape image

      }

      img.src = canvas.toDataURL();
    }

    bkgObject.src = this.bkg;


  }
}
