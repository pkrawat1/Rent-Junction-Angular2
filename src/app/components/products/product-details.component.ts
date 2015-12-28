import {Component} from 'angular2/core';
import {Product} from '../../interfaces/product';
import {RouterLink, RouteParams} from 'angular2/router';
import {DataService} from '../../services/data.service'
import { ThumbnailPipe } from '../../pipes/thumbnail.pipe';

@Component({
  selector: 'product-details',
  templateUrl: './app/components/products/product-details.html',
  directives: [RouterLink],
  pipes: [ThumbnailPipe],
  providers: [DataService]
})
export class ProductDetailsComponent {
  title: string;
  subCategoryId: string;
  productId: string;
  selectedProduct: Product;
  
  constructor(private _data_service: DataService, params: RouteParams){
    this.subCategoryId = params.get('subCategoryId');
    this.productId = params.get('productId');
  };
  
  ngOnInit() {
      this.title = 'Products';
      this.getProduct(this.productId);
  }
  
  getProduct(productId: string){
    this._data_service.getProduct(productId)
                        .subscribe((product: Product) => {
                          this.selectedProduct = product;
                        })
  }
}
