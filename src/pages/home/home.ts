import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  lst: number[] = [];
  constructor(public navCtrl: NavController) {
    for (var i = 0; i < 30; i++) {
    	this.lst.push(i);
    }
  }
}
