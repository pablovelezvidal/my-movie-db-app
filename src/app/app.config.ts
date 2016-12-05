import { OpaqueToken } from "@angular/core";
/* Opaque tokens avoid naming collisions
const TOKEN_A = new OpaqueToken('token');
const TOKEN_B = new OpaqueToken('token');

TOKEN_A === TOKEN_B // false */

export let APP_CONFIG = new OpaqueToken("app.config");

export interface IAppConfig {
     apiUrl : string,
     apiKey : string,
     moviesEndpoint : string
     popularMoviesEndpoint : string,
     upcomingMoviesEndpoint : string,
     nowplayingMoviesEndpoint : string
}

export const AppConfig: IAppConfig = {    
     apiUrl : "http://api.themoviedb.org/3",
     apiKey : "f023990d17c293f4b163142cdbad6597",
     moviesEndpoint : "/search/movie",
     popularMoviesEndpoint : "/movie/popular",
     upcomingMoviesEndpoint : "/movie/upcoming",
     nowplayingMoviesEndpoint : "/movie/now_playing"
};