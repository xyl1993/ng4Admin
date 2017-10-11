import { Component,ViewChild, } from '@angular/core';
import {TwbsPagination} from '../../components';

import {ActivityService} from './activity.service';

import {signOptionList} from './activity.data';
@Component({
  templateUrl: 'edit.component.html',
  providers: [ActivityService],
})
export class EditComponent {

  public signOptionList = signOptionList
  public  ckeditorContent = `<p>My HTML</p>`;
  constructor(public activityService: ActivityService) { }

  ngOnInit():void{

  }

  
}
