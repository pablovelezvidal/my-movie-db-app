import { Component, Input, Output, EventEmitter } from '@angular/core';

/**************************************/

//the lists card component
@Component({
    selector: "card-list",
    templateUrl: "card-list.html"
})
export class CardListComponent {
  @Input() items: Array<any> = [];
  @Input() showDetails: boolean = true;
  @Input() showCloseButton: boolean = false;
  @Output() clickGoToDetails: any = new EventEmitter(); 
  @Output() clickRemoveCard: any = new EventEmitter(); 

  constructor() {}

  //emit the event when the user clicks on a item in the list. The parent element needs to 
  //capture and have method to handle clickGoToDetails
  viewDetails(event, item) {
    this.clickGoToDetails.emit({event:event, item:item});
  }

  closeCard(event, item) {
    this.clickRemoveCard.emit({event:event, item:item});
  }

  setCorrectValuesToItem(item){
    //for the list, the api depending on what was called returns one value or other
    //we put standard values for list depending on the passed input
    item.img = item.poster_path ? item.poster_path : item.profile_path;
    item.image = item.img ? "https://image.tmdb.org/t/p/w92"+item.img : "";
    item.image = item.image ? item.image : "http://www.freeiconspng.com/uploads/no-image-icon-6.png";
    item.name = item.original_title ? item.original_title : item.name;
    item.also_known_as_string = item.also_known_as ? item.also_known_as.join(', ') : '';


  }
}
