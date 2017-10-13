import { Component,ViewChild, } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';

import {ActivityService} from './activity.service';

import {signOptionList} from './activity.data';

import {fileConfig} from '../../global/fileConfig';
import {ckConfig} from '../../global/ckeditorConfig';
import { activityConfig } from '../../global/config';

@Component({
  templateUrl: 'edit.component.html',
  providers: [ActivityService],
})
export class EditComponent {

  public signOptionList = signOptionList
  public ckConfig = ckConfig;
  public moreOptionStatus = false;

  public activityDefault = {
    hotImgFile:'默认图片:'+activityConfig.defaultImage,
    hotImgLoading:false,
    shareImgFile:'默认图片:'+activityConfig.defaultImage,
    shareImgLoading:false
  }

  public activityObject = {
    hotImg:activityConfig.defaultImage,
    shareImg:activityConfig.defaultImage
  };

  //hotImg 上传控件
  public uploader:FileUploader = new FileUploader(fileConfig);

  //shareImg 上传控件
  public shareUploader:FileUploader = new FileUploader(fileConfig);

  constructor(public activityService: ActivityService) {
    var that = this;
    that.uploader.onBeforeUploadItem = (item)=>{
      that.activityDefault.hotImgLoading = true;
    }
    that.uploader.onCompleteItem = (item, response, status, headers)=>{
      //监听上传完成事件
      let res =JSON.parse(response);
      if(res.result){
        that.activityObject.hotImg = res.url;
        that.activityDefault.hotImgFile = item.file.name;
        that.activityDefault.hotImgLoading = false;
      }
    }
    that.shareUploader.onBeforeUploadItem = (item)=>{
      that.activityDefault.shareImgLoading = true;
    }
    that.shareUploader.onCompleteItem = (item, response, status, headers)=>{
      //监听上传完成事件
      let res =JSON.parse(response);
      if(res.result){
        that.activityObject.shareImg = res.url;
        that.activityDefault.shareImgFile = item.file.name;
        that.activityDefault.shareImgLoading = false;
      }
    }
  }

  ngOnInit():void{

  }

  loadMoreOption():void{
    this.moreOptionStatus = !this.moreOptionStatus;
  }
}
