import { Component } from '@angular/core';
import { SharedVars } from '../../providers/shared-vars';
import { NavParams} from 'ionic-angular';
import { AudioProvider } from 'ionic-audio';

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
    this._audioProvider.pause(this.selectedTrack);
    if(this.track_playing == true){
      this.sharedVars.trackEvent('Audio','navigation','Pause: '+this.selectedTrack);
      this.track_playing = false;
    }
  }
  ngAfterContentInit() {
    // get all tracks managed by AudioProvider so we can control playback via the API
    this.allTracks = this._audioProvider.tracks;
  }
  onTrackFinished(track: any) {
    this.sharedVars.trackEvent('Audio','completed',track.src);
    this.track_playing = false;
  }

}
