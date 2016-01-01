import {Component} from 'angular2/core';
import {RouterLink} from 'angular2/router';
import { LoginComponent } from '../auth/login.component';
import { SignUpComponent } from '../auth/sign-up.component';

@Component({
  selector: 'header',
  templateUrl: './app/components/layout/header.html',
  directives: [RouterLink, LoginComponent, SignUpComponent]
})
export class HeaderComponent {
}
