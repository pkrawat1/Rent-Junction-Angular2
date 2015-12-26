import { Component } from 'angular2/core';
import { CORE_DIRECTIVES } from 'angular2/common';
import { RouterLink } from 'angular2/router';
import { DataService } from '../../services/data.service';
import { ThumbnailPipe } from '../../pipes/thumbnail.pipe';

@Component({
  selector: 'home',
  templateUrl: './app/components/home/home.html',
  directives: [CORE_DIRECTIVES, RouterLink],
  providers: [DataService],
  pipes: [ThumbnailPipe]
})

export class HomeComponent{
  title: string;
  categories: any[] = [];

  constructor(private _dataService: DataService) {}

  getCategories(){
    this._dataService.getCategories()
        .subscribe((categories:any[]) => {
          this.categories = categories;
        });
  }

  ngOnInit() {
    this.title = 'Categories';
    this.getCategories();
  }
}
