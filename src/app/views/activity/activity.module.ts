import { NgModule } from '@angular/core';

// Components Routing
import { ActivityRoutingModule } from './activity-routing.module';

//form
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

// Modal Component
import { ModalModule } from 'ngx-bootstrap/modal';

// Tabs Component
import { TabsModule } from 'ngx-bootstrap/tabs';

import { ListComponent } from './list.component';
import {
  TwbsPagination
} from '../../components';
@NgModule({
  imports: [
    ActivityRoutingModule,
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    TabsModule
  ],
  declarations: [
    ListComponent,
    TwbsPagination
  ]
})
export class ActivityModule { }
