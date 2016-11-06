import { Component, Input, Output, EventEmitter } from '@angular/core';

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

//the lists card component
@Component({
    selector: "card-list",
    templateUrl: "card-list.html"
})
export class CardListComponent {
  @Input() movies: Array<any> = [];
  //@Input() clickGoToDetails: any;
  @Output() clickGoToDetails: any = new EventEmitter(); 

  constructor() {}

  viewDetails(event, movie) {
    //this.clickGoToDetails = event;
    this.clickGoToDetails.emit({event:event, movie:movie});
  }

}