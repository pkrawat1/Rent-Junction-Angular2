import {Component} from 'angular2/core';
import {Category} from '../category/category';

@Component({
  selector: 'show-category',
  template: './app/components/category/category.html',
  inputs: ['category']
})
export class CategoryComponent {
  public category: Category;
}
