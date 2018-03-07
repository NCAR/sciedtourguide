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
  items: any;
  timer: any;
  searching: any = true;
  title = 'exhibits_list';
  selectedItem: any = '';

  constructor(private events: Events, private dataService: ExhibitsDataProvider, private navParams: NavParams, private navCtrl: NavController, public sharedVars: SharedVars) {
    this.selectedItem = this.navParams.get('item');

    this.events.subscribe('change-tab', (tab, item) => {
      this.selectedItem = item;
      this.items = this.dataService.filterItems(this.selectedItem);
    });
    this.searchControl = new FormControl();
    this.searchControl.valueChanges.debounceTime(700).subscribe(search => {
      this.searching = false;

      // need to poll for a flag to indicate that this is completed
      this.timer = setInterval(() => {
        if (this.dataService.f_dataReady == true) {
          this.setFilteredItems();
          clearInterval(this.timer);
        }
      }, 300);
    });
  }
  ionViewDidEnter(){
    if(this.selectedItem){
      this.sharedVars.trackView('Exhibits List: '+this.selectedItem);
    } else {
      this.sharedVars.trackView('Exhibits List: All');
    }
  }
  reset() {
    this.selectedItem = '';
    this.searchTerm = '';
    this.sharedVars.trackEvent("ExhibitsReset","click","Reset");
    this.setFilteredItems();
  }
  onSearchInput() {
    this.searching = true;
  }

  setFilteredItems() {
    this.items = this.dataService.filterItems(this.searchTerm);
  }

  openPage(event, item, parent) {
    this.navCtrl.push(ContentPage, {
      item: item,
      parent:parent
    });
  }
}
