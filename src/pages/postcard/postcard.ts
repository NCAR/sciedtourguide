import { Component } from '@angular/core';
import { SharedDataService } from '../../providers/shared-data-service';
import { SharedVars } from '../../providers/shared-vars';
import { TranslateService } from 'ng2-translate';
import { NavController, NavParams} from 'ionic-angular';
import { Platform } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';

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
  showEditTextBox:Boolean = false;
  private postcard: FormGroup;

  constructor( private formBuilder: FormBuilder, private platform:Platform, private camera: Camera, private sharingVar: SocialSharing, private sharedDataService: SharedDataService, private navCtrl: NavController, private navParams: NavParams, private translate: TranslateService, public sharedVars: SharedVars) {
    var footer = 50;
    var header = 50;
    var stepsContainer = 60;

// todo need to reset base64 on tab tab (return to home)
    this.options = {
      quality: 100,
      targetHeight: 600,
      saveToPhotoAlbum:true,
      correctOrientation: true,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    this.postcard = this.formBuilder.group({
          message: ['', Validators.required],
        });

    this.platform.ready().then(() => {

    });
  }
reviewPostcard() {
  this.postcardMessageText = true;
}
  takePicture(){
    this.camera.getPicture(this.options).then((imageData) => {
        // imageData is a base64 encoded string
        this.base64Image = "data:image/jpeg;base64," + imageData;
    }, (err) => {
      alert('no image');
    });
  }
  editText(){
      this.showEditTextBox = true;

  }
  sendEmail() {
        this.otherShare();
  }

  otherShare(){
  this.sharingVar.share(this.postcard.value.message,"Postcard: Greetings from the NCAR Visitor Center!",this.base64Image,"http://scied.ucar.edu/apps/cloud-guide")
  .then(()=>{

    },
    ()=>{

    })

}

  goHome() {
    this.navCtrl.setRoot(TabsPage);
  }

}
