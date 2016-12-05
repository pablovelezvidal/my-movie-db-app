/*basic imports*/ 
import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';

/* movies imports */
import { MoviesPage } from '../pages/movies/movies';
import { MovieDetailsPage } from '../pages/movie-details/movie-details';

/* actors imports */
import { ActorsPage } from '../pages/actors/actors';
import { ActorDetailsPage } from '../pages/actor-details/actor-details';
import { FindActorByMoviesPage } from '../pages/find-actor-by-movies/find-actor-by-movies';

/* home imports */
import { HomePage } from '../pages/home/home';

/* common components import */
import { CardListComponent, ModalContentPage } from './core-components/common-components/common-components';
import { OnCreate } from './core-components/directives/on-create-event.directive';
import { StrLengthPipe } from './core-components/custom-pipes/str-length.pipe';

/* config values */
import { APP_CONFIG, AppConfig } from './app.config';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MoviesPage,
    MovieDetailsPage,
    ActorsPage,
    ActorDetailsPage,
    CardListComponent,
    ModalContentPage,
    OnCreate,
    StrLengthPipe,
    FindActorByMoviesPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MoviesPage,
    HomePage,
    MovieDetailsPage,
    ActorsPage,
    ActorDetailsPage,
    CardListComponent,
    ModalContentPage,
    FindActorByMoviesPage
  ],
  providers: [{ provide: APP_CONFIG, useValue: AppConfig }]
})
export class AppModule {}
