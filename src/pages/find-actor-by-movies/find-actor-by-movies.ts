import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the FindActorByMovies page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-find-actor-by-movies',
  templateUrl: 'find-actor-by-movies.html'
})
export class FindActorByMoviesPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello FindActorByMoviesPage Page');
  }

}
