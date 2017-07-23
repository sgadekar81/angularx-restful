//created by just be project builder 1.0.0
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import { RestParams } from '../classes/rest-params';
import { RestEvents } from '../classes/rest-events';
import { LftSrv }     from 'angularx-headers/lft.service';

@Injectable()
export class RestService {	
	constructor (private http: Http,private _lftSrv:LftSrv) {}
	params:RestParams;
	get(params:RestParams){
		this.resolveRestInit(params);
		return this.http.get(params.uri)
				.map(this.extractData.bind(this))
				.catch(this.handleError.bind(this));
	};
	post(params:RestParams){
		this.resolveRestInit(params);
	  return this.http.post(params.uri,params.payload,{headers:this.getDftHdr(params.headers)})
	    .map(this.extractData.bind(this))
	    .catch(this.handleError.bind(this));
	};
	put(params:RestParams){
		this.resolveRestInit(params);
	  return this.http.put(params.uri,params.payload,{headers:this.getDftHdr(params.headers)})
	    .map(this.extractData.bind(this))
	    .catch(this.handleError.bind(this));
	};
	delete(params:RestParams){
		this.resolveRestInit(params);
	  return this.http.delete(params.uri)
	    .map(this.extractData.bind(this))
	    .catch(this.handleError.bind(this));
	}
	//sub methodes
	private extractData(res: Response) {
		this.resolveRestFin();
		
	  return res;
	  // let body = res.json();
	  // return body._body || { };
	}
	private handleError (error: Response | any) {
		this.resolveRestFin();
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

	private getDftHdr(hdrsArr:any){
		if(hdrsArr && hdrsArr.length>0){
			return this._lftSrv.hdrs(hdrsArr)
		}else{
			return this._lftSrv.hdrs('authorization','')
		}
	}

	private event(eventName:string,params:Object){
		let newEvent = new CustomEvent(eventName,{detail:params});
		document.dispatchEvent(newEvent);
	}
	private resolveRestInit(params:RestParams){
		this.params = params;
		if(params.events){
			this.event('angularx-restful-started',{msg:params.events.restInitMsg});
			this.resolveEventHandlers(this.params)
					.restInit({msg:params.events.restInitMsg});
		}
	}
	private resolveRestFin(){
		if(this.params.events){
			this.resolveEventHandlers(this.params)
					.restFin({msg:this.params.events.restFinMsg});
			this.event('angularx-restful-finished',{msg:this.params.events.restFinMsg});
		}
	}

	private resolveEventHandlers(params:RestParams){
		let eventhndlr = this.getEventHandlers();
		if(!eventhndlr.restInit){
			if(params.events.restInit){
				eventhndlr.restInit = params.events.restInit;
			}
		}
		if(!eventhndlr.restFin){
			if(params.events.restFin){
				eventhndlr.restFin = params.events.restFin;
			}
		}
		return eventhndlr;
	}



	// set default events handlers
	eventHandlers:RestEvents;
	setEventHandlers(eventHandlers:RestEvents){
		this.eventHandlers = eventHandlers;
	}
	getEventHandlers(){
		if(!this.eventHandlers ){
			this.eventHandlers = new RestEvents();
			this.eventHandlers.restFin = ()=>{

			}
			this.eventHandlers.restInit = ()=>{

			}
		}
		return this.eventHandlers;
	}
	
}