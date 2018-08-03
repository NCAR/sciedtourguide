import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MapIndexPage } from './mapindex';
import { TranslateModule } from "@ngx-translate/core";
import { TitleComponentModule } from './../../components/titlebar/title.module';

@NgModule({
  declarations: [
    MapIndexPage,
  ],
  imports: [
    TitleComponentModule,
    TranslateModule.forChild(),
    IonicPageModule.forChild(MapIndexPage),
  ],
})
export class MapIndexPageModule {}
