import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the MovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MovieProvider {

  private idioma = "pt-BR";
  private baseAPIPath = "https://api.themoviedb.org/3";

  constructor(public http: HttpClient) {
    console.log('Hello MovieProvider Provider');
  }

  private getAPIKey(): string {
    return "08fe5b9bfc12ebc57eccc1674f30ce0c";
  }

  getLatestMovie(page = 1): Observable<Object>{
    return this.http.get(this.baseAPIPath + "/movie/popular?api_key=" + this.getAPIKey() + "&language=" + this.idioma + "&page=" + page);
  }

  getDetailsMovie(id) {
    return this.http.get(this.baseAPIPath + "/movie/" + id + "?api_key=" + this.getAPIKey() + "&language=" + this.idioma);
  }

}
