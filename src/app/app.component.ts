import { Component, ViewChild } from '@angular/core';
import { MenuController, Nav, Platform} from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { MoviesPage } from '../pages/movies/movies';

//Every page object MUST have this structure otherwise the app will break ;)
export interface PageObj {
  title: string;
  icon: string;
  logsOut?: boolean;
  index?: number;
}


@Component({
  templateUrl: 'app.template.html'
})
export class MyApp {
  // the root nav is a child of the root app component
  // @ViewChild(Nav) gets a reference to the app's root nav
  @ViewChild(Nav) nav: Nav;

  rootPage = MoviesPage;

  // List of pages that can be navigated to from the left menu
  // the left menu only works after login
  // the login page disables the left menu
  appPages: PageObj[] = [
    { title: 'Movies', icon: 'film' },
    { title: 'Actors', icon: 'person'}
  ];

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }


}
