import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import "rxjs/add/operator/map";
import {Observable} from 'rxjs/Observable';
import {Category} from "../interfaces/category";
import {Product} from "../interfaces/product";

@Injectable()

export class DataService {
  _base_url : string;

  constructor(private http: Http) {
    this.http = http;
    //this._base_url = 'http://localhost:3000/api/v1/';
    this._base_url = 'https://rntjunc.herokuapp.com/api/v1/';
  }

  getCategories() : Observable<Category[]>{
    return this.http.get(this._base_url + "categories.json")
                    .map((res : Response) => res.json());
  }

  getProducts(subCategoryId: string) : Observable<Product[]> {
    return this.http.get(this._base_url + "categories/products/" + subCategoryId)
                    .map((res: Response) => res.json());
  }

  getProduct(productId: string) : Observable<Product>{
    return this.http.get(this._base_url + "products/" + productId)
                    .map((res: Response) => res.json());
  }

}
