import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { MoviesPage } from '../pages/movies/movies';
import { MovieDetailsPage } from '../pages/movie-details/movie-details';

@NgModule({
  declarations: [
    MyApp,
    MoviesPage,
    MovieDetailsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MoviesPage,
    MovieDetailsPage
  ],
  providers: []
})
export class AppModule {}
