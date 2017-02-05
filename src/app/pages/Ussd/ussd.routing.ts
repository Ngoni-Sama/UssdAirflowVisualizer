/**
 * Created by kioni on 2/4/17.
 */
import { Routes, RouterModule }  from '@angular/router';
import {Journey} from "./journey/journey.component";
import {Ussd} from "./ussd.component";


// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Ussd,
    children: [
      { path: 'journey', component: Journey }
    ]
  }
];

export const routing = RouterModule.forChild(routes);
