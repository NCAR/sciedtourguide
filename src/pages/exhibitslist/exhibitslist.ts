import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NavController, NavParams, Events} from 'ionic-angular';
import { ContentPage } from '../content/content';
import { SharedVars } from '../../providers/shared-vars';
import { ExhibitsDataProvider } from '../../providers/exhibits-data/exhibits-data';
import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'page-exhibitslist',
  templateUrl: 'exhibitslist.html'
})
export class ExhibitsListPage {
  searchTerm: string = '';
  searchControl: FormControl;
  items:any;
  timer:any;
  searching: any = true;
  title = 'exhibits_list';
  selectedItem:any = '';

  constructor(private events:Events, private dataService: ExhibitsDataProvider, private navParams: NavParams, private navCtrl: NavController,public sharedVars:SharedVars) {

    this.selectedItem = navParams.get('item');

    events.subscribe('change-tab', (tab, item) => {
      this.selectedItem = item;
        this.items = this.dataService.filterItems(this.selectedItem);
    });
    sharedVars.trackView('Exhibits List');
    this.searchControl = new FormControl();
     this.searchControl.valueChanges.debounceTime(700).subscribe(search => {
      this.searching = false;

      // need to poll for a flag to indicate that this is completed
      this.timer = setInterval(() => {
        if(this.dataService.f_dataReady == true){
            this.setFilteredItems();
            clearInterval(this.timer);
        }
      },300);
    });
  }
 reset(){
   this.selectedItem = '';
   this.searchTerm = '';
   this.setFilteredItems();
 }
  onSearchInput(){
    this.searching = true;
  }

  setFilteredItems() {
    this.items = this.dataService.filterItems(this.searchTerm);

  }

  openPage(event, item) {
    this.navCtrl.push(ContentPage, {
        item: item
    });
  }
}
