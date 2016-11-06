import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the ActorDetails page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-actor-details',
  templateUrl: 'actor-details.html'
})
export class ActorDetailsPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello ActorDetailsPage Page');
  }

}
