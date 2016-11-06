import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Actors page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-actors',
  templateUrl: 'actors.html'
})
export class ActorsPage {

  searchTitle: string = "Actors";
  public actors: Array<any>;

  constructor(public navCtrl: NavController) {}

  searchItemsDB(event, key) {
      console.log("si llama al metodo que es, actors");
      /*if(event.target.value.length > 2) {
          this.moviesService.searchMovies(event.target.value).subscribe(
              data => {
                  this.actors = data.results;
              },
              err => {
                  console.log(err);
              },
              () => console.log('Movie Search Complete')
          );
      }*/
  } 

  ionViewDidLoad() {
    console.log('Hello ActorsPage Page');
  }

}
