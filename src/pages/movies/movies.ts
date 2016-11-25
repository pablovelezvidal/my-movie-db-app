import { Component, ViewChild }     from '@angular/core';
import { NavController } from 'ionic-angular';
import { MoviesService } from '../../providers/movies.service';
import { MovieDetailsPage }  from '../movie-details/movie-details';
import { Movie }  from '../../app/core-components/entities/movie';
import { LoadingClass } from  '../../providers/loading';
import { Keyboard } from 'ionic-native';
 
@Component({
    templateUrl: './movies.html',
    providers: [MoviesService, LoadingClass]
})
 
export class MoviesPage {
  movies: Movie[];
  searchTitle: string = "Movies";
  searchBarTitle:string = "Search Movies";
  @ViewChild('searchBar') mySearchBar ;

  constructor(private navController: NavController, private moviesService: MoviesService, private loading: LoadingClass) {
  }

  //put the focus on the searchbar
  public setFocus() {
    setTimeout(() => {
        this.mySearchBar.setFocus();
        Keyboard.show();
    },500);

  }

  public onCancel(ev) { 
    // Reset the field
    this.movies = [];
    ev.target.value = '';
    this.setFocus();
  }

  public onClear(ev) {
    // Reset the field
    this.movies = [];
    ev.target.value = '';
    this.setFocus();
  }

  public searchMovies(event, key) {
    //Search movies by clicking the search button
    let searchString = this.mySearchBar.value;
    if (searchString != "") {
      this.loading.startLoading();
      this.moviesService.searchMovies(searchString).subscribe(
          data => {
              this.movies = data.results;
              this.loading.stopLoading();
              this.setFocus();
          },
          err => {
              console.log(err);
          },
          () => console.log("items loaded...")
      );
    } else {
      this.validateSearchValues();
    }
  } 
   
  public searchMoviesAutoComplete(event, key) {
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
    }
  } 
  
  public goToMovieDetails(movie) {
    this.navController.push(MovieDetailsPage, {
        movie: movie.item
    });
  }

  private validateSearchValues() {
    this.searchBarTitle = "Type at least two characters...";
    setTimeout(() => {
        this.searchBarTitle = "Search Movies";
        this.mySearchBar.setFocus();
    },2000);
  }

}