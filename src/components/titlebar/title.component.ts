import { Component, Input } from '@angular/core';
import { NavController} from 'ionic-angular';
import { TranscriptPage } from '../../pages/transcript/transcript';

@Component({
  selector: 'app-title',
  templateUrl: 'title.component.html',
})
export class TitleComponent {
  @Input() title: string;
  @Input() specialButton:string;
  @Input() selectedItem:any;

  constructor(private navCtrl: NavController) {
  }
  goHome() {
    this.navCtrl.popToRoot();
  }
  checkDisplay(title) {
    if (title == 'apptitle') {
      return false;
    }
    return true;
  }
  checkButton() {
    return this.specialButton;
  }
  openTranscript(event, item) {
    this.navCtrl.push(TranscriptPage, {
      item: item
    });

  }
}
