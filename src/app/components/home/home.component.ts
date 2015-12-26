import {Component, OnInit} from 'angular2/core';

@Component({
  selector: 'home',
  templateUrl: './app/components/home/home.html',
  directives: [],
  providers: []
})
export class HomeComponent {
  public title = 'home';

  // constructor(private _heroService: HeroService) { }

  // getHeroes() {
  //   this._heroService.getHeroes().then(heroes => this.heroes = heroes);
  // }

  // ngOnInit() {
  //   this.getHeroes();
  // }
}
