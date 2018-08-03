import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TranscriptPage } from './transcript';
import { TranslateModule } from "@ngx-translate/core";
import { IonicAudioModule, WebAudioProvider, CordovaMediaProvider, defaultAudioProviderFactory } from 'ionic-audio';
import { TitleComponentModule } from './../../components/titlebar/title.module';

export function myCustomAudioProviderFactory() {
    return (window.hasOwnProperty('cordova')) ? new CordovaMediaProvider() : new WebAudioProvider();
}

@NgModule({
  declarations: [
    TranscriptPage,
  ],
  imports: [
    TitleComponentModule,
    TranslateModule.forChild(),
    IonicPageModule.forChild(TranscriptPage),
    IonicAudioModule.forRoot(defaultAudioProviderFactory)
  ],
})
export class TranscriptPageModule {}
