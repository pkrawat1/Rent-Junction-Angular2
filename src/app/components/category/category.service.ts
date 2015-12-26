import {HTTP_PROVIDERS, Http} from 'angular2/http';
//import {CategoryDirective} from './category.directive';
import {Injectable} from 'angular2/core';

@Injectable()

export class CategoryService {
  categories: Array<any>;

  constructor(private http: Http){
    this.http = http;
  }

  getCategories() {
    this.http.get('https://rnt_junc.herokuapp.com/categories')
      .map(res => res.json())
  }

}