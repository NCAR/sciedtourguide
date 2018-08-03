import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MapAccessPage } from './mapaccess';
import { TranslateModule } from "@ngx-translate/core";
import { TitleComponentModule } from './../../components/titlebar/title.module';

@NgModule({
  declarations: [
    MapAccessPage,
  ],
  imports: [
    TitleComponentModule,
    TranslateModule.forChild(),
    IonicPageModule.forChild(MapAccessPage),
  ],
})
export class MapAccessPageModule {}
