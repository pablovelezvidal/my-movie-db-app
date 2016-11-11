import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { APP_CONFIG, IAppConfig } from '../app/app.config';
import {Inject, Injectable} from "@angular/core";
  
@Injectable()
export class MoviesService {  

    private apiUrl: string; 
    private apiKey: string; 
    private moviesEndpoint: string; 
    private popularMoviesEndpoint: string; 
    private upcomingMoviesEndpoint: string; 
    private nowplayingMoviesEndpoint: string;
    private http:Http;
  
    constructor(private httpObj:Http, @Inject(APP_CONFIG) private config:IAppConfig) {
        this.apiKey = config.apiKey;
        this.apiUrl = config.apiUrl;
        this.moviesEndpoint = config.moviesEndpoint;
        this.popularMoviesEndpoint = config.popularMoviesEndpoint;
        this.upcomingMoviesEndpoint = config.upcomingMoviesEndpoint;
        this.nowplayingMoviesEndpoint = config.nowplayingMoviesEndpoint;
        this.http = httpObj;
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