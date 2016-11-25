import { Component, ViewChild }     from '@angular/core';
import { NavController } from 'ionic-angular';
import { ActorsService } from '../../providers/actors.service';
import { ActorDetailsPage }  from '../actor-details/actor-details';
import { Actor }  from '../../app/core-components/entities/actor';
import { LoadingClass } from  '../../providers/loading';
import { Keyboard } from 'ionic-native';
 
@Component({
    templateUrl: './actors.html',
    providers: [ActorsService, LoadingClass]
})
 
export class ActorsPage {
  actors: Actor[];
  actor: Actor;
  searchBarTitle:string = "Search Actors";

  @ViewChild('searchBar') mySearchBar ;

  constructor(private navController: NavController, private actorsService: ActorsService, private loading: LoadingClass) {
  }

  //put the focus on the searchbar
  public setFocus() {
    setTimeout(() => {
        this.mySearchBar.setFocus();
        Keyboard.show();
    },500);

  }

  public onCancel(ev) { 
    // Reset the field
    this.actors = [];
    ev.target.value = '';
    this.setFocus();
  }

  public onClear(ev) {
    // Reset the field
    this.actors = [];
    ev.target.value = '';
    this.setFocus();
  }
  
  public searchActors() {
    let searchString = this.mySearchBar.value;
    if (searchString != "") {
      this.loading.startLoading();
      this.actorsService.searchActors(searchString).subscribe(
          data => {
              this.actors = data.results;
              this.loading.stopLoading();
              this.setFocus();
          },
          err => {
              console.log(err);
          },
          () => console.log("items loaded...")
      );
    } else {
      this.validateSearchValues();
    }

  } 

  public searchActorsAutoComplete(event, key) {
    if(event.target.value.length > 2) {
        this.actorsService.searchActors(event.target.value).subscribe(
            data => {
                this.actors = data.results;
            },
            err => {
                console.log(err);
            },
            () => console.log("items loaded...")
        );
    }
  }
  
  public goToActorDetails(actor) {
    this.navController.push(ActorDetailsPage, {
        actor: actor.item
    });
  }

  private validateSearchValues() {
    this.searchBarTitle = "Type at least two characters...";
    setTimeout(() => {
        this.searchBarTitle = "Search Actors";
        this.mySearchBar.setFocus();
    },2000);
  }

}