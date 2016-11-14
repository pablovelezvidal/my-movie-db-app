import { Component }     from '@angular/core';
import { NavController } from 'ionic-angular';
import { ActorsService } from '../../providers/actors.service';
import { ActorDetailsPage }  from '../actor-details/actor-details';
import { Actor }  from '../../app/core-components/entities/actor';
import { LoadingClass } from  '../../providers/loading';
 
@Component({
    templateUrl: './actors.html',
    providers: [ActorsService, LoadingClass]
})
 
export class ActorsPage {

    actors: Actor[];
    actor: Actor;
    searchTitle: string = "Actors";
 
    constructor(private navController: NavController, private actorsService: ActorsService, private loading: LoadingClass) {
    }
   
    searchItemsDB(event, key) {
        if(event.target.value.length > 2) {
            this.loading.startLoading();
            this.actorsService.searchActors(event.target.value).subscribe(
                data => {
                    this.actors = data.results;
                    this.loading.stopLoading();
                },
                err => {
                    console.log(err);
                },
                () => console.log("items loaded...")
            );
        }
    } 
   
    goToActorDetails(actor) {
        this.navController.push(ActorDetailsPage, {
            actor: actor.item
        });
    }

}