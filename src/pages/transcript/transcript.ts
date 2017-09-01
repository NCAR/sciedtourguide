import { Component } from '@angular/core';
import { SharedDataService } from '../../providers/shared-data-service';
import { SharedVars } from '../../providers/shared-vars';
import { ViewController, NavController, NavParams} from 'ionic-angular';
import { TranslateService } from 'ng2-translate';
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

  constructor(private _audioProvider: AudioProvider,private sharedDataService:SharedDataService, private viewCtrl: ViewController, private navCtrl: NavController, private navParams: NavParams, private translate:TranslateService, public sharedVars:SharedVars) {
    this.selectedItem = navParams.get('item');
    this.myTracks = this.selectedItem.content.audio;

    console.log(this.selectedItem);
    sharedVars.trackView('Cloud Transcript');
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
