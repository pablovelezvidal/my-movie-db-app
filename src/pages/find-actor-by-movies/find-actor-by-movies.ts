import { Component, ViewChild } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { Keyboard } from 'ionic-native';

import { MoviesService } from '../../providers/movies.service';
import { Movie }  from '../../app/core-components/entities/movie';
import { LoadingClass } from  '../../providers/loading';
import { ModalContentPage }  from '../../app/core-components/common-components/modal-content-page';

/*
  Class documentation
*/
@Component({
  selector: 'page-find-actor-by-movies',
  templateUrl: 'find-actor-by-movies.html',
  providers: [MoviesService, LoadingClass, ModalContentPage]
})

export class FindActorByMoviesPage {
  movies: Movie[];
  actorsCastIds: Array<any> = [];
  actorsFound: Array<any> = [];
  selectedMovies: Array <Movie> = [];
  searchTitle: string = "Movies";
  searchBarTitle:string = "Start selecting Movies to find your actor";

  @ViewChild('searchBar') mySearchBar;

  constructor(public navCtrl: NavController, private moviesService: MoviesService, private loading: LoadingClass, public modalCtrl: ModalController,) {}

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

  /*public addToSelectedMovies(movie) {
    //Put a validation to limit to 5 the amount of movies
    this.selectedMovies.push(movie);
    this.onCancel();

    if (this.selectedMovies.length > 1) {
      this.findFuckingActor(movie);
    } else {
      //is just the first movie, no need for comparison
      this.findFuckingActor(movie, true);
    }

  }*/

  public addToSelectedMovies(movie) {
    this.moviesService.getMovieCredits(movie.id).subscribe(
      //first go and get the cast information of the movie
          data => {
            movie.cast = data.cast;
            this.selectedMovies.push(movie);
            this.onCancel();

            
            this.findFuckingActor();
            
          },
          err => {
            console.log(err);
          },
          () => console.log("item loaded...")
    );

  }

  public findFuckingActor() {
    if (this.selectedMovies.length > 1) {

      let that = this; 
      
      for (let movie of this.selectedMovies) {
        let cast = movie.cast;
        
        if (that.actorsCastIds.indexOf(movie.cast.id) != -1) {
          //If the id already exists add the actor to the actorsFound array,
          // but first check if the actor already exists
          let doesIdExist = that.actorsFound.some( actor => actor.id === cast.id );

          if (!doesIdExist) {
            that.actorsFound.push( { id: cast.id, 
                                      name: cast.name, 
                                      profile_path: cast.profile_path });
          }

        } else {
          that.actorsCastIds.push(cast.id);

        }
      }

    } 
  }


  // public findFuckingActor(movie, firstMovie = false) {
  //     this.moviesService.getMovieCredits(movie.id).subscribe(
  //           data => {
  //             let that = this;
  //             data.cast.map(function(cast) {
  //               if (firstMovie == true) {
  //                 //when the first movie is added, no necessity for look for a match, so just add the ids
  //                 that.actorsCastIds.push(cast.id);

  //               } else {
  //                 if (that.actorsCastIds.indexOf(cast.id) != -1) {
  //                   //If the id already exists add the actor to the actorsFound array,
  //                   // but first check if the actor already exists
  //                   let doesIdExist = that.actorsFound.some( actor => actor.id === cast.id );

  //                   if (!doesIdExist) {
  //                     that.actorsFound.push( { id: cast.id, 
  //                                               name: cast.name, 
  //                                               profile_path: cast.profile_path });
  //                   }

  //                 } else {
  //                   that.actorsCastIds.push(cast.id);

  //                 }

  //               }

  //             });
  //           },
  //           err => {
  //             console.log(err);
  //           },
  //           () => console.log("item loaded...")
  //     );

  // }

  goToMovieDetails(event, movie) {
    let modal = this.modalCtrl.create(ModalContentPage, {item: movie, showMovieDetails: true});
    modal.present();

  }

  removeCard(item) {
    this.selectedMovies = this.selectedMovies.filter(function(movie){
      return movie.id != item.item.id;
    });
  }

}
