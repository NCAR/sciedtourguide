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
  @Input() titlebarColor:string;

  constructor(private navCtrl: NavController) {
    if(!this.titlebarColor){
      this.titlebarColor = "primary";
    }
  }

  checkDisplay(item) {
    if (typeof item == "object" && typeof item.id == "string" && (item.id == "library" || item.id == "supercomputer")) {
      return false;
    }
    return true;
  }
  checkButton() {
    return this.specialButton;
  }
  openTranscript(event, item) {
    this.navCtrl.push(TranscriptPage, {
      item: item,
      parent: this.titlebarColor
    });

  }
}
