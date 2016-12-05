import { Component, ViewChild } from '@angular/core';
import { Nav, Platform} from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { MoviesPage } from '../pages/movies/movies';
import { ActorsPage } from '../pages/actors/actors';
import { HomePage } from '../pages/home/home';
import { FindActorByMoviesPage } from '../pages/find-actor-by-movies/find-actor-by-movies';

//Every page object MUST have this structure otherwise the app will break ;)
export interface PageObj {
  title: string;
  icon: string;
  component: any,
  index?: number;
}


@Component({
  templateUrl: 'app.template.html'
})

export class MyApp {

  @ViewChild(Nav) nav: Nav;

  rootPage = HomePage;

  // List of pages that can be navigated to from the left menu
  appPages: PageObj[] = [
    { title: 'Home', component: HomePage, icon: 'home' },
    { title: 'Movies', component: MoviesPage, icon: 'film' },
    { title: 'Actors', component: ActorsPage, icon: 'person'},
    { title: 'Find Actor by Movies', component: FindActorByMoviesPage , icon: 'person'}
  ];

  constructor(platform: Platform) {
    platform.ready().then(() => {
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page: PageObj) {
    //opens a new page
    this.nav.setRoot(page.component);

  }

}
