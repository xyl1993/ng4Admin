import { Injectable }    from '@angular/core';
import { Http, Response, } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import {AppServer} from "../../util/app.server";

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ListService {

  constructor(private http: AppServer ){ }

  public list(data:String) {

    return this.http.httpGet('activity/selectActivityList?'+data).toPromise()
    .then(response => response.json())
    .catch((error:any) => Observable.throw(error || 'Server error'));
  }
}