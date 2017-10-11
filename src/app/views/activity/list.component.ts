import { Component,ViewChild,ViewContainerRef } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
// import { SharkModule } from '@ntesmail/shark-angular2';
// import {TwbsPagination} from '../../components';

import {ListService} from './list.service';

import {config} from '../../global/config';
@Component({
  templateUrl: 'list.component.html',
  providers: [ListService],
})
export class ListComponent {

  //向分页组件传递消息
  // @ViewChild(TwbsPagination) pagination: TwbsPagination;
  
  //分页对象,判断是否需要初始化对象
  // paginatinEmit={
  //   ifInit:true
  // };
  
  private admin = JSON.parse(sessionStorage.getItem('admin'));

  public acvityList = [];

  public pagination = {
    segmentSize:config.segmentSize,
    currentPage:config.currentPage,
    totalPage:0
  }

  constructor(public toastr: ToastsManager,vcr: ViewContainerRef,public listService: ListService) { 
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit():void{
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
    _this.listService.list(param).then((res)=>{
      if(res.code === 200){
        _this.acvityList = res.data.list;
        //初始化分页插件
        _this.pagination.totalPage = res.data.totalPage;
      }
    })
  }

  showSuccess() {
    this.toastr.success('You are awesome!', 'Success!');
  }
}
