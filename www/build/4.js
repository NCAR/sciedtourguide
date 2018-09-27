webpackJsonp([4],{

/***/ 699:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitPageModule", function() { return VisitPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__visit__ = __webpack_require__(731);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_elastic_header_elastic_header_module__ = __webpack_require__(732);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_titlebar_title_module__ = __webpack_require__(701);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var VisitPageModule = /** @class */ (function () {
    function VisitPageModule() {
    }
    VisitPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__visit__["a" /* VisitPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_5__components_titlebar_title_module__["a" /* TitleComponentModule */],
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild(),
                __WEBPACK_IMPORTED_MODULE_4__components_elastic_header_elastic_header_module__["a" /* ElasticHeaderComponentModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__visit__["a" /* VisitPage */]),
            ],
        })
    ], VisitPageModule);
    return VisitPageModule;
}());

//# sourceMappingURL=visit.module.js.map

/***/ }),

/***/ 701:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TitleComponentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__title_component__ = __webpack_require__(702);
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

/***/ 702:
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

/***/ 731:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VisitPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_shared_vars__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(88);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VisitPage = /** @class */ (function () {
    function VisitPage(sharedVars, events) {
        this.sharedVars = sharedVars;
        this.events = events;
        this.bkgImg = 'assets/images/ncar.png';
        this.show_accessibleParking = false;
        this.show_accessibleElevators = false;
        this.show_accessibleRestrooms = false;
        this.icon_parking = 'ios-arrow-forward';
        this.icon_elevators = 'ios-arrow-forward';
        this.icon_restrooms = 'ios-arrow-forward';
    }
    VisitPage.prototype.ionViewDidEnter = function () {
        this.sharedVars.trackView('Visitor Information');
    };
    VisitPage.prototype.loadMapPage = function (type) {
        this.events.publish('change-tab-map', 1, type);
    };
    VisitPage.prototype.toggleAccessibleInformation = function (value) {
        switch (value) {
            case 'parking':
                if (this.show_accessibleParking == true) {
                    this.sharedVars.trackEvent('AccessibilityInfo', 'toggle', 'Hide Parking');
                    this.show_accessibleParking = false;
                    this.icon_parking = 'ios-arrow-forward';
                }
                else {
                    this.sharedVars.trackEvent('AccessibilityInfo', 'toggle', 'Show Parking');
                    this.show_accessibleParking = true;
                    this.icon_parking = 'ios-arrow-down';
                }
                break;
            case 'elevators':
                if (this.show_accessibleElevators == true) {
                    this.sharedVars.trackEvent('AccessibilityInfo', 'toggle', 'Hide Elevators');
                    this.show_accessibleElevators = false;
                    this.icon_elevators = 'ios-arrow-forward';
                }
                else {
                    this.sharedVars.trackEvent('AccessibilityInfo', 'toggle', 'Show Elevators');
                    this.show_accessibleElevators = true;
                    this.icon_elevators = 'ios-arrow-down';
                }
                break;
            case 'restrooms':
                if (this.show_accessibleRestrooms == true) {
                    this.sharedVars.trackEvent('AccessibilityInfo', 'toggle', 'Hide Restrooms');
                    this.show_accessibleRestrooms = false;
                    this.icon_restrooms = 'ios-arrow-forward';
                }
                else {
                    this.sharedVars.trackEvent('AccessibilityInfo', 'toggle', 'Show Restrooms');
                    this.show_accessibleRestrooms = true;
                    this.icon_restrooms = 'ios-arrow-down';
                }
                break;
        }
    };
    VisitPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-visit',template:/*ion-inline-start:"/Users/sclark/Documents/Development/mobile/ionic/sciedtourguide/src/pages/visit/visit.html"*/'<ion-header><app-title [title]="\'visitor.title\' | translate"></app-title></ion-header>\n\n<ion-content elastic-header>\n\n  <div class="background-image" [style.backgroundImage]="\'url(\'+bkgImg+\')\'"></div>\n\n  <div class="main-content">\n    <ion-card>\n      <ion-card-content>\n        <p [innerHTML]="\'visitor.intro.content\' | translate"></p>\n        <button ion-button icon-left (tap)="sharedVars.launch(\'https://scied.ucar.edu/visit\')">\n        <ion-icon name="information-circle" aria-hidden="true"></ion-icon>\n        {{ \'visitor.intro.button_text\' | translate }}\n      </button></ion-card-content>\n    </ion-card>\n\n    <ion-card>\n      <ion-card-header>\n        <ion-icon name="pin" item-start large aria-hidden="true"></ion-icon>\n        {{\'visitor.address.title\' | translate}}\n      </ion-card-header>\n      <ion-card-content>\n        <p [innerHtml]="\'visitor.address.content\' | translate"></p>\n        <button ion-button icon-left (tap)="sharedVars.launch(\'https://goo.gl/maps/rfNPnQzivMM2\')">\n      <ion-icon name="navigate" aria-hidden="true"></ion-icon>\n      {{\'visitor.address.button_text\' | translate }}\n    </button>\n      </ion-card-content>\n    </ion-card>\n    <ion-card>\n      <ion-card-header>\n        <ion-icon name="clock" large item-start aria-hidden="true"></ion-icon>\n        {{ \'visitor.hours.title\' | translate }}\n      </ion-card-header>\n      <ion-card-content [innerHtml]="\'visitor.hours.content\' | translate ">\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card>\n      <ion-card-header>\n        <ion-icon name="clock" large item-start aria-hidden="true"></ion-icon>\n        {{ \'visitor.tours.title\' | translate }}\n      </ion-card-header>\n      <ion-card-content>\n        <p [innerHtml]="\'visitor.tours.content\' | translate"></p>\n        <button ion-button icon-left (tap)="sharedVars.launch(\'https://scied.ucar.edu/visit/ncar-public-tours\')">\n        <ion-icon name="information-circle" aria-hidden="true"></ion-icon>\n        {{ \'visitor.tours.button_text\' | translate }}\n      </button>\n      </ion-card-content>\n    </ion-card>\n    <ion-card>\n      <ion-card-header>\n        <ion-icon name="pizza" large item-start aria-hidden="true"></ion-icon>\n        {{\'visitor.cafeteria.title\' | translate}}\n      </ion-card-header>\n      <ion-card-content [innerHtml]="\'visitor.cafeteria.content\' | translate">\n      </ion-card-content>\n    </ion-card>\n    <ion-card>\n      <ion-card-header>\n        <ion-icon name="man" large item-start aria-hidden="true"></ion-icon>\n          <ion-icon name="woman" large item-start aria-hidden="true"></ion-icon>\n        {{\'visitor.restrooms.title\' | translate}}\n      </ion-card-header>\n      <ion-card-content [innerHtml]="\'visitor.restrooms.content\' | translate">\n      </ion-card-content>\n    </ion-card>\n    <ion-card>\n      <ion-card-header>\n        <img src="assets/images/accessible.jpg" class="custom_icon" /> {{ \'visitor.accessibility.title\' | translate}}\n      </ion-card-header>\n      <ion-card-content class="accessible">\n        <p>{{\'visitor.accessibility.content\' | translate}}</p>\n        <button ion-item detail-none class="togglebutton" (tap)="toggleAccessibleInformation(\'parking\')">\n        <ion-icon [name]="icon_parking" aria-hidden="true"></ion-icon>\n       {{ \'visitor.accessibility.parking.title\' | translate}}\n      </button>\n        <div class="content parking" *ngIf="show_accessibleParking" tappable>\n          <p [innerHtml]="\'visitor.accessibility.parking.content\'| translate"></p>\n          <h2 [innerHtml]="\'visitor.accessibility.parking.title1\' | translate"></h2>\n          <p [innerHtml]="\'visitor.accessibility.parking.content1\' | translate"></p>\n          <h2 [innerHtml]="\'visitor.accessibility.parking.title2\' | translate"></h2>\n          <p [innerHtml]="\'visitor.accessibility.parking.content2\' | translate"></p>\n          <h2 [innerHtml]="\'visitor.accessibility.parking.title3\' | translate"></h2>\n          <p [innerHtml]="\'visitor.accessibility.parking.content3\' | translate"></p>\n        </div>\n        <button ion-item detail-none class="togglebutton" (tap)="toggleAccessibleInformation(\'elevators\')">\n         <ion-icon [name]="icon_elevators" aria-hidden="true"></ion-icon>\n         {{ \'visitor.accessibility.elevators.title\' | translate}}\n        </button>\n        <div class="content elevators" *ngIf="show_accessibleElevators" tappable>\n          <p [innerHtml]="\'visitor.accessibility.elevators.content\' | translate"></p>\n        </div>\n        <button ion-item detail-none class="togglebutton" (tap)="toggleAccessibleInformation(\'restrooms\')">\n           <ion-icon [name]="icon_restrooms" aria-hidden="true"></ion-icon>\n           {{ \'visitor.accessibility.restrooms.title\' | translate}}\n        </button>\n\n        <div class="content restrooms" *ngIf="show_accessibleRestrooms" tappable>\n          <p [innerHtml]="\'visitor.accessibility.restrooms.content\' | translate"></p>\n        </div>\n        <button ion-button icon-left (tap)="loadMapPage(\'access\')">\n        <ion-icon name="map" aria-hidden="true"></ion-icon>\n        {{ \'visitor.accessibility.map.button_text\' | translate }}\n      </button>\n      </ion-card-content>\n    </ion-card>\n    <ion-card>\n      <ion-card-header>\n        <ion-icon name="information-circle" large item-start aria-hidden="true"></ion-icon>\n        {{\'visitor.about.title\' | translate}}\n      </ion-card-header>\n      <ion-card-content>\n        <span [innerHtml]="\'visitor.about.content\' | translate"></span>\n        <button ion-button icon-left (tap)="sharedVars.launch(\'https://www.ucar.edu/terms-of-use\')">\n        <ion-icon name="information-circle" aria-hidden="true"></ion-icon>\n        {{ \'visitor.about.button_text\' | translate }}\n      </button>\n      </ion-card-content>\n    </ion-card>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/sclark/Documents/Development/mobile/ionic/sciedtourguide/src/pages/visit/visit.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_shared_vars__["a" /* SharedVars */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* Events */]])
    ], VisitPage);
    return VisitPage;
}());

//# sourceMappingURL=visit.js.map

/***/ }),

/***/ 732:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ElasticHeaderComponentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__elastic_header_component__ = __webpack_require__(733);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ElasticHeaderComponentModule = /** @class */ (function () {
    function ElasticHeaderComponentModule() {
    }
    ElasticHeaderComponentModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__elastic_header_component__["a" /* ElasticHeaderComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicModule */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__elastic_header_component__["a" /* ElasticHeaderComponent */]
            ]
        })
    ], ElasticHeaderComponentModule);
    return ElasticHeaderComponentModule;
}());

//# sourceMappingURL=elastic-header.module.js.map

/***/ }),

/***/ 733:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ElasticHeaderComponent; });
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

// from https://www.joshmorony.com/how-to-create-a-directive-in-ionic-2-parallax-header/
var ElasticHeaderComponent = /** @class */ (function () {
    function ElasticHeaderComponent(element, renderer) {
        this.element = element;
        this.renderer = renderer;
    }
    ElasticHeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.scrollerHandle = this.element.nativeElement.getElementsByClassName('scroll-content')[0];
        this.header = this.scrollerHandle.firstElementChild;
        this.headerHeight = this.scrollerHandle.clientHeight;
        this.ticking = false;
        this.renderer.setElementStyle(this.header, 'webkitTransformOrigin', 'center bottom');
        window.addEventListener('resize', function () {
            _this.headerHeight = _this.scrollerHandle.clientHeight;
        }, false);
        this.scrollerHandle.addEventListener('scroll', function () {
            if (!_this.ticking) {
                window.requestAnimationFrame(function () {
                    _this.updateElasticHeader();
                });
            }
            _this.ticking = true;
        });
    };
    ElasticHeaderComponent.prototype.updateElasticHeader = function () {
        this.scrollTop = this.scrollerHandle.scrollTop;
        if (this.scrollTop >= 0) {
            this.translateAmt = this.scrollTop / 2;
            this.scaleAmt = 1;
        }
        else {
            this.translateAmt = 0;
            this.scaleAmt = -this.scrollTop / this.headerHeight + 1;
        }
        this.renderer.setElementStyle(this.header, 'webkitTransform', 'translate3d(0,' + this.translateAmt + 'px,0) scale(' + this.scaleAmt + ',' + this.scaleAmt + ')');
        this.ticking = false;
    };
    ElasticHeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
            selector: '[elastic-header]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Renderer */]])
    ], ElasticHeaderComponent);
    return ElasticHeaderComponent;
}());

//# sourceMappingURL=elastic-header.component.js.map

/***/ })

});
//# sourceMappingURL=4.js.map