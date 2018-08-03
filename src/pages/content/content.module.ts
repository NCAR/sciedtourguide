import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContentPage } from './content';
import { TranslateModule } from "@ngx-translate/core";
import { TitleComponentModule } from './../../components/titlebar/title.module';

@NgModule({
  declarations: [
    ContentPage,
  ],
  imports: [
    TitleComponentModule,
    TranslateModule.forChild(),
    IonicPageModule.forChild(ContentPage),
  ],
})
export class ContentPageModule {}
