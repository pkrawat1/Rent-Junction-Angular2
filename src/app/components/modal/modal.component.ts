import {Component} from 'angular2/core';

@Component({
  selector: 'modal',
  templateUrl: './app/components/modal/modal.html',
  inputs: ['title']
})
export class ModalComponent {
  public title: string;
}
