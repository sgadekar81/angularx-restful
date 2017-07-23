//created by just be project builder 1.0.0
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import { LftSrv } from 'angularx-headers/lft.service';
var RestService = (function () {
    function RestService(http, _lftSrv) {
        this.http = http;
        this._lftSrv = _lftSrv;
    }
    RestService.prototype.get = function (params) {
        return this.http.get(params.uri)
            .map(this.extractData)
            .catch(this.handleError);
    };
    ;
    RestService.prototype.post = function (params) {
        return this.http.post(params.uri, params.payload, { headers: this.getDftHdr(params.headers) })
            .map(this.extractData)
            .catch(this.handleError);
    };
    ;
    RestService.prototype.put = function (params) {
        return this.http.put(params.uri, params.payload, { headers: this.getDftHdr(params.headers) })
            .map(this.extractData)
            .catch(this.handleError);
    };
    ;
    RestService.prototype.delete = function (params) {
        return this.http.delete(params.uri)
            .map(this.extractData)
            .catch(this.handleError);
    };
    //sub methodes
    RestService.prototype.extractData = function (res) {
        return res;
        // let body = res.json();
        // return body._body || { };
    };
    RestService.prototype.handleError = function (error) {
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
    };
    RestService.prototype.getDftHdr = function (hdrsArr) {
        if (hdrsArr && hdrsArr.length > 0) {
            return this._lftSrv.hdrs(hdrsArr);
        }
        else {
            return this._lftSrv.hdrs('authorization', '');
        }
    };
    RestService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    RestService.ctorParameters = function () { return [
        { type: Http, },
        { type: LftSrv, },
    ]; };
    return RestService;
}());
export { RestService };
//# sourceMappingURL=rest.service.js.map