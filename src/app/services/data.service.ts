import { Injectable } from 'angular2/core';
import { Http, Response } from 'angular2/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor(private http: Http) { 
    this.http = http;
  }
  
  getCategories() {
    return this.http.get('https://rntjunc.herokuapp.com/api/v1/categories.json')
                    .map((res: Response) => res.json());
  }

}