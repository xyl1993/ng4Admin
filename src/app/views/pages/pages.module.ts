import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { P404Component } from './404.component';
import { P500Component } from './500.component';
import { LoginComponent } from './login.component';
import { RegisterComponent } from './register.component';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { PagesRoutingModule } from './pages-routing.module';
import {CustomFormsModule} from "ng2-validation";
@NgModule({
  imports: [ 
    CommonModule,
    PagesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    CustomFormsModule
  ],
  declarations: [
    P404Component,
    P500Component,
    LoginComponent,
    RegisterComponent
  ]
})
export class PagesModule { }
