import { Component }     from '@angular/core';
import { NavController } from 'ionic-angular';
import { MoviesService } from '../../providers/movies.service';
import { MovieDetailsPage }  from '../movie-details/movie-details';
import { Movie }  from '../../app/core-components/entities/movie';
 
@Component({
    templateUrl: './movies.html',
    providers: [MoviesService]
})
 
export class MoviesPage {

    movies: Movie[];
    searchTitle: string = "Movies";
 
    constructor(private navController: NavController, private moviesService: MoviesService) {
    }
   
    searchItemsDB(event, key) {
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
   
    goToMovieDetails(movie) {
        this.navController.push(MovieDetailsPage, {
            movie: movie.item
        });
    }

}