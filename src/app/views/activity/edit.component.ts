import { Component,ViewChild, } from '@angular/core';
import {TwbsPagination} from '../../components';

import {EditService} from './edit.service';
@Component({
  templateUrl: 'edit.component.html',
  providers: [EditService],
})
export class EditComponent {

  constructor(public editService: EditService) { }

  ngOnInit():void{
  }

  
}
