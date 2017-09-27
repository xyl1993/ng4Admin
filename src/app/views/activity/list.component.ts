import { Component,ViewChild, } from '@angular/core';
import {TwbsPagination} from '../../components';

import {ListService} from './list.service';

@Component({
  templateUrl: 'list.component.html',
  providers: [ListService],
})
export class ListComponent {

  //向分页组件传递消息
  @ViewChild(TwbsPagination) pagination: TwbsPagination;
  
  //分页对象,判断是否需要初始化对象
   paginatinEmit={
    ifInit:true
  };
  
  public acvityList = [];

  constructor(public listService: ListService) { }

  ngOnInit():void{
    this.getInfoList(1);
  }

  // 事件处理函数
  getInfoList(currentPage) {
    let _this = this;
    let param = "currentPage=1&sysId=45&keyword=";
    _this.listService.list(param).then((res)=>{
      if(res.code === 200){
        _this.acvityList = res.data.list;
        //初始化分页插件
        _this.initPagination(res.data.totalCount);
      }
    })
    
  }
  initPagination(totalCount){
    var _this = this;
    if(_this.paginatinEmit.ifInit){
      _this.paginatinEmit = {
        ifInit:false
      };
      _this.pagination.initPagination(totalCount);
    }
  }
}
