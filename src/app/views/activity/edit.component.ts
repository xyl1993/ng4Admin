import { Component,ViewChild, } from '@angular/core';
import {TwbsPagination} from '../../components';

import {EditService} from './edit.service';

import {signOptionList} from './edit.data';
@Component({
  templateUrl: 'edit.component.html',
  providers: [EditService],
})
export class EditComponent {

  public signOptionList = signOptionList
  public  ckeditorContent = `<p>My HTML</p>`;
  constructor(public editService: EditService) { }

  ngOnInit():void{

  }

  
}
