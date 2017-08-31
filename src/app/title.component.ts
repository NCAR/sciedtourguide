import { Component, Input } from '@angular/core';
import { NavController} from 'ionic-angular';


@Component({
  selector: 'app-title',
  templateUrl: 'title.component.html',
})
export class TitleComponent {
  @Input() title = '';
constructor(private navCtrl:NavController) {
       
   }
goHome(){
    this.navCtrl.popToRoot();
}
checkDisplay(title){
if(title == 'apptitle'){
    return false;
} return true;
}
}