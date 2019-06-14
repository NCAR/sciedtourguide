webpackJsonp([8],{

/***/ 697:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapIndexPageModule", function() { return MapIndexPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mapindex__ = __webpack_require__(727);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_titlebar_title_module__ = __webpack_require__(703);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var MapIndexPageModule = /** @class */ (function () {
    function MapIndexPageModule() {
    }
    MapIndexPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__mapindex__["a" /* MapIndexPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__components_titlebar_title_module__["a" /* TitleComponentModule */],
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild(),
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__mapindex__["a" /* MapIndexPage */]),
            ],
        })
    ], MapIndexPageModule);
    return MapIndexPageModule;
}());

//# sourceMappingURL=mapindex.module.js.map

/***/ }),

/***/ 703:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TitleComponentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__title_component__ = __webpack_require__(704);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(89);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var TitleComponentModule = /** @class */ (function () {
    function TitleComponentModule() {
    }
    TitleComponentModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__title_component__["a" /* TitleComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicModule */],
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__title_component__["a" /* TitleComponent */]
            ]
        })
    ], TitleComponentModule);
    return TitleComponentModule;
}());

//# sourceMappingURL=title.module.js.map

/***/ }),

/***/ 704:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TitleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TitleComponent = /** @class */ (function () {
    function TitleComponent() {
        if (!this.titlebarColor) {
            this.titlebarColor = "primary";
        }
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], TitleComponent.prototype, "title", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], TitleComponent.prototype, "selectedItem", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], TitleComponent.prototype, "titlebarColor", void 0);
    TitleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-title',template:/*ion-inline-start:"/Users/sclark/Documents/Development/mobile/ionic/sciedtourguide/src/components/titlebar/title.component.html"*/'<ion-navbar [color]="titlebarColor">\n    <ion-title>{{title | translate}}</ion-title>\n</ion-navbar>\n'/*ion-inline-end:"/Users/sclark/Documents/Development/mobile/ionic/sciedtourguide/src/components/titlebar/title.component.html"*/,
        }),
        __metadata("design:paramtypes", [])
    ], TitleComponent);
    return TitleComponent;
}());

//# sourceMappingURL=title.component.js.map

/***/ }),

/***/ 727:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapIndexPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_shared_vars__ = __webpack_require__(157);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// from: https://github.com/p-sebastian/ionic2-pinchzoom



var MapIndexPage = /** @class */ (function () {
    function MapIndexPage(sharedVars, navParams, navCtrl, events) {
        var _this = this;
        this.sharedVars = sharedVars;
        this.navParams = navParams;
        this.navCtrl = navCtrl;
        this.events = events;
        this.selectedItem = '';
        this.selectedItem = this.navParams.get('item');
        this.events.subscribe('change-tab-map', function (tab, item) {
            _this.selectedItem = item;
            _this.checkPageChange();
        });
        this.checkPageChange();
    }
    MapIndexPage.prototype.ionViewDidEnter = function () {
        this.sharedVars.trackView('Map - Index');
    };
    MapIndexPage.prototype.openPDF = function () {
        this.sharedVars.launch('https://scied.ucar.edu/sites/default/files/images/event/sss_2017_map_and_schedule_0.pdf');
    };
    MapIndexPage.prototype.openPage = function (event, item) {
        switch (item) {
            case 'mapreg':
                this.sharedVars.trackView('Map - Interactive');
                this.navCtrl.push('MapPage');
                break;
            case 'mapaccess':
                this.navCtrl.push('MapAccessPage');
                break;
        }
    };
    MapIndexPage.prototype.checkPageChange = function () {
        if (this.selectedItem != '') {
            switch (this.selectedItem) {
                case 'access':
                    //load the accessible map
                    this.navCtrl.popToRoot();
                    this.navCtrl.push('MapAccessPage');
                    break;
                default:
                    // load regular map
                    this.navCtrl.popToRoot();
                    this.navCtrl.push('MapPage');
                    break;
            }
        }
    };
    MapIndexPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-map-index',template:/*ion-inline-start:"/Users/sclark/Documents/Development/mobile/ionic/sciedtourguide/src/pages/map/mapindex.html"*/'<ion-header>\n  <app-title [title]="\'toolbar.map\' | translate"></app-title>\n</ion-header>\n<ion-content>\n  <button class="card" (tap)="openPage($event, \'mapreg\')">\n    <div class="card-title">{{\'map.interactive.button_text\' | translate }}</div>\n      <div class="card-subtitle">{{\'map.interactive.button_desc\' | translate }}</div>\n  </button>\n  <button class="card" (tap)="openPage($event, \'mapaccess\')">\n\n    <div class="card-title">{{\'map.access.button_text\' | translate }}</div>\n      <div class="card-subtitle">{{\'map.access.button_desc\' | translate }}</div>\n  </button>\n</ion-content>\n'/*ion-inline-end:"/Users/sclark/Documents/Development/mobile/ionic/sciedtourguide/src/pages/map/mapindex.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_shared_vars__["a" /* SharedVars */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */]])
    ], MapIndexPage);
    return MapIndexPage;
}());

//# sourceMappingURL=mapindex.js.map

/***/ })

});
//# sourceMappingURL=8.js.map