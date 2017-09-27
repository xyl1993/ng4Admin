import { Component,Output,EventEmitter } from '@angular/core';

declare var jQuery:any;  //定义jquery

@Component({
  selector: 'twbs-pagination',
  templateUrl: './twbs-pagination.component.html',
  styleUrls:['./twbs-pagination.scss']
})

export class TwbsPagination {
  // 当改变了选择时给父组件发送事件
  @Output() selectPage:EventEmitter<number> = new EventEmitter();

  private itemsPerPage = 10;

  constructor() {}

  initPagination(totalItems):void{
      var _this = this;
      var pages = _this.calculateTotalPages(totalItems);
      jQuery('#pagination-demo').twbsPagination({
          totalPages: pages,
          visiblePages: 7,
          initiateStartPageClick:false,   //首次不执行点击事件
          first: '首页',
          prev: '上一页',
          next: '下一页',
          last: '末页',
          onPageClick: function (event, page) {
            _this.selectPage.emit(page);
          }
      });
  }

  calculateTotalPages(totalItems){
    var totalPages = this.itemsPerPage < 1 ? 1 : Math.ceil(totalItems / this.itemsPerPage);
    return Math.max(totalPages || 0, 1);
  }
}
