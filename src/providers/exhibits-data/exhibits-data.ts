import { Injectable } from '@angular/core';
import { SharedDataService } from '../../providers/shared-data-service';
import 'rxjs/add/operator/map';

/*
  Generated class for the ExhibitsDataProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ExhibitsDataProvider {
  originalData:any;
  f_dataReady:Boolean = false;

  constructor(private sharedDataService:SharedDataService) {
    this.originalData = [];

    let dataPromise = this.sharedDataService.load();
    dataPromise.then(data => {
      this.originalData = data;
      this.f_dataReady = true;
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

      modifiedData.forEach(function(item){
          let a_subItems = [];
          let a_operating = item.children;
          a_operating.forEach(function(subitem){
            // TODO: need to get the content.title and content.description keys and look up the translation and find matches from that

            if(re.test(subitem.name.toLowerCase())){
              a_subItems.push(subitem);
            }
          });
          if(a_subItems.length){

            let newparent = item;
            item.children = a_subItems;
            a_items.push(newparent);
          }
      })
      console.log(a_items);
      return a_items;

    }
    return this.originalData;
  }
}
