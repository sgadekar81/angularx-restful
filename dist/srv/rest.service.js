//created by just be project builder 1.0.0
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import { RestEvents } from '../classes/rest-events';
import { LftSrv } from 'angularx-headers/lft.service';
var RestService = (function () {
    function RestService(http, _lftSrv) {
        this.http = http;
        this._lftSrv = _lftSrv;
    }
    RestService.prototype.get = function (params) {
        this.resolveRestInit(params);
        return this.http.get(params.uri)
            .map(this.extractData.bind(this))
            .catch(this.handleError.bind(this));
    };
    ;
    RestService.prototype.post = function (params) {
        this.resolveRestInit(params);
        return this.http.post(params.uri, params.payload, { headers: this.getDftHdr(params.headers) })
            .map(this.extractData.bind(this))
            .catch(this.handleError.bind(this));
    };
    ;
    RestService.prototype.put = function (params) {
        this.resolveRestInit(params);
        return this.http.put(params.uri, params.payload, { headers: this.getDftHdr(params.headers) })
            .map(this.extractData.bind(this))
            .catch(this.handleError.bind(this));
    };
    ;
    RestService.prototype.delete = function (params) {
        this.resolveRestInit(params);
        return this.http.delete(params.uri)
            .map(this.extractData.bind(this))
            .catch(this.handleError.bind(this));
    };
    //sub methodes
    RestService.prototype.extractData = function (res) {
        this.resolveRestFin();
        return res;
        // let body = res.json();
        // return body._body || { };
    };
    RestService.prototype.handleError = function (error) {
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
    };
    RestService.prototype.getDftHdr = function (hdrsArr) {
        if (hdrsArr && hdrsArr.length > 0) {
            return this._lftSrv.hdrs(hdrsArr);
        }
        else {
            return this._lftSrv.hdrs('authorization', '');
        }
    };
    RestService.prototype.event = function (eventName, params) {
        var newEvent = new CustomEvent(eventName, { detail: params });
        document.dispatchEvent(newEvent);
    };
    RestService.prototype.resolveRestInit = function (params) {
        this.params = params;
        if (params.events) {
            this.event('angularx-restful-started', { msg: params.events.restInitMsg });
            this.resolveEventHandlers(this.params)
                .restInit({ msg: params.events.restInitMsg });
        }
    };
    RestService.prototype.resolveRestFin = function () {
        if (this.params.events) {
            this.resolveEventHandlers(this.params)
                .restFin({ msg: this.params.events.restFinMsg });
            this.event('angularx-restful-finished', { msg: this.params.events.restFinMsg });
        }
    };
    RestService.prototype.resolveEventHandlers = function (params) {
        var eventhndlr = this.getEventHandlers();
        if (!eventhndlr.restInit) {
            if (params.events.restInit) {
                eventhndlr.restInit = params.events.restInit;
            }
        }
        if (!eventhndlr.restFin) {
            if (params.events.restFin) {
                eventhndlr.restFin = params.events.restFin;
            }
        }
        return eventhndlr;
    };
    RestService.prototype.setEventHandlers = function (eventHandlers) {
        this.eventHandlers = eventHandlers;
    };
    RestService.prototype.getEventHandlers = function () {
        if (!this.eventHandlers) {
            this.eventHandlers = new RestEvents();
            this.eventHandlers.restFin = function () {
            };
            this.eventHandlers.restInit = function () {
            };
        }
        return this.eventHandlers;
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