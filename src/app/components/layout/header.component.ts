import {Component} from 'angular2/core';
import {RouterLink} from 'angular2/router';

@Component({
  selector: 'header',
  templateUrl: './app/components/layout/header.html',
  directives: [RouterLink]
})
export class HeaderComponent {
}
