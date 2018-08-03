import { Component } from '@angular/core';
import { SharedVars } from '../../providers/shared-vars';
import { IonicPage, NavParams} from 'ionic-angular';
import { AudioProvider } from 'ionic-audio';

@IonicPage({
  name: 'TranscriptPage',
  priority:'low'
})
@Component({
  selector: 'page-transcript',
  templateUrl: 'transcript.html'
})
export class TranscriptPage {
  selectedItem:any;
  track_playing:Boolean = false;
  myTracks: any[];
  allTracks: any[];
  selectedTrack: any;
  parent:string;

  constructor(private _audioProvider: AudioProvider,private navParams: NavParams, public sharedVars:SharedVars) {
    this.selectedItem = this.navParams.get('item');
    this.myTracks = this.selectedItem.content.audio;
    this.parent = this.navParams.get('parent');
  }

  ionViewDidEnter(){
    this.sharedVars.trackView('Transcript - '+this.parent+":"+this.selectedItem.id);
  }
  ionViewWillLeave() {
    if(this.track_playing == true){
      this.selectedTrack = this._audioProvider.tracks[this._audioProvider.current];
      this._audioProvider.pause();
      this.sharedVars.trackEvent('Audio','navigation-pause',this.selectedTrack.src);
      this.track_playing = false;
    }
  }
  ngAfterContentInit() {
    // get all tracks managed by AudioProvider so we can control playback via the API
    this.allTracks = this._audioProvider.tracks;
  }
  onTrackFinished(track: any) {
    this.sharedVars.trackEvent('Audio','completed',this.selectedTrack.src);
    this.track_playing = false;
  }
  trackEvent(track: any)  {
     if ( this.track_playing == true )
     {
       this.sharedVars.trackEvent('Audio','pause',this.selectedTrack.src);
       this.track_playing = false;
     } else if(this.track_playing == false){
       this.selectedTrack = this._audioProvider.tracks[this._audioProvider.current];
       this.sharedVars.trackEvent('Audio','play',this.selectedTrack.src);
       this.track_playing = true;
     }
  }

}
