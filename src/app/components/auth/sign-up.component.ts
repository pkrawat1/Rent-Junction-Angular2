import {Component} from "@angular/core";
import { ModalComponent } from "../modal/modal.component";

@Component({
  selector: "sign-up",
  templateUrl: "./app/components/auth/sign-up.html",
  directives: [ModalComponent]
})
export class SignUpComponent {
  public user: any;

  login() {
    alert("hello");
  }
}
