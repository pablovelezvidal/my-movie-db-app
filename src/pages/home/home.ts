import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MoviesService } from '../../providers/movies.service';
import { LoadingClass } from  '../../providers/loading';
import { MovieDetailsPage }  from '../movie-details/movie-details';
import * as _ from "lodash";


/*
  Generated class for the Home page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [MoviesService, LoadingClass]
})
export class HomePage implements OnInit{

  private movies: Array<any>;

  constructor(private navCtrl: NavController, private moviesServices: MoviesService, private loading: LoadingClass) {}

  getPopularMovies() {
      this.loading.startLoading();
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

  getUpcomingMovies() {
      this.loading.startLoading();
      this.moviesServices.getUpcomingMovies().subscribe(
          data => {
              this.organizeMovies(data.results);
          },
          err => {
              console.log(err);
          },
          () => console.log("item loaded...")
      );

  }

  getNowPlayingMovies() {
      this.loading.startLoading();
      this.moviesServices.getNowPlayingMovies().subscribe(
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
    this.loading.stopLoading();
  }

  partition(data, n) {
    return _.chunk(data, 4);
  }

  goToDetails(movie) {
        this.navCtrl.push(MovieDetailsPage, {
            movie: movie
        });
  }

  ngOnInit() {
    this.getNowPlayingMovies();
  }

}
