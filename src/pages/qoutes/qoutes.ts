import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Quote } from '../../data/quote.interface';


@IonicPage()
@Component({
  selector: 'page-qoutes',
  templateUrl: 'qoutes.html',
})
export class QoutesPage {

  quoteGroup: {category: string, quotes: Quote[], icon: string};
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.quoteGroup = this.navParams.data;
  }

}
