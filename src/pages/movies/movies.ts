import { Component }     from '@angular/core';
import { NavController } from 'ionic-angular';
import { MoviesService } from '../../providers/movies.service';
import { MovieDetailsPage }  from '../movie-details/movie-details';
import { Movie }  from '../../app/core-components/entities/movie';
import { LoadingClass } from  '../../providers/loading';
 
@Component({
    templateUrl: './movies.html',
    providers: [MoviesService, LoadingClass]
})
 
export class MoviesPage {

    movies: Movie[];
    searchTitle: string = "Movies";
 
    constructor(private navController: NavController, private moviesService: MoviesService, private loading: LoadingClass) {
    }
   
    searchItemsDB(event, key) {
        if(event.target.value.length > 2) {
            this.loading.startLoading();
            this.moviesService.searchMovies(event.target.value).subscribe(
                data => {
                    this.movies = data.results;
                    this.loading.stopLoading();
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