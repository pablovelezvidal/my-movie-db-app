import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LoadingClass } from  '../../providers/loading';

/*
  Generated class for the MovieDetails page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-movie-details',
  templateUrl: 'movie-details.html',
    providers: [LoadingClass]
})
export class MovieDetailsPage {

  @Input() movie = {};
  @Input() showInModal:boolean = false;
  @Output() dismissEvent: any = new EventEmitter(); 

  constructor(public navCtrl: NavController, public navParams: NavParams, private loading: LoadingClass) {
    this.showInModal = this.navParams.get('showInModal');
  }

  //method emitted to close the modal window
  closeModalWindow(event, item) {
    this.dismissEvent.emit();
    console.log("close modal window")
  }

  ionViewDidLoad() {
    this.loading.startLoading();
    this.movie = this.navParams.get('movie');
    setTimeout(() => {
      this.loading.stopLoading();
    },750);
  }

}
