import { Component } from 'angular2/core';
import { ROUTER_DIRECTIVES, RouteConfig } from 'angular2/router';
import { HeaderComponent } from './layout/header.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './products/product-details.component'

@Component({ 
  selector: 'app',
  template: `<header></header><router-outlet></router-outlet>`,
  directives: [ROUTER_DIRECTIVES, HeaderComponent]
})
@RouteConfig([
  { path: '/home', as: 'Home', component: HomeComponent, useAsDefault: true },
  { path: '/products/:subCategoryId', as: 'Products', component: ProductsComponent},
  { path: '/product/:productId', as: 'ProductDetail', component: ProductDetailsComponent}
])
export class AppComponent {

}