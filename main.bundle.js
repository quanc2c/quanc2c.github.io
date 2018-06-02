webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mine_mine_component__ = __webpack_require__("./src/app/mine/mine.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__coupon_coupon_component__ = __webpack_require__("./src/app/coupon/coupon.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__help_help_component__ = __webpack_require__("./src/app/help/help.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__post_post_component__ = __webpack_require__("./src/app/post/post.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */] },
    { path: 'coupon/:id', component: __WEBPACK_IMPORTED_MODULE_4__coupon_coupon_component__["a" /* CouponComponent */] },
    { path: 'mine', component: __WEBPACK_IMPORTED_MODULE_3__mine_mine_component__["a" /* MineComponent */] },
    { path: 'help', component: __WEBPACK_IMPORTED_MODULE_5__help_help_component__["a" /* HelpComponent */] },
    { path: 'post', component: __WEBPACK_IMPORTED_MODULE_6__post_post_component__["a" /* PostComponent */] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forRoot(routes, { useHash: true })],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui vertical blue inverted segment\">\r\n  <div class=\"ui container\"><h3>星云优惠券-链上优惠券大全</h3></div>\r\n</div>\r\n\r\n<div class=\"ui container\" style=\"min-height: 90%\">\r\n  <div class=\"ui vertical basic segment\">\r\n    <div class=\"ui secondary pointing menu\">\r\n      <a class=\"active item\" routerLink=\"/home\" [ngClass]=\"{'active': menuIndex==1}\">\r\n        首页\r\n      </a>\r\n      <a class=\"active item\" routerLink=\"/post\" [ngClass]=\"{'active': menuIndex==2}\">\r\n        出售优惠券\r\n      </a>\r\n      <a class=\"item\" routerLink=\"/mine\" [ngClass]=\"{'active': menuIndex==3}\">\r\n        我的优惠券\r\n        <div class=\"ui floating red circular label\" id=\"shipNum\" *ngIf=\"shipNum\">{{shipNum}}</div>\r\n      </a>\r\n      <a class=\"right item\" routerLink=\"/help\" [ngClass]=\"{'active': menuIndex==4}\">\r\n        使用帮助\r\n      </a>\r\n    </div>\r\n  </div>\r\n\r\n  <router-outlet></router-outlet>\r\n</div>\r\n<div class=\"ui inverted vertical footer segment\">\r\n  <div class=\"ui center aligned container\">\r\n    <div class=\"ui horizontal inverted small divided link list\">\r\n      <a class=\"item\" href=\"https://nebulas.io/\">本产品由星云链驱动</a>\r\n      <a class=\"item\" href=\"mailto: 280929507@qq.com\">联系作者</a>\r\n      <a class=\"item\" href=\"https://incentive.nebulas.io/cn/signup.html?invite=sZDCF\">提交DAPP获得100NAS币</a>\r\n      <a class=\"item\" href=\"/#/help\">帮助</a>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<app-notification></app-notification>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__coupon_service__ = __webpack_require__("./src/app/coupon.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__notification_notification_component__ = __webpack_require__("./src/app/notification/notification.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    function AppComponent(couponService, router, ngZone, notify) {
        var _this = this;
        this.couponService = couponService;
        this.router = router;
        this.ngZone = ngZone;
        this.notify = notify;
        this.shipNum = 0;
        this.menuIndex = 1;
        this.router.events.subscribe(function (val) {
            if (val instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationEnd */]) {
                var url = val.url;
                if (url.startsWith("/post")) {
                    _this.menuIndex = 2;
                }
                else if (url.startsWith("/mine")) {
                    _this.menuIndex = 3;
                }
                else if (url.startsWith("/help")) {
                    _this.menuIndex = 4;
                }
                else {
                    _this.menuIndex = 1;
                }
            }
        });
    }
    AppComponent.prototype.ngOnInit = function () {
        this.sellerGetAllOrders();
    };
    AppComponent.prototype.sellerGetAllOrders = function () {
        var _this = this;
        this.couponService.sellerGetAllOrders().subscribe(function (result) {
            _this.ngZone.runOutsideAngular(function () {
                _this.ngZone.run(function () {
                    var r = JSON.parse(result);
                    _this.shipNum = r.countInfo.shipNum;
                });
            });
        }, function (error) {
        });
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            providers: [__WEBPACK_IMPORTED_MODULE_3__notification_notification_component__["a" /* NotificationComponent */]],
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__coupon_service__["a" /* CouponService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* NgZone */],
            __WEBPACK_IMPORTED_MODULE_3__notification_notification_component__["a" /* NotificationComponent */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__coupon_service__ = __webpack_require__("./src/app/coupon.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__coupon_coupon_component__ = __webpack_require__("./src/app/coupon/coupon.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__mine_mine_component__ = __webpack_require__("./src/app/mine/mine.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__help_help_component__ = __webpack_require__("./src/app/help/help.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__notification_notification_component__ = __webpack_require__("./src/app/notification/notification.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__post_post_component__ = __webpack_require__("./src/app/post/post.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__status_pipe__ = __webpack_require__("./src/app/status.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__wei_to_nas_pipe__ = __webpack_require__("./src/app/wei-to-nas.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_7__coupon_coupon_component__["a" /* CouponComponent */],
                __WEBPACK_IMPORTED_MODULE_8__mine_mine_component__["a" /* MineComponent */],
                __WEBPACK_IMPORTED_MODULE_9__help_help_component__["a" /* HelpComponent */],
                __WEBPACK_IMPORTED_MODULE_10__notification_notification_component__["a" /* NotificationComponent */],
                __WEBPACK_IMPORTED_MODULE_11__post_post_component__["a" /* PostComponent */],
                __WEBPACK_IMPORTED_MODULE_12__status_pipe__["a" /* StatusPipe */],
                __WEBPACK_IMPORTED_MODULE_13__wei_to_nas_pipe__["a" /* WeiToNasPipe */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_5__coupon_service__["a" /* CouponService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/coupon.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CouponService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_nebpay__ = __webpack_require__("./node_modules/nebpay/lib/nebPay.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_nebpay___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_nebpay__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_nebulas__ = __webpack_require__("./node_modules/nebulas/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_nebulas___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_nebulas__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CouponService = /** @class */ (function () {
    function CouponService() {
        this.dAppAddress = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].dAppAddress;
        this.nebPay = new __WEBPACK_IMPORTED_MODULE_3_nebpay__();
        this.neb = new __WEBPACK_IMPORTED_MODULE_4_nebulas__["Neb"]();
    }
    CouponService.prototype.ngOnInit = function () {
        this.neb.setRequest(new __WEBPACK_IMPORTED_MODULE_4_nebulas__["HttpRequest"](__WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].http_request_url));
    };
    CouponService.prototype.addQuan = function (params) {
        var _this = this;
        this.neb.setRequest(new __WEBPACK_IMPORTED_MODULE_4_nebulas__["HttpRequest"](__WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].http_request_url));
        var that = this, value = "", callFunction = "addQuan", callArgs = JSON.stringify([params.name, this.convertNasToWei(params.price), params.num, params.cat, params.expired, params.img, params.desc]), obs = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */](function (observer) {
            _this.nebPay.call(_this.dAppAddress, value, callFunction, callArgs, {
                listener: function (res) {
                    if (typeof (res) === 'string' && (res.indexOf("Error") != -1)) {
                        observer.error(res);
                    }
                    else {
                        console.log("交易提交成功");
                        var txHash_1 = res.txhash, timer_1 = 1;
                        that.intervalQuery = setInterval(function () {
                            timer_1 += 1;
                            if (timer_1 > 12) {
                                clearInterval(that.intervalQuery);
                                observer.error("交易超时，请检查钱包余额是否充足");
                            }
                            that.neb.api.getTransactionReceipt(txHash_1).then(function (res) {
                                if (res.status === 1) {
                                    clearInterval(that.intervalQuery);
                                    console.log("交易完成");
                                    observer.complete();
                                }
                                if (res.status === 0) {
                                    clearInterval(that.intervalQuery);
                                    observer.error(res.execute_result);
                                }
                            });
                        }, 5000);
                    }
                }
            });
        });
        return obs;
    };
    CouponService.prototype.getQuanItem = function (id) {
        var _this = this;
        var from = 'n1JjwbAQAqr6cV6btULFhP6596o3KkwNSVj', value = "0", nonce = "0", gas_price = "1000000", gas_limit = "2000000", contract = {
            "function": "getQuanItem",
            "args": JSON.stringify([id])
        }, that = this, obs = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */](function (observer) {
            _this.neb.setRequest(new __WEBPACK_IMPORTED_MODULE_4_nebulas__["HttpRequest"](__WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].http_request_url));
            that.neb.api.call(from, that.dAppAddress, value, nonce, gas_price, gas_limit, contract).then(function (res) {
                console.log(res.result);
                observer.next(res.result);
            }).catch(function () {
                observer.error("读取优惠券信息失败");
            });
        });
        return obs;
    };
    CouponService.prototype.buyQuan = function (params) {
        var _this = this;
        this.neb.setRequest(new __WEBPACK_IMPORTED_MODULE_4_nebulas__["HttpRequest"](__WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].http_request_url));
        var that = this, value = this.convertWeiToNas(params.price * params.num).toNumber(), callFunction = "buyQuan", callArgs = JSON.stringify([params.id, params.num, params.email, params.note]), obs = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */](function (observer) {
            _this.nebPay.call(_this.dAppAddress, value, callFunction, callArgs, {
                listener: function (res) {
                    if (typeof (res) === 'string' && (res.indexOf("Error") != -1)) {
                        observer.error(res);
                    }
                    else {
                        console.log("交易提交成功");
                        var txHash_2 = res.txhash, timer_2 = 1;
                        that.intervalQuery = setInterval(function () {
                            timer_2 += 1;
                            if (timer_2 > 12) {
                                clearInterval(that.intervalQuery);
                                observer.error("交易超时，请检查钱包余额是否充足");
                            }
                            that.neb.api.getTransactionReceipt(txHash_2).then(function (res) {
                                console.log(txHash_2);
                                if (res.status === 1) {
                                    clearInterval(that.intervalQuery);
                                    console.log("交易完成");
                                    observer.complete();
                                }
                                if (res.status === 0) {
                                    clearInterval(that.intervalQuery);
                                    observer.error(res.execute_result);
                                }
                            });
                        }, 5000);
                    }
                }
            });
        });
        return obs;
    };
    CouponService.prototype.getAllCoupon = function () {
        var _this = this;
        var from = 'n1JjwbAQAqr6cV6btULFhP6596o3KkwNSVj', value = "0", nonce = "0", gas_price = "1000000", gas_limit = "2000000", contract = {
            "function": "getAllQuan",
            "args": "[]"
        }, that = this, obs = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */](function (observer) {
            _this.neb.setRequest(new __WEBPACK_IMPORTED_MODULE_4_nebulas__["HttpRequest"](__WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].http_request_url));
            that.neb.api.call(from, that.dAppAddress, value, nonce, gas_price, gas_limit, contract).then(function (res) {
                console.log("读取信息成功");
                console.log(res.result);
                observer.next(res.result);
            }).catch(function () {
                observer.error("读取优惠券列表失败");
            });
        });
        return obs;
    };
    CouponService.prototype.sellerGetAllQuans = function () {
        var _this = this;
        var value = "0", nonce = "0", gas_price = "1000000", gas_limit = "2000000", contract = {
            "function": "sellerGetAllQuans",
            "args": "[]"
        }, that = this, obs = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */](function (observer) {
            _this.neb.setRequest(new __WEBPACK_IMPORTED_MODULE_4_nebulas__["HttpRequest"](__WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].http_request_url));
            _this.nebPay.simulateCall(_this.dAppAddress, "0", 'getCurAddr', "", {
                listener: function (res) {
                    var result = res.result, curUser;
                    if (result === 'null') {
                        observer.error("没有安装钱包插件，请先装钱包插件再使用");
                    }
                    else {
                        try {
                            curUser = JSON.parse(result);
                            that.neb.api.call(curUser, that.dAppAddress, value, nonce, gas_price, gas_limit, contract).then(function (res) {
                                observer.next(res.result);
                            }).catch(function () {
                                observer.error("读取优惠券信息失败");
                            });
                        }
                        catch (err) {
                            observer.error(res.execute_err || res);
                        }
                    }
                }
            });
        });
        return obs;
    };
    CouponService.prototype.buyerGetAllOrders = function () {
        var _this = this;
        var value = "0", nonce = "0", gas_price = "1000000", gas_limit = "2000000", contract = {
            "function": "buyerGetAllOrders",
            "args": "[]"
        }, that = this, obs = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */](function (observer) {
            _this.neb.setRequest(new __WEBPACK_IMPORTED_MODULE_4_nebulas__["HttpRequest"](__WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].http_request_url));
            _this.nebPay.simulateCall(_this.dAppAddress, "0", 'getCurAddr', "", {
                listener: function (res) {
                    var result = res.result, curUser;
                    if (result === 'null') {
                        observer.error("没有安装钱包插件，请先装钱包插件再使用");
                    }
                    else {
                        try {
                            curUser = JSON.parse(result);
                            that.neb.api.call(curUser, that.dAppAddress, value, nonce, gas_price, gas_limit, contract).then(function (res) {
                                observer.next(res.result);
                            }).catch(function () {
                                observer.error("读取订单失败");
                            });
                        }
                        catch (err) {
                            observer.error(res.execute_err || res);
                        }
                    }
                }
            });
        });
        return obs;
    };
    CouponService.prototype.sellerGetAllOrders = function () {
        var _this = this;
        var value = "0", nonce = "0", gas_price = "1000000", gas_limit = "2000000", contract = {
            "function": "sellerGetAllOrders",
            "args": "[]"
        }, that = this, obs = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */](function (observer) {
            _this.neb.setRequest(new __WEBPACK_IMPORTED_MODULE_4_nebulas__["HttpRequest"](__WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].http_request_url));
            _this.nebPay.simulateCall(_this.dAppAddress, "0", 'getCurAddr', "", {
                listener: function (res) {
                    var result = res.result, curUser;
                    if (result === 'null') {
                        observer.error("没有安装钱包插件，请先装钱包插件再使用");
                    }
                    else {
                        try {
                            curUser = JSON.parse(result);
                            that.neb.api.call(curUser, that.dAppAddress, value, nonce, gas_price, gas_limit, contract).then(function (res) {
                                observer.next(res.result);
                            }).catch(function () {
                                observer.error("读取订单失败");
                            });
                        }
                        catch (err) {
                            observer.error(res.execute_err || res);
                        }
                    }
                }
            });
        });
        return obs;
    };
    CouponService.prototype.buyerCancelOrder = function (orderId) {
        var _this = this;
        this.neb.setRequest(new __WEBPACK_IMPORTED_MODULE_4_nebulas__["HttpRequest"](__WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].http_request_url));
        var that = this, value = "0", callFunction = "buyerCancelOrder", callArgs = JSON.stringify([orderId]), obs = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */](function (observer) {
            _this.nebPay.call(_this.dAppAddress, value, callFunction, callArgs, {
                listener: function (res) {
                    if (typeof (res) === 'string' && (res.indexOf("Error") != -1)) {
                        observer.error(res);
                    }
                    else {
                        console.log("交易提交成功");
                        var txHash_3 = res.txhash, timer_3 = 1;
                        that.intervalQuery = setInterval(function () {
                            timer_3 += 1;
                            if (timer_3 > 12) {
                                clearInterval(that.intervalQuery);
                                observer.error("交易超时，请检查钱包余额是否充足");
                            }
                            that.neb.api.getTransactionReceipt(txHash_3).then(function (res) {
                                if (res.status === 1) {
                                    clearInterval(that.intervalQuery);
                                    console.log("交易完成");
                                    observer.complete();
                                }
                                if (res.status === 0) {
                                    clearInterval(that.intervalQuery);
                                    observer.error(res.execute_result);
                                }
                            });
                        }, 5000);
                    }
                }
            });
        });
        return obs;
    };
    CouponService.prototype.shipOrder = function (orderId) {
        var _this = this;
        this.neb.setRequest(new __WEBPACK_IMPORTED_MODULE_4_nebulas__["HttpRequest"](__WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].http_request_url));
        var that = this, value = "0", callFunction = "shipOrder", callArgs = JSON.stringify([orderId, "优惠券信息已经发送至邮箱，请查收"]), obs = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */](function (observer) {
            _this.nebPay.call(_this.dAppAddress, value, callFunction, callArgs, {
                listener: function (res) {
                    if (typeof (res) === 'string' && (res.indexOf("Error") != -1)) {
                        observer.error(res);
                    }
                    else {
                        console.log("交易提交成功");
                        var txHash_4 = res.txhash, timer_4 = 1;
                        that.intervalQuery = setInterval(function () {
                            timer_4 += 1;
                            if (timer_4 > 12) {
                                clearInterval(that.intervalQuery);
                                observer.error("交易超时，请检查钱包余额是否充足");
                            }
                            that.neb.api.getTransactionReceipt(txHash_4).then(function (res) {
                                console.log(txHash_4);
                                if (res.status === 1) {
                                    clearInterval(that.intervalQuery);
                                    console.log("交易完成");
                                    observer.complete();
                                }
                                if (res.status === 0) {
                                    clearInterval(that.intervalQuery);
                                    observer.error(res.execute_result);
                                }
                            });
                        }, 5000);
                    }
                }
            });
        });
        return obs;
    };
    CouponService.prototype.receiveOrder = function (orderId) {
        var _this = this;
        this.neb.setRequest(new __WEBPACK_IMPORTED_MODULE_4_nebulas__["HttpRequest"](__WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].http_request_url));
        var that = this, value = "0", callFunction = "receiveOrder", callArgs = JSON.stringify([orderId]), obs = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */](function (observer) {
            _this.nebPay.call(_this.dAppAddress, value, callFunction, callArgs, {
                listener: function (res) {
                    if (typeof (res) === 'string' && (res.indexOf("Error") != -1)) {
                        observer.error(res);
                    }
                    else {
                        console.log("交易提交成功");
                        var txHash_5 = res.txhash, timer_5 = 1;
                        that.intervalQuery = setInterval(function () {
                            timer_5 += 1;
                            if (timer_5 > 12) {
                                clearInterval(that.intervalQuery);
                                observer.error("交易超时，请检查钱包余额是否充足");
                            }
                            that.neb.api.getTransactionReceipt(txHash_5).then(function (res) {
                                console.log(txHash_5);
                                if (res.status === 1) {
                                    clearInterval(that.intervalQuery);
                                    console.log("交易完成");
                                    observer.complete();
                                }
                                if (res.status === 0) {
                                    clearInterval(that.intervalQuery);
                                    observer.error(res.execute_result);
                                }
                            });
                        }, 5000);
                    }
                }
            });
        });
        return obs;
    };
    CouponService.prototype.sellerWithDraw = function () {
        var _this = this;
        this.neb.setRequest(new __WEBPACK_IMPORTED_MODULE_4_nebulas__["HttpRequest"](__WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].http_request_url));
        var that = this, value = "0", callFunction = "sellerWithDraw", callArgs = JSON.stringify([]), obs = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */](function (observer) {
            _this.nebPay.call(_this.dAppAddress, value, callFunction, callArgs, {
                listener: function (res) {
                    if (typeof (res) === 'string' && (res.indexOf("Error") != -1)) {
                        observer.error(res);
                    }
                    else {
                        console.log("交易提交成功");
                        var txHash_6 = res.txhash, timer_6 = 1;
                        that.intervalQuery = setInterval(function () {
                            timer_6 += 1;
                            if (timer_6 > 12) {
                                clearInterval(that.intervalQuery);
                                observer.error("交易超时，请检查钱包余额是否充足");
                            }
                            that.neb.api.getTransactionReceipt(txHash_6).then(function (res) {
                                console.log(txHash_6);
                                if (res.status === 1) {
                                    clearInterval(that.intervalQuery);
                                    console.log("提现成功");
                                    observer.complete();
                                }
                                if (res.status === 0) {
                                    clearInterval(that.intervalQuery);
                                    observer.error(res.execute_result);
                                }
                            });
                        }, 5000);
                    }
                }
            });
        });
        return obs;
    };
    CouponService.prototype.convertWeiToNas = function (wei) {
        var unit = __WEBPACK_IMPORTED_MODULE_4_nebulas__["Unit"];
        return unit.fromBasic(wei, "nas");
    };
    CouponService.prototype.convertNasToWei = function (nas) {
        var unit = __WEBPACK_IMPORTED_MODULE_4_nebulas__["Unit"], utils = __WEBPACK_IMPORTED_MODULE_4_nebulas__["Utils"];
        return unit.nasToBasic(utils.toBigNumber(nas));
    };
    CouponService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], CouponService);
    return CouponService;
}());



/***/ }),

/***/ "./src/app/coupon/coupon.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/coupon/coupon.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui vertical basic coupon loading segment\">\r\n  <div class=\"ui raised segment\" *ngIf=\"coupon\">\r\n    <div class=\"ui items\">\r\n      <div class=\"item\">\r\n        <div class=\"ui image\">\r\n          <img src=\"{{coupon.img}}\">\r\n        </div>\r\n        <div class=\"content\">\r\n          <div class=\"header\">{{coupon.name}}</div>\r\n          <div class=\"meta\">\r\n            {{coupon.cat}}\r\n          </div>\r\n          <div class=\"description\">\r\n            {{coupon.desc}}\r\n          </div>\r\n          <div class=\"extra\">\r\n            <h4 class=\"ui red header\">\r\n              价格：{{coupon.price | weiToNas}}【NAS】\r\n            </h4>\r\n          </div>\r\n          <div class=\"extra\">\r\n            <div class=\"ui label\">\r\n              已售：{{coupon.soldNum}}\r\n            </div>\r\n            <div class=\"ui label\">\r\n              库存：{{coupon.num}}\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"ui positive message\" *ngIf=\"showProm\">\r\n      <div class=\"header\">\r\n        你还没有安装浏览器插件，安装后再试\r\n      </div>\r\n      <p></p>\r\n      <a class=\"ui red button\" href=\"https://github.com/ChengOrangeJu/WebExtensionWallet\" target=\"_blank\">安装</a>\r\n    </div>\r\n\r\n    <form class=\"ui form\" #f=\"ngForm\" novalidate (submit)=\"onBuyCoupon(f, $event, coupon)\">\r\n      <div class=\"field\">\r\n        <input type=\"number\" name=\"num\" placeholder=\"输入购买数量\" #num=\"ngModel\" ngModel required (focus)=\"maxError=false\">\r\n        <div class=\"ui pointing grey label\" *ngIf=\"num.errors\">\r\n          购买数量必填\r\n        </div>\r\n        <div class=\"ui pointing grey label\" *ngIf=\"maxError\">\r\n          购买数量不能超过库存\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"field\">\r\n        <input type=\"email\" name=\"email\" placeholder=\"输入接受优惠券的邮箱地址\" #email=\"ngModel\" ngModel required pattern=\"^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\\.[a-zA-Z0-9-]+)*\\.[a-zA-Z0-9]{2,6}$\">\r\n        <div class=\"ui pointing grey label\" *ngIf=\"email.errors\">\r\n          输入有效的电子邮箱格式\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"field\">\r\n        <input type=\"text\" name=\"note\" placeholder=\"备注\" ngModel required #note=\"ngModel\" maxlength=\"64\">\r\n        <div class=\"ui pointing grey label\" *ngIf=\"note.errors\">\r\n          输入1-64个字符\r\n        </div>\r\n      </div>\r\n\r\n      <button class=\"ui primary button\" type=\"submit\">购买优惠券</button>\r\n    </form>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/coupon/coupon.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CouponComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__coupon_service__ = __webpack_require__("./src/app/coupon.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__notification_notification_component__ = __webpack_require__("./src/app/notification/notification.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CouponComponent = /** @class */ (function () {
    function CouponComponent(couponService, ref, notify, aR, router) {
        this.couponService = couponService;
        this.ref = ref;
        this.notify = notify;
        this.aR = aR;
        this.router = router;
        this.maxError = false;
        this.extProm = false;
    }
    CouponComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.couponService.getQuanItem(this.aR.snapshot.params["id"]).subscribe(function (val) {
            _this.coupon = JSON.parse(val);
            document.title = '星云优惠券-' + _this.coupon.name;
            _this.ref.tick();
            $(".coupon.segment").removeClass("loading");
        });
    };
    CouponComponent.prototype.ngAfterViewInit = function () {
        var that = this;
        this.timer = setTimeout(function () {
            if (typeof (webExtensionWallet) === 'undefined') {
                that.extProm = true;
                window.clearTimeout(that.timer);
            }
        }, 1000);
    };
    CouponComponent.prototype.onBuyCoupon = function (postForm, event, coupon) {
        var _this = this;
        var target = $(event.target);
        if (postForm.value.num > coupon.num) {
            return this.maxError = true;
        }
        if (postForm.valid) {
            target.addClass("loading");
            postForm.value.id = coupon.id;
            postForm.value.price = coupon.price;
            this.couponService.buyQuan(postForm.value).subscribe(function (value) {
            }, function (error) {
                _this.notify.show(error);
                target.removeClass("loading");
            }, function () {
                _this.notify.show("优惠券购买成功");
                target.removeClass("loading");
                _this.router.navigate(["/mine"]);
            });
        }
    };
    CouponComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            providers: [__WEBPACK_IMPORTED_MODULE_3__notification_notification_component__["a" /* NotificationComponent */]],
            selector: 'app-coupon',
            template: __webpack_require__("./src/app/coupon/coupon.component.html"),
            styles: [__webpack_require__("./src/app/coupon/coupon.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__coupon_service__["a" /* CouponService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* ApplicationRef */],
            __WEBPACK_IMPORTED_MODULE_3__notification_notification_component__["a" /* NotificationComponent */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]])
    ], CouponComponent);
    return CouponComponent;
}());



/***/ }),

/***/ "./src/app/help/help.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/help/help.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui vertical segment\">\r\n  <h3 class=\"ui header\">产品名称</h3>\r\n  <p>星云优惠券-链上优惠券大全</p>\r\n</div>\r\n\r\n<div class=\"ui vertical segment\">\r\n  <h3 class=\"ui header\">产品简介</h3>\r\n  <p>星云链上优惠券是一个多人合作开发的优惠券交易平台，本平台主要有以下优点：</p>\r\n  <div class=\"ui bulleted list\">\r\n    <div class=\"item\">界面简洁、大方，适应多种客户端访问</div>\r\n    <div class=\"item\">优惠券展示简洁、优美</div>\r\n    <div class=\"item\">买家通过nas购买优惠券</div>\r\n    <div class=\"item\">卖家通过邮件的形式告知买方兑换码</div>\r\n    <div class=\"item\">订单查看方便、快捷</div>\r\n    <div class=\"item\">买卖流程完整</div>\r\n    <div class=\"item\">优惠券数据上链</div>\r\n    <div class=\"item\">订单数据上链</div>\r\n    <div class=\"item\">卖方可提现出售优惠券获得的收益</div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"ui vertical segment\">\r\n  <h3 class=\"ui header\">使用前准备</h3>\r\n  <div class=\"ui bulleted list\">\r\n    <div class=\"item\">\r\n      安装Chrome浏览器，然后安装浏览器数字钱包插件：\r\n      <div class=\"list\">\r\n        <div class=\"item\">\r\n          Chrome浏览器打开\r\n          <a href=\"https://github.com/ChengOrangeJu/WebExtensionWallet\" target=\"-_blank\">\r\n            https://github.com/ChengOrangeJu/WebExtensionWallet\r\n          </a>然后按照流程安装钱包到浏览器\r\n        </div>\r\n        <div class=\"item\">设置您的账户，并妥善保管你的钱包密码和私钥文件</div>\r\n        <div class=\"item\">到<a href=\"http://gate.io\" target=\"_blank\">火币网</a>兑换代币</div>\r\n      </div>\r\n    </div>\r\n    <div class=\"item\">登录钱包，刷新当前页面，即可使用系统功能</div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"ui vertical segment\">\r\n  <h3 class=\"ui header\">使用说明</h3>\r\n  <div class=\"ui bulleted list\">\r\n    <div class=\"item\">浏览网站不需要钱包插件，任何人都可以查看</div>\r\n    <div class=\"item\">首先进入的是优惠券列表页，点击优惠券可以查看详情并购买</div>\r\n    <div class=\"item\">发布优惠券、购买优惠券需要有钱包插件</div>\r\n    <div class=\"item\">买家在卖家未发货的前提下可以取消订单，在卖家发货后可以确认收货，需要有钱包插件</div>\r\n    <div class=\"item\">卖家在确认发货的时候需要录入订单物流号，需要有钱包插件</div>\r\n    <div class=\"item\">卖家在买房确认收货后，可以提现nas</div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/help/help.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HelpComponent = /** @class */ (function () {
    function HelpComponent() {
    }
    HelpComponent.prototype.ngOnInit = function () {
    };
    HelpComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-help',
            template: __webpack_require__("./src/app/help/help.component.html"),
            styles: [__webpack_require__("./src/app/help/help.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HelpComponent);
    return HelpComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui vertical basic center aligned segment\">\r\n  <a class=\"ui primary massive button\" routerLink=\"/post\">出售优惠券</a>\r\n</div>\r\n\r\n\r\n<div class=\"ui basic vertical loading coupon segment\">\r\n  <h4 class=\"ui dividing header\">优惠券列表</h4>\r\n\r\n  <div class=\"ui stackable four cards\">\r\n    <div class=\"card\" *ngFor=\"let c of allCoupon\">\r\n      <a class=\"image\" routerLink=\"/coupon/{{c.id}}\">\r\n        <img src=\"{{ c.img }}\">\r\n      </a>\r\n      <div class=\"content\">\r\n        <div class=\"header\"><a routerLink=\"/coupon/{{c.id}}\">{{c.name}}</a></div>\r\n        <div class=\"meta\">\r\n          {{c.cat}}\r\n        </div>\r\n        <div class=\"description\">\r\n          {{c.price | weiToNas}}【NAS】\r\n        </div>\r\n      </div>\r\n      <div class=\"extra content\">\r\n        <span class=\"right floated\">\r\n          过期时间：{{c.expired}}\r\n        </span>\r\n        <span>\r\n            已售{{c.soldNum}}\r\n        </span>\r\n      </div>\r\n      <a class=\"ui primary bottom attached button\" routerLink=\"/coupon/{{c.id}}\">\r\n        <i class=\"add icon\"></i>\r\n        购买\r\n      </a>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__coupon_service__ = __webpack_require__("./src/app/coupon.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notification_notification_component__ = __webpack_require__("./src/app/notification/notification.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent(couponService, notify, ref) {
        this.couponService = couponService;
        this.notify = notify;
        this.ref = ref;
        this.showForm = true;
        this.allCoupon = [];
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.getAllCoupon();
    };
    HomeComponent.prototype.getAllCoupon = function () {
        var _this = this;
        this.couponService.getAllCoupon().subscribe(function (result) {
            _this.allCoupon = JSON.parse(result).reverse();
            $(".coupon.segment").removeClass("loading");
            _this.ref.tick();
        }, function (error) {
            _this.notify.show(error);
            $(".coupon.segment").removeClass("loading");
        });
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            providers: [__WEBPACK_IMPORTED_MODULE_2__notification_notification_component__["a" /* NotificationComponent */]],
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__coupon_service__["a" /* CouponService */],
            __WEBPACK_IMPORTED_MODULE_2__notification_notification_component__["a" /* NotificationComponent */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* ApplicationRef */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/mine/mine.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/mine/mine.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui top attached tabular menu\">\r\n  <a class=\"active item\" data-tab=\"1\">我出售的优惠券</a>\r\n  <a class=\"item\" data-tab=\"2\">我买到的优惠券</a>\r\n  <a class=\"item\" data-tab=\"3\">我卖出的优惠券</a>\r\n</div>\r\n<div class=\"ui bottom attached active tab segment\" data-tab=\"1\">\r\n  <table class=\"ui celled  table\">\r\n    <thead>\r\n    <tr>\r\n      <th>优惠券名</th>\r\n      <th>已售</th>\r\n      <th>库存</th>\r\n      <th>过期时间</th>\r\n    </tr>\r\n    </thead>\r\n    <tbody>\r\n    <tr *ngFor=\"let c of allCoupon\">\r\n      <td><a routerLink=\"/coupon/{{c.id}}\">{{c.name}}</a></td>\r\n      <td>{{c.soldNum}}</td>\r\n      <td>{{c.num}}</td>\r\n      <td>{{c.expired}}</td>\r\n    </tr>\r\n    </tbody>\r\n  </table>\r\n</div>\r\n<div class=\"ui bottom attached tab segment\" data-tab=\"2\">\r\n  <table class=\"ui celled  table\">\r\n    <thead>\r\n    <tr>\r\n      <th>订单号</th>\r\n      <th>优惠券名</th>\r\n      <th>购买数量</th>\r\n      <th>状态</th>\r\n      <th>操作</th>\r\n    </tr>\r\n    </thead>\r\n    <tbody>\r\n    <tr *ngFor=\"let c of buyerAllOrders\">\r\n      <td>{{c.id}}</td>\r\n      <td><a routerLink=\"/coupon/{{c.quanItem.id}}\">{{c.quanItem.name}}</a></td>\r\n      <td>{{c.num}}</td>\r\n      <td>{{c.status | status}}</td>\r\n      <td>\r\n        <button class=\"ui small blue button\" *ngIf=\"c.status=='0'\" (click)=\"buyerCancelOrder(c.id, $event)\">取消</button>\r\n        <button class=\"ui small blue button\" *ngIf=\"c.status=='1'\" (click)=\"receiveOrder(c.id, $event)\">确认收货</button>\r\n      </td>\r\n    </tr>\r\n    </tbody>\r\n  </table>\r\n</div>\r\n<div class=\"ui bottom attached tab segment\" data-tab=\"3\">\r\n  <table class=\"ui celled  table\">\r\n    <thead>\r\n    <tr>\r\n      <th>订单号</th>\r\n      <th>优惠券名</th>\r\n      <th>购买数量</th>\r\n      <th>购买者邮箱</th>\r\n      <th>状态</th>\r\n      <th>操作</th>\r\n    </tr>\r\n    </thead>\r\n    <tbody>\r\n    <tr *ngFor=\"let c of sellerAllOrders\">\r\n      <td>{{c.id}}</td>\r\n      <td><a routerLink=\"/coupon/{{c.quanItem.id}}\">{{c.quanItem.name}}</a></td>\r\n      <td>{{c.num}}</td>\r\n      <td><a href=\"mailto:{{c.email}}\">{{c.email}}</a></td>\r\n      <td>{{c.status | status}}</td>\r\n      <td>\r\n        <button class=\"ui small blue button\" *ngIf=\"c.status=='0'\" (click)=\"shipOrder(c.id, $event)\">确认发货</button>\r\n        <button class=\"ui small blue button\" *ngIf=\"c.status=='2' && (c.amt != '0') \" (click)=\"sellerWithDraw(c.id, $event)\">提现</button>\r\n      </td>\r\n    </tr>\r\n    </tbody>\r\n  </table>\r\n</div>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/mine/mine.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MineComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__coupon_service__ = __webpack_require__("./src/app/coupon.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notification_notification_component__ = __webpack_require__("./src/app/notification/notification.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MineComponent = /** @class */ (function () {
    function MineComponent(couponService, notify, ngZone) {
        this.couponService = couponService;
        this.notify = notify;
        this.ngZone = ngZone;
        this.allCoupon = [];
        this.buyerAllOrders = [];
        this.sellerAllOrders = [];
    }
    MineComponent.prototype.ngOnInit = function () {
        this.sellerGetAllQuans();
        this.buyerGetAllOrders();
        this.sellerGetAllOrders();
    };
    MineComponent.prototype.ngAfterViewInit = function () {
        $('.tabular.menu .item').tab();
    };
    MineComponent.prototype.sellerGetAllQuans = function () {
        var _this = this;
        this.couponService.sellerGetAllQuans().subscribe(function (result) {
            _this.ngZone.runOutsideAngular(function () {
                _this.ngZone.run(function () {
                    _this.allCoupon = JSON.parse(result).reverse();
                    console.log("出售的优惠券", _this.allCoupon);
                });
            });
        }, function (error) {
            _this.notify.show(error);
        });
    };
    MineComponent.prototype.buyerGetAllOrders = function () {
        var _this = this;
        this.couponService.buyerGetAllOrders().subscribe(function (result) {
            _this.ngZone.runOutsideAngular(function () {
                _this.ngZone.run(function () {
                    var r = JSON.parse(result);
                    _this.buyerAllOrders = r.orders.reverse();
                    _this.buyerCountInfo = r.countInfo;
                    console.log("买家所有订单", _this.buyerAllOrders);
                });
            });
        }, function (error) {
            _this.notify.show(error);
        });
    };
    MineComponent.prototype.sellerGetAllOrders = function () {
        var _this = this;
        this.couponService.sellerGetAllOrders().subscribe(function (result) {
            _this.ngZone.runOutsideAngular(function () {
                _this.ngZone.run(function () {
                    var r = JSON.parse(result);
                    _this.sellerAllOrders = r.orders.reverse();
                    _this.sellerCountInfo = r.countInfo;
                    if (r.countInfo.shipNum == 0) {
                        $("#shipNum").hide();
                    }
                    else {
                        $("#shipNum").text(r.countInfo.shipNum);
                    }
                    console.log("卖家所有订单", _this.sellerAllOrders);
                });
            });
        }, function (error) {
            _this.notify.show(error);
        });
    };
    MineComponent.prototype.buyerCancelOrder = function (orderId, event) {
        var _this = this;
        var ele = $(event.target);
        ele.addClass("loading");
        this.couponService.buyerCancelOrder(orderId).subscribe(function (value) {
        }, function (error) {
            _this.notify.show(error);
            ele.removeClass("loading");
        }, function () {
            _this.notify.show("订单取消成功");
            _this.buyerGetAllOrders();
            _this.sellerGetAllOrders();
        });
    };
    MineComponent.prototype.shipOrder = function (orderId, event) {
        var _this = this;
        var ele = $(event.target);
        ele.addClass("loading");
        this.couponService.shipOrder(orderId).subscribe(function (value) {
        }, function (error) {
            _this.notify.show(error);
            ele.removeClass("loading");
        }, function () {
            _this.notify.show("订单已发货");
            _this.buyerGetAllOrders();
            _this.sellerGetAllOrders();
        });
    };
    MineComponent.prototype.receiveOrder = function (orderId) {
        var _this = this;
        var ele = $(event.target);
        ele.addClass("loading");
        this.couponService.receiveOrder(orderId).subscribe(function (value) {
        }, function (error) {
            ele.removeClass("loading");
            _this.notify.show(error);
        }, function () {
            _this.buyerGetAllOrders();
            _this.sellerGetAllOrders();
        });
    };
    MineComponent.prototype.sellerWithDraw = function () {
        var _this = this;
        var ele = $(event.target);
        ele.addClass("loading");
        this.couponService.sellerWithDraw().subscribe(function (value) {
        }, function (error) {
            ele.removeClass("loading");
            _this.notify.show(error);
        }, function () {
            _this.sellerGetAllOrders();
        });
    };
    MineComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            providers: [__WEBPACK_IMPORTED_MODULE_2__notification_notification_component__["a" /* NotificationComponent */]],
            selector: 'app-mine',
            template: __webpack_require__("./src/app/mine/mine.component.html"),
            styles: [__webpack_require__("./src/app/mine/mine.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__coupon_service__["a" /* CouponService */],
            __WEBPACK_IMPORTED_MODULE_2__notification_notification_component__["a" /* NotificationComponent */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* NgZone */]])
    ], MineComponent);
    return MineComponent;
}());



/***/ }),

/***/ "./src/app/notification/notification.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/notification/notification.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui mini modal transition hidden\" id=\"notifyModal\">\r\n  <div class=\"header\">\r\n    提示消息\r\n  </div>\r\n  <div class=\"content\">\r\n    <p id=\"msgContent\"></p>\r\n  </div>\r\n  <div class=\"actions\">\r\n    <div class=\"ui primary button\" (click)=\"hide()\">\r\n      关闭\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/notification/notification.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotificationComponent = /** @class */ (function () {
    function NotificationComponent() {
    }
    NotificationComponent.prototype.ngOnInit = function () {
    };
    NotificationComponent.prototype.show = function (message) {
        $("#notifyModal #msgContent").text(message);
        $("#notifyModal").modal("show");
    };
    NotificationComponent.prototype.hide = function () {
        $("#notifyModal").modal("hide");
    };
    NotificationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-notification',
            template: __webpack_require__("./src/app/notification/notification.component.html"),
            styles: [__webpack_require__("./src/app/notification/notification.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotificationComponent);
    return NotificationComponent;
}());



/***/ }),

/***/ "./src/app/post/post.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/post/post.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui vertical basic segment\">\r\n  <div class=\"ui positive message\" *ngIf=\"showProm\">\r\n    <div class=\"header\">\r\n      你还没有安装浏览器插件，安装后再试\r\n    </div>\r\n    <p></p>\r\n    <a class=\"ui red button\" href=\"https://github.com/ChengOrangeJu/WebExtensionWallet\" target=\"_blank\">安装</a>\r\n  </div>\r\n\r\n  <form class=\"ui form\" #f=\"ngForm\" novalidate (submit)=\"onPostCoupon(f, $event)\">\r\n    <div class=\"field\">\r\n      <label>优惠券名字</label>\r\n      <input type=\"text\" name=\"name\" placeholder=\"输入优惠券名\" ngModel required #name=\"ngModel\" maxlength=\"32\">\r\n      <div class=\"ui pointing grey label\" *ngIf=\"name.errors\">\r\n        名称1-32个字符\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"field\">\r\n      <label>优惠券价格</label>\r\n      <input type=\"number\" name=\"price\" placeholder=\"输入优惠券价格【NAS】\" #price=\"ngModel\" ngModel required>\r\n      <div class=\"ui pointing grey label\" *ngIf=\"price.errors\">\r\n        价格必填\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"field\">\r\n      <label>优惠券数量</label>\r\n      <input type=\"number\" name=\"num\" placeholder=\"输入优惠券数量\" #num=\"ngModel\" ngModel required>\r\n      <div class=\"ui pointing grey label\" *ngIf=\"num.errors\">\r\n        数量必填\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"field\">\r\n      <label>优惠券类别</label>\r\n      <input type=\"text\" name=\"cat\" placeholder=\"输入优惠券类别\" #cat=\"ngModel\" ngModel required maxlength=\"32\">\r\n      <div class=\"ui pointing grey label\" *ngIf=\"cat.errors\">\r\n        类别1-32个字符\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"field\">\r\n      <label>优惠券过期时间</label>\r\n      <input type=\"date\" name=\"expired\" placeholder=\"输入优惠券过期时间\" #expired=\"ngModel\" ngModel required maxlength=\"32\">\r\n      <div class=\"ui pointing grey label\" *ngIf=\"expired.errors\">\r\n        过期时间必填\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"field\">\r\n      <label>优惠券图片链接</label>\r\n      <input type=\"text\" name=\"img\" placeholder=\"输入优惠券图片链接\" #img=\"ngModel\" ngModel required>\r\n      <div class=\"ui pointing grey label\" *ngIf=\"img.errors\">\r\n        图片链接必填\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"field\">\r\n      <label>优惠券描述</label>\r\n      <input type=\"text\" name=\"desc\" placeholder=\"描述一下优惠券\" #desc=\"ngModel\" ngModel required>\r\n      <div class=\"ui pointing grey label\" *ngIf=\"desc.errors\">\r\n        描述必填\r\n      </div>\r\n    </div>\r\n\r\n    <button class=\"ui primary button\" type=\"submit\">提交</button>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/post/post.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__coupon_service__ = __webpack_require__("./src/app/coupon.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notification_notification_component__ = __webpack_require__("./src/app/notification/notification.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PostComponent = /** @class */ (function () {
    function PostComponent(couponService, notify) {
        this.couponService = couponService;
        this.notify = notify;
        this.extProm = false;
    }
    PostComponent.prototype.ngOnInit = function () {
    };
    PostComponent.prototype.ngAfterViewInit = function () {
        var that = this;
        this.timer = setTimeout(function () {
            if (typeof (webExtensionWallet) === 'undefined') {
                that.extProm = true;
                window.clearTimeout(that.timer);
            }
        }, 1000);
    };
    PostComponent.prototype.onPostCoupon = function (postForm, event) {
        var _this = this;
        var target = event.target;
        if (postForm.valid) {
            $(target).addClass("loading");
            this.couponService.addQuan(postForm.value).subscribe(function (value) {
            }, function (error) {
                _this.notify.show(error);
                $(target).removeClass("loading");
            }, function () {
                _this.notify.show("优惠券录入成功");
                $(target).removeClass("loading");
                postForm.reset();
            });
        }
    };
    PostComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            providers: [__WEBPACK_IMPORTED_MODULE_2__notification_notification_component__["a" /* NotificationComponent */]],
            selector: 'app-post',
            template: __webpack_require__("./src/app/post/post.component.html"),
            styles: [__webpack_require__("./src/app/post/post.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__coupon_service__["a" /* CouponService */],
            __WEBPACK_IMPORTED_MODULE_2__notification_notification_component__["a" /* NotificationComponent */]])
    ], PostComponent);
    return PostComponent;
}());



/***/ }),

/***/ "./src/app/status.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatusPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var StatusPipe = /** @class */ (function () {
    function StatusPipe() {
    }
    StatusPipe.prototype.transform = function (value, args) {
        var humanStatus = "";
        switch (value) {
            case 0:
                humanStatus = "待发货";
                break;
            case 1:
                humanStatus = "待确认";
                break;
            case 2:
                humanStatus = "已完成";
                break;
            case 3:
                humanStatus = "已取消";
                break;
        }
        return humanStatus;
    };
    StatusPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'status'
        })
    ], StatusPipe);
    return StatusPipe;
}());



/***/ }),

/***/ "./src/app/wei-to-nas.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WeiToNasPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nebulas__ = __webpack_require__("./node_modules/nebulas/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nebulas___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_nebulas__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var WeiToNasPipe = /** @class */ (function () {
    function WeiToNasPipe() {
    }
    WeiToNasPipe.prototype.transform = function (value, args) {
        var unit = __WEBPACK_IMPORTED_MODULE_1_nebulas__["Unit"];
        return unit.fromBasic(value, "nas");
    };
    WeiToNasPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'weiToNas'
        })
    ], WeiToNasPipe);
    return WeiToNasPipe;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    http_request_url: 'https://testnet.nebulas.io',
    dAppAddress: 'n1sNox8kuxWyFKibYFXMDKGEAH1ZwXe4sbR'
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map