import {Component, OnInit} from 'angular2/core';
import {CategoryService} from '../category/category.service';

@Component({
  selector: 'home',
  templateUrl: './app/components/home/home.html',
  directives: [],
  bindings: [CategoryService],
  providers: []
})

export class HomeComponent implements OnInit{
  public title = 'home';

  constructor(private _categoryService: CategoryService) { }

  getCategories() {
    console.log(this._categoryService.getCategories());
    //.subscribe(categories => this.categories = categories)
  }

  ngOnInit() {
    this.getCategories();
  }
}
