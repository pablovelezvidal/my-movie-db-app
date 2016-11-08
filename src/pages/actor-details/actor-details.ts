import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ActorsService } from '../../providers/actors.service';

/*
  Generated class for the ActorDetails page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-actor-details',
  templateUrl: 'actor-details.html',
    providers: [ActorsService]
})
export class ActorDetailsPage implements OnInit{

  private actor = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, private actorsService: ActorsService) {}


  getMoreActorDetails(id) {
      if(id) {
          this.actorsService.getActor(id).subscribe(
              data => {
                  this.actor = data;
              },
              err => {
                  console.log(err);
              },
              () => console.log("item loaded...")
          );
      }
  } 

  ngOnInit() {
    let actor = this.navParams.get('actor');
    this.getMoreActorDetails(actor.id);
  }

}
