import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
// Components Routing
import { ActivityRoutingModule } from './activity-routing.module';
//form
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import {CommonModule } from '@angular/common';
// Modal Component
import { ModalModule } from 'ngx-bootstrap/modal';

// Tabs Component
import { TabsModule } from 'ngx-bootstrap/tabs';

import { ListComponent } from './list.component';
import { EditComponent } from './edit.component';
import {TwbsPagination} from '../../components';
import {AppServer} from "../../util/app.server";
@NgModule({
  imports: [
    ActivityRoutingModule,
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    TabsModule,
    HttpModule,
    CommonModule 
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
