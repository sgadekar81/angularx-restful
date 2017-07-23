import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import { RestParams } from '../classes/rest-params';
import { RestEvents } from '../classes/rest-events';
import { LftSrv } from 'angularx-headers/lft.service';
export declare class RestService {
    private http;
    private _lftSrv;
    constructor(http: Http, _lftSrv: LftSrv);
    params: RestParams;
    get(params: RestParams): Observable<{}>;
    post(params: RestParams): Observable<{}>;
    put(params: RestParams): Observable<{}>;
    delete(params: RestParams): Observable<{}>;
    private extractData(res);
    private handleError(error);
    private getDftHdr(hdrsArr);
    private event(eventName, params);
    private resolveRestInit(params);
    private resolveRestFin();
    private resolveEventHandlers(params);
    eventHandlers: RestEvents;
    setEventHandlers(eventHandlers: RestEvents): void;
    getEventHandlers(): RestEvents;
}
