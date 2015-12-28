import { Injectable } from 'angular2/core';
import { Http, Response } from 'angular2/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor(private http: Http) { 
    this.http = http;
  }
  
  getCategories() {
    return this.http.get('http://localhost:3000/api/v1/categories.json')
                    .map((res: Response) => res.json());
  }
  
  getProducts(subCategoryId: string){
    return this.http.get('http://localhost:3000/api/v1/get_products/' + subCategoryId)
                    .map((res: Response) => res.json());
  }
  
  getProduct(productId: string){
    return this.http.get('http://localhost:3000/api/v1/products/' + productId)
                    .map((res: Response) => res.json());
  }

}