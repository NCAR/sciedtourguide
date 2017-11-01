import { Injectable } from '@angular/core';
import { SharedDataService } from '../../providers/shared-data-service';
import { TranslateService } from '@ngx-translate/core';
import 'rxjs/add/operator/map';

@Injectable()
export class ExhibitsDataProvider {
  originalData:any;
  f_dataReady:Boolean = false;

  constructor(private sharedDataService:SharedDataService, private translate: TranslateService) {
    this.originalData = [];
    let dataPromise = this.sharedDataService.load();
    dataPromise.then(data => {
      this.originalData = data;
      this.f_dataReady = true;
    });
  }
  lookupTranslation(term){
      this.translate.get(term).subscribe(result => {
        console.log(result);
    });
  }

  filterItems(searchTerm){
    // return all if searchTerm is empty
    if(searchTerm.trim() == ''){
      return this.originalData;
    }
    let modifiedData = JSON.parse(JSON.stringify(this.originalData));
    let a_items = [];
    if(modifiedData.length){
      let rule = '^.*'+searchTerm.toLowerCase()+'.*$';
      let re = new RegExp(rule);
      modifiedData.forEach( item => {

          let a_subItems = [];
          let a_operating = item.children;
          a_operating.forEach(subitem => {
            let f_found = false;
            // checks for translated matches on the menu item title (not category)
            this.translate.get(subitem.name).subscribe(result => {
                if(re.test(result.toLowerCase())){
                  a_subItems.push(subitem);
                  f_found = true;
                }

                if(f_found == false){
                  // if not positive from menu item title try with the item description
                  this.translate.get(subitem.content.description).subscribe(result => {
                    if(re.test(result.toLowerCase())){
                      a_subItems.push(subitem);
                      f_found = true;
                    }
                  });
                }
            });

          });
          if(a_subItems.length){
            // if there are children, include the category are parent
            let newparent = item;
            item.children = a_subItems;
            a_items.push(newparent);
          }
      });
      return a_items;

    }
    return this.originalData;
  }
}
