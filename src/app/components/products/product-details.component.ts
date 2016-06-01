import {Component} from "@angular/core";
import {Product} from "../../interfaces/product";
import {RouteSegment} from "@angular/router";
import {DataService} from "../../services/data.service";
import { ThumbnailPipe } from "../../pipes/thumbnail.pipe";

@Component({
  selector: "product-details",
  templateUrl: "./app/components/products/product-details.html",
  directives: [],
  pipes: [ThumbnailPipe],
  providers: [DataService]
})
export class ProductDetailsComponent {
  title: string;
  subCategoryId: string;
  productId: string;
  selectedProduct: Product;

  constructor(private _data_service: DataService, params: RouteSegment) {
    this.subCategoryId = params.getParam("subCategoryId");
    this.productId = params.getParam("productId");
  };

  ngOnInit() {
      this.title = "Products";
      this.getProduct(this.productId);
  }

  getProduct(productId: string) {
    this._data_service.getProduct(productId)
                        .subscribe((product: Product) => {
                          this.selectedProduct = product;
                        });
  }
}
