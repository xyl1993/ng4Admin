import { Component,ViewChild,ViewContainerRef } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ModalDirective } from 'ngx-bootstrap/modal/modal.component';
//ng2日期控件
import { defineLocale } from 'ngx-bootstrap/bs-moment';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { zhCn } from 'ngx-bootstrap/locale';
//end
import {ActivityService} from './activity.service';
import {config,PaginationConfig} from '../../global/config';
@Component({
  templateUrl: 'list.component.html',
  providers: [ActivityService],
})
export class ListComponent {

  //向分页组件传递消息
  // @ViewChild(TwbsPagination) pagination: TwbsPagination;
  
  //分页对象,判断是否需要初始化对象
  // paginatinEmit={
  //   ifInit:true
  // };
  public myModal;

  private admin = JSON.parse(sessionStorage.getItem('admin'));
  bsConfig: Partial<BsDatepickerConfig>;

  public acvityList = [];
  public bigTotalItems;
  public pagination = PaginationConfig;

  constructor(public toastr: ToastsManager,vcr: ViewContainerRef,public activityService: ActivityService) { 
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit():void{
    //日期初始化
    defineLocale('zh-cn',zhCn);
    this.bsConfig = Object.assign({}, {
      locale: 'zh-cn',
      showWeekNumbers:false,
      isDisabled:true,
      dateInputFormat:'YYYY-MM-DD'
    });
    
    this.getInfoList(1);
  }
  public pageChanged(event:any):void {
    this.getInfoList(event.page);
  }
  // 事件处理函数
  getInfoList(page):void {
    let _this = this;
    let param = 'currentPage='+page+'&sysId='+_this.admin.id+'&keyword=';
    _this.activityService.selectActivityList(param).then((res)=>{
      if(res.code === 200){
        _this.acvityList = res.data.list;
        _this.bigTotalItems = res.data.totalPage;
      }
    })
  }

  public showSuccess() {
    this.toastr.success('You are awesome!', 'Success!');
  }
  public handler(type: string, $event: ModalDirective) {
    console.log(type);
  }
}
