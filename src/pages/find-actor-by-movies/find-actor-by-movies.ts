import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Keyboard } from 'ionic-native';

import { MoviesService } from '../../providers/movies.service';
import { Movie }  from '../../app/core-components/entities/movie';
import { LoadingClass } from  '../../providers/loading';

/*
  Generated class for the FindActorByMovies page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-find-actor-by-movies',
  templateUrl: 'find-actor-by-movies.html',
  providers: [MoviesService, LoadingClass]
})
export class FindActorByMoviesPage {
  movies: Movie[];
  selectedMovies: Array <Movie> = [];
  searchTitle: string = "Movies";
  searchBarTitle:string = "Start selecting Movies to find your actor";

  @ViewChild('searchBar') mySearchBar;

  constructor(public navCtrl: NavController, private moviesService: MoviesService, private loading: LoadingClass) {}

  //put the focus on the searchbar
  public setFocus() {
    setTimeout(() => {
        this.mySearchBar.setFocus();
        Keyboard.show();
    },500);

  }

  public onCancel() { 
    // Reset the field
    this.movies = [];
    this.mySearchBar.value = '';
    this.setFocus();
  }

  public onClear() {
    this.onCancel();
  }

  public searchMoviesAutoComplete(event, key) {
    if (event.type == "input") {
      if(event.target.value.length > 2) {
          this.moviesService.searchMovies(event.target.value).subscribe(
              data => {
                  this.movies = data.results;
              },
              err => {
                  console.log(err);
              },
              () => console.log("items loaded...")
          );
      } else if (event.target.value.length == 0) {
        this.movies = [];
      }
    }
  } 

  public addToSelectedMovies(movie) {
    this.selectedMovies.push(movie);
    this.onCancel();

    if (this.selectedMovies.length > 1) {
      this.findFuckingActor();
    }

  }

  public findFuckingActor() {
    var moviesCast: Array<any> = [];
    for (let movie of this.selectedMovies) {
      this.moviesService.getMovieCredits(movie.id).subscribe(
            data => {
              moviesCast.push(data);
            },
            err => {
              console.log(err);
            },
            () => console.log("item loaded...")
      );
    }

    this.makeMatchActors(moviesCast);

  }

  public makeMatchActors(moviesCast) {

   var xi =  moviesCast.map(function(movie) {
     console.log("hola");
      return movie.cast;
    })
    
    console.log("casts", moviesCast, moviesCast.length, moviesCast[0], Object.prototype.toString.call(moviesCast));
  }



}
