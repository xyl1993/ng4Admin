import { Injectable }    from '@angular/core';
import { Http, Response, } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';

import {AppServer} from "../../util/app.server";

@Injectable()
export class ActivityService {

  constructor(private http: AppServer ){ }

  public selectActivityList(data:String) {

    return this.http.httpGet('activity/selectActivityList?'+data).toPromise()
    .then(response => response.json())
    .catch((error:any) => Observable.throw(error || 'Server error'));
  }

  public selectActivityEntry(data:String) {

    return this.http.httpGet('activity/selectActivityEntry?'+data).toPromise()
    .then(response => response.json())
    .catch((error:any) => Observable.throw(error || 'Server error'));
  }
}