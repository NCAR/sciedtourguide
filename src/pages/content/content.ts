import { Component } from '@angular/core';
import { SharedDataService } from '../../providers/shared-data-service';
import { SharedVars } from '../../providers/shared-vars';
import { TranslateService } from 'ng2-translate';
import { NavController, NavParams} from 'ionic-angular';

import { AudioProvider } from 'ionic-audio';

import { TabsPage } from '../tabs/tabs';
import { TranscriptPage } from '../transcript/transcript';

@Component({
  selector: 'page-content',
  templateUrl: 'content.html'
})
export class ContentPage {

  selectedItem: any;

  myTracks: any[];
  allTracks: any[];
  selectedTrack: any;

  constructor(private _audioProvider: AudioProvider, private sharedDataService: SharedDataService, private navCtrl: NavController, private navParams: NavParams, private translate: TranslateService, public sharedVars: SharedVars) {
    this.selectedItem = navParams.get('item');
    this.myTracks = this.selectedItem.content.audio;


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

  goHome() {
    this.navCtrl.setRoot(TabsPage);
  }


  openTranscript(event, item) {
    this.navCtrl.push(TranscriptPage, {
      item: item
    });

  }

}
