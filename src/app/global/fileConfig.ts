import {apiConfig} from './apiConfig';

export const fileConfig ={
    // allowedFileType:['png'],
    autoUpload:true,
    isHTML5:true,
    // headers:[{
    //   name:'Content-Type',
    //   value:'multipart/form-data'
    // }],
    method:'post',
    authToken:'',
    // maxFileSize:4000,
    removeAfterUpload:false,
    url:apiConfig.base_api_host+'system/qiniu/upload'
  }