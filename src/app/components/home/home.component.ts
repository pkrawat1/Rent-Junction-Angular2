import { Component } from 'angular2/core';
import { CORE_DIRECTIVES } from 'angular2/common';
import { RouterLink } from 'angular2/router';
//import { Observable } from 'rxjs/Observable';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'categories',
  templateUrl: './app/components/home/home.html',
  directives: [CORE_DIRECTIVES, RouterLink],
  providers: [DataService]
})

export class HomeComponent{
  title: String;
  categories: Array<any>;

  constructor(private _dataService: DataService) {}

  ngOnInit() {
    this.title = 'Categories';

    this._dataService.getCategories()
        .subscribe((categories:any[]) => {
          this.categories = this.categories = categories;
        });
  }
}
