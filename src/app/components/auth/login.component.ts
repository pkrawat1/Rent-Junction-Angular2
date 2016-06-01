import {Component} from "@angular/core";
import {FORM_PROVIDERS, FormBuilder, Validators, NgClass} from "@angular/common";
import { ModalComponent } from "../modal/modal.component";
import { ThumbnailPipe } from "../../pipes/thumbnail.pipe";
import {AuthService} from "../../services/auth.service";
import {ControlMessages} from "../../directives/control-messages.component";
import {ValidationService} from "../../services/validation.service";

@Component({
  selector: "login",
  templateUrl: "./app/components/auth/login.html",
  directives: [ModalComponent, ControlMessages, NgClass],
  providers: [AuthService]
})
export class LoginComponent {
  public email: string;
  public password: string;
  userForm: any;

  constructor(public auth: AuthService, private fb: FormBuilder) {
    this.userForm = this.fb.group({
      "email": ["", Validators.compose([Validators.required, ValidationService.emailValidator])],
      "password": ["", Validators.compose([Validators.required, ValidationService.passwordValidator])]
    });
  };

  login() {
    this.auth.login(this.userForm.value);
  }
}
