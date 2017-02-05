import {Component} from "@angular/core";
import {FormGroup, AbstractControl, FormBuilder, Validators} from "@angular/forms";
import 'style-loader!./journey.scss';
/**
 * Created by kioni on 2/4/17.
 */

@Component({
  selector: 'journey',
  templateUrl: './journey.html',
})

export class Journey {

  public form: FormGroup;
  public text: AbstractControl;
  public submitted:boolean = false;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      'text': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
    });

    this.text = this.form.controls['text'];
  }

  public onSubmit(values:Object):void {
    this.submitted = true;
    if (this.form.valid) {
      // your code goes here
      // console.log(values);
    }
  }
}
