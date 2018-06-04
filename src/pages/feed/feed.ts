import { MovieProvider } from './../../providers/movie/movie';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

	public nome_usuario:string = "Lucas de Oliveira Mesquita";
	public list:any[] = ["Lucas", "3", "Leticia", "3.14", true];
	public lista_filmes = new Array<any>();
	
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
		public movieProvider: MovieProvider) {
		
	}

	public somaDoisNumeros(num1:number, num2:number): void {
		alert(num1 + num2)
	}

	public teste(): void {
		this.objeto_feed["qntd_comments"]++;
	}

	public liked(): void {
		this.objeto_feed.qntd_likes++;
	}

	ionViewDidLoad() {
		//console.log('ionViewDidLoad FeedPage');
		//this.somaDoisNumeros(0, 10000000);
		this.movieProvider.getLatestMovie().subscribe(
			data => {
				//data = data as any;
				this.lista_filmes = data as any;
				console.log(data);
			}, error => {
				console.log(error);
			}
		);
	}

}
