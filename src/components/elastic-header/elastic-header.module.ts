import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { ElasticHeaderComponent } from './elastic-header.component';

@NgModule({
  declarations: [
    ElasticHeaderComponent,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    ElasticHeaderComponent
  ]
})
export class ElasticHeaderComponentModule {}
