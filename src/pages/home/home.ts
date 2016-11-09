import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MoviesService } from '../../providers/movies.service';
import * as _ from "lodash";


/*
  Generated class for the Home page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [MoviesService]
})
export class HomePage implements OnInit{

  private movies: Array<any>;

  constructor(public navCtrl: NavController, private moviesServices: MoviesService) {}

  getMoreActorDetails() {
      this.moviesServices.getPopularMovies().subscribe(
          data => {
              this.organizeMovies(data.results);
          },
          err => {
              console.log(err);
          },
          () => console.log("item loaded...")
      );

  } 

  organizeMovies(movies) {
    this.movies = this.partition(movies, 4);
  }

  partition(data, n) {
    return _.chunk(data, 4);
  }

  ngOnInit() {
    this.getMoreActorDetails();
  }

}
