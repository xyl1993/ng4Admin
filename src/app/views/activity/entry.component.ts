import { Component,ViewChild,ViewContainerRef } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import {ActivityService} from './activity.service';

import {config} from '../../global/config';
import { defineLocale } from 'ngx-bootstrap/bs-moment';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { zhCn } from 'ngx-bootstrap/locale';

@Component({
  templateUrl: 'entry.component.html',
  providers: [ActivityService],
})
export class EntryComponent {
  private admin = JSON.parse(sessionStorage.getItem('admin'));
  locale = 'zh-cn';
  bsConfig: Partial<BsDatepickerConfig>;
  public acvityList = [];

  public pagination = {
    segmentSize:config.segmentSize,
    currentPage:config.currentPage,
    totalPage:0
  }

  constructor(public toastr: ToastsManager,vcr: ViewContainerRef,public activityService: ActivityService) { 
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit():void{
    defineLocale('zh-cn',zhCn);
    this.bsConfig = Object.assign({}, {
      locale: this.locale,
      showWeekNumbers:false,
      isDisabled:false,
      dateInputFormat:'YYYY/MM/DD'
    });
    let initObj = {
      data:{
        page:1
      }
    }
    this.getInfoList(initObj);
  }

  // 事件处理函数
  getInfoList(e) {
    let _this = this;
    let param = 'currentPage='+e.data.page+'&sysId='+_this.admin.id+'&keyword=';
    _this.activityService.selectActivityEntry(param).then((res)=>{
      if(res.code === 200){
        _this.acvityList = res.data.list;
        //初始化分页插件
        _this.pagination.totalPage = res.data.totalPage;
      }
    })
  }

}
