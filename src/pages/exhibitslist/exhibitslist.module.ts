import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExhibitsListPage } from './exhibitslist';
import { TranslateModule } from "@ngx-translate/core";
import { TitleComponentModule } from './../../components/titlebar/title.module';

@NgModule({
  declarations: [
    ExhibitsListPage,
  ],
  imports: [
    TitleComponentModule,
    TranslateModule.forChild(),
    IonicPageModule.forChild(ExhibitsListPage),
  ],
})
export class ExhibitsListPageModule {}
