import { MovieProvider } from './../../providers/movie/movie';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { MovieDetailsPage } from '../movie-details/movie-details';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: 'page-feed',
	templateUrl: 'feed.html',

})
export class FeedPage {

	public lista_filmes = new Array<any>();
	public loader;
	public refresher;

	public page = 1;
	public infiniteScroll;

	public objeto_feed = {
		titulo: "Lucas de Oliveira",
		data: "30 de Maio de 2018",
		descricao: "Estamos criando uma Rede Social",
		qntd_likes: 12,
		qntd_comments: 5,
		time_comment: "11h atrás"
	}

	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		public movieProvider: MovieProvider,
		public loadingCtrl: LoadingController) {	}
		
	ionViewDidEnter() {
		this.carregarFilmes();
	}

	doRefresh(refresher) {
		console.log('Begin async operation', refresher);
		this.refresher = refresher;
		this.carregarFilmes();
	}

	iniciarCarregamento() {
		this.loader = this.loadingCtrl.create({
			content: "Please wait...",
		});
		this.loader.present();
	}

	fecharCarregamento() {
		this.loader.dismissAll();
	}

	public somaDoisNumeros(num1: number, num2: number): void {
		alert(num1 + num2)
	}

	public teste(): void {
		this.objeto_feed["qntd_comments"]++;
	}

	public liked(): void {
		this.objeto_feed.qntd_likes++;
	}


	carregarFilmes(novaPagina: boolean = false) {
		this.iniciarCarregamento();
		this.movieProvider.getLatestMovie(this.page).subscribe(
			(data: any) => {
				if(novaPagina) {
					this.lista_filmes = this.lista_filmes.concat(data.results);
					this.infiniteScroll.complete();
				} else { 
					this.lista_filmes = data.results;
				}
				console.log(data.results);
				console.log(this.lista_filmes);

				this.fecharCarregamento();
				if(this.refresher)
					this.refresher.complete();
			}, error => {
				console.log(error);
				this.fecharCarregamento();
				this.refresher.complete();
			}
		);
	}

	goToMovieDetails(filme) {
		this.navCtrl.push(MovieDetailsPage, {filme: filme});
	}

	doInfinite(infiniteScroll) {
		
		this.page += 1;
		this.infiniteScroll = infiniteScroll;
		this.carregarFilmes(true);
		
	}

}
