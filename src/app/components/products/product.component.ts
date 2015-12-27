import {Component} from 'angular2/core';
import {Product} from '../../interfaces/product';
import { ThumbnailPipe } from '../../pipes/thumbnail.pipe';

@Component({
  selector: 'show-product',
  templateUrl: './app/components/product/product.html',
  inputs: ['product'],
  pipes: [ThumbnailPipe]
})
export class ProductComponent {
  public product: Product;
}
