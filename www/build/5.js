webpackJsonp([5],{

/***/ 693:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentPageModule", function() { return ContentPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__content__ = __webpack_require__(722);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_video_player__ = __webpack_require__(723);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_titlebar_title_module__ = __webpack_require__(703);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ContentPageModule = /** @class */ (function () {
    function ContentPageModule() {
    }
    ContentPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__content__["a" /* ContentPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_5__components_titlebar_title_module__["a" /* TitleComponentModule */],
                __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["b" /* TranslateModule */].forChild(),
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__content__["a" /* ContentPage */]),
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_video_player__["a" /* VideoPlayer */]
            ]
        })
    ], ContentPageModule);
    return ContentPageModule;
}());

//# sourceMappingURL=content.module.js.map

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

/***/ 722:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentPage; });
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



var ContentPage = /** @class */ (function () {
    function ContentPage(navParams, navCtrl, sharedVars, events) {
        var _this = this;
        this.navParams = navParams;
        this.navCtrl = navCtrl;
        this.sharedVars = sharedVars;
        this.events = events;
        this.selectedItem = this.navParams.get('item');
        this.selectedParent = this.navParams.get('parent');
        this.specialBtn = 'audioBtn';
        this.titlebarColor = this.selectedParent;
        this.sharedVars.trackView('Content - ' + this.selectedParent + ':' + this.selectedItem.id);
        this.events.subscribe('reset-exhibits', function (tab) {
            _this.navCtrl.popToRoot();
        });
    }
    ContentPage.prototype.openAudio = function (event) {
        this.navCtrl.push('TranscriptPage', {
            item: this.selectedItem,
            parent: this.titlebarColor
        });
    };
    ContentPage.prototype.openVideo = function () {
        this.navCtrl.push('VideoPlayerPage', {
            item: this.selectedItem,
            parent: this.titlebarColor
        });
    };
    ContentPage.prototype.checkStatus = function () {
        if (typeof this.selectedItem == "object" && typeof this.selectedItem.id == "string" && (typeof this.selectedItem.content.audio == "object" || typeof this.selectedItem.content.video == "object")) {
            return true;
        }
        return false;
    };
    ContentPage.prototype.checkStatusAudio = function () {
        if (typeof this.selectedItem == "object" && typeof this.selectedItem.id == "string" && typeof this.selectedItem.content.audio == "object") {
            return true;
        }
        return false;
    };
    ContentPage.prototype.checkStatusVideo = function () {
        if (typeof this.selectedItem == "object" && typeof this.selectedItem.id == "string" && typeof this.selectedItem.content.video == "object") {
            return true;
        }
        return false;
    };
    ContentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-content',template:/*ion-inline-start:"/Users/sclark/Documents/Development/mobile/ionic/sciedtourguide/src/pages/content/content.html"*/'<ion-header>\n  <app-title [title]="selectedItem.content.title | translate" [selectedItem]="selectedItem" [titlebarColor]="titlebarColor"></app-title>\n</ion-header>\n\n<ion-content elastic-header>\n  <img [src]="selectedItem.content.img[0].path" [alt]="selectedItem.content.img[0].altText | translate" *ngIf="selectedItem.content.img">\n  <div [innerHtml]="selectedItem.content.description | translate" padding></div>\n  <button *ngIf="selectedItem.id == \'survey\'" ion-button (tap)="sharedVars.launch(\'https://www.surveymonkey.com/r/climate_exhibit\')" style="margin-left:15px;">Tell us what you think!</button>\n  <div padding class="location" *ngIf="selectedItem.location">\n    <strong>{{\'location\' | translate}}:</strong>{{orientation}}\n    <span [innerHtml]="selectedItem.location | translate"></span>\n    <br/>\n    <strong>{{\'exhibit\' | translate}}:</strong>\n    <span [innerHtml]="\'map.galleries.\'+selectedParent | translate"></span>\n  </div>\n</ion-content>\n<ion-footer *ngIf="checkStatus()">\n  <ion-toolbar class="audio">\n    <ion-buttons >\n      <button ion-button (tap)="openAudio($event)"><img src="assets/images/audio.png"/> {{\'audio_link\' | translate}} ({{selectedItem.content.audio[0].runningTime}})</button>\n    </ion-buttons>\n    <ion-buttons end>\n        <button ion-button (tap)="openVideo($event)" icon-start><ion-icon name="videocam"></ion-icon> {{\'video_link\' | translate}} ({{selectedItem.content.video[0].runningTime}})</button>\n    </ion-buttons>\n</ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/Users/sclark/Documents/Development/mobile/ionic/sciedtourguide/src/pages/content/content.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1__providers_shared_vars__["a" /* SharedVars */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* Events */]])
    ], ContentPage);
    return ContentPage;
}());

//# sourceMappingURL=content.js.map

/***/ }),

/***/ 723:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoPlayer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__ = __webpack_require__(44);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * @name Video Player
 * @description
 * A Cordova plugin that simply allows you to immediately play a video in fullscreen mode.
 *
 * Requires Cordova plugin: `com.moust.cordova.videoplayer`. For more info, please see the [VideoPlayer plugin docs](https://github.com/moust/cordova-plugin-videoplayer).
 *
 * @usage
 * ```typescript
 * import { VideoPlayer } from '@ionic-native/video-player';
 *
 * constructor(private videoPlayer: VideoPlayer) { }
 *
 * ...
 *
 * // Playing a video.
 * this.videoPlayer.play('file:///android_asset/www/movie.mp4').then(() => {
 *  console.log('video completed');
 * }).catch(err => {
 *  console.log(err);
 * });
 *
 * ```
 * @interfaces
 * VideoOptions
 */
var VideoPlayer = (function (_super) {
    __extends(VideoPlayer, _super);
    function VideoPlayer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Plays the video from the passed url.
     * @param fileUrl {string} File url to the video.
     * @param options {VideoOptions?} Optional video playback settings. See options above.
     * @returns {Promise<any>} Resolves promise when the video was played successfully.
     */
    /**
       * Plays the video from the passed url.
       * @param fileUrl {string} File url to the video.
       * @param options {VideoOptions?} Optional video playback settings. See options above.
       * @returns {Promise<any>} Resolves promise when the video was played successfully.
       */
    VideoPlayer.prototype.play = /**
       * Plays the video from the passed url.
       * @param fileUrl {string} File url to the video.
       * @param options {VideoOptions?} Optional video playback settings. See options above.
       * @returns {Promise<any>} Resolves promise when the video was played successfully.
       */
    function (fileUrl, options) {
        return;
    };
    /**
     * Stops the video playback immediatly.
     */
    /**
       * Stops the video playback immediatly.
       */
    VideoPlayer.prototype.close = /**
       * Stops the video playback immediatly.
       */
    function () { };
    VideoPlayer.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */] },
    ];
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, Object]),
        __metadata("design:returntype", Promise)
    ], VideoPlayer.prototype, "play", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], VideoPlayer.prototype, "close", null);
    /**
     * @name Video Player
     * @description
     * A Cordova plugin that simply allows you to immediately play a video in fullscreen mode.
     *
     * Requires Cordova plugin: `com.moust.cordova.videoplayer`. For more info, please see the [VideoPlayer plugin docs](https://github.com/moust/cordova-plugin-videoplayer).
     *
     * @usage
     * ```typescript
     * import { VideoPlayer } from '@ionic-native/video-player';
     *
     * constructor(private videoPlayer: VideoPlayer) { }
     *
     * ...
     *
     * // Playing a video.
     * this.videoPlayer.play('file:///android_asset/www/movie.mp4').then(() => {
     *  console.log('video completed');
     * }).catch(err => {
     *  console.log(err);
     * });
     *
     * ```
     * @interfaces
     * VideoOptions
     */
    VideoPlayer = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["d" /* Plugin */])({
            pluginName: 'VideoPlayer',
            plugin: 'https://github.com/moust/cordova-plugin-videoplayer.git',
            pluginRef: 'VideoPlayer',
            repo: 'https://github.com/moust/cordova-plugin-videoplayer',
            platforms: ['Android']
        })
    ], VideoPlayer);
    return VideoPlayer;
}(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* IonicNativePlugin */]));

//# sourceMappingURL=index.js.map

/***/ })

});
//# sourceMappingURL=5.js.map