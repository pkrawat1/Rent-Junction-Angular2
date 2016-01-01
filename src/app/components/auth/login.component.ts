import {Component} from 'angular2/core';
import { ModalComponent } from '../modal/modal.component';
import { ThumbnailPipe } from '../../pipes/thumbnail.pipe';

@Component({
  selector: 'login',
  templateUrl: './app/components/auth/login.html',
  directives: [ModalComponent]
})
export class LoginComponent {
  public user: any;
  
  login(){
    alert('hello');
  }
}
