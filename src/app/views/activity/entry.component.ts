import { Component,ViewChild,ViewContainerRef } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { defineLocale } from 'ngx-bootstrap/bs-moment';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { zhCn } from 'ngx-bootstrap/locale';

import {ActivityService} from './activity.service';
import {config,PaginationConfig} from '../../global/config';

@Component({
  templateUrl: 'entry.component.html',
  providers: [ActivityService]
})
export class EntryComponent {
  private admin = JSON.parse(sessionStorage.getItem('admin'));

  public bsConfig: Partial<BsDatepickerConfig>;
  
  public acvityList = [];
  public bigTotalItems;
  public pagination = PaginationConfig;

  constructor(public toastr: ToastsManager,vcr: ViewContainerRef,public activityService: ActivityService) { 
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit():void{
    defineLocale('zh-cn',zhCn);
    this.bsConfig = Object.assign({}, {
      locale: 'zh-cn',
      showWeekNumbers:false,
      isDisabled:true,
      dateInputFormat:'YYYY-MM-DD'
    });
    this.selectActivityEntry(1);
  }
  public pageChanged(event:any):void {
    this.selectActivityEntry(event.page);
  }
  // 事件处理函数
  selectActivityEntry(page):void {
    let _this = this;
    let param = 'currentPage='+page+'&sysId='+_this.admin.id+'&keyword=';
    _this.activityService.selectActivityEntry(param).then((res)=>{
      if(res.code === 200){
        _this.acvityList = res.data.list;
        _this.bigTotalItems = res.data.totalPage;
      }
    })
  }

}
