/*** The loading controller ***/
import { LoadingController } from 'ionic-angular';
import { Injectable } from '@angular/core';

@Injectable()
export class LoadingClass{

  loading: any;

  constructor(public loadingCtrl: LoadingController) { }

  startLoading() {
    this.loading = this.loadingCtrl.create({
      content: "Please wait...",
      dismissOnPageChange: true
    });
    this.loading.present();
  }

  stopLoading() {
    this.loading.dismiss();
  }

}