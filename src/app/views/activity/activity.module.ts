import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { SharkModule } from '@ntesmail/shark-angular2';

import {ToastModule} from 'ng2-toastr/ng2-toastr';
// Components Routing
import { ActivityRoutingModule } from './activity-routing.module';
//form
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import {CommonModule } from '@angular/common';
// Modal Component
import { ModalModule } from 'ngx-bootstrap/modal';
// Tabs Component
import { TabsModule } from 'ngx-bootstrap/tabs';
import { CKEditorModule } from 'ng2-ckeditor';
import { ListComponent } from './list.component';
import { EditComponent } from './edit.component';
import {TwbsPagination} from '../../components';
import {AppServer} from "../../util/app.server";
@NgModule({
  imports: [
    ActivityRoutingModule,
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    ToastModule.forRoot(),
    TabsModule,
    HttpModule,
    CommonModule,
    SharkModule,
    FormsModule,
    CKEditorModule
  ],
  declarations: [
    ListComponent,
    EditComponent,
    TwbsPagination
  ],
  providers:[
    AppServer
  ]
})
export class ActivityModule { }
