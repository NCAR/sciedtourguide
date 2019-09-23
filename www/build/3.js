webpackJsonp([3],{

/***/ 698:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostcardPageModule", function() { return PostcardPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__postcard__ = __webpack_require__(728);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_titlebar_title_module__ = __webpack_require__(703);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_image_draw_image_draw_module__ = __webpack_require__(731);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var PostcardPageModule = /** @class */ (function () {
    function PostcardPageModule() {
    }
    PostcardPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__postcard__["a" /* PostcardPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__components_titlebar_title_module__["a" /* TitleComponentModule */],
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild(),
                __WEBPACK_IMPORTED_MODULE_5__components_image_draw_image_draw_module__["a" /* ImageDrawComponentModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__postcard__["a" /* PostcardPage */]),
            ],
        })
    ], PostcardPageModule);
    return PostcardPageModule;
}());

//# sourceMappingURL=postcard.module.js.map

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

/***/ 728:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostcardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_shared_vars__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__ = __webpack_require__(729);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_social_sharing__ = __webpack_require__(730);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_android_permissions__ = __webpack_require__(367);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PostcardPage = /** @class */ (function () {
    function PostcardPage(androidPermissions, formBuilder, platform, camera, sharingVar, sharedVars) {
        var _this = this;
        this.androidPermissions = androidPermissions;
        this.formBuilder = formBuilder;
        this.platform = platform;
        this.camera = camera;
        this.sharingVar = sharingVar;
        this.sharedVars = sharedVars;
        this.postcardMessageText = false;
        this.postcardBkgImage = false;
        this.height = this.platform.height();
        this.width = this.platform.width();
        this.postcardLoaded = false;
        this.characters_left = 140;
        this.postcardData = { 'message': '', 'bkg': '' };
        this.selectedImage = { "path": "", "altText": "" };
        this.platform.ready().then(function () {
            _this.bkg_imgs = [
                {
                    "path": "assets/images/postcards/mesalab.jpg",
                    "altText": "postcard.image.mesalab.altText"
                },
                {
                    "path": "assets/images/postcards/eclipse.jpg",
                    "altText": "postcard.image.eclipse.altText"
                },
                {
                    "path": "assets/images/postcards/mammatus.jpg",
                    "altText": "postcard.image.mammatus.altText"
                },
                {
                    "path": "assets/images/postcards/cesm.jpg",
                    "altText": "postcard.image.cesm.altText"
                },
                {
                    "path": "assets/images/postcards/snowflake.jpg",
                    "altText": "postcard.image.snowflake.altText"
                },
                {
                    "path": "assets/images/postcards/treerings.jpg",
                    "altText": "postcard.image.treerings.altText"
                }
            ];
            _this.options = {
                quality: 100,
                targetHeight: _this.height,
                targetWidth: _this.width,
                saveToPhotoAlbum: true,
                correctOrientation: true,
                destinationType: _this.camera.DestinationType.DATA_URL,
                encodingType: _this.camera.EncodingType.JPEG,
                mediaType: _this.camera.MediaType.PICTURE
            };
            _this.postcard = _this.formBuilder.group({
                message: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required]
            });
        });
    }
    PostcardPage.prototype.ionViewDidEnter = function () {
        this.trackSteps(1);
    };
    PostcardPage.prototype.ionViewWillLeave = function () {
        this.resetFlags();
    };
    PostcardPage.prototype.trackSteps = function (step, args) {
        if (args === void 0) { args = { 'src': '' }; }
        switch (step) {
            case 1:
                this.sharedVars.trackView('Postcards - Choose Background');
                break;
            case 2:
                this.sharedVars.trackView('Postcards - Background Image:' + args.src);
                break;
            case 3:
                this.sharedVars.trackView('Postcards - Take Photo');
                break;
            case 4:
                this.sharedVars.trackView('Postcards - Write Message');
                break;
            case 5:
                this.sharedVars.trackView('Postcards - Review');
                break;
            case 6:
                this.sharedVars.trackView('Postcards - Share');
                break;
        }
    };
    PostcardPage.prototype.stepBack = function () {
        if (this.postcardMessageText) {
            this.trackSteps(4);
            this.postcardMessageText = null;
            this.postcardLoaded = false;
        }
        else if (this.base64Image) {
            this.trackSteps(3);
            this.base64Image = null;
            this.takePicture();
        }
        else if (this.postcardBkgImage) {
            this.trackSteps(1);
            this.postcardBkgImage = null;
        }
    };
    PostcardPage.prototype.startOver = function () {
        this.resetFlags();
    };
    PostcardPage.prototype.charsLeft = function () {
        this.characters_left = 140 - this.postcard.value.message.length;
    };
    PostcardPage.prototype.resetFlags = function () {
        this.base64Image = null;
        this.postcardMessageText = null;
        this.postcardBkgImage = null;
        this.selectedImage = { "path": "", "altText": "" };
        this.postcardLoaded = false;
        this.checkExist = false;
        this.postcard = this.formBuilder.group({
            message: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required]
        });
        this.trackSteps(1);
    };
    PostcardPage.prototype.reviewPostcard = function () {
        this.trackSteps(5);
        this.postcardData.message = this.postcard.value.message;
        this.postcardMessageText = true;
        this.prepPostcard();
    };
    PostcardPage.prototype.prepPostcard = function () {
        var _this = this;
        setTimeout(function () {
            _this.postcardLoaded = true;
        }, 3000);
    };
    PostcardPage.prototype.selectBkgImg = function (src) {
        this.trackSteps(2, { 'src': src.path });
        this.postcardData.bkg = src.path;
        this.selectedImage = { "path": src.path, "altText": src.altText };
        this.postcardBkgImage = true;
    };
    PostcardPage.prototype.takePicture = function () {
        var _this = this;
        if (this.platform.is('android')) {
            this.platform.ready().then(function () {
                _this.androidPermissions.checkPermission(_this.androidPermissions.PERMISSION.CAMERA).then(function (result) {
                    _this.useCamera();
                }, function (err) {
                    _this.androidPermissions.requestPermission(_this.androidPermissions.PERMISSION.CAMERA).then(function (result) {
                        _this.useCamera();
                    });
                });
            });
        }
        else {
            this.useCamera();
        }
    };
    PostcardPage.prototype.useCamera = function () {
        var _this = this;
        this.trackSteps(3);
        this.camera.getPicture(this.options).then(function (imageData) {
            // imageData is a base64 encoded string
            _this.base64Image = "data:image/jpeg;base64," + imageData;
        }, function (err) {
        });
        this.trackSteps(4);
    };
    PostcardPage.prototype.otherShare = function () {
        var _this = this;
        this.trackSteps(6);
        this.checkExist = setInterval(function () {
            _this.imgElm = document.getElementById('finalPostcard');
            if (_this.imgElm != null) {
                clearInterval(_this.checkExist);
                _this.sharingVar.share(_this.postcard.value.message + " Learn more about the NCAR Mesa Lab Visitor Center at http://scied.ucar.edu/visit", "Postcard: Greetings from the NCAR Visitor Center!", _this.imgElm.src, "http://scied.ucar.edu/visit")
                    .then(function () {
                    // completion - post a message and then reset
                });
            }
        });
    };
    PostcardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-postcard',template:/*ion-inline-start:"/Users/sclark/Documents/Development/mobile/ionic/sciedtourguide/src/pages/postcard/postcard.html"*/'<ion-header>\n  <app-title [title]="\'toolbar.postcards\' | translate"></app-title>\n</ion-header>\n<ion-content>\n  <div padding class="postcard_content">\n    <div *ngIf="!postcardBkgImage">\n      <div [innerHTML]="\'postcard.intro.content\' | translate"></div>\n      <div *ngIf="!postcardBkgImage" class="bkg_image_container">\n        <p>{{ \'postcard.steps.one.instructions.content\' | translate }}</p>\n        <img tappable *ngFor="let img of bkg_imgs" [src]="img.path" (tap)="selectBkgImg(img)" [alt]="img.altText | translate" [title]="img.altText | translate" role="button">\n      </div>\n    </div>\n\n    <div *ngIf="!base64Image && postcardBkgImage" class="camera_container">\n      <div class="preview_container">\n        <div class="preview_content_container">\n          <img [src]="selectedImage.path" class="preview bkg" [alt]="selectedImage.altText | translate" [title]="selectedImage.altText | translate">\n        </div>\n        <div class="preview_instructions_container">\n          <p>{{ \'postcard.steps.two.instructions.content\' | translate }}</p>\n          <button ion-button (tap)="takePicture()" icon-right class="active">{{\'postcard.steps.two.buttons.take_picture\' | translate }} <ion-icon name="camera" aria-hidden="true"></ion-icon></button>\n          <button ion-button (tap)="stepBack()" icon-left class="active"><ion-icon name="backspace" aria-hidden="true"></ion-icon> {{\'postcard.steps.two.buttons.camera_back\' | translate }}</button>\n        </div>\n      </div>\n    </div>\n\n\n\n    <div *ngIf="base64Image && postcardBkgImage && !postcardMessageText" class="text_container">\n      <div class="preview_content_container" *ngIf="base64Image">\n        <img [src]="base64Image" class="preview bkg" alt="{{\'postcard.camera_alt\' | translate}}" />\n      </div>\n      <div class="preview_instructions_container">\n        <p *ngIf="base64Image">{{ \'postcard.steps.three.instructions.withimage.content\' | translate }}</p>\n        <form [formGroup]="postcard" (ngSubmit)="reviewPostcard()">\n          <ion-label for="message" stacked>{{ \'postcard.steps.three.message.label\' | translate }}</ion-label>\n          <ion-textarea id="message" formControlName="message" [placeholder]="\'postcard.steps.three.message.placeholder_text\' | translate" class="message" [attr.maxlength]="140" (ionChange)="charsLeft()"></ion-textarea>\n          <p>Characters remaining: {{characters_left}}</p>\n          <p [class.hidden]="postcard.valid" class="warning">Please write a message before sending your postcard.</p>\n          <button ion-button type="submit" [disabled]="!postcard.valid" icon-right [class.inactive]="!postcard.value" [class.active]="postcard.valid">{{\'postcard.steps.three.buttons.finish\' | translate }} <ion-icon name="checkmark-circle" aria-hidden="true"></ion-icon></button>\n          <button ion-button (tap)="stepBack()" icon-left class="active"><ion-icon name="backspace" aria-hidden="true"></ion-icon> {{\'postcard.steps.three.buttons.message_back\' | translate }}</button>\n        </form>\n      </div>\n\n\n    </div>\n\n    <div *ngIf="postcardMessageText">\n\n      <ion-row no-padding class="postcard_review">\n        <ion-col [ngClass]="postcardLoaded ? \'hidden\' :\'\'" style="text-align:center;">\n          <ion-spinner></ion-spinner>\n          <p>{{\'postcard.steps.finished.loading_text\' | translate }}</p>\n        </ion-col>\n        <ion-col [ngClass]="postcardLoaded ? \'\' :\'hidden\'">\n          <ion-card class="img_container" *ngIf="base64Image && postcardMessageText">\n            <img [src]="base64Image" [text]="postcardData.message" [bkg]="postcardData.bkg" draw-text crossOrigin id="finalPostcard" [photoFlag]="photoFlag">\n          </ion-card>\n          <p>{{ \'postcard.steps.finished.review_text\' | translate }}</p>\n          <button ion-button (tap)="otherShare()" icon-right class="active">{{ \'postcard.steps.finished.buttons.send\' | translate }} <ion-icon name="send" aria-hidden="true"></ion-icon></button>\n          <button ion-button (tap)="startOver()" icon-left class="active"><ion-icon name="undo" aria-hidden="true"></ion-icon> {{ \'postcard.steps.finished.buttons.startover\' | translate }}</button>\n        </ion-col>\n      </ion-row>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/sclark/Documents/Development/mobile/ionic/sciedtourguide/src/pages/postcard/postcard.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_android_permissions__["a" /* AndroidPermissions */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_social_sharing__["a" /* SocialSharing */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__ionic_native_android_permissions__["a" /* AndroidPermissions */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_social_sharing__["a" /* SocialSharing */], __WEBPACK_IMPORTED_MODULE_1__providers_shared_vars__["a" /* SharedVars */]])
    ], PostcardPage);
    return PostcardPage;
}());

//# sourceMappingURL=postcard.js.map

/***/ }),

/***/ 729:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export DestinationType */
/* unused harmony export EncodingType */
/* unused harmony export MediaType */
/* unused harmony export PictureSourceType */
/* unused harmony export PopoverArrowDirection */
/* unused harmony export Direction */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Camera; });
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


var DestinationType;
(function (DestinationType) {
    DestinationType[DestinationType["DATA_URL"] = 0] = "DATA_URL";
    DestinationType[DestinationType["FILE_URL"] = 1] = "FILE_URL";
    DestinationType[DestinationType["NATIVE_URI"] = 2] = "NATIVE_URI";
})(DestinationType || (DestinationType = {}));
var EncodingType;
(function (EncodingType) {
    EncodingType[EncodingType["JPEG"] = 0] = "JPEG";
    EncodingType[EncodingType["PNG"] = 1] = "PNG";
})(EncodingType || (EncodingType = {}));
var MediaType;
(function (MediaType) {
    MediaType[MediaType["PICTURE"] = 0] = "PICTURE";
    MediaType[MediaType["VIDEO"] = 1] = "VIDEO";
    MediaType[MediaType["ALLMEDIA"] = 2] = "ALLMEDIA";
})(MediaType || (MediaType = {}));
var PictureSourceType;
(function (PictureSourceType) {
    PictureSourceType[PictureSourceType["PHOTOLIBRARY"] = 0] = "PHOTOLIBRARY";
    PictureSourceType[PictureSourceType["CAMERA"] = 1] = "CAMERA";
    PictureSourceType[PictureSourceType["SAVEDPHOTOALBUM"] = 2] = "SAVEDPHOTOALBUM";
})(PictureSourceType || (PictureSourceType = {}));
var PopoverArrowDirection;
(function (PopoverArrowDirection) {
    PopoverArrowDirection[PopoverArrowDirection["ARROW_UP"] = 1] = "ARROW_UP";
    PopoverArrowDirection[PopoverArrowDirection["ARROW_DOWN"] = 2] = "ARROW_DOWN";
    PopoverArrowDirection[PopoverArrowDirection["ARROW_LEFT"] = 3] = "ARROW_LEFT";
    PopoverArrowDirection[PopoverArrowDirection["ARROW_RIGHT"] = 4] = "ARROW_RIGHT";
    PopoverArrowDirection[PopoverArrowDirection["ARROW_ANY"] = 5] = "ARROW_ANY";
})(PopoverArrowDirection || (PopoverArrowDirection = {}));
var Direction;
(function (Direction) {
    Direction[Direction["BACK"] = 0] = "BACK";
    Direction[Direction["FRONT"] = 1] = "FRONT";
})(Direction || (Direction = {}));
/**
 * @name Camera
 * @description
 * Take a photo or capture video.
 *
 * Requires the Cordova plugin: `cordova-plugin-camera`. For more info, please see the [Cordova Camera Plugin Docs](https://github.com/apache/cordova-plugin-camera).
 *
 * @usage
 * ```typescript
 * import { Camera, CameraOptions } from '@ionic-native/camera';
 *
 * constructor(private camera: Camera) { }
 *
 * ...
 *
 *
 * const options: CameraOptions = {
 *   quality: 100,
 *   destinationType: this.camera.DestinationType.FILE_URI,
 *   encodingType: this.camera.EncodingType.JPEG,
 *   mediaType: this.camera.MediaType.PICTURE
 * }
 *
 * this.camera.getPicture(options).then((imageData) => {
 *  // imageData is either a base64 encoded string or a file URI
 *  // If it's base64 (DATA_URL):
 *  let base64Image = 'data:image/jpeg;base64,' + imageData;
 * }, (err) => {
 *  // Handle error
 * });
 * ```
 * @interfaces
 * CameraOptions
 * CameraPopoverOptions
 */
var Camera = (function (_super) {
    __extends(Camera, _super);
    function Camera() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
           * Constant for possible destination types
           */
        _this.DestinationType = {
            /** Return base64 encoded string. DATA_URL can be very memory intensive and cause app crashes or out of memory errors. Use FILE_URI or NATIVE_URI if possible */
            DATA_URL: 0,
            /** Return file uri (content://media/external/images/media/2 for Android) */
            FILE_URI: 1,
            /** Return native uri (eg. asset-library://... for iOS) */
            NATIVE_URI: 2
        };
        /**
           * Convenience constant
           */
        _this.EncodingType = {
            /** Return JPEG encoded image */
            JPEG: 0,
            /** Return PNG encoded image */
            PNG: 1
        };
        /**
           * Convenience constant
           */
        _this.MediaType = {
            /** Allow selection of still pictures only. DEFAULT. Will return format specified via DestinationType */
            PICTURE: 0,
            /** Allow selection of video only, ONLY RETURNS URL */
            VIDEO: 1,
            /** Allow selection from all media types */
            ALLMEDIA: 2
        };
        /**
           * Convenience constant
           */
        _this.PictureSourceType = {
            /** Choose image from picture library (same as SAVEDPHOTOALBUM for Android) */
            PHOTOLIBRARY: 0,
            /** Take picture from camera */
            CAMERA: 1,
            /** Choose image from picture library (same as PHOTOLIBRARY for Android) */
            SAVEDPHOTOALBUM: 2
        };
        /**
           * Convenience constant
           */
        _this.PopoverArrowDirection = {
            ARROW_UP: 1,
            ARROW_DOWN: 2,
            ARROW_LEFT: 4,
            ARROW_RIGHT: 8,
            ARROW_ANY: 15
        };
        /**
           * Convenience constant
           */
        _this.Direction = {
            /** Use the back-facing camera */
            BACK: 0,
            /** Use the front-facing camera */
            FRONT: 1
        };
        return _this;
    }
    /**
     * Take a picture or video, or load one from the library.
     * @param {CameraOptions} [options] Options that you want to pass to the camera. Encoding type, quality, etc. Platform-specific quirks are described in the [Cordova plugin docs](https://github.com/apache/cordova-plugin-camera#cameraoptions-errata-).
     * @returns {Promise<any>} Returns a Promise that resolves with Base64 encoding of the image data, or the image file URI, depending on cameraOptions, otherwise rejects with an error.
     */
    /**
       * Take a picture or video, or load one from the library.
       * @param {CameraOptions} [options] Options that you want to pass to the camera. Encoding type, quality, etc. Platform-specific quirks are described in the [Cordova plugin docs](https://github.com/apache/cordova-plugin-camera#cameraoptions-errata-).
       * @returns {Promise<any>} Returns a Promise that resolves with Base64 encoding of the image data, or the image file URI, depending on cameraOptions, otherwise rejects with an error.
       */
    Camera.prototype.getPicture = /**
       * Take a picture or video, or load one from the library.
       * @param {CameraOptions} [options] Options that you want to pass to the camera. Encoding type, quality, etc. Platform-specific quirks are described in the [Cordova plugin docs](https://github.com/apache/cordova-plugin-camera#cameraoptions-errata-).
       * @returns {Promise<any>} Returns a Promise that resolves with Base64 encoding of the image data, or the image file URI, depending on cameraOptions, otherwise rejects with an error.
       */
    function (options) { return; };
    /**
     * Remove intermediate image files that are kept in temporary storage after calling camera.getPicture.
     * Applies only when the value of Camera.sourceType equals Camera.PictureSourceType.CAMERA and the Camera.destinationType equals Camera.DestinationType.FILE_URI.
     * @returns {Promise<any>}
     */
    /**
       * Remove intermediate image files that are kept in temporary storage after calling camera.getPicture.
       * Applies only when the value of Camera.sourceType equals Camera.PictureSourceType.CAMERA and the Camera.destinationType equals Camera.DestinationType.FILE_URI.
       * @returns {Promise<any>}
       */
    Camera.prototype.cleanup = /**
       * Remove intermediate image files that are kept in temporary storage after calling camera.getPicture.
       * Applies only when the value of Camera.sourceType equals Camera.PictureSourceType.CAMERA and the Camera.destinationType equals Camera.DestinationType.FILE_URI.
       * @returns {Promise<any>}
       */
    function () { return; };
    ;
    Camera.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */] },
    ];
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({
            callbackOrder: 'reverse'
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], Camera.prototype, "getPicture", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({
            platforms: ['iOS']
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], Camera.prototype, "cleanup", null);
    /**
     * @name Camera
     * @description
     * Take a photo or capture video.
     *
     * Requires the Cordova plugin: `cordova-plugin-camera`. For more info, please see the [Cordova Camera Plugin Docs](https://github.com/apache/cordova-plugin-camera).
     *
     * @usage
     * ```typescript
     * import { Camera, CameraOptions } from '@ionic-native/camera';
     *
     * constructor(private camera: Camera) { }
     *
     * ...
     *
     *
     * const options: CameraOptions = {
     *   quality: 100,
     *   destinationType: this.camera.DestinationType.FILE_URI,
     *   encodingType: this.camera.EncodingType.JPEG,
     *   mediaType: this.camera.MediaType.PICTURE
     * }
     *
     * this.camera.getPicture(options).then((imageData) => {
     *  // imageData is either a base64 encoded string or a file URI
     *  // If it's base64 (DATA_URL):
     *  let base64Image = 'data:image/jpeg;base64,' + imageData;
     * }, (err) => {
     *  // Handle error
     * });
     * ```
     * @interfaces
     * CameraOptions
     * CameraPopoverOptions
     */
    Camera = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["d" /* Plugin */])({
            pluginName: 'Camera',
            plugin: 'cordova-plugin-camera',
            pluginRef: 'navigator.camera',
            repo: 'https://github.com/apache/cordova-plugin-camera',
            platforms: ['Android', 'Browser', 'iOS', 'Windows']
        })
    ], Camera);
    return Camera;
}(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* IonicNativePlugin */]));

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 730:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocialSharing; });
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
 * @name Social Sharing
 * @description
 * Share text, files, images, and links via social networks, sms, and email.
 *
 * For Browser usage check out the Web Share API docs: https://github.com/EddyVerbruggen/SocialSharing-PhoneGap-Plugin#web-share-api
 *
 * @usage
 * ```typescript
 * import { SocialSharing } from '@ionic-native/social-sharing';
 *
 * constructor(private socialSharing: SocialSharing) { }
 *
 * ...
 *
 * // Check if sharing via email is supported
 * this.socialSharing.canShareViaEmail().then(() => {
 *   // Sharing via email is possible
 * }).catch(() => {
 *   // Sharing via email is not possible
 * });
 *
 * // Share via email
 * this.socialSharing.shareViaEmail('Body', 'Subject', ['recipient@example.org']).then(() => {
 *   // Success!
 * }).catch(() => {
 *   // Error!
 * });
 * ```
 */
var SocialSharing = (function (_super) {
    __extends(SocialSharing, _super);
    function SocialSharing() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Shares using the share sheet
     * @param message {string} The message you would like to share.
     * @param subject {string} The subject
     * @param file {string|string[]} URL(s) to file(s) or image(s), local path(s) to file(s) or image(s), or base64 data of an image. Only the first file/image will be used on Windows Phone.
     * @param url {string} A URL to share
     * @returns {Promise<any>}
     */
    /**
       * Shares using the share sheet
       * @param message {string} The message you would like to share.
       * @param subject {string} The subject
       * @param file {string|string[]} URL(s) to file(s) or image(s), local path(s) to file(s) or image(s), or base64 data of an image. Only the first file/image will be used on Windows Phone.
       * @param url {string} A URL to share
       * @returns {Promise<any>}
       */
    SocialSharing.prototype.share = /**
       * Shares using the share sheet
       * @param message {string} The message you would like to share.
       * @param subject {string} The subject
       * @param file {string|string[]} URL(s) to file(s) or image(s), local path(s) to file(s) or image(s), or base64 data of an image. Only the first file/image will be used on Windows Phone.
       * @param url {string} A URL to share
       * @returns {Promise<any>}
       */
    function (message, subject, file, url) {
        return;
    };
    /**
     * Shares using the share sheet with additional options and returns a result object or an error message (requires plugin version 5.1.0+)
     * @param options {object} The options object with the message, subject, files, url and chooserTitle properties.
     * @returns {Promise<any>}
     */
    /**
       * Shares using the share sheet with additional options and returns a result object or an error message (requires plugin version 5.1.0+)
       * @param options {object} The options object with the message, subject, files, url and chooserTitle properties.
       * @returns {Promise<any>}
       */
    SocialSharing.prototype.shareWithOptions = /**
       * Shares using the share sheet with additional options and returns a result object or an error message (requires plugin version 5.1.0+)
       * @param options {object} The options object with the message, subject, files, url and chooserTitle properties.
       * @returns {Promise<any>}
       */
    function (options) {
        return;
    };
    /**
     * Checks if you can share via a specific app.
     * @param appName {string} App name or package name. Examples: instagram or com.apple.social.facebook
     * @param message {string}
     * @param subject {string}
     * @param image {string}
     * @param url {string}
     * @returns {Promise<any>}
     */
    /**
       * Checks if you can share via a specific app.
       * @param appName {string} App name or package name. Examples: instagram or com.apple.social.facebook
       * @param message {string}
       * @param subject {string}
       * @param image {string}
       * @param url {string}
       * @returns {Promise<any>}
       */
    SocialSharing.prototype.canShareVia = /**
       * Checks if you can share via a specific app.
       * @param appName {string} App name or package name. Examples: instagram or com.apple.social.facebook
       * @param message {string}
       * @param subject {string}
       * @param image {string}
       * @param url {string}
       * @returns {Promise<any>}
       */
    function (appName, message, subject, image, url) {
        return;
    };
    /**
     * Shares directly to Twitter
     * @param message {string}
     * @param image {string}
     * @param url {string}
     * @returns {Promise<any>}
     */
    /**
       * Shares directly to Twitter
       * @param message {string}
       * @param image {string}
       * @param url {string}
       * @returns {Promise<any>}
       */
    SocialSharing.prototype.shareViaTwitter = /**
       * Shares directly to Twitter
       * @param message {string}
       * @param image {string}
       * @param url {string}
       * @returns {Promise<any>}
       */
    function (message, image, url) {
        return;
    };
    /**
     * Shares directly to Facebook
     * @param message {string}
     * @param image {string}
     * @param url {string}
     * @returns {Promise<any>}
     */
    /**
       * Shares directly to Facebook
       * @param message {string}
       * @param image {string}
       * @param url {string}
       * @returns {Promise<any>}
       */
    SocialSharing.prototype.shareViaFacebook = /**
       * Shares directly to Facebook
       * @param message {string}
       * @param image {string}
       * @param url {string}
       * @returns {Promise<any>}
       */
    function (message, image, url) {
        return;
    };
    /**
     * Shares directly to Facebook with a paste message hint
     * @param message {string}
     * @param image {string}
     * @param url {string}
     * @param pasteMessageHint {string}
     * @returns {Promise<any>}
     */
    /**
       * Shares directly to Facebook with a paste message hint
       * @param message {string}
       * @param image {string}
       * @param url {string}
       * @param pasteMessageHint {string}
       * @returns {Promise<any>}
       */
    SocialSharing.prototype.shareViaFacebookWithPasteMessageHint = /**
       * Shares directly to Facebook with a paste message hint
       * @param message {string}
       * @param image {string}
       * @param url {string}
       * @param pasteMessageHint {string}
       * @returns {Promise<any>}
       */
    function (message, image, url, pasteMessageHint) {
        return;
    };
    /**
     * Shares directly to Instagram
     * @param message {string}
     * @param image {string}
     * @returns {Promise<any>}
     */
    /**
       * Shares directly to Instagram
       * @param message {string}
       * @param image {string}
       * @returns {Promise<any>}
       */
    SocialSharing.prototype.shareViaInstagram = /**
       * Shares directly to Instagram
       * @param message {string}
       * @param image {string}
       * @returns {Promise<any>}
       */
    function (message, image) {
        return;
    };
    /**
     * Shares directly to WhatsApp
     * @param message {string}
     * @param image {string}
     * @param url {string}
     * @returns {Promise<any>}
     */
    /**
       * Shares directly to WhatsApp
       * @param message {string}
       * @param image {string}
       * @param url {string}
       * @returns {Promise<any>}
       */
    SocialSharing.prototype.shareViaWhatsApp = /**
       * Shares directly to WhatsApp
       * @param message {string}
       * @param image {string}
       * @param url {string}
       * @returns {Promise<any>}
       */
    function (message, image, url) {
        return;
    };
    /**
     * Shares directly to a WhatsApp Contact
     * @param receiver {string} Pass phone number on Android, and Addressbook ID (abid) on iOS
     * @param message {string} Message to send
     * @param image {string} Image to send (does not work on iOS
     * @param url {string} Link to send
     * @returns {Promise<any>}
     */
    /**
       * Shares directly to a WhatsApp Contact
       * @param receiver {string} Pass phone number on Android, and Addressbook ID (abid) on iOS
       * @param message {string} Message to send
       * @param image {string} Image to send (does not work on iOS
       * @param url {string} Link to send
       * @returns {Promise<any>}
       */
    SocialSharing.prototype.shareViaWhatsAppToReceiver = /**
       * Shares directly to a WhatsApp Contact
       * @param receiver {string} Pass phone number on Android, and Addressbook ID (abid) on iOS
       * @param message {string} Message to send
       * @param image {string} Image to send (does not work on iOS
       * @param url {string} Link to send
       * @returns {Promise<any>}
       */
    function (receiver, message, image, url) {
        return;
    };
    /**
     * Share via SMS
     * @param messge {string} message to send
     * @param phoneNumber {string} Number or multiple numbers seperated by commas
     * @returns {Promise<any>}
     */
    /**
       * Share via SMS
       * @param messge {string} message to send
       * @param phoneNumber {string} Number or multiple numbers seperated by commas
       * @returns {Promise<any>}
       */
    SocialSharing.prototype.shareViaSMS = /**
       * Share via SMS
       * @param messge {string} message to send
       * @param phoneNumber {string} Number or multiple numbers seperated by commas
       * @returns {Promise<any>}
       */
    function (messge, phoneNumber) {
        return;
    };
    /**
     * Checks if you can share via email
     * @returns {Promise<any>}
     */
    /**
       * Checks if you can share via email
       * @returns {Promise<any>}
       */
    SocialSharing.prototype.canShareViaEmail = /**
       * Checks if you can share via email
       * @returns {Promise<any>}
       */
    function () {
        return;
    };
    /**
     * Share via Email
     * @param message {string}
     * @param subject {string}
     * @param to {string[]}
     * @param cc {string[]} Optional
     * @param bcc {string[]} Optional
     * @param files {string|string[]} Optional URL or local path to file(s) to attach
     * @returns {Promise<any>}
     */
    /**
       * Share via Email
       * @param message {string}
       * @param subject {string}
       * @param to {string[]}
       * @param cc {string[]} Optional
       * @param bcc {string[]} Optional
       * @param files {string|string[]} Optional URL or local path to file(s) to attach
       * @returns {Promise<any>}
       */
    SocialSharing.prototype.shareViaEmail = /**
       * Share via Email
       * @param message {string}
       * @param subject {string}
       * @param to {string[]}
       * @param cc {string[]} Optional
       * @param bcc {string[]} Optional
       * @param files {string|string[]} Optional URL or local path to file(s) to attach
       * @returns {Promise<any>}
       */
    function (message, subject, to, cc, bcc, files) {
        return;
    };
    /**
     * Share via AppName
     * @param appName {string} App name or package name. Examples: instagram or com.apple.social.facebook
     * @param message {string}
     * @param subject {string}
     * @param image {string}
     * @param url {string}
     * @returns {Promise<any>}
     */
    /**
       * Share via AppName
       * @param appName {string} App name or package name. Examples: instagram or com.apple.social.facebook
       * @param message {string}
       * @param subject {string}
       * @param image {string}
       * @param url {string}
       * @returns {Promise<any>}
       */
    SocialSharing.prototype.shareVia = /**
       * Share via AppName
       * @param appName {string} App name or package name. Examples: instagram or com.apple.social.facebook
       * @param message {string}
       * @param subject {string}
       * @param image {string}
       * @param url {string}
       * @returns {Promise<any>}
       */
    function (appName, message, subject, image, url) {
        return;
    };
    /**
     * defines the popup position before call the share method.
     * @param targetBounds {string} left, top, width, height
     */
    /**
       * defines the popup position before call the share method.
       * @param targetBounds {string} left, top, width, height
       */
    SocialSharing.prototype.setIPadPopupCoordinates = /**
       * defines the popup position before call the share method.
       * @param targetBounds {string} left, top, width, height
       */
    function (targetBounds) { };
    /**
     * Save an array of images to the camera roll
     * @param  {string|string[]} fileOrFileArray Single or multiple files
     * @returns {Promise<any> }
     */
    /**
       * Save an array of images to the camera roll
       * @param  {string|string[]} fileOrFileArray Single or multiple files
       * @returns {Promise<any> }
       */
    SocialSharing.prototype.saveToPhotoAlbum = /**
       * Save an array of images to the camera roll
       * @param  {string|string[]} fileOrFileArray Single or multiple files
       * @returns {Promise<any> }
       */
    function (fileOrFileArray) {
        return;
    };
    SocialSharing.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */] },
    ];
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({
            successIndex: 4,
            errorIndex: 5
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String, Object, String]),
        __metadata("design:returntype", Promise)
    ], SocialSharing.prototype, "share", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({
            platforms: ['iOS', 'Android']
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], SocialSharing.prototype, "shareWithOptions", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({
            successIndex: 5,
            errorIndex: 6,
            platforms: ['iOS', 'Android']
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String, String, String, String]),
        __metadata("design:returntype", Promise)
    ], SocialSharing.prototype, "canShareVia", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({
            successIndex: 3,
            errorIndex: 4,
            platforms: ['iOS', 'Android']
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String, String]),
        __metadata("design:returntype", Promise)
    ], SocialSharing.prototype, "shareViaTwitter", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({
            successIndex: 3,
            errorIndex: 4,
            platforms: ['iOS', 'Android']
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String, String]),
        __metadata("design:returntype", Promise)
    ], SocialSharing.prototype, "shareViaFacebook", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({
            successIndex: 4,
            errorIndex: 5,
            platforms: ['iOS', 'Android']
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String, String, String]),
        __metadata("design:returntype", Promise)
    ], SocialSharing.prototype, "shareViaFacebookWithPasteMessageHint", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({
            platforms: ['iOS', 'Android']
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String]),
        __metadata("design:returntype", Promise)
    ], SocialSharing.prototype, "shareViaInstagram", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({
            successIndex: 3,
            errorIndex: 4,
            platforms: ['iOS', 'Android']
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String, String]),
        __metadata("design:returntype", Promise)
    ], SocialSharing.prototype, "shareViaWhatsApp", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({
            successIndex: 4,
            errorIndex: 5,
            platforms: ['iOS', 'Android']
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String, String, String]),
        __metadata("design:returntype", Promise)
    ], SocialSharing.prototype, "shareViaWhatsAppToReceiver", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({
            platforms: ['iOS', 'Android']
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String]),
        __metadata("design:returntype", Promise)
    ], SocialSharing.prototype, "shareViaSMS", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({
            platforms: ['iOS', 'Android']
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], SocialSharing.prototype, "canShareViaEmail", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({
            platforms: ['iOS', 'Android'],
            successIndex: 6,
            errorIndex: 7
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String, Array, Array, Array, Object]),
        __metadata("design:returntype", Promise)
    ], SocialSharing.prototype, "shareViaEmail", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({
            successIndex: 5,
            errorIndex: 6,
            platforms: ['iOS', 'Android']
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String, String, String, String]),
        __metadata("design:returntype", Promise)
    ], SocialSharing.prototype, "shareVia", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({
            sync: true,
            platforms: ['iOS']
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], SocialSharing.prototype, "setIPadPopupCoordinates", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({
            platforms: ['iOS']
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], SocialSharing.prototype, "saveToPhotoAlbum", null);
    /**
     * @name Social Sharing
     * @description
     * Share text, files, images, and links via social networks, sms, and email.
     *
     * For Browser usage check out the Web Share API docs: https://github.com/EddyVerbruggen/SocialSharing-PhoneGap-Plugin#web-share-api
     *
     * @usage
     * ```typescript
     * import { SocialSharing } from '@ionic-native/social-sharing';
     *
     * constructor(private socialSharing: SocialSharing) { }
     *
     * ...
     *
     * // Check if sharing via email is supported
     * this.socialSharing.canShareViaEmail().then(() => {
     *   // Sharing via email is possible
     * }).catch(() => {
     *   // Sharing via email is not possible
     * });
     *
     * // Share via email
     * this.socialSharing.shareViaEmail('Body', 'Subject', ['recipient@example.org']).then(() => {
     *   // Success!
     * }).catch(() => {
     *   // Error!
     * });
     * ```
     */
    SocialSharing = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["d" /* Plugin */])({
            pluginName: 'SocialSharing',
            plugin: 'cordova-plugin-x-socialsharing',
            pluginRef: 'plugins.socialsharing',
            repo: 'https://github.com/EddyVerbruggen/SocialSharing-PhoneGap-Plugin',
            platforms: ['Android', 'Browser', 'iOS', 'Windows', 'Windows Phone']
        })
    ], SocialSharing);
    return SocialSharing;
}(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* IonicNativePlugin */]));

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 731:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageDrawComponentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__image_draw_component__ = __webpack_require__(732);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ImageDrawComponentModule = /** @class */ (function () {
    function ImageDrawComponentModule() {
    }
    ImageDrawComponentModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__image_draw_component__["a" /* ImageDrawComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicModule */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__image_draw_component__["a" /* ImageDrawComponent */]
            ]
        })
    ], ImageDrawComponentModule);
    return ImageDrawComponentModule;
}());

//# sourceMappingURL=image-draw.module.js.map

/***/ }),

/***/ 732:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageDrawComponent; });
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
// https://plnkr.co/edit/BrbAoBlLcbDcx8iDXACv?p=preview

var ImageDrawComponent = /** @class */ (function () {
    function ImageDrawComponent() {
        this.loaded = false;
        this.message = '';
    }
    ImageDrawComponent.prototype.onLoad = function (img) {
        var _this = this;
        if (this.loaded) {
            return;
        }
        var logo_img = "assets/images/postcards/logos.jpg";
        var scaled_width;
        var scaled_height;
        function getLines(ctx, text, maxWidth) {
            var words = text.split(" ");
            var lines = [];
            var currentLine = words[0];
            for (var i = 1; i < words.length; i++) {
                var word = words[i];
                var width = ctx.measureText(currentLine + " " + word).width;
                if (width < maxWidth) {
                    currentLine += " " + word;
                }
                else {
                    lines.push(currentLine);
                    currentLine = word;
                }
            }
            lines.push(currentLine);
            return lines;
        }
        this.loaded = true;
        var canvas = document.createElement('canvas');
        var context = canvas.getContext('2d');
        // set size of postcard canvas
        canvas.height = 1200;
        canvas.width = 1600;
        // draw linear gradient background-color
        var my_gradient = context.createLinearGradient(0, 0, canvas.width / 2, 0);
        my_gradient.addColorStop(0, "#003565");
        my_gradient.addColorStop(0.5, "#1C497A");
        my_gradient.addColorStop(1, "#000000");
        context.fillStyle = my_gradient;
        context.fillRect(0, 0, (canvas.width / 2) + 50, canvas.height);
        //load bkg img
        var bkgObject = document.createElement("img");
        bkgObject.onload = function (data) {
            // draw library image
            context.drawImage(bkgObject, (canvas.width / 2) + 50, 0, canvas.width - ((canvas.width / 2) + 50), canvas.height);
            // draw user image
            if (_this.photoFlag != false) {
                // get scaled down width and height for user image
                scaled_width = (canvas.width / 2) - 50;
                scaled_height = ((scaled_width * img.height) / img.width) - 50;
                context.drawImage(img, 50, ((canvas.height / 2) - (scaled_height / 2)) - 100, scaled_width, scaled_height);
            }
            // draw logo
            var logoObject = document.createElement("img");
            logoObject.onload = function (data) {
                context.drawImage(logoObject, 0, canvas.height - logoObject.height, logoObject.width, logoObject.height);
                // draw ML address
                context.font = "20px helvetica";
                context.textAlign = 'left';
                context.fillStyle = '#000000';
                context.fillText("1850 Table Mesa Drive", canvas.width - 300, canvas.height - 150);
                context.fillText("Boulder, Colorado 80305 ", canvas.width - 300, canvas.height - 125);
                context.fillText("http://scied.ucar.edu/visit", canvas.width - 300, canvas.height - 100);
                // draw transparent text bkg
                context.fillStyle = 'rgba(225,225,225,0.5)';
                var textbox = { 'x': (canvas.width / 2) + 50, 'y': (canvas.height / 2), 'width': canvas.width - (canvas.width / 2) - 50, 'height': (canvas.height / 2) - 200 };
                var max_width = textbox.width - 90;
                context.fillRect(textbox.x, textbox.y, textbox.width, textbox.height);
                // draw message
                context.font = "50px helvetica";
                context.textAlign = 'left';
                context.fillStyle = '#000000';
                var lines = getLines(context, _this.text, max_width);
                var lines_y = textbox.y + 100;
                var line_height = 50;
                lines.forEach(function (line) {
                    context.fillText(line, scaled_width + 150, lines_y, max_width);
                    lines_y += line_height;
                });
                img.src = canvas.toDataURL();
                img.completed = true;
            };
            logoObject.src = logo_img;
        };
        bkgObject.src = this.bkg;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], ImageDrawComponent.prototype, "text", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], ImageDrawComponent.prototype, "bkg", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], ImageDrawComponent.prototype, "photoFlag", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostListener */])('load', ['$event.target']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ImageDrawComponent.prototype, "onLoad", null);
    ImageDrawComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
            selector: '[draw-text]'
        }),
        __metadata("design:paramtypes", [])
    ], ImageDrawComponent);
    return ImageDrawComponent;
}());

//# sourceMappingURL=image-draw.component.js.map

/***/ })

});
//# sourceMappingURL=3.js.map