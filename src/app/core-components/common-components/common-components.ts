import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { LoadingController } from 'ionic-angular';
//the search box for the lists
@Component({
  selector: 'search-bar',
  templateUrl: 'search-bar.html'
})
export class SearchBarComponent {
  @Input() title: string = "";
  @Output() bindModelDataChange: any = new EventEmitter();  
  constructor() {}
}

/**************************************/

//the lists card component
@Component({
    selector: "card-list",
    templateUrl: "card-list.html"
})
export class CardListComponent {
  @Input() items: Array<any> = [];
  //@Input() clickGoToDetails: any;
  @Output() clickGoToDetails: any = new EventEmitter(); 

  constructor() {}

  viewDetails(event, item) {
    this.clickGoToDetails.emit({event:event, item:item});
  }

  setCorrectValuesToItem(item){
    //for the list, the api depending on what was called returns one value or other
    //we put standard values for list depending on the passed input
    item.img = item.poster_path ? item.poster_path : item.profile_path;
    item.name = item.original_title ? item.original_title : item.name;
    item.also_known_as_string = item.also_known_as ? item.also_known_as.join(', ') : '';

  }
}
