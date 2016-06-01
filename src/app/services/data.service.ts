import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import "rxjs/add/operator/map";

@Injectable()

export class DataService {

  constructor(private http: Http) {
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
