import {Ussd} from "./ussd.component";
import {Journey} from "../journey/journey.component";
import {routing} from "./ussd.routing";
import {NgaModule} from "../../theme/nga.module";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
/**
 * Created by kioni on 2/4/17.
 */
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    routing,
  ],
  declarations: [
    Ussd,
    Journey
  ]
})
export class UssdModule {
}
