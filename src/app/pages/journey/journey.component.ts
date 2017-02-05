import {Component} from "@angular/core";
import {FormGroup, AbstractControl, FormBuilder, Validators} from "@angular/forms";
import 'style-loader!./journey.scss';
import {BackendApis} from "../../theme/services/HTTP/backend.apis";
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
  public options: AbstractControl;
  public submitted: boolean = false;
  public screens: Array<any> = [];
  public all_screens: any;
  public special_screens: Array<any> = [];

  constructor(fb: FormBuilder, public backendApis: BackendApis) {

    this.backendApis.get_screen_content().subscribe(
      response => {
        let data = response.json();
        this.all_screens = data;
        for (let key in data) {
          if (key == 'initial_screen') {
          }
          else {
            let screen = data[key];
            if (screen['type'] == 'http_screen' || screen['type'] == 'router_screen') {
              if(screen['type'] == 'router_screen'){
                this.special_screens.push([key, screen])
              }
            }
            else {
              this.screens.push([key, screen])
            }
          }
        }
      },
      error => {
        let error_message = error.json();
        console.log(error_message)
      }
    );
    this.form = fb.group({
      'text': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'options': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
    });

    this.text = this.form.controls['text'];
    this.options = this.form.controls['options'];
  }

  public onSubmit(values: Object): void {
    this.submitted = true;
    if (this.form.valid) {
      // your code goes here
      // console.log(values);
    }
  }


  public onClicked(): void {
    console.log("clicked");
  }

  public goTo(id: string) {
    console.log(id);
    let doc = document.getElementById(id);
    console.log(doc);
    doc.scrollIntoView(id)
}
}
