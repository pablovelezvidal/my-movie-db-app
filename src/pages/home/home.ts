import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MoviesService } from '../../services/movies.service';
//import {MovieInfo} from '../movie-info/movie-info';
 
@Component({
    templateUrl: './home.html',
    providers: [MoviesService]
})
 
export class HomePage {
 
    movies: Array<any>;
 
    constructor(private navController: NavController, private moviesService: MoviesService) {
 
    }
   
    searchMovieDB(event, key) {
        if(event.target.value.length > 2) {
            this.moviesService.searchMovies(event.target.value).subscribe(
                data => {
                    this.movies = data.results; 
                    console.log(data);
                },
                err => {
                    console.log(err);
                },
                () => console.log('Movie Search Complete')
            );
        }
    } 
   
    /*itemTapped(event, movie) {
        this.navController.push(MovieInfo, {
            movie: movie
        });
    }*/
}