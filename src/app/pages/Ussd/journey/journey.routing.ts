/**
 * Created by kioni on 2/4/17.
 */
import { Routes, RouterModule }  from '@angular/router';

import { ModuleWithProviders } from '@angular/core';
import {Journey} from "./journey.component";

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: Journey
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
