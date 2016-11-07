import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
  
export class MoviesService {  

    private apiUrl: string = "http://api.themoviedb.org/3";
    private apiKey: string = "f023990d17c293f4b163142cdbad6597";
    private moviesEndopoint = "/search/movie";

    static get parameters() {
        return [[Http]];
    }
  
    constructor(private http:Http) {
         
    }
  
    searchMovies(movieName) {
        var url = this.apiUrl+this.moviesEndopoint+'?query=' + encodeURI(movieName) + '&api_key='+this.apiKey;
        var response = this.http.get(url).map(res => res.json());
        return response;
    }

}