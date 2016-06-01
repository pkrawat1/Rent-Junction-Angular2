import {Component} from "@angular/core";

@Component({
  selector: "modal",
  templateUrl: "./app/components/modal/modal.html",
  inputs: ["title", "visible", "klass"]
})
export class ModalComponent {
  public title: string;
  public visible: string;
  public klass: string;
}
