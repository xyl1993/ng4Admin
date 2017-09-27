import { Component,Input,Output,EventEmitter,OnChanges,SimpleChanges } from '@angular/core';

declare var jQuery:any;  //定义jquery
@Component({
  selector: 'twbs-pagination',
  templateUrl: './twbs-pagination.component.html',
  styleUrls:['./twbs-pagination.scss']
})

export class TwbsPagination {
  // 当改变了选择时给父组件发送事件
  @Output() selectPage:EventEmitter<number> = new EventEmitter();

  @Input() ifInit: boolean;  //其值等于在父模板中绑定变量的值(是否是初始化)

  constructor() {
  }
  ngOnInit(): void {
    console.log(this.ifInit);
  }
  ngOnChanges(changes: SimpleChanges):void{
  }

  initPagination(pages):void{
      var _this = this;
      jQuery('#pagination-demo').twbsPagination({
          totalPages: pages,
          visiblePages: 7,
          initiateStartPageClick:false,   //首次不执行点击事件
          first: '首页',
          prev: '上一页',
          next: '下一页',
          last: '末页',
          onPageClick: function (event, page) {
            console.log(1);
            // _this.selectPage.emit(page);
          }
      });
  }
}
