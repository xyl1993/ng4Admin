import {Injectable} from "@angular/core";
import {Http,Headers} from "@angular/http";
import {apiConfig} from '../global/apiConfig';
import { config } from '../global/config';
/**
 * 全局http请求,添加headers等过滤操作
 */

@Injectable()
export class AppServer {
    
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(public http:Http) {

  }

  createAuthorizationHeader(headers: Headers) {
    headers.append('Content-Type', 'application/json'); 
    headers.append('access-token', sessionStorage.getItem('token')); 
  }

  // http.get
  httpGet(url) {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.get(apiConfig.base_api_host+url, {
      headers: headers
    });
  }
  // http.post
  httpPost(url, data) {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.post(apiConfig.base_api_host+url, data, {
      headers: headers
    });
  }

}