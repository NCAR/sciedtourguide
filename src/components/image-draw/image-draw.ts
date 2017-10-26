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
    @Input() bkg: string;
    @HostListener('load', ['$event.target'])

  onLoad(img) {
    if(this.loaded) {
      return;
    }


    let scaled_width;
    let scaled_height;

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
    // set size of postcard canvas
    canvas.height = 1200;
    canvas.width = 1600;

    // draw linear gradient background-color
    console.log('draw background gradient');
    var my_gradient=context.createLinearGradient(0,0,canvas.width/2,0);
    my_gradient.addColorStop(0,"#003565");
    my_gradient.addColorStop(0.5,"#1C497A");
    my_gradient.addColorStop(1,"#000000");
    context.fillStyle=my_gradient;
    context.fillRect(0,0,(canvas.width/2)+50, canvas.height);





    //load bkg img
    let bkgObject = document.createElement("img");
    bkgObject.onload = (data) => {
        // draw library image
        console.log('draw lib image');
        context.drawImage(bkgObject, (canvas.width/2)+50, 0, canvas.width - ((canvas.width/2)+50), canvas.height);

        // draw user image

        console.log('draw photo');
        // get scaled down width and height for user image
        scaled_width = (canvas.width/2)-50;
        scaled_height = ((scaled_width * img.height)/img.width)-50;
        context.drawImage(img, 50, ((canvas.height/2)-(scaled_height/2)), scaled_width, scaled_height);




        // draw transparent text bkg
        console.log('draw text box');
        context.fillStyle = 'rgba(225,225,225,0.5)';
        let textbox = {'x': (canvas.width/2)+50, 'y': (canvas.height/2)+100, 'width': canvas.width - (canvas.width/2)-50, 'height': (canvas.height/2)-100};
        let max_width = textbox.width - 50;
        context.fillRect(textbox.x, textbox.y, textbox.width, textbox.height);


        // draw message
        console.log('draw message '+this.text);
        context.font = "50px helvetica";
        context.textAlign = 'left';
        context.fillStyle = '#000000';
        let lines = getLines(context,this.text,max_width);
        let lines_y = textbox.y+100;
        let line_height = 50;
        lines.forEach(line => {
          console.log(line);
          context.fillText(line, scaled_width+150, lines_y, max_width);
          lines_y += line_height;
        });


      img.src = canvas.toDataURL();
    }

    bkgObject.src = this.bkg;


  }
}
