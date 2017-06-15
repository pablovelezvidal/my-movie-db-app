import { Component, Input } from '@angular/core';
import { Platform, NavParams, ViewController } from 'ionic-angular';

/** Modal Content Page **/
@Component({
  templateUrl: 'modal-content-page.html'
})
export class ModalContentPage {
  character;

  @Input() item: any;
  @Input() showMovieDetails: boolean = false;
  @Input() showActorDetails: boolean = false;

  //This tells the child components to be shown for a modal window
  public showInModal: boolean = true;

  constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController
  ) { 
    this.item = this.params.get('item');
    this.showMovieDetails = this.params.get('showMovieDetails');
    this.showActorDetails = this.params.get('showActorDetails');
  }

  dismiss() {
    this.viewCtrl.dismiss();
    console.log("calls the fucking dismiss method")
  }
}