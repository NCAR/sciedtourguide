import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabsPage } from './tabs';
import { TranslateModule } from "@ngx-translate/core";
import { TitleComponentModule } from './../../components/titlebar/title.module';

@NgModule({
  declarations: [
    TabsPage,
  ],
  imports: [
    TitleComponentModule,
    TranslateModule.forChild(),
    IonicPageModule.forChild(TabsPage),
  ],
})
export class TabsPageModule {}
