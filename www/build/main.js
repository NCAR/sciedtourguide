webpackJsonp([9],{

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedVars; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_analytics__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(88);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SharedVars = /** @class */ (function () {
    function SharedVars(ga, platform, storage) {
        this.ga = ga;
        this.platform = platform;
        this.storage = storage;
        this.units = 'English';
        this.instructions = true;
        this.tracking = true;
    }
    SharedVars.prototype.setPlatformWidth = function (value) {
        this.width = value;
    };
    SharedVars.prototype.getPlatformWidth = function () {
        return this.width;
    };
    SharedVars.prototype.setPlatformHeight = function (value) {
        this.height = value;
    };
    SharedVars.prototype.getPlatformHeight = function () {
        return this.height;
    };
    SharedVars.prototype.setOrientation = function (value) {
        this.orientation = value;
    };
    SharedVars.prototype.getOrientation = function () {
        return this.orientation;
    };
    SharedVars.prototype.getSmallScreen = function () {
        if (this.width < 450) {
            return false;
        }
        else {
            return true;
        }
    };
    SharedVars.prototype.setUnits = function (value) {
        this.units = value;
        this.storage.set('settingsUnits', this.units);
    };
    SharedVars.prototype.getUnits = function () {
        var _this = this;
        return new Promise(function (resolve) {
            if (typeof (_this.units) !== 'undefined') {
                resolve(_this.units);
            }
            else {
                _this.storage.get('settingsUnits').then(function (value) {
                    if (value && typeof (value) !== 'undefined') {
                        _this.units = value;
                        resolve(_this.units);
                    }
                    else {
                        // default to English
                        _this.units = "English";
                        _this.setUnits(_this.units);
                        resolve(_this.units);
                    }
                });
            }
        });
    };
    SharedVars.prototype.setInstructions = function (value) {
        this.instructions = value;
        this.storage.set('settingsInstructions', this.instructions);
    };
    SharedVars.prototype.getInstructions = function () {
        var _this = this;
        return new Promise(function (resolve) {
            if (typeof (_this.instructions) !== 'undefined') {
                resolve(_this.instructions);
            }
            else {
                _this.storage.get('settingsInstructions').then(function (value) {
                    if (value && typeof (value) !== 'undefined') {
                        _this.instructions = value;
                        resolve(_this.instructions);
                    }
                    else {
                        _this.instructions = false;
                        _this.setInstructions(_this.instructions);
                        resolve(_this.instructions);
                    }
                });
            }
        });
    };
    SharedVars.prototype.setTracking = function (value) {
        this.tracking = value;
        this.storage.set('settingsTracking', this.tracking);
    };
    SharedVars.prototype.getTracking = function () {
        var _this = this;
        return new Promise(function (resolve) {
            if (typeof (_this.tracking) !== 'undefined') {
                resolve(_this.tracking);
            }
            else {
                _this.storage.get('settingsTracking').then(function (value) {
                    if (value && typeof (value) !== 'undefined') {
                        _this.tracking = value;
                        resolve(_this.tracking);
                    }
                    else {
                        _this.tracking = true;
                        _this.setTracking(_this.tracking);
                        resolve(_this.tracking);
                    }
                });
            }
        });
    };
    SharedVars.prototype.shuffle = function (a) {
        var _a;
        for (var i = a.length; i; i--) {
            var j = Math.floor(Math.random() * i);
            _a = [a[j], a[i - 1]], a[i - 1] = _a[0], a[j] = _a[1];
        }
        return a;
    };
    SharedVars.prototype.launch = function (url) {
        var _this = this;
        this.platform.ready().then(function () {
            var promise = _this.getTracking();
            promise.then(function (data) {
                if (data == true) {
                    _this.trackEvent('OpenURL', 'click', url);
                }
            });
            window.open(url, "_system", "location=true");
        });
    };
    SharedVars.prototype.trackEvent = function (category, action, label) {
        var _this = this;
        this.platform.ready().then(function () {
            var promise = _this.getTracking();
            promise.then(function (data) {
                if (data == true) {
                    _this.ga.trackEvent(category, action, label);
                    //console.log(action+ " "+label);
                }
            });
        });
    };
    SharedVars.prototype.trackView = function (title) {
        var _this = this;
        this.platform.ready().then(function () {
            var promise = _this.getTracking();
            promise.then(function (data) {
                if (data == true) {
                    _this.ga.trackView(title);
                    //console.log(title);
                }
            });
        });
    };
    SharedVars = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_google_analytics__["a" /* GoogleAnalytics */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */]])
    ], SharedVars);
    return SharedVars;
}());

//# sourceMappingURL=shared-vars.js.map

/***/ }),

/***/ 168:
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
webpackEmptyAsyncContext.id = 168;

/***/ }),

/***/ 213:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/content/content.module": [
		692,
		8
	],
	"../pages/exhibitslist/exhibitslist.module": [
		693,
		7
	],
	"../pages/map/map.module": [
		694,
		2
	],
	"../pages/map/mapaccess.module": [
		695,
		1
	],
	"../pages/map/mapindex.module": [
		696,
		6
	],
	"../pages/postcard/postcard.module": [
		697,
		3
	],
	"../pages/tabs/tabs.module": [
		698,
		5
	],
	"../pages/transcript/transcript.module": [
		700,
		0
	],
	"../pages/visit/visit.module": [
		699,
		4
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 213;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedDataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_file_service__ = __webpack_require__(237);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SharedDataService = /** @class */ (function () {
    function SharedDataService(dataFileService) {
        this.dataFileService = dataFileService;
        this._data = [];
    }
    SharedDataService.prototype.load = function () {
        var _this = this;
        return new Promise(function (resolve) {
            if (_this._data.length > 0) {
                resolve(_this._data);
            }
            else {
                var file = 'assets/data/exhibits_list.json';
                _this.dataFileService.load(file)
                    .then(function (data) {
                    _this._data = data;
                    resolve(_this._data);
                });
            }
        });
    };
    SharedDataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_file_service__["a" /* DataFileService */]])
    ], SharedDataService);
    return SharedDataService;
}());

//# sourceMappingURL=shared-data-service.js.map

/***/ }),

/***/ 237:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataFileService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DataFileService = /** @class */ (function () {
    function DataFileService(http) {
        this.http = http;
        this.data = null;
        this.data = null;
    }
    DataFileService.prototype.load = function (file) {
        var _this = this;
        // don't have the data yet
        return new Promise(function (resolve) {
            // We're using Angular HTTP provider to request the data,
            // then on the response, it'll map the JSON data to a parsed JS object.
            // Next, we process the data and resolve the promise with the new data.
            _this.http.get(file)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                // we've got back the raw data, now generate the core schedule data
                // and save the data for later reference
                _this.data = data;
                resolve(_this.data);
            });
        });
    };
    DataFileService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], DataFileService);
    return DataFileService;
}());

//# sourceMappingURL=data-file-service.js.map

/***/ }),

/***/ 364:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExhibitsDataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_shared_data_service__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ExhibitsDataProvider = /** @class */ (function () {
    function ExhibitsDataProvider(sharedDataService, translate) {
        var _this = this;
        this.sharedDataService = sharedDataService;
        this.translate = translate;
        this.f_dataReady = false;
        this.section_search = false;
        this.originalData = [];
        var dataPromise = this.sharedDataService.load();
        dataPromise.then(function (data) {
            _this.originalData = data;
            _this.f_dataReady = true;
        });
    }
    ExhibitsDataProvider.prototype.lookupTranslation = function (term) {
        this.translate.get(term).subscribe(function (result) {
        });
    };
    ExhibitsDataProvider.prototype.filterItems = function (searchTerm) {
        var _this = this;
        this.section_search = false;
        // return all if searchTerm is empty
        if (searchTerm.trim() == '') {
            return this.originalData;
        }
        // check if this is a section searchTerm
        var section_rule = '^section_';
        var section_re = new RegExp(section_rule);
        if (section_re.test(searchTerm)) {
            this.section_search = true;
            searchTerm = searchTerm.replace('section_', '');
        }
        else {
            this.section_search = false;
        }
        var modifiedData = JSON.parse(JSON.stringify(this.originalData));
        var a_items = [];
        if (modifiedData.length) {
            var rule = '^.*' + searchTerm.toLowerCase() + '.*$';
            var re_1 = new RegExp(rule);
            modifiedData.forEach(function (item) {
                var a_subItems = [];
                var a_operating = item.children;
                if (_this.section_search == false) {
                    a_operating.forEach(function (subitem) {
                        var f_found = false;
                        // checks for translated matches on the menu item title (not category)
                        _this.translate.get(subitem.name).subscribe(function (result) {
                            if (re_1.test(result.toLowerCase())) {
                                a_subItems.push(subitem);
                                f_found = true;
                            }
                            if (f_found == false) {
                                // if not positive from menu item title try with the item description
                                _this.translate.get(subitem.content.description).subscribe(function (result) {
                                    if (re_1.test(result.toLowerCase())) {
                                        a_subItems.push(subitem);
                                        f_found = true;
                                    }
                                });
                            }
                        });
                    });
                }
                else {
                    // just check if this is the right section, then grab all children
                    if (re_1.test(item.id)) {
                        a_operating.forEach(function (subitem) {
                            a_subItems.push(subitem);
                        });
                    }
                }
                if (a_subItems.length) {
                    // if there are children, include the category are parent
                    var newparent = item;
                    item.children = a_subItems;
                    a_items.push(newparent);
                }
            });
            return a_items;
        }
        return this.originalData;
    };
    ExhibitsDataProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_shared_data_service__["a" /* SharedDataService */], __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */]])
    ], ExhibitsDataProvider);
    return ExhibitsDataProvider;
}());

//# sourceMappingURL=exhibits-data.js.map

/***/ }),

/***/ 367:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_module__ = __webpack_require__(372);



Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_15" /* enableProdMode */])();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 372:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createTranslateLoader */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(689);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_data_file_service__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_shared_vars__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_shared_data_service__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ngx_translate_http_loader__ = __webpack_require__(690);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_android_permissions__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_google_analytics__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_storage__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_exhibits_data_exhibits_data__ = __webpack_require__(364);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_9__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, 'assets/i18n/', '.json');
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: (createTranslateLoader),
                        deps: [__WEBPACK_IMPORTED_MODULE_7__angular_http__["a" /* Http */]]
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {
                    preloadModules: true
                }, {
                    links: [
                        { loadChildren: '../pages/content/content.module#ContentPageModule', name: 'ContentPage', segment: 'content', priority: 'high', defaultHistory: [] },
                        { loadChildren: '../pages/exhibitslist/exhibitslist.module#ExhibitsListPageModule', name: 'ExhibitsListPage', segment: 'exhibitslist', priority: 'high', defaultHistory: [] },
                        { loadChildren: '../pages/map/map.module#MapPageModule', name: 'MapPage', segment: 'map', priority: 'high', defaultHistory: [] },
                        { loadChildren: '../pages/map/mapaccess.module#MapAccessPageModule', name: 'MapAccessPage', segment: 'mapaccess', priority: 'high', defaultHistory: [] },
                        { loadChildren: '../pages/map/mapindex.module#MapIndexPageModule', name: 'MapIndexPage', segment: 'mapindex', priority: 'high', defaultHistory: [] },
                        { loadChildren: '../pages/postcard/postcard.module#PostcardPageModule', name: 'PostcardPage', segment: 'postcard', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'high', defaultHistory: [] },
                        { loadChildren: '../pages/visit/visit.module#VisitPageModule', name: 'VisitPage', segment: 'visit', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/transcript/transcript.module#TranscriptPageModule', name: 'TranscriptPage', segment: 'transcript', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_14__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_google_analytics__["a" /* GoogleAnalytics */],
                __WEBPACK_IMPORTED_MODULE_5__providers_shared_vars__["a" /* SharedVars */],
                __WEBPACK_IMPORTED_MODULE_4__providers_data_file_service__["a" /* DataFileService */],
                __WEBPACK_IMPORTED_MODULE_6__providers_shared_data_service__["a" /* SharedDataService */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_android_permissions__["a" /* AndroidPermissions */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_15__providers_exhibits_data_exhibits_data__["a" /* ExhibitsDataProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 689:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_analytics__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_shared_vars__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__ = __webpack_require__(89);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = /** @class */ (function () {
    function MyApp(ga, platform, statusBar, splashScreen, translate, sharedVars) {
        var _this = this;
        this.ga = ga;
        this.translate = translate;
        this.sharedVars = sharedVars;
        this.rootPage = 'TabsPage';
        this.appVer = '1.0.0';
        platform.ready().then(function () {
            statusBar.overlaysWebView(false);
            statusBar.styleLightContent();
            statusBar.backgroundColorByHexString("#004779");
            // google
            // this.ga.debugMode()
            _this.ga.startTrackerWithId("UA-66300420-3").then(function () {
                //console.log('Google analytics is ready now');
            })
                .catch(function (e) { return console.log('Error starting GoogleAnalytics', e); });
            _this.ga.setAllowIDFACollection(false);
            _this.ga.setAppVersion(_this.appVer);
            _this.ga.enableUncaughtExceptionReporting(true)
                .then(function (_success) {
                //console.log(_success)
            }).catch(function (_error) {
                //console.log(_error)
            });
            _this.translate.setDefaultLang('en');
            var browserLang = _this.translate.getBrowserLang();
            _this.translate.use(browserLang.match(/en/) ? browserLang : 'en');
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            setTimeout(function () {
                splashScreen.hide();
            }, 100);
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/sclark/Documents/Development/mobile/ionic/sciedtourguide/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/sclark/Documents/Development/mobile/ionic/sciedtourguide/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__ionic_native_google_analytics__["a" /* GoogleAnalytics */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_5__providers_shared_vars__["a" /* SharedVars */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[367]);
//# sourceMappingURL=main.js.map