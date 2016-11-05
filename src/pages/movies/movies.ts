import { Component }     from '@angular/core';
import { NavController } from 'ionic-angular';
import { MoviesService } from '../../services/movies.service';
import { MovieDetailsPage }  from '../movie-details/movie-details';
 
@Component({
    templateUrl: './movies.html',
    providers: [MoviesService]
})
 
export class MoviesPage {
 
    movies: Array<any>;
 
    constructor(private navController: NavController, private moviesService: MoviesService) {
 
    }
   
    searchMovieDB(event, key) {
        if(event.target.value.length > 2) {
            this.moviesService.searchMovies(event.target.value).subscribe(
                data => {
                    this.movies = data.results;
                },
                err => {
                    console.log(err);
                },
                () => console.log('Movie Search Complete')
            );
        }
    } 
   
    goToMovieDetails(movie) {
        this.navController.push(MovieDetailsPage, {
            movie: movie
        });
    }
}