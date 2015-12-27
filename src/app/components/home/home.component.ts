import { Component } from 'angular2/core';
import { CORE_DIRECTIVES } from 'angular2/common';
import { RouterLink } from 'angular2/router';
import { DataService } from '../../services/data.service';
import { ThumbnailPipe } from '../../pipes/thumbnail.pipe';
import { Category } from '../../interfaces/category';
import { CategoryComponent } from '../category/category.component';
import { SubCategoryComponent } from '../sub-category/sub-category.component';

@Component({
  selector: 'home',
  directives: [CORE_DIRECTIVES, RouterLink, CategoryComponent, SubCategoryComponent],
  providers: [DataService],
  pipes: [ThumbnailPipe],
  templateUrl: './app/components/home/home.html'
})



export class HomeComponent{
  title: string;
  categories: Category[] = [];
  selectedCategory: Category; 

  constructor(private _dataService: DataService) {}

  ngOnInit() {
      this.title = 'Categories';
      this.getCategories();
  }

  getCategories(){
    this._dataService.getCategories()
        .subscribe((categories:Category[]) => {
          this.categories = categories;
        });
  }

  showSubCategories(category: Category){
    this.selectedCategory = category;
  }
}
