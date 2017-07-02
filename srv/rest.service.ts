//created by just be project builder 1.0.0
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import { RestParams } from '../classes/rest-params';

@Injectable()
export class RestService {	
	constructor (private http: Http) {}
		
	get(params:RestParams){
        return this.http.get(params.uri)
            .map(this.extractData)
            .catch(this.handleError);
	};
	post(params:RestParams){
	  return this.http.post(params.uri,params.payload,{headers:params.headers})
	    .map(this.extractData)
	    .catch(this.handleError);
	};
	put(params:RestParams){
	  return this.http.put(params.uri,params.payload)
	    .map(this.extractData)
	    .catch(this.handleError);
	};
	delete(params:RestParams){
	  return this.http.delete(params.uri)
	    .map(this.extractData)
	    .catch(this.handleError);
	}
	//sub methodes
	private extractData(res: Response) {
	  return res;
	  // let body = res.json();
	  // return body._body || { };
	}
	private handleError (error: Response | any) {
		return Observable.throw(error.json() || 'Server error');
		// return error;
	  // let errMsg: string;
	  // if (error instanceof Response) {
	  //   const body = error.json() || '';
	  //   const err = body.error || JSON.stringify(body);
	  // } else {
	  //   errMsg = error.message ? error.message : error.toString();
	  // }
	  // return Observable.throw(errMsg);
	}

		
}