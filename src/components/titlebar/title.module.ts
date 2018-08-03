import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { TitleComponent } from './title.component';
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  declarations: [
    TitleComponent,
  ],
  imports: [
    IonicModule,
    TranslateModule
  ],
  exports: [
    TitleComponent
  ]
})
export class TitleComponentModule {}
