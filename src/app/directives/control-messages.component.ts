import {Component, Host} from "@angular/core";
import {NgFormModel} from "@angular/common";
import {ValidationService} from "../services/validation.service";

@Component({
    selector: "control-messages",
    inputs: ["controlName: control"],
    template: `<span class="form-error is-visible" *ngIf="errorMessage !== null">{{errorMessage}}</span>`
})
export class ControlMessages {
    controlName: string;
    constructor(@Host() private _formDir: NgFormModel) { }

    get errorMessage() {
        // Find the control in the Host (Parent) form
        let c = this._formDir.form.find(this.controlName);

        for (let propertyName in c.errors) {
	        // If control has a error
            if (c.errors.hasOwnProperty(propertyName) && c.touched) {
 		        // Return the appropriate error message from the Validation Service
                return ValidationService.getValidatorErrorMessage(propertyName);
            }
        }

        return null;
    }
}
