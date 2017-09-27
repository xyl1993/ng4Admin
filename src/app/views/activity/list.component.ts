import { Component,ViewChild } from '@angular/core';
import {TwbsPagination} from '../../components';
@Component({
  templateUrl: 'list.component.html'
})
export class ListComponent {

  @ViewChild(TwbsPagination) pagination: TwbsPagination;

  paginatinEmit={
    ifInit:true
  };
  
  
  constructor() { }

  ngOnInit():void{
    this.getInfoList(1);
  }

  // 事件处理函数
  getInfoList(currentPage) {
    var _this = this;
    if(_this.paginatinEmit.ifInit){
      _this.paginatinEmit = {
        ifInit:false
      };
      _this.pagination.initPagination(15);
    }
  }
}
