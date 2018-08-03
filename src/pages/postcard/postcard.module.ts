import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PostcardPage } from './postcard';
import { TranslateModule } from "@ngx-translate/core";
import { TitleComponentModule } from './../../components/titlebar/title.module';
import { ImageDrawComponentModule } from './../../components/image-draw/image-draw.module';

@NgModule({
  declarations: [
    PostcardPage,
  ],
  imports: [
    TitleComponentModule,
    TranslateModule.forChild(),
    ImageDrawComponentModule,
    IonicPageModule.forChild(PostcardPage),
  ],
})
export class PostcardPageModule {}
