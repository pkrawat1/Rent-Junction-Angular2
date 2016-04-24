import { Injectable } from "angular2/core";
import { Http, Response } from "angular2/http";
import "rxjs/add/operator/map";
import { AuthHttp } from "angular2-jwt";

@Injectable()

export class DataService {

  constructor(private http: Http, public authHttp: AuthHttp) {
    this.http = http;
  }

  getCategories() {
    return this.http.get("http://localhost:3000/api/v1/categories.json")
                    .map((response) => response.json());
  }

  getProducts(subCategoryId: string) {
    return this.http.get("http://localhost:3000/api/v1/categories/products/" + subCategoryId)
                    .map((res: Response) => res.json());
  }

  getProduct(productId: string) {
    return this.http.get("http://localhost:3000/api/v1/products/" + productId)
                    .map((res: Response) => res.json());
  }

}
