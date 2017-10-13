import { Injectable }    from '@angular/core';
import { Http, Response, Headers, RequestOptions,URLSearchParams } from '@angular/http';
import { apiConfig } from '../../global/apiConfig';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class LoginService {

  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  public login(param:String) {
    return this.http.post(apiConfig.base_api_host+'/account/login'+param,{
        headers:this.headers
    })
    .toPromise()
    .then(response => response.json())
    .catch((error:any) => Observable.throw(error || 'Server error'));
  }
}