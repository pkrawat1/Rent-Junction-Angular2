/// <reference path="../../../typings/tsd.d.ts" />

"use strict";

import { Component } from "@angular/core";
import { ROUTER_DIRECTIVES, Routes } from "@angular/router";
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
@Routes([
  { path: "/", component: HomeComponent},
  { path: "/products/:subCategoryId", component: ProductsComponent},
  { path: "/product/:productId", component: ProductDetailsComponent},
  { path: "/product_new", component: NewProductComponent}
])
export class AppComponent {
  ngOnInit() {
    NProgress.configure({
      showSpinner: false
    });
    $(document).foundation();
  }
}
