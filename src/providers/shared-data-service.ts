import { Injectable } from '@angular/core';
import { DataFileService } from './data-file-service';

@Injectable()
export class SharedDataService {
    _data: any = [];

    constructor(public dataFileService:DataFileService) {

    }

    load(){

        return new Promise(resolve => {
            if(this._data.length > 0){
                resolve(this._data);
            } else {
                let file = 'assets/data/exhibits_list.json';
                this.dataFileService.load(file)
                .then(data => {
                    this._data = data;
                    resolve(this._data);
                });
            }
  	     });
    }
}
