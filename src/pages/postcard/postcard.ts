import { Component } from '@angular/core';
import { SharedDataService } from '../../providers/shared-data-service';
import { SharedVars } from '../../providers/shared-vars';
import { TranslateService } from 'ng2-translate';
import { NavController, NavParams} from 'ionic-angular';
import { Platform } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

import { TabsPage } from '../tabs/tabs';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { SocialSharing } from '@ionic-native/social-sharing';

@Component({
  selector: 'page-postcard',
  templateUrl: 'postcard.html',
  providers: [Camera, SocialSharing]
})

export class PostcardPage {
  base64Image: string;

  options: CameraOptions;
  postcardMessageText:Boolean = false;
  postcardBkgImage:Boolean = false;
  height = this.platform.height();
  width = this.platform.width()
  private postcard: FormGroup;
  checkExist;
  imgElm:HTMLImageElement;
  bkg_imgs:any;
  postcardData:any = {'orientation': 'portrait', 'message':'', 'bkg':''};

  constructor( private formBuilder: FormBuilder, private platform:Platform, private camera: Camera, private sharingVar: SocialSharing, private sharedDataService: SharedDataService, private navCtrl: NavController, private navParams: NavParams, private translate: TranslateService, public sharedVars: SharedVars) {
    this.determineDimensions();

    this.bkg_imgs = ['assets/images/postcards/mesalab.jpg','assets/images/postcards/eclipse.jpg','assets/images/postcards/mammatus.jpg','assets/images/postcards/cesm.jpg', 'assets/images/postcards/snowflake.jpg', 'assets/images/postcards/treerings.jpg'];
    // todo need to reset base64 on tab tab (return to home)
    this.options = {
      quality: 100,
      targetHeight: this.height,
      targetWidth: this.width,
      saveToPhotoAlbum: true,
      correctOrientation: true,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    this.postcard = this.formBuilder.group({
          message: ['', Validators.required]
        });

    this.platform.ready().then(() => {

    });
  }
  ionViewWillLeave(){
    // TODO: confirm user wishes to leave and lose progress
    // stop if not or proceed if so
  }
  ionViewDidLeave() {
    this.resetFlags();
  }
  resetFlags(){
    this.base64Image = null;
    this.postcardMessageText = null;
    this.postcardBkgImage = null;
  }
  determineDimensions(){

      console.log('prior: '+this.width+' x '+this.height);
      let header = 50;
      let footer = 50;
      let steps = 50;
      let buffer = 200;
      let old_height = this.height;
      this.height = this.height - header - footer - steps - buffer;
      this.width = (this.width*this.height)/old_height;

      console.log('after: '+this.width+' x '+this.height);
  }

reviewPostcard() {
  this.postcardData.message = this.postcard.value.message;
  this.postcardMessageText = true;
}
selectBkgImg(src){
  this.postcardData.bkg = src;
  this.postcardBkgImage = true;
}
  takePicture(){

    this.camera.getPicture(this.options).then((imageData) => {
        // imageData is a base64 encoded string
        this.base64Image = "data:image/jpeg;base64," + imageData;
    }, (err) => {
      console.log('no image');
    });




  }


  sendEmail() {
      this.otherShare();
  }

  otherShare(){

  this.checkExist = setInterval(() => {
    this.imgElm = <HTMLImageElement> document.getElementById('finalPostcard');
    if(this.imgElm != null){
      clearInterval(this.checkExist);
      this.sharingVar.share(this.postcard.value.message,"Postcard: Greetings from the NCAR Visitor Center!",this.imgElm.src,"http://scied.ucar.edu/apps/cloud-guide")
      .then(()=>{
            // completion - post a message and then reset
            this.resetFlags();

            // todo: post a toast stating the postcard has been sent
        },
        ()=>{

        });
    }
  }, 300);




}

  goHome() {
    this.navCtrl.setRoot(TabsPage);
  }

}
