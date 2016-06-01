import {Component} from '@angular/core';
import {SubCategory} from '../../interfaces/category';
import { ThumbnailPipe } from '../../pipes/thumbnail.pipe';

@Component({
  selector: 'show-sub-category',
  templateUrl: './app/components/sub-category/sub-category.html',
  inputs: ['sub_category'],
  pipes: [ThumbnailPipe]
})
export class SubCategoryComponent {
  public sub_category: SubCategory;
}
