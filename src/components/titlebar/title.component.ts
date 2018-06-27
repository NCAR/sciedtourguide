import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: 'title.component.html',
})
export class TitleComponent {
  @Input() title: string;
  @Input() selectedItem:any;
  @Input() titlebarColor:string;

  constructor() {
    if(!this.titlebarColor){
      this.titlebarColor = "primary";
    }
  }
}
