import { Component } from '@angular/core';
import { SharedDataService } from '../../providers/shared-data-service';
import { SharedVars } from '../../providers/shared-vars';
import { TranslateService } from 'ng2-translate';
import { NavController, NavParams, ToastController} from 'ionic-angular';
import { Platform } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
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
  postcardInstructions:Boolean = true;
  postcardMessageText:Boolean = false;
  postcardBkgImage:Boolean = false;
  height = this.platform.height();
  width = this.platform.width()
  private postcard: FormGroup;
  checkExist;
  postcardLoaded:Boolean = false;
  imgElm:HTMLImageElement;
  bkg_imgs:any;
  postcardData:any = {'message':'', 'bkg':''};

  constructor( private toastCtrl: ToastController, private formBuilder: FormBuilder, private platform:Platform, private camera: Camera, private sharingVar: SocialSharing, private sharedDataService: SharedDataService, private navCtrl: NavController, private navParams: NavParams, private translate: TranslateService, public sharedVars: SharedVars) {

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
    this.resetFlags();
  }

  presentToast() {
    const toast = this.toastCtrl.create({
      message: 'Resetting postcard generator.',
      duration: 3000,
      position: 'top',
      cssClass: 'notice',
      dismissOnPageChange: true
    });


    toast.present();
  }
 stepBack(){
    // determine what step we are on

    if(this.postcardMessageText){
      this.postcardMessageText = null;
      this.postcardLoaded = false;
    } else if(this.base64Image){
      this.base64Image = null;
    } else if(this.postcardBkgImage){
      this.postcardBkgImage = null;
    }

 }


  prepPostcard(){
      setTimeout(()=>{
        this.postcardLoaded = true;
      },3000);
  }
  closeInstructions(){
    this.postcardInstructions = false;
  }
  resetFlags(){
    this.base64Image = null;
    this.postcardMessageText = null;
    this.postcardBkgImage = null;
    this.postcardLoaded = false;
    this.checkExist = false;
    this.postcardInstructions = true;
    this.postcard = this.formBuilder.group({
      message: ['', Validators.required]
    });
  }

reviewPostcard() {
  this.postcardData.message = this.postcard.value.message;
  this.postcardMessageText = true;
  this.prepPostcard();
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

      this.sharingVar.share(this.postcard.value.message + " Learn more about the NCAR Mesa Lab Visitor Center at ","Postcard: Greetings from the NCAR Visitor Center!",this.imgElm.src,"http://scied.ucar.edu/visit")
        .then(()=>{
              // completion - post a message and then reset
              this.resetFlags();
              this.presentToast();
        });
      }
    });
  }
}
