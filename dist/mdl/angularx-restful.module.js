import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestService } from '../srv/rest.service';
import { AngularxHeaders } from 'angularx-headers';
//this module using restService due to this i need to first include module and then service..i dontknow it //is good or bad..in future itll figure it out
//response from service is in string i.e _body:"{}"...figure out wheather to give response in parse mode 
//or return as it is
var AngularxRestful = (function () {
    function AngularxRestful() {
    }
    AngularxRestful.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, AngularxHeaders],
                    providers: [RestService]
                },] },
    ];
    /** @nocollapse */
    AngularxRestful.ctorParameters = function () { return []; };
    return AngularxRestful;
}());
export { AngularxRestful };
//# sourceMappingURL=angularx-restful.module.js.map