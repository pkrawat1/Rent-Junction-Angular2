import {Component} from "@angular/core";
import {ROUTER_PROVIDERS} from "@angular/router";
import { LoginComponent } from "../auth/login.component";
import { SignUpComponent } from "../auth/sign-up.component";

@Component({
  selector: "header",
  templateUrl: "./app/components/layout/header.html",
  directives: [LoginComponent, SignUpComponent]
})
export class HeaderComponent {
  public modalStatus = {"login-form": false, "sign-up-form": false};

  isAuthenticated() {
    return localStorage.getItem("jwt");
  }

  toggleModalStatus(modalFor: string) {
    this.modalStatus[modalFor] = !this.modalStatus[modalFor];
    $("." + modalFor).foundation("open");
  }

  logout() {
    localStorage.removeItem("jwt");
    toastr.info("You have been logged out");
  };
}
