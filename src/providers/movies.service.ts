import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
  
export class MoviesService {  

    private apiUrl: string = "http://api.themoviedb.org/3";
    private apiKey: string = "f023990d17c293f4b163142cdbad6597";
    private moviesEndpoint = "/search/movie";
    private popularMoviesEndpoint = "/movie/popular";
    private upcomingMoviesEndpoint = "/movie/upcoming";
    private nowplayingMoviesEndpoint = "/movie/now_playing";

    static get parameters() {
        return [[Http]];
    }
  
    constructor(private http:Http) {
    }
  
    searchMovies(movieName) {
        var response = this.getUrl(this.moviesEndpoint, encodeURI(movieName));
        return response;
        
    }

    getPopularMovies() {
        var response = this.getUrl(this.popularMoviesEndpoint);
        return response;
    }

    getUpcomingMovies() {
        var response = this.getUrl(this.upcomingMoviesEndpoint);
        return response;
    }

    getNowPlayingMovies() {
        var response = this.getUrl(this.nowplayingMoviesEndpoint);
        return response;
    }

    getUrl(endPoint:string, query?:string) {
        var url = this.apiUrl+endPoint+(query ? "?query="+query+"&" : "?")+'api_key='+this.apiKey;
        var response = this.http.get(url).map(res => res.json());
        return response;
    }

}