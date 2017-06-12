import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Keyboard } from 'ionic-native';

import { MoviesService } from '../../providers/movies.service';
import { Movie }  from '../../app/core-components/entities/movie';
import { LoadingClass } from  '../../providers/loading';

/*
  Class documentation
*/
@Component({
  selector: 'page-find-actor-by-movies',
  templateUrl: 'find-actor-by-movies.html',
  providers: [MoviesService, LoadingClass]
})

export class FindActorByMoviesPage {
  movies: Movie[];
  actorsCastIds: Array<any> = [];
  actorsFound: Array<any> = [];
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
    //Put a validation to limit to 5 the amount of movies
    this.selectedMovies.push(movie);
    this.onCancel();

    if (this.selectedMovies.length > 1) {
      this.findFuckingActor();
    }

  }

  public findFuckingActor() {
    let counter = 0;
    for (let movie of this.selectedMovies) {
      this.moviesService.getMovieCredits(movie.id).subscribe(
            data => {
              let that = this;
              console.log("casting individual", data.cast);

              data.cast.map(function(cast) {

                if (that.actorsCastIds.indexOf(cast.id) != -1) {
                  console.log("casting individual", cast);
                  that.actorsFound.push( {id: cast.id, name: cast.name});
                  
                } else {
                  that.actorsCastIds.push(cast.id);
                }

              });

              if (counter >= 1) {
                //just call this function after comparing at least two movies
                this.makeMatchActors();
              }
              counter++;
            },
            err => {
              console.log(err);
            },
            () => console.log("item loaded...")
      );
    }

  }

  public makeMatchActors() {
    let that = this;
    setTimeout(function(){
      //console.log(that.actorsFound);
    }, 2000);

  }

}
