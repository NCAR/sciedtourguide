import { Component } from '@angular/core';
import { ExhibitsListPage } from '../exhibitslist/exhibitslist';
import { PostcardPage } from '../postcard/postcard';
import { VisitPage } from '../visit/visit';
import { MapIndexPage } from '../map/mapindex';
import { ViewChild } from '@angular/core';
import { Tabs, Events } from 'ionic-angular';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  @ViewChild(Tabs) tabs: Tabs;

  tab1Root = MapIndexPage;
  tab2Root = ExhibitsListPage;

  tab2Params = { item: "" };
  tab3Root = PostcardPage;
  tab4Root = VisitPage;

  constructor(events: Events) {
    events.subscribe('change-tab', (tab, item) => {
      this.tab2Params.item = item;
      this.tabs.select(tab);
    });
  }

}
