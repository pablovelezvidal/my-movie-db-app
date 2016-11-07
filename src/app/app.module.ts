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

/* common components import */
import { SearchBarComponent, CardListComponent } from './core-components/common-components/common-components';
import { OnCreate } from './core-components/directives/on-create-event.directive';
import { StrLengthPipe } from './core-components/custom-pipes/str-length.pipe';

@NgModule({
  declarations: [
    MyApp,
    MoviesPage,
    MovieDetailsPage,
    ActorsPage,
    ActorDetailsPage,
    SearchBarComponent,
    CardListComponent,
    OnCreate,
    StrLengthPipe
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
    ActorDetailsPage,
    SearchBarComponent,
    CardListComponent
  ],
  providers: []
})
export class AppModule {}
