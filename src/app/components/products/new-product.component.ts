import {Component} from 'angular2/core';
import {FORM_PROVIDERS, FormBuilder, Validators} from 'angular2/common';
import {Product} from '../../interfaces/product';
import { Category } from '../../interfaces/category';
import { DataService } from '../../services/data.service';
import {RouterLink, RouteParams} from 'angular2/router';
import { ThumbnailPipe } from '../../pipes/thumbnail.pipe';
import { Http, Response, Headers } from 'angular2/http';

@Component({
  selector: 'new-product',
  templateUrl: './app/components/products/new-product.html',
  directives: [RouterLink],
  pipes: [ThumbnailPipe],
  providers: [DataService]
})

export class NewProductComponent {
  title: string;
  categories: Category[] = [];
  product_form: any;
  selectedCategory: Category;
  
  constructor(private _dataService: DataService, private http: Http, private fb: FormBuilder){
    this.product_form = fb.group({
      name: ['', Validators.required],
      desc: ['', Validators.required],
      mft_date: ['', Validators.required],
      rent: ['', Validators.required],
      category_id: [''],
      sub_category_id: [''],
      logo: ['']
    });
  };
  
  ngOnInit() {
    this.title = 'New Product';
    this.getCategories();
  }

  getCategories(){
    this._dataService.getCategories()
        .subscribe((categories:Category[]) => {
          this.categories = categories;
          NProgress.done();
        });
  }
  
  showSubCategories(category_id){
    this.categories.forEach(category => {
      if(category._id == category_id){
        this.selectedCategory = category; 
      }
    });
  }
  
  save_product(){
    // This will be called when the user clicks on the Login button
    event.preventDefault();
    console.log(this.product_form);

    // We call our API to log the user in. The username and password are entered by the user
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    
    this.http.post('http://localhost:3000/api/v1/products',
      JSON.stringify({product: this.product_form.value}),
      {headers: headers}
    )
    .subscribe((data) => {
      if(data.json().status){
        toastr.success('Product Saved Successfully'); 
      }
      else{
        toastr.error('Invalid/Empty Data Entered')
      }
    })
  }
  
}
