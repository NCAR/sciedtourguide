import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from "@ngx-translate/core";
import { VideoPlayerPage } from './video-player';
import { TitleComponentModule } from './../../components/titlebar/title.module';

@NgModule({
  declarations: [
    VideoPlayerPage,
  ],
  imports: [
    TitleComponentModule,
    TranslateModule.forChild(),
    IonicPageModule.forChild(VideoPlayerPage),
  ],
})
export class VideoPlayerPageModule {}
