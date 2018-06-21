import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FeedPage } from '../feed/feed';
import { MovieProvider } from '../../providers/movie/movie';

/**
 * Generated class for the MovieDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-movie-details',
  templateUrl: 'movie-details.html',
})
export class MovieDetailsPage {

  public filme;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public movieProvider: MovieProvider) {
  }

  ionViewDidEnter() {
    this.filme = this.navParams.get("filme");
    this.movieProvider.getDetailsMovie(this.filme.id).subscribe(
      data => {
        this.filme = (data as any);
        console.log(this.filme);
      }, error => {
        console.log(error);
      }
    );
  }

}
