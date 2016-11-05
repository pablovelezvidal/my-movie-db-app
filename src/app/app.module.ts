import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MovieDetailsPage } from '../pages/movie-details/movie-details';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MovieDetailsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MovieDetailsPage
  ],
  providers: []
})
export class AppModule {}
