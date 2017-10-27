"use strict";
/**
 * after the component is destroyed every subscribtion in the component is unsubscribed
 * takeUntil is taking a observable and listning in paralel to the subscription and unsubricbe/stop taking items if the subscription is finalized or emiting
 */
exports.__esModule = true;
var RX_1 = require("rxjs/RX");
require("rxjs/RX");
var node_fetch_1 = require("node-fetch");
var BaseComponent = /** @class */ (function () {
    function BaseComponent(service) {
        this.service = service;
        this.componentDestroyed = new RX_1.Subject();
    }
    BaseComponent.prototype.ngOnInit = function () {
        this.service.getData().takeUntil(this.componentDestroyed).subscribe(console.log, console.error);
        this.service.getData().takeUntil(this.componentDestroyed).subscribe(console.log, console.error);
    };
    BaseComponent.prototype.ngOnDestroy = function () {
        this.componentDestroyed.next(true);
        this.componentDestroyed.complete();
    };
    return BaseComponent;
}());
exports.BaseComponent = BaseComponent;
//example
var service = {
    getData: function () { return RX_1.Observable.interval(1000).switchMap(function () { return node_fetch_1["default"]('http://api.icndb.com/jokes/random?firstName=Barld&lastName=Boot'); })
        .switchMap(function (res) { return res.json(); }).map(function (json) { return json.value.joke; }); }
};
var bc = new BaseComponent(service);
bc.ngOnInit();
setTimeout(function () {
    console.log();
    bc.ngOnDestroy();
}, 10 * 1000);
