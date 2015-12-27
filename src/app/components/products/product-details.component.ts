import {Component} from 'angular2/core';
import {Product} from '../../interfaces/product';
import { ThumbnailPipe } from '../../pipes/thumbnail.pipe';

@Component({
  selector: 'product-details',
  templateUrl: './app/components/products/product-details.html',
  pipes: [ThumbnailPipe]
})
export class ProductDetailsComponent {
  
}
