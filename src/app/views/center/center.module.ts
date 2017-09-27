import { NgModule } from '@angular/core';

import { PersonalComponent } from './personal.component';
// Components Routing
import { CenterRoutingModule } from './center-routing.module';

//form
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

// Modal Component
import { ModalModule } from 'ngx-bootstrap/modal';

// Tabs Component
import { TabsModule } from 'ngx-bootstrap/tabs';

@NgModule({
  imports: [
    CenterRoutingModule,
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    TabsModule
  ],
  declarations: [
    PersonalComponent
  ]
})
export class CenterModule { }
