import { Component } from '@angular/core';

import { ExhibitsListPage } from '../exhibitslist/exhibitslist';
import { VisitPage } from '../visit/visit';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ExhibitsListPage;
  tab3Root = VisitPage;

  constructor() {

  }
}
