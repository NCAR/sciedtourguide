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
  showEditTextBox:Boolean = false;
  private postcard: FormGroup;
  checkExist;
  image = 'http://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png';
  imgElm:HTMLImageElement;

  constructor( private formBuilder: FormBuilder, private platform:Platform, private camera: Camera, private sharingVar: SocialSharing, private sharedDataService: SharedDataService, private navCtrl: NavController, private navParams: NavParams, private translate: TranslateService, public sharedVars: SharedVars) {

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
          message: ['test', Validators.required],
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

  this.checkExist = setInterval(() => {
  console.log('yes');
  console.log(this.imgElm);
    this.imgElm = <HTMLImageElement> document.getElementById('finalPostcard');
    if(this.imgElm != null){
    console.log('test');
      clearInterval(this.checkExist);
      console.log(this.imgElm.src);

      this.sharingVar.share(this.postcard.value.message,"Postcard: Greetings from the NCAR Visitor Center!",this.imgElm.src,"http://scied.ucar.edu/apps/cloud-guide")
      .then(()=>{

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
