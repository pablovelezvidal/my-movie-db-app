import { Component, OnInit, Input } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ActorsService } from '../../providers/actors.service';
import { LoadingClass } from  '../../providers/loading';

/*
  Generated class for the ActorDetails page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-actor-details',
  templateUrl: 'actor-details.html',
    providers: [ActorsService, LoadingClass]
})
export class ActorDetailsPage implements OnInit{

  private actor = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, private actorsService: ActorsService, private loading: LoadingClass) {
  }


  getMoreActorDetails(id) {
      if(id) {
          this.loading.startLoading();
          this.actorsService.getActor(id).subscribe(
              data => {
                  this.actor = data;
                  this.loading.stopLoading();
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
