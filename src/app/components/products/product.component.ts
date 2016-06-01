import {Component} from "@angular/core";
import {RouteSegment} from "@angular/router";
import {Product} from "../../interfaces/product";
import { ThumbnailPipe } from "../../pipes/thumbnail.pipe";

@Component({
  selector: "show-product",
  directives: [],
  templateUrl: "./app/components/products/product.html",
  inputs: ["product"],
  pipes: [ThumbnailPipe]
})
export class ProductComponent {
  public product: Product;
}
