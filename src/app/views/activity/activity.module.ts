import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { SharkModule } from '@ntesmail/shark-angular2';
import {CommonModule } from '@angular/common';

import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ModalModule } from 'ngx-bootstrap/modal';

import {ToastModule} from 'ng2-toastr/ng2-toastr';
import { FileSelectDirective } from 'ng2-file-upload';
import { CKEditorModule } from 'ng2-ckeditor';
import { SelectModule } from 'ng2-select';

import { ActivityRoutingModule } from './activity-routing.module';
import { ListComponent } from './list.component';
import { EditComponent } from './edit.component';
import { EntryComponent } from './entry.component';
import {AppServer} from "../../util/app.server";
@NgModule({
  imports: [
    ActivityRoutingModule,
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    ToastModule.forRoot(),
    BsDatepickerModule.forRoot(),
    PaginationModule.forRoot(),
    TabsModule,
    SelectModule,
    HttpModule,
    CommonModule,
    SharkModule,
    FormsModule,
    CKEditorModule
  ],
  declarations: [
    FileSelectDirective,
    ListComponent,
    EditComponent,
    EntryComponent
  ],
  providers:[
    AppServer
  ]
})
export class ActivityModule { }
