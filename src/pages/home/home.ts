import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { IntroPage } from '../intro/intro'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goToIntroPage(): void{
    //this.navCtrl.pop();
    this.navCtrl.push(IntroPage);
  }

}
