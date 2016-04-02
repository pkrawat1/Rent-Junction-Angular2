/// <reference path="../../../typings/tsd.d.ts" />

"use stict";

import { Component } from "angular2/core";
import { ROUTER_DIRECTIVES, RouteConfig } from "angular2/router";
import { HeaderComponent } from "./layout/header.component";
import { HomeComponent } from "./home/home.component";
import { ProductsComponent } from "./products/products.component";
import { ProductDetailsComponent } from "./products/product-details.component";
import { NewProductComponent } from "./products/new-product.component";

@Component({
  selector: "app",
  templateUrl: "./app/components/app.html",
  directives: [ROUTER_DIRECTIVES, HeaderComponent]
})
@RouteConfig([
  { path: "/home", as: "Home", component: HomeComponent, useAsDefault: true },
  { path: "/products/:subCategoryId", as: "Products", component: ProductsComponent},
  { path: "/product/:productId", as: "ProductDetail", component: ProductDetailsComponent},
  { path: "/product/new", as: "NewProductComponent", component: NewProductComponent}
])
export class AppComponent {
  constructor() {
    NProgress.configure({
      showSpinner: false
    });
    $(document).foundation();
  }
}
