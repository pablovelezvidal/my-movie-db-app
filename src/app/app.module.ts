import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { MoviesPage } from '../pages/movies/movies';
import { ActorsPage } from '../pages/actors/actors';
import { MovieDetailsPage } from '../pages/movie-details/movie-details';
import { SearchBarComponent, CardListComponent } from './core-components/common-components/common-components';
//import { CardListComponent }  from './core-components/card-list/card-list';

@NgModule({
  declarations: [
    MyApp,
    MoviesPage,
    MovieDetailsPage,
    ActorsPage,
    SearchBarComponent,
    CardListComponent
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MoviesPage,
    MovieDetailsPage,
    ActorsPage,
    SearchBarComponent,
    CardListComponent
  ],
  providers: []
})
export class AppModule {}
