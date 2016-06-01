import { Component } from "@angular/core";
import { CORE_DIRECTIVES } from "@angular/common";
import { DataService } from "../../services/data.service";
import { ThumbnailPipe } from "../../pipes/thumbnail.pipe";
import { Category } from "../../interfaces/category";
import { CategoryComponent } from "../category/category.component";
import { SubCategoryComponent } from "../sub-category/sub-category.component";

@Component({
  selector: "home",
  directives: [CORE_DIRECTIVES, CategoryComponent, SubCategoryComponent],
  providers: [DataService],
  pipes: [ThumbnailPipe],
  templateUrl: "./app/components/home/home.html"
})



export class HomeComponent {
  title: string;
  categories: Category[] = [];
  selectedCategory: Category;

  constructor(private _dataService: DataService) {}

  isAuthenticated() {
    return localStorage.getItem("jwt");
  }

  ngOnInit() {
    this.title = "Categories";
    this.getCategories();
  }

  getCategories() {
    NProgress.start();
    this._dataService.getCategories()
        .subscribe((categories: Category[]) => {
          this.categories = categories;
          NProgress.done();
        });
  }

  showSubCategories(category: Category) {
    this.selectedCategory = category;
  }
}
