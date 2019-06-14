import { Component } from '@angular/core';
import { SharedVars } from '../../providers/shared-vars';
import { IonicPage,  NavParams } from 'ionic-angular';
import { Platform } from 'ionic-angular';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

/**
 * Generated class for the VideoPlayerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 declare var window;

 @IonicPage({
   name: 'VideoPlayerPage',
   priority:'low'
 })
@Component({
  selector: 'page-video-player',
  templateUrl: 'video-player.html',
})
export class VideoPlayerPage {
  selectedItem:any;
  track_playing:Boolean = false;
  myTracks: any[];
  srcUrl:string;
  parent:string;
  width: any;
  height:any;

  constructor(platform: Platform,  private screenOrientation: ScreenOrientation, private navParams: NavParams, public sharedVars: SharedVars) {
    this.selectedItem = this.navParams.get('item');
    this.myTracks = this.selectedItem.content.video;
    this.parent = this.navParams.get('parent');
    this.width = platform.width();
  }
  ionViewDidEnter(){
    window.screen.orientation.lock('landscape');
    this.sharedVars.trackView('Video - '+this.parent+":"+this.selectedItem.id);
    this.srcUrl = this.myTracks[0].src;

console.log(this.width);
    this.calculateHeight();

  }
  calculateHeight(){
    this.height = (this.width*1024)/1920;
  }
  ionViewDidLoad(){
    console.log(window.screen.orientation.type);
  }
  ionViewWillLeave() {
    window.screen.orientation.lock('portrait');
    if(this.track_playing == true){
      this.sharedVars.trackEvent('Video','navigation-pause',this.selectedItem.id);
      this.track_playing = false;
    }
  }
}
