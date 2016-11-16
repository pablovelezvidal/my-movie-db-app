import { Component, Input } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LoadingClass } from  '../../providers/loading';

/*
  Generated class for the MovieDetails page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-movie-details',
  templateUrl: 'movie-details.html',
    providers: [LoadingClass]
})
export class MovieDetailsPage {

  @Input() movie = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, private loading: LoadingClass) {
  }

  ionViewDidLoad() {
    this.loading.startLoading();
    this.movie = this.navParams.get('movie');
    setTimeout(() => {
      this.loading.stopLoading();
    },750);
  }

}
