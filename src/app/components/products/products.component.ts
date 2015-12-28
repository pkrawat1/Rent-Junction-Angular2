import { Component } from 'angular2/core';
import { RouterLink, RouteParams } from 'angular2/router';
import { Product } from '../../interfaces/product';
import { ThumbnailPipe } from '../../pipes/thumbnail.pipe';
import { DataService } from '../../services/data.service'
import { ProductComponent } from './product.component'

@Component({
  selector: 'products',
  directives: [RouterLink, ProductComponent],
  providers: [DataService],
  pipes: [ThumbnailPipe],
  templateUrl: './app/components/products/products.html'
})
export class ProductsComponent {
  title: string;
  subCategoryId: string;
  products: Product[];
  
  constructor(private _data_service: DataService, params: RouteParams){
    this.subCategoryId = params.get('subCategoryId');
  };
  
  ngOnInit() {
      this.title = 'Products';
      this.getProducts(this.subCategoryId);
  }
  
  getProducts(subCategoryId: string){
    this._data_service.getProducts(subCategoryId)
                        .subscribe((products: Product[]) => {
                          this.products = products;
                        })
  }
}
