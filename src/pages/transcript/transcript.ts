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

myTracks: any[];
allTracks: any[];
selectedTrack: any;

  constructor(private _audioProvider: AudioProvider,private navParams: NavParams, public sharedVars:SharedVars) {
    this.selectedItem = this.navParams.get('item');
    this.myTracks = this.selectedItem.content.audio;
    sharedVars.trackView('Transcript - '+this.selectedItem.id);
  }

  ionViewWillLeave() {
    this.pauseSelectedTrack();
  }
  ngAfterContentInit() {
    // get all tracks managed by AudioProvider so we can control playback via the API
    this.allTracks = this._audioProvider.tracks;
  }

  playSelectedTrack() {
    // use AudioProvider to control selected track
    this._audioProvider.play(this.selectedTrack);
  }

  pauseSelectedTrack() {
    // use AudioProvider to control selected track
    this._audioProvider.pause(this.selectedTrack);
  }

  onTrackFinished(track: any) {
    console.log('Track finished', track);
  }

}
