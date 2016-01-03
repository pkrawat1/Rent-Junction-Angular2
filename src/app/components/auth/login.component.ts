import {Component} from 'angular2/core';
import { ModalComponent } from '../modal/modal.component';
import { ThumbnailPipe } from '../../pipes/thumbnail.pipe';
import {AuthService} from '../../services/auth.service'

@Component({
  selector: 'login',
  templateUrl: './app/components/auth/login.html',
  directives: [ModalComponent],
  providers: [AuthService]
})
export class LoginComponent {
  public email:string;
  public password: string;
  
  constructor(public auth: AuthService){};
  
  login(email, password){
    this.auth.login(email, password);
  }
}
