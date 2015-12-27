import {Component} from 'angular2/core';
import {SubCategory} from '../category/category';

@Component({
  selector: 'show-sub-category',
  template: './app/components/sub-category/sub-category.html',
  inputs: ['sub_category']
})
export class SubCategoryComponent {
  public sub_category: SubCategory;
}
