import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
  
export class ActorsService {  

    private apiUrl: string = "http://api.themoviedb.org/3";
    private apiKey: string = "f023990d17c293f4b163142cdbad6597";
    private actorsEndpoint: string = "/search/person";
    private actorEndpoint: string = "/person";

    static get parameters() {
        return [[Http]];
    }
  
    constructor(private http:Http) {
         
    }
  
    searchActors(actorName) {
        var url = this.apiUrl+this.actorsEndpoint+'?query=' + encodeURI(actorName) + '&api_key='+this.apiKey;
        var response = this.http.get(url).map(res => res.json());
        return response;
    }

    getActor(id) {
        var url = this.apiUrl+this.actorEndpoint + '/' + encodeURI(id) + '?api_key='+this.apiKey;
        var response = this.http.get(url).map(res => res.json());
        return response;
    }



}