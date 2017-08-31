import {Injectable} from '@angular/core';
import { Storage } from '@ionic/storage';
import { GoogleAnalytics } from '@ionic-native/google-analytics';
import { Platform} from 'ionic-angular';


@Injectable()
export class SharedVars {
    orientation:any;
    width:any;
    height:any;
    units: any = 'English';
    instructions:boolean = true;
    tracking:boolean = true;
constructor(private ga: GoogleAnalytics,private platform: Platform,private storage: Storage) {

  }
setPlatformWidth(value){
    this.width = value;
}
getPlatformWidth(){
    return this.width;
}
setPlatformHeight(value){
    this.height = value;
}
getPlatformHeight(){
    return this.height;
}
  setOrientation(value) {
    this.orientation = value;
  }

  getOrientation() {
    return this.orientation;
  }
getSmallScreen(){
    if(this.width < 450){
        return false;
    } else {
        return true;
    }
}
setUnits(value){
    this.units = value;
    this.storage.set('settingsUnits',this.units);
}
getUnits(){
    return new Promise(resolve => {
        if(typeof(this.units) !== 'undefined'){
            resolve( this.units);
        } else {
            this.storage.get('settingsUnits').then((value) => {
  		        if(value && typeof(value) !== 'undefined'){
  		            this.units = value;
                    resolve(this.units);
                } else {
                    // default to English
                    this.units = "English";
                    this.setUnits(this.units);
                    resolve(this.units);
                }
            });

        }
    });
}
setInstructions(value){
    this.instructions = value;
    this.storage.set('settingsInstructions',this.instructions);
}
getInstructions(){
    return new Promise(resolve => {
        if(typeof(this.instructions) !== 'undefined'){
            resolve( this.instructions);
        } else {
            this.storage.get('settingsInstructions').then((value) => {

  		        if(value && typeof(value) !== 'undefined'){
  		            this.instructions = value;
                    resolve(this.instructions);
                } else {
                    this.instructions = false;
                    this.setInstructions(this.instructions);
                    resolve(this.instructions);
                }
            });
        }
    });
}

setTracking(value){
    this.tracking = value;
    this.storage.set('settingsTracking',this.tracking);
}
getTracking(){
    return new Promise(resolve => {
        if(typeof(this.tracking) !== 'undefined'){
            resolve( this.tracking);
        } else {
            this.storage.get('settingsTracking').then((value) => {

  		        if(value && typeof(value) !== 'undefined'){
  		            this.tracking = value;
                    resolve(this.tracking);
                } else {
                    this.tracking = true;
                    this.setTracking(this.tracking);
                    resolve(this.tracking);
                }
            });
        }
    });
}

shuffle(a) {
    for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
    return a;
}

/*goHome(){
    this.navCtrl.popToRoot();
} */
    launch(url) {
        this.platform.ready().then(() => {
        let promise = this.getTracking();
        promise.then(data => {
          if(data == true){
            this.trackEvent('OpenURL','click',url);
          }
        });

            window.open(url, "_system", "location=true");
        });
    }

     trackEvent(category, action, label) {
         this.platform.ready().then(() => {
         let promise = this.getTracking();
         promise.then(data => {
           if(data == true){
             this.ga.trackEvent(category, action, label);
           }
         });
        });
    }
    trackView(title) {
        this.platform.ready().then(() => {
        let promise = this.getTracking();
        promise.then(data => {
          if(data == true){
              this.ga.trackView(title);
          }
        });
    });
    }
}
