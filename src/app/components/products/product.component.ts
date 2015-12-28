import {Component} from 'angular2/core';
import {RouterLink} from 'angular2/router'
import {Product} from '../../interfaces/product';
import { ThumbnailPipe } from '../../pipes/thumbnail.pipe';

@Component({
  selector: 'show-product',
  directives: [RouterLink],
  templateUrl: './app/components/products/product.html',
  inputs: ['product'],
  pipes: [ThumbnailPipe]
})
export class ProductComponent {
  public product: Product;
}
