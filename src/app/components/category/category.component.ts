import {Component} from "@angular/core";
import {Category} from "../../interfaces/category";
import { ThumbnailPipe } from "../../pipes/thumbnail.pipe";

@Component({
  selector: "show-category",
  templateUrl: "./app/components/category/category.html",
  inputs: ["category", "selectedCategory"],
  pipes: [ThumbnailPipe]
})
export class CategoryComponent {
  public category: Category;
  public selectedCategory: Category;
}
