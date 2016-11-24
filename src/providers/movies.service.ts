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
    //Counters used for paginating the results 
    private pagesPagination = {
        popular : {page: 0, name: "popular"},
        upcoming : {page: 0, name: "upcoming"},
        nowPlaying : {page: 0, name: "now_playing"}
    }
  
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
        //reset the other pages so when clicked they start at page 1
        this.resetPageValues(this.pagesPagination.popular.name);
        //make the request
        var pageQuery = 'page=' + ++this.pagesPagination.popular.page;
        var response = this.getUrl(this.popularMoviesEndpoint, "", pageQuery);
        return response;
    }

    getUpcomingMovies() {
        //reset the other pages so when clicked they start at page 1
        this.resetPageValues(this.pagesPagination.upcoming.name);
        //make the request
        var pageQuery = 'page=' + ++this.pagesPagination.upcoming.page;
        var response = this.getUrl(this.upcomingMoviesEndpoint, "", pageQuery);
        return response;
    }

    getNowPlayingMovies() {
        //reset the other pages so when clicked they start at page 1
        this.resetPageValues(this.pagesPagination.nowPlaying.name);
        //make the request
        var pageQuery = 'page=' + ++this.pagesPagination.nowPlaying.page;
        var response = this.getUrl(this.nowplayingMoviesEndpoint, "", pageQuery);
        return response;
    }

    getUrl(endPoint:string, query?:string, page?:string) {
        var url = this.apiUrl+endPoint+'?api_key='+this.apiKey+
                    (query ? "&query="+query : "")+
                        (page ? "&"+page : "");
                        
        var response = this.http.get(url).map(res => res.json());
        return response;
    }

    private resetPageValues(current){
        let pages = this.pagesPagination;
        Object.keys(pages).map(function(key, index) {
            pages[key].page = (pages[key].name != current) ? 0 : pages[key].page;
        });
    }

}