import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VisitPage } from './visit';
import { TranslateModule } from "@ngx-translate/core";
import { ElasticHeaderComponentModule } from './../../components/elastic-header/elastic-header.module';
import { TitleComponentModule } from './../../components/titlebar/title.module';

@NgModule({
  declarations: [
    VisitPage,
  ],
  imports: [
    TitleComponentModule,
    TranslateModule.forChild(),
    ElasticHeaderComponentModule,
    IonicPageModule.forChild(VisitPage),
  ],
})
export class VisitPageModule {}
