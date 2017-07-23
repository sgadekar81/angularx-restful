!function(r,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@angular/core"),require("@angular/common"),require("@angular/http"),require("rxjs/Observable"),require("rxjs/add/operator/catch"),require("rxjs/add/operator/map"),require("rxjs/add/observable/throw"),require("angularx-headers/lft.service"),require("angularx-headers")):"function"==typeof define&&define.amd?define(["exports","@angular/core","@angular/common","@angular/http","rxjs/Observable","rxjs/add/operator/catch","rxjs/add/operator/map","rxjs/add/observable/throw","angularx-headers/lft.service","angularx-headers"],t):t((r.ng=r.ng||{},r.ng["angularx-restful"]=r.ng["angularx-restful"]||{}),r.ng.core,r._angular_common,r._angular_http,r.Rx,null,r.Rx.Observable.prototype,null,r.angularxHeaders_lft_service,r.angularxHeaders)}(this,function(r,t,e,a,o,n,u,s,i,p){"use strict";var h=function(){function r(r,t){this.http=r,this._lftSrv=t}return r.prototype.get=function(r){return this.http.get(r.uri).map(this.extractData).catch(this.handleError)},r.prototype.post=function(r){return this.http.post(r.uri,r.payload,{headers:this.getDftHdr(r.headers)}).map(this.extractData).catch(this.handleError)},r.prototype.put=function(r){return this.http.put(r.uri,r.payload,{headers:this.getDftHdr(r.headers)}).map(this.extractData).catch(this.handleError)},r.prototype.delete=function(r){return this.http.delete(r.uri).map(this.extractData).catch(this.handleError)},r.prototype.extractData=function(r){return r},r.prototype.handleError=function(r){return o.Observable.throw(r.json()||"Server error")},r.prototype.getDftHdr=function(r){return r&&r.length>0?this._lftSrv.hdrs(r):this._lftSrv.hdrs("authorization","")},r.decorators=[{type:t.Injectable}],r.ctorParameters=function(){return[{type:a.Http},{type:i.LftSrv}]},r}(),l=function(){function r(){}return r.decorators=[{type:t.NgModule,args:[{imports:[e.CommonModule,p.AngularxHeaders],providers:[h]}]}],r.ctorParameters=function(){return[]},r}();r.AngularxRestful=l,Object.defineProperty(r,"__esModule",{value:!0})});