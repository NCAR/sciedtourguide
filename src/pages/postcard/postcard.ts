import { Component } from '@angular/core';
import { SharedVars } from '../../providers/shared-vars';
import { ToastController } from 'ionic-angular';
import { Platform } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { SocialSharing } from '@ionic-native/social-sharing';
import { AndroidPermissions } from '@ionic-native/android-permissions';

@Component({
  selector: 'page-postcard',
  templateUrl: 'postcard.html',
  providers: [Camera, AndroidPermissions, SocialSharing]
})

export class PostcardPage {
  base64Image: string;
  options: CameraOptions;
  postcardMessageText: Boolean = false;
  postcardBkgImage: Boolean = false;
  height = this.platform.height();
  width = this.platform.width()
  private postcard: FormGroup;
  checkExist;
  postcardLoaded: Boolean = false;
  imgElm: HTMLImageElement;
  bkg_imgs: any;
  postcardData: any = { 'message': '', 'bkg': '' };

  constructor(private toastCtrl: ToastController, private androidPermissions: AndroidPermissions, private formBuilder: FormBuilder, private platform: Platform, private camera: Camera, private sharingVar: SocialSharing, public sharedVars: SharedVars) {
    this.platform.ready().then(() => {
      this.bkg_imgs = ['assets/images/postcards/mesalab.jpg', 'assets/images/postcards/eclipse.jpg', 'assets/images/postcards/mammatus.jpg', 'assets/images/postcards/cesm.jpg', 'assets/images/postcards/snowflake.jpg', 'assets/images/postcards/treerings.jpg'];
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
    });
  }

  ionViewDidEnter() {
    this.trackSteps(1);
  }
  ionViewWillLeave() {
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

  trackSteps(step, args = { 'src': '' }) {
    switch (step) {
      case 1:
        this.sharedVars.trackView('Postcards - Choose Background');
        break;
      case 2:
        this.sharedVars.trackView('Postcards - Background Image:' + args.src);
        break;
      case 3:
        this.sharedVars.trackView('Postcards - Take Photo');
        break;
      case 4:
        this.sharedVars.trackView('Postcards - Write Message');
        break;
      case 5:
        this.sharedVars.trackView('Postcards - Review');
        break;
      case 6:
        this.sharedVars.trackView('Postcards - Share');
        break;
    }
  }

  stepBack() {
    if (this.postcardMessageText) {
      this.trackSteps(4);
      this.postcardMessageText = null;
      this.postcardLoaded = false;
    } else if (this.base64Image) {
      this.trackSteps(3);
      this.base64Image = null;
      this.takePicture();
    } else if (this.postcardBkgImage) {
      this.trackSteps(1);
      this.postcardBkgImage = null;
    }

  }

  startOver() {
    this.resetFlags();
    this.presentToast();
  }

  resetFlags() {
    this.base64Image = null;
    this.postcardMessageText = null;
    this.postcardBkgImage = null;
    this.postcardLoaded = false;
    this.checkExist = false;
    this.postcard = this.formBuilder.group({
      message: ['', Validators.required]
    });
    this.trackSteps(1);
  }

  reviewPostcard() {
    this.trackSteps(5);
    this.postcardData.message = this.postcard.value.message;
    this.postcardMessageText = true;
    this.prepPostcard();
  }

  prepPostcard() {
    setTimeout(() => {
      this.postcardLoaded = true;
    }, 3000);
  }

  selectBkgImg(src) {
    this.trackSteps(2, { 'src': src });
    this.postcardData.bkg = src;
    this.postcardBkgImage = true;
  }
  takePicture() {
    if(this.platform.is('android')){
      this.platform.ready().then(
        () => {
          this.androidPermissions.hasPermission(this.androidPermissions.PERMISSION.CAMERA)
            .then(status => {
              if (status.hasPermission) {
                this.useCamera();
              } else {
                this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.CAMERA)
                  .then(status => {
                    if (status.hasPermission) this.useCamera();
                  });
              }
            });
        }
      );
    }
    else {
      this.useCamera();
    }
  }

  useCamera() {
    this.trackSteps(3);
    this.camera.getPicture(this.options).then((imageData) => {
      // imageData is a base64 encoded string
      this.base64Image = "data:image/jpeg;base64," + imageData;
    }, (err) => {
      console.log('no image');
    });
    this.trackSteps(4);
  }

  otherShare() {
    this.trackSteps(6);
    this.checkExist = setInterval(() => {
      this.imgElm = <HTMLImageElement>document.getElementById('finalPostcard');
      if (this.imgElm != null) {
        clearInterval(this.checkExist);

        this.sharingVar.share(this.postcard.value.message + " Learn more about the NCAR Mesa Lab Visitor Center at ", "Postcard: Greetings from the NCAR Visitor Center!", this.imgElm.src, "http://scied.ucar.edu/visit")
          .then(() => {
            // completion - post a message and then reset

          });
      }
    });
  }
}
