import { Injectable }    from '@angular/core';
import { Http, Response, } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import {AppServer} from "../../util/app.server";

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ActivityService {

  constructor(private http: AppServer ){ }

  public selectActivityList(data:String) {

    return this.http.httpGet('activity/selectActivityList?'+data).toPromise()
    .then(response => response.json())
    .catch((error:any) => Observable.throw(error || 'Server error'));
  }

  public selectActivityEntry(data:String) {

// var boxArr = $('.answer-box');
// var answer = [];
// for(var i=0,len=boxArr.length;i<len;i++){
//     var type = $(boxArr[i]).data('type');
//     var value = $(boxArr[i]).find('input[type="radio"][checked]').val();
//     if(!value){
//         alert('题目尚未答完');
//         return
//     }
//     answer.push({
//         type:type,
//         value:value
//     })
// }


    return this.http.httpGet('activity/selectActivityEntry?'+data).toPromise()
    .then(response => response.json())
    .catch((error:any) => Observable.throw(error || 'Server error'));
  }
}