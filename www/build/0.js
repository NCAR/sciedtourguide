webpackJsonp([0],{

/***/ 700:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["myCustomAudioProviderFactory"] = myCustomAudioProviderFactory;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranscriptPageModule", function() { return TranscriptPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__transcript__ = __webpack_require__(734);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_audio__ = __webpack_require__(716);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_titlebar_title_module__ = __webpack_require__(703);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






function myCustomAudioProviderFactory() {
    return (window.hasOwnProperty('cordova')) ? new __WEBPACK_IMPORTED_MODULE_4_ionic_audio__["b" /* CordovaMediaProvider */]() : new __WEBPACK_IMPORTED_MODULE_4_ionic_audio__["d" /* WebAudioProvider */]();
}
var TranscriptPageModule = /** @class */ (function () {
    function TranscriptPageModule() {
    }
    TranscriptPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__transcript__["a" /* TranscriptPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_5__components_titlebar_title_module__["a" /* TitleComponentModule */],
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild(),
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__transcript__["a" /* TranscriptPage */]),
                __WEBPACK_IMPORTED_MODULE_4_ionic_audio__["c" /* IonicAudioModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4_ionic_audio__["e" /* defaultAudioProviderFactory */])
            ],
        })
    ], TranscriptPageModule);
    return TranscriptPageModule;
}());

//# sourceMappingURL=transcript.module.js.map

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

/***/ 707:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["d"] = defaultAudioProviderFactory;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AudioProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return WebAudioProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CordovaMediaProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_audio_web_track__ = __webpack_require__(714);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_audio_cordova_track__ = __webpack_require__(715);
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



/**
 * Creates an audio provider based on the environment.
 * If running from within a browser, then defaults to HTML5 Audio. If running on a device, it will check for Cordova and Media plugins and use
 * a native audio player, otherwise falls back to HTML5 audio.
 *
 * @method factory
 * @static
 * @return {IAudioProvider} An IAudioProvider instance
 */
function defaultAudioProviderFactory() {
    return window.hasOwnProperty('cordova') && window.hasOwnProperty('Media') ? new CordovaMediaProvider() : new WebAudioProvider();
}
/**
 * Base class for audio providers
 *
 * @export
 * @abstract
 * @class AudioProvider
 * @implements {IAudioProvider}
 */
var AudioProvider = (function () {
    function AudioProvider() {
    }
    /**
     * Creates an IAudioTrack instance from a JSON object.
     * Not implemented in base class.
     *
     * @method create
     * @param {ITrackConstraint} track A JSON object containing at least a src property
     * @return null
     */
    /**
       * Creates an IAudioTrack instance from a JSON object.
       * Not implemented in base class.
       *
       * @method create
       * @param {ITrackConstraint} track A JSON object containing at least a src property
       * @return null
       */
    AudioProvider.prototype.create = /**
       * Creates an IAudioTrack instance from a JSON object.
       * Not implemented in base class.
       *
       * @method create
       * @param {ITrackConstraint} track A JSON object containing at least a src property
       * @return null
       */
    function (track) {
        console.error('Not implemented in base class');
        return null;
    };
    /**
     * Replaces track with a new one
     * @param oldAudioTrack
     * @param newTrack
     */
    /**
       * Replaces track with a new one
       * @param oldAudioTrack
       * @param newTrack
       */
    AudioProvider.prototype.replace = /**
       * Replaces track with a new one
       * @param oldAudioTrack
       * @param newTrack
       */
    function (oldAudioTrack, newTrack) {
        console.error('Not implemented in base class');
        return null;
    };
    /**
     * Adds an existing IAudioTrack instance to the array of managed tracks.
     *
     * @method add
     * @param {IAudioTrack} audioTrack An instance of IAudioTrack
     */
    /**
       * Adds an existing IAudioTrack instance to the array of managed tracks.
       *
       * @method add
       * @param {IAudioTrack} audioTrack An instance of IAudioTrack
       */
    AudioProvider.prototype.add = /**
       * Adds an existing IAudioTrack instance to the array of managed tracks.
       *
       * @method add
       * @param {IAudioTrack} audioTrack An instance of IAudioTrack
       */
    function (audioTrack) {
        AudioProvider.tracks.push(audioTrack);
    };
    ;
    /**
     * Plays a given track.
     *
     * @method play
     * @param {number} index The track id
     */
    /**
       * Plays a given track.
       *
       * @method play
       * @param {number} index The track id
       */
    AudioProvider.prototype.play = /**
       * Plays a given track.
       *
       * @method play
       * @param {number} index The track id
       */
    function (index) {
        if (index === undefined || index > AudioProvider.tracks.length - 1)
            return;
        this._current = index;
        AudioProvider.tracks[index].play();
    };
    ;
    /**
     * Pauses a given track.
     *
     * @method pause
     * @param {number} [index] The track id, or if undefined it will pause whichever track currently playing
     */
    /**
       * Pauses a given track.
       *
       * @method pause
       * @param {number} [index] The track id, or if undefined it will pause whichever track currently playing
       */
    AudioProvider.prototype.pause = /**
       * Pauses a given track.
       *
       * @method pause
       * @param {number} [index] The track id, or if undefined it will pause whichever track currently playing
       */
    function (index) {
        if (this._current === undefined || index > AudioProvider.tracks.length - 1)
            return;
        index = index || this._current;
        AudioProvider.tracks[index].pause();
    };
    ;
    /**
     * Stops a given track.
     *
     * @method stop
     * @param {number} [index] The track id, or if undefined it will stop whichever track currently playing
     */
    /**
       * Stops a given track.
       *
       * @method stop
       * @param {number} [index] The track id, or if undefined it will stop whichever track currently playing
       */
    AudioProvider.prototype.stop = /**
       * Stops a given track.
       *
       * @method stop
       * @param {number} [index] The track id, or if undefined it will stop whichever track currently playing
       */
    function (index) {
        if (this._current === undefined || index > AudioProvider.tracks.length - 1)
            return;
        index = index || this._current;
        AudioProvider.tracks[index].stop();
        this._current = undefined;
    };
    ;
    Object.defineProperty(AudioProvider.prototype, "tracks", {
        /**
         * Gets an array of tracks managed by this provider
         *
         * @property tracks
         * @readonly
         * @type {IAudioTrack[]}
         */
        get: /**
           * Gets an array of tracks managed by this provider
           *
           * @property tracks
           * @readonly
           * @type {IAudioTrack[]}
           */
        function () {
            return AudioProvider.tracks;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AudioProvider.prototype, "current", {
        /**
         * Gets current track id
         *
         * @property current
         * @type {number}
         */
        get: /**
           * Gets current track id
           *
           * @property current
           * @type {number}
           */
        function () {
            return this._current;
        },
        /**
         * Sets current track id
         *
         * @property current
         */
        set: /**
           * Sets current track id
           *
           * @property current
           */
        function (v) {
            this._current = v;
        },
        enumerable: true,
        configurable: true
    });
    AudioProvider.tracks = [];
    AudioProvider.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */] },
    ];
    /** @nocollapse */
    AudioProvider.ctorParameters = function () { return []; };
    return AudioProvider;
}());

/**
 * Creates an HTML5 audio provider
 *
 * @export
 * @class WebAudioProvider
 * @constructor
 * @extends {AudioProvider}
 */
var WebAudioProvider = (function (_super) {
    __extends(WebAudioProvider, _super);
    function WebAudioProvider() {
        var _this = _super.call(this) || this;
        console.log('Using Web Audio provider');
        return _this;
    }
    WebAudioProvider.prototype.create = function (track) {
        var audioTrack = new __WEBPACK_IMPORTED_MODULE_1__ionic_audio_web_track__["a" /* WebAudioTrack */](track.src, track.preload);
        Object.assign(audioTrack, track);
        var trackId = WebAudioProvider.tracks.push(audioTrack);
        audioTrack.id = trackId - 1;
        return audioTrack;
    };
    WebAudioProvider.prototype.replace = function (oldAudioTrack, newTrack) {
        //WebAudioProvider.tracks.pop();
        var index = WebAudioProvider.tracks.findIndex(function (track) { return Object.is(oldAudioTrack, track); });
        var newAudioTrack = newTrack instanceof __WEBPACK_IMPORTED_MODULE_1__ionic_audio_web_track__["a" /* WebAudioTrack */] ? newTrack : new __WEBPACK_IMPORTED_MODULE_1__ionic_audio_web_track__["a" /* WebAudioTrack */](newTrack.src, newTrack.preload);
        Object.assign(newAudioTrack, newTrack);
        if (index > -1) {
            WebAudioProvider.tracks.splice(index, 1, newAudioTrack);
        }
        else {
            var trackId = WebAudioProvider.tracks.push(newAudioTrack);
            newAudioTrack.id = trackId - 1;
        }
        console.log("Replaced audio track", oldAudioTrack, newAudioTrack);
        console.log("Current track list", WebAudioProvider.tracks);
        return newAudioTrack;
    };
    WebAudioProvider.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */] },
    ];
    /** @nocollapse */
    WebAudioProvider.ctorParameters = function () { return []; };
    return WebAudioProvider;
}(AudioProvider));

/**
 * Creates a Cordova audio provider
 *
 * @export
 * @class CordovaMediaProvider
 * @constructor
 * @extends {AudioProvider}
 */
var CordovaMediaProvider = (function (_super) {
    __extends(CordovaMediaProvider, _super);
    function CordovaMediaProvider() {
        var _this = _super.call(this) || this;
        console.log('Using Cordova Media provider');
        return _this;
    }
    CordovaMediaProvider.prototype.create = function (track) {
        var audioTrack = new __WEBPACK_IMPORTED_MODULE_2__ionic_audio_cordova_track__["a" /* CordovaAudioTrack */](track.src);
        Object.assign(audioTrack, track);
        var trackId = CordovaMediaProvider.tracks.push(audioTrack);
        audioTrack.id = trackId - 1;
        return audioTrack;
    };
    CordovaMediaProvider.prototype.replace = function (oldTrack, newTrack) {
        return null;
    };
    CordovaMediaProvider.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */] },
    ];
    /** @nocollapse */
    CordovaMediaProvider.ctorParameters = function () { return []; };
    return CordovaMediaProvider;
}(AudioProvider));

//# sourceMappingURL=ionic-audio-providers.js.map

/***/ }),

/***/ 714:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebAudioTrack; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);

window.AudioContext = window['AudioContext'] || window['webkitAudioContext'];
/**
 * Creates an HTML5 audio track
 *
 * @export
 * @class WebAudioTrack
 * @constructor
 * @implements {IAudioTrack}
 */
var WebAudioTrack = (function () {
    function WebAudioTrack(src, preload) {
        if (preload === void 0) { preload = 'none'; }
        // audio context not needed for now
        // @Optional() private ctx: AudioContext = undefined
        // this.ctx = this.ctx || new AudioContext();
        this.src = src;
        this.preload = preload;
        this.isPlaying = false;
        this.isFinished = false;
        this._progress = 0;
        this._completed = 0;
        this.createAudio();
    }
    WebAudioTrack.prototype.createAudio = function () {
        var _this = this;
        this.audio = new Audio();
        this.audio.src = this.src;
        this.audio.preload = this.preload;
        //this.audio.controls = true;
        //this.audio.autoplay = false;
        this.audio.addEventListener("timeupdate", function (e) { _this.onTimeUpdate(e); }, false);
        this.audio.addEventListener("error", function (err) {
            console.log("Audio error => track " + _this.src, err);
            _this.isPlaying = false;
        }, false);
        this.audio.addEventListener("canplay", function () {
            _this._isLoading = false;
            _this._hasLoaded = true;
        }, false);
        this.audio.addEventListener("playing", function () {
            console.log("Playing track " + _this.src);
            _this.isFinished = false;
            _this.isPlaying = true;
        }, false);
        this.audio.addEventListener("ended", function () {
            _this.isPlaying = false;
            _this.isFinished = true;
            _this._progress = 0;
            _this._completed = 0;
            _this._hasLoaded = false;
            //this.destroy();
            console.log('Finished playback');
        }, false);
        this.audio.addEventListener("durationchange", function (e) {
            _this._duration = e.target.duration;
        }, false);
    };
    WebAudioTrack.prototype.onTimeUpdate = function (e) {
        if (this.isPlaying && this.audio.currentTime > 0) {
            this._progress = this.audio.currentTime;
            this._completed = this.audio.duration > 0 ? Math.trunc(this.audio.currentTime / this.audio.duration * 100) / 100 : 0;
        }
    };
    WebAudioTrack.formatTime = function (value) {
        var s = Math.trunc(value % 60);
        var m = Math.trunc((value / 60) % 60);
        var h = Math.trunc(((value / 60) / 60) % 60);
        return h > 0 ? (h < 10 ? '0' + h : h) + ":" + (m < 10 ? '0' + m : m) + ":" + (s < 10 ? '0' + s : s) : (m < 10 ? '0' + m : m) + ":" + (s < 10 ? '0' + s : s);
    };
    Object.defineProperty(WebAudioTrack.prototype, "id", {
        /**
         * Gets the track id
         *
         * @property id
         * @type {number}
         */
        get: /**
           * Gets the track id
           *
           * @property id
           * @type {number}
           */
        function () {
            return this._id;
        },
        /**
         * Sets the track id
         *
         * @property id
         */
        set: /**
           * Sets the track id
           *
           * @property id
           */
        function (v) {
            this._id = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WebAudioTrack.prototype, "duration", {
        /**
         * Gets the track duration, or -1 if it cannot be determined
         *
         * @property duration
         * @readonly
         * @type {number}
         */
        get: /**
           * Gets the track duration, or -1 if it cannot be determined
           *
           * @property duration
           * @readonly
           * @type {number}
           */
        function () {
            return this._duration;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WebAudioTrack.prototype, "progress", {
        /**
         * Gets current track time (progress)
         *
         * @property progress
         * @readonly
         * @type {number}
         */
        get: /**
           * Gets current track time (progress)
           *
           * @property progress
           * @readonly
           * @type {number}
           */
        function () {
            return this._progress;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WebAudioTrack.prototype, "completed", {
        /**
         * Gets current track progress as a percentage
         *
         * @property completed
         * @readonly
         * @type {number}
         */
        get: /**
           * Gets current track progress as a percentage
           *
           * @property completed
           * @readonly
           * @type {number}
           */
        function () {
            return this._completed;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WebAudioTrack.prototype, "error", {
        /**
         * Gets any errors logged by HTML5 audio
         *
         * @property error
         * @readonly
         * @type {MediaError}
         */
        get: /**
           * Gets any errors logged by HTML5 audio
           *
           * @property error
           * @readonly
           * @type {MediaError}
           */
        function () {
            return this.audio && this.audio.error;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WebAudioTrack.prototype, "canPlay", {
        /**
         * Gets a boolean value indicating whether the current source can be played
         *
         * @property canPlay
         * @readonly
         * @type {boolean}
         */
        get: /**
           * Gets a boolean value indicating whether the current source can be played
           *
           * @property canPlay
           * @readonly
           * @type {boolean}
           */
        function () {
            var format = "audio/" + this.audio.src.substr(this.audio.src.lastIndexOf('.') + 1);
            return this.audio && this.audio.canPlayType(format) != '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WebAudioTrack.prototype, "isLoading", {
        /**
         * Gets a boolean value indicating whether the track is in loading state
         *
         * @property isLoading
         * @readonly
         * @type {boolean}
         */
        get: /**
           * Gets a boolean value indicating whether the track is in loading state
           *
           * @property isLoading
           * @readonly
           * @type {boolean}
           */
        function () {
            return this._isLoading;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WebAudioTrack.prototype, "hasLoaded", {
        /**
         * Gets a boolean value indicating whether the track has finished loading
         *
         * @property hadLoaded
         * @readonly
         * @type {boolean}
         */
        get: /**
           * Gets a boolean value indicating whether the track has finished loading
           *
           * @property hadLoaded
           * @readonly
           * @type {boolean}
           */
        function () {
            return this._hasLoaded;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Plays current track
     *
     * @method play
     */
    /**
       * Plays current track
       *
       * @method play
       */
    WebAudioTrack.prototype.play = /**
       * Plays current track
       *
       * @method play
       */
    function () {
        if (!this.audio) {
            this.createAudio();
        }
        if (!this._hasLoaded) {
            console.log("Loading track " + this.src);
            this._isLoading = true;
        }
        //var source = this.ctx.createMediaElementSource(this.audio);
        //source.connect(this.ctx.destination);
        this.audio.play();
    };
    /**
     * Pauses current track
     *
     * @method pause
     */
    /**
       * Pauses current track
       *
       * @method pause
       */
    WebAudioTrack.prototype.pause = /**
       * Pauses current track
       *
       * @method pause
       */
    function () {
        if (!this.isPlaying)
            return;
        console.log("Pausing track " + this.src);
        this.audio.pause();
        this.isPlaying = false;
    };
    /**
     * Stops current track and releases audio
     *
     * @method stop
     */
    /**
       * Stops current track and releases audio
       *
       * @method stop
       */
    WebAudioTrack.prototype.stop = /**
       * Stops current track and releases audio
       *
       * @method stop
       */
    function () {
        var _this = this;
        if (!this.audio)
            return;
        this.pause();
        this.audio.removeEventListener("timeupdate", function (e) { _this.onTimeUpdate(e); });
        this.isFinished = true;
        //this.destroy();
    };
    /**
     * Seeks to a new position within the track
     *
     * @method seekTo
     * @param {number} time the new position to seek to
     */
    /**
       * Seeks to a new position within the track
       *
       * @method seekTo
       * @param {number} time the new position to seek to
       */
    WebAudioTrack.prototype.seekTo = /**
       * Seeks to a new position within the track
       *
       * @method seekTo
       * @param {number} time the new position to seek to
       */
    function (time) {
        if (!this.audio)
            return;
        this.audio.currentTime = time;
    };
    /**
     * Releases audio resources
     *
     * @method destroy
     */
    /**
       * Releases audio resources
       *
       * @method destroy
       */
    WebAudioTrack.prototype.destroy = /**
       * Releases audio resources
       *
       * @method destroy
       */
    function () {
        this.audio = undefined;
        console.log("Released track " + this.src);
    };
    WebAudioTrack.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */] },
    ];
    /** @nocollapse */
    WebAudioTrack.ctorParameters = function () { return [
        null,
        { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Optional */] },] },
    ]; };
    return WebAudioTrack;
}());

//# sourceMappingURL=ionic-audio-web-track.js.map

/***/ }),

/***/ 715:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CordovaAudioTrack; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);

/**
 * Cordova Media audio track
 *
 * @export
 * @class CordovaAudioTrack
 * @constructor
 * @implements {IAudioTrack}
 */
var CordovaAudioTrack = (function () {
    function CordovaAudioTrack(src) {
        this.src = src;
        this.isPlaying = false;
        this.isFinished = false;
        this._progress = 0;
        this._completed = 0;
        if (window['cordova'] === undefined || window['Media'] === undefined) {
            console.log('Cordova Media is not available');
            return;
        }
        ;
        this._ngZone = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* NgZone */]({ enableLongStackTrace: false });
        this.createAudio();
    }
    CordovaAudioTrack.prototype.createAudio = function () {
        var _this = this;
        this.audio = new Media(this.src, function () {
            console.log('Finished playback');
            _this.stopTimer();
            _this._ngZone.run(function () {
                _this._progress = 0;
                _this._completed = 0;
                _this._hasLoaded = false;
                _this.isFinished = true;
                _this.isPlaying = false;
            });
            _this.destroy(); // TODO add parameter to control whether to release audio on stop or finished
        }, function (err) {
            console.log("Audio error => track " + _this.src, err);
        }, function (status) {
            _this._ngZone.run(function () {
                switch (status) {
                    case Media.MEDIA_STARTING:
                        console.log("Loaded track " + _this.src);
                        _this._hasLoaded = true;
                        break;
                    case Media.MEDIA_RUNNING:
                        console.log("Playing track " + _this.src);
                        _this.isPlaying = true;
                        _this._isLoading = false;
                        break;
                    case Media.MEDIA_PAUSED:
                        _this.isPlaying = false;
                        break;
                    case Media.MEDIA_STOPPED:
                        _this.isPlaying = false;
                        break;
                }
            });
        });
    };
    CordovaAudioTrack.prototype.startTimer = function () {
        var _this = this;
        this._timer = setInterval(function () {
            if (_this._duration === undefined) {
                var duration = _this.audio.getDuration();
                (duration > 0) && (_this._duration = Math.round(_this.audio.getDuration() * 100) / 100);
            }
            _this.audio.getCurrentPosition(function (position) {
                return _this._ngZone.run(function () {
                    if (position > -1) {
                        _this._progress = Math.round(position * 100) / 100;
                        _this._completed = _this._duration > 0 ? Math.round(_this._progress / _this._duration * 100) / 100 : 0;
                    }
                });
            }, function (e) {
                console.log("Error getting position", e);
            });
        }, 1000);
    };
    CordovaAudioTrack.prototype.stopTimer = function () {
        clearInterval(this._timer);
    };
    Object.defineProperty(CordovaAudioTrack.prototype, "id", {
        /** public members */
        /**
       * Gets the track id
       *
       * @property id
       * @type {number}
       */
        get: /** public members */
        /**
         * Gets the track id
         *
         * @property id
         * @type {number}
         */
        function () {
            return this._id;
        },
        /**
       * Sets the track id
       *
       * @property id
       */
        set: /**
         * Sets the track id
         *
         * @property id
         */
        function (v) {
            this._id = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CordovaAudioTrack.prototype, "duration", {
        /**
       * Gets the track duration, or -1 if it cannot be determined
       *
       * @property duration
       * @readonly
       * @type {number}
       */
        get: /**
         * Gets the track duration, or -1 if it cannot be determined
         *
         * @property duration
         * @readonly
         * @type {number}
         */
        function () {
            return this._duration;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CordovaAudioTrack.prototype, "progress", {
        /**
       * Gets current track time (progress)
       *
       * @property progress
       * @readonly
       * @type {number}
       */
        get: /**
         * Gets current track time (progress)
         *
         * @property progress
         * @readonly
         * @type {number}
         */
        function () {
            return this._progress;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CordovaAudioTrack.prototype, "completed", {
        /**
       * Gets current track progress as a percentage
       *
       * @property completed
       * @readonly
       * @type {number}
       */
        get: /**
         * Gets current track progress as a percentage
         *
         * @property completed
         * @readonly
         * @type {number}
         */
        function () {
            return this._completed;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CordovaAudioTrack.prototype, "error", {
        /**
         * Gets any errors logged by HTML5 audio
         *
         * @property error
         * @readonly
         * @type {MediaError}
         */
        get: /**
         * Gets any errors logged by HTML5 audio
         *
         * @property error
         * @readonly
         * @type {MediaError}
         */
        function () {
            return this.audio.error;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CordovaAudioTrack.prototype, "canPlay", {
        /**
       * Gets a boolean value indicating whether the current source can be played
       *
       * @property canPlay
       * @readonly
       * @type {boolean}
       */
        get: /**
         * Gets a boolean value indicating whether the current source can be played
         *
         * @property canPlay
         * @readonly
         * @type {boolean}
         */
        function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CordovaAudioTrack.prototype, "isLoading", {
        /**
       * Gets a boolean value indicating whether the track is in loading state
       *
       * @property isLoading
       * @readonly
       * @type {boolean}
       */
        get: /**
         * Gets a boolean value indicating whether the track is in loading state
         *
         * @property isLoading
         * @readonly
         * @type {boolean}
         */
        function () {
            return this._isLoading;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CordovaAudioTrack.prototype, "hasLoaded", {
        /**
       * Gets a boolean value indicating whether the track has finished loading
       *
       * @property hadLoaded
       * @readonly
       * @type {boolean}
       */
        get: /**
         * Gets a boolean value indicating whether the track has finished loading
         *
         * @property hadLoaded
         * @readonly
         * @type {boolean}
         */
        function () {
            return this._hasLoaded;
        },
        enumerable: true,
        configurable: true
    });
    /**
   * Plays current track
   *
   * @method play
   */
    /**
     * Plays current track
     *
     * @method play
     */
    CordovaAudioTrack.prototype.play = /**
     * Plays current track
     *
     * @method play
     */
    function () {
        if (!this.audio) {
            this.createAudio();
        }
        if (!this._hasLoaded) {
            console.log("Loading track " + this.src);
            this._isLoading = true;
        }
        this.audio.play();
        this.startTimer();
    };
    /**
   * Pauses current track
   *
   * @method pause
   */
    /**
     * Pauses current track
     *
     * @method pause
     */
    CordovaAudioTrack.prototype.pause = /**
     * Pauses current track
     *
     * @method pause
     */
    function () {
        if (!this.isPlaying)
            return;
        console.log("Pausing track " + this.src);
        this.audio.pause();
        this.stopTimer();
    };
    /**
   * Stops current track and releases audio
   *
   * @method stop
   */
    /**
     * Stops current track and releases audio
     *
     * @method stop
     */
    CordovaAudioTrack.prototype.stop = /**
     * Stops current track and releases audio
     *
     * @method stop
     */
    function () {
        this.audio.stop(); // calls Media onSuccess callback
    };
    /**
   * Seeks to a new position within the track
   *
   * @method seekTo
   * @param {number} time the new position (milliseconds) to seek to
   */
    /**
     * Seeks to a new position within the track
     *
     * @method seekTo
     * @param {number} time the new position (milliseconds) to seek to
     */
    CordovaAudioTrack.prototype.seekTo = /**
     * Seeks to a new position within the track
     *
     * @method seekTo
     * @param {number} time the new position (milliseconds) to seek to
     */
    function (time) {
        // Cordova Media reports duration and progress as seconds, so we need to multiply by 1000
        this.audio.seekTo(time * 1000);
    };
    /**
     * Releases audio resources
     *
     * @method destroy
     */
    /**
       * Releases audio resources
       *
       * @method destroy
       */
    CordovaAudioTrack.prototype.destroy = /**
       * Releases audio resources
       *
       * @method destroy
       */
    function () {
        this.audio.release();
        console.log("Released track " + this.src);
    };
    CordovaAudioTrack.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */] },
    ];
    /** @nocollapse */
    CordovaAudioTrack.ctorParameters = function () { return [
        null,
    ]; };
    return CordovaAudioTrack;
}());

//# sourceMappingURL=ionic-audio-cordova-track.js.map

/***/ }),

/***/ 716:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_audio_providers__ = __webpack_require__(707);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__ionic_audio_providers__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__ionic_audio_providers__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_0__ionic_audio_providers__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_0__ionic_audio_providers__["d"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_audio_web_track__ = __webpack_require__(714);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_audio_cordova_track__ = __webpack_require__(715);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_audio_track_component__ = __webpack_require__(717);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_audio_track_progress_component__ = __webpack_require__(718);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_audio_track_play_component__ = __webpack_require__(719);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_audio_time_pipe__ = __webpack_require__(720);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_audio_module__ = __webpack_require__(735);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_7__ionic_audio_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_audio_playlist_item_directive__ = __webpack_require__(721);
/* unused harmony namespace reexport */









//# sourceMappingURL=index.js.map

/***/ }),

/***/ 717:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AudioTrackComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_audio_providers__ = __webpack_require__(707);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_audio_web_track__ = __webpack_require__(714);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_audio_cordova_track__ = __webpack_require__(715);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);




/**
 * # ```<audio-track>```
 *
 * Creates a top level audio-track component
 *
 * ## Usage
 *
 * ````
 *   <audio-track #audio [track]="myTrack" (onFinish)="onTrackFinished($event)">
 *   ...
 *   </audio-track>
 * ````
 * @element audio-track
 * @export
 * @class AudioTrackComponent
 */
var AudioTrackComponent = (function () {
    function AudioTrackComponent(_audioProvider) {
        this._audioProvider = _audioProvider;
        /**
           * Output property expects an event handler to be notified whenever playback finishes
           *
           * @property onFinish
           * @type {EventEmitter}
           */
        this.onFinish = new __WEBPACK_IMPORTED_MODULE_3__angular_core__["w" /* EventEmitter */]();
    }
    AudioTrackComponent.prototype.ngOnInit = function () {
        if (!this.track)
            return;
        if (!(this.track instanceof __WEBPACK_IMPORTED_MODULE_1__ionic_audio_web_track__["a" /* WebAudioTrack */]) && !(this.track instanceof __WEBPACK_IMPORTED_MODULE_2__ionic_audio_cordova_track__["a" /* CordovaAudioTrack */])) {
            this._audioTrack = this._audioProvider.create(this.track);
        }
        else {
            if (this._audioTrack) {
                Object.assign(this._audioTrack, this.track);
                this._audioProvider.add(this._audioTrack);
            }
        }
        if (this._audioTrack) {
            // update input track parameter with track is so we pass it to WebAudioProvider if needed
            this.track.id = this._audioTrack.id;
        }
    };
    AudioTrackComponent.prototype.play = function () {
        if (!this._audioTrack)
            return;
        this._audioTrack.play();
        this._audioProvider.current = this._audioTrack.id;
    };
    AudioTrackComponent.prototype.pause = function () {
        if (!this._audioTrack)
            return;
        this._audioTrack.pause();
        this._audioProvider.current = undefined;
    };
    AudioTrackComponent.prototype.toggle = function () {
        if (this._audioTrack.isPlaying) {
            this.pause();
        }
        else {
            this.play();
        }
    };
    AudioTrackComponent.prototype.seekTo = function (time) {
        if (!this._audioTrack)
            return;
        this._audioTrack.seekTo(time);
    };
    Object.defineProperty(AudioTrackComponent.prototype, "id", {
        get: function () {
            return this._audioTrack ? this._audioTrack.id : -1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AudioTrackComponent.prototype, "art", {
        get: function () {
            return this.track ? this.track.art : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AudioTrackComponent.prototype, "artist", {
        get: function () {
            return this.track ? this.track.artist : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AudioTrackComponent.prototype, "title", {
        get: function () {
            return this.track ? this.track.title : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AudioTrackComponent.prototype, "progress", {
        get: function () {
            return this._audioTrack ? this._audioTrack.progress : 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AudioTrackComponent.prototype, "isPlaying", {
        get: function () {
            return this._audioTrack && this._audioTrack.isPlaying;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AudioTrackComponent.prototype, "isFinished", {
        get: function () {
            return this._audioTrack && this._audioTrack.isFinished;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AudioTrackComponent.prototype, "duration", {
        get: function () {
            return this._audioTrack ? this._audioTrack.duration : 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AudioTrackComponent.prototype, "completed", {
        get: function () {
            return this._audioTrack ? this._audioTrack.completed : 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AudioTrackComponent.prototype, "canPlay", {
        get: function () {
            return this._audioTrack && this._audioTrack.canPlay;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AudioTrackComponent.prototype, "error", {
        get: function () {
            return this._audioTrack ? this._audioTrack.error : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AudioTrackComponent.prototype, "isLoading", {
        get: function () {
            return this._audioTrack && this._audioTrack.isLoading;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AudioTrackComponent.prototype, "hasLoaded", {
        get: function () {
            return this._audioTrack && this._audioTrack.hasLoaded;
        },
        enumerable: true,
        configurable: true
    });
    AudioTrackComponent.prototype.ngDoCheck = function () {
        // track has stopped, trigger finish event
        if (this._audioTrack && this._audioTrack.isFinished) {
            this.onFinish.emit(this.track);
            this._audioTrack.isFinished = false;
        }
    };
    AudioTrackComponent.prototype.ngOnChanges = function (changes) {
        if (changes.track.firstChange)
            return;
        if (this._audioTrack && this._audioTrack.isPlaying)
            this._audioTrack.stop();
        this._audioTrack = this._audioProvider.create(changes.track.currentValue);
        console.log("ngOnChanges -> new audio track detected", this._audioTrack);
        this.autoplay && this._audioTrack.play();
    };
    AudioTrackComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["n" /* Component */], args: [{
                    selector: 'audio-track',
                    template: '<ng-content></ng-content>'
                },] },
    ];
    /** @nocollapse */
    AudioTrackComponent.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_0__ionic_audio_providers__["a" /* AudioProvider */], },
    ]; };
    AudioTrackComponent.propDecorators = {
        "track": [{ type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["E" /* Input */] },],
        "autoplay": [{ type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["E" /* Input */] },],
        "onFinish": [{ type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["P" /* Output */] },],
    };
    return AudioTrackComponent;
}());

//# sourceMappingURL=ionic-audio-track-component.js.map

/***/ }),

/***/ 718:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AudioTrackProgressComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AudioTrackProgressBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);

/**
 * # ```<audio-track-progress>```
 *
 * Renders a timer component displaying track progress and duration
 *
 * ## Usage
 * ````
 * <audio-track-progress [audioTrack]="track"></audio-track-progress>
 * ````
 *
 * @element audio-track-progress
 * @parents audio-track
 * @export
 * @class AudioTrackProgressComponent
 */
var AudioTrackProgressComponent = (function () {
    function AudioTrackProgressComponent() {
    }
    AudioTrackProgressComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */], args: [{
                    selector: 'audio-track-progress',
                    template: '<em *ngIf="audioTrack.duration > 0">{{audioTrack.progress | audioTime}} / </em><em>{{audioTrack.duration | audioTime}}</em>'
                },] },
    ];
    /** @nocollapse */
    AudioTrackProgressComponent.ctorParameters = function () { return []; };
    AudioTrackProgressComponent.propDecorators = {
        "audioTrack": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    };
    return AudioTrackProgressComponent;
}());

/**
 * # ```<audio-track-progress-bar>```
 *
 * Renders a progress bar with optional timer, duration and progress indicator
 *
 * ## Usage
 * ````
 *  <audio-track-progress-bar duration progress [audioTrack]="audio"></audio-track-progress-bar>
 * ````
 *
 * @element audio-track-progress-bar
 * @parents audio-track
 * @export
 * @class AudioTrackProgressBarComponent
 */
var AudioTrackProgressBarComponent = (function () {
    function AudioTrackProgressBarComponent() {
        this.onFinish = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    Object.defineProperty(AudioTrackProgressBarComponent.prototype, "progress", {
        get: function () {
            return this._showProgress;
        },
        set: /**
           * Input property indicating whether to display track progress
           *
           * @property @Input() progress
           * @type {boolean}
           */
        function (value) {
            this._showProgress = true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AudioTrackProgressBarComponent.prototype, "duration", {
        get: function () {
            return this._showDuration;
        },
        set: /**
           * Input property indicating whether to display track duration
           *
           * @property @Input() duration
           * @type {boolean}
           */
        function (value) {
            this._showDuration = true;
        },
        enumerable: true,
        configurable: true
    });
    AudioTrackProgressBarComponent.prototype.seekTo = function (value) {
        if (!Number.isNaN(value))
            this.audioTrack.seekTo(value);
    };
    AudioTrackProgressBarComponent.prototype.ngOnChanges = function (changes) {
        if (changes.audioTrack.firstChange)
            return;
        // stop old track just in case
        var oldTrack = changes.audioTrack.previousValue;
        if ((oldTrack) && (typeof oldTrack.stop === "function")) {
            oldTrack.stop();
        }
    };
    AudioTrackProgressBarComponent.prototype.ngDoCheck = function () {
        if (this.audioTrack && this.audioTrack.isFinished) {
            this.onFinish.emit(this.audioTrack);
        }
    };
    AudioTrackProgressBarComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */], args: [{
                    selector: 'audio-track-progress-bar',
                    template: "\n    <time *ngIf=\"_showProgress\"><span *ngIf=\"audioTrack\" [style.opacity]=\"audioTrack.duration > 0 ? 1 : 0\">{{audioTrack.progress | audioTime}}</span></time>\n    <input type=\"range\" #seeker min=\"0\" [max]=\"audioTrack ? audioTrack.duration : 0\" step=\"any\" [value]=\"audioTrack ? audioTrack.progress : 0\" (change)=\"seekTo(seeker.value)\">\n    <time *ngIf=\"_showDuration\"><span *ngIf=\"audioTrack\" [style.opacity]=\"audioTrack.duration > 0 ? 1 : 0\">{{audioTrack.duration | audioTime}}</span></time>\n    "
                },] },
    ];
    /** @nocollapse */
    AudioTrackProgressBarComponent.ctorParameters = function () { return []; };
    AudioTrackProgressBarComponent.propDecorators = {
        "audioTrack": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
        "onFinish": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */] },],
        "progress": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
        "duration": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    };
    return AudioTrackProgressBarComponent;
}());

//# sourceMappingURL=ionic-audio-track-progress-component.js.map

/***/ }),

/***/ 719:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AudioTrackPlayComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);

/**
 * # ```<audio-track-play>```
 *
 * Renders a play/pause button that optionally displays a loading spinner
 *
 * ## Usage
 * ````
 * <audio-track #audio [track]="myTrack" (onFinish)="onTrackFinished($event)">
 *  <ion-item>
 *    <audio-track-play item-left [audioTrack]="audio"><ion-spinner></ion-spinner></audio-track-play>
 *    <h3>{{audio.title}}</h3>
 *  </ion-item>
 * </audio-track>
 * ````
 * If placed within a ```<ion-thumnbail>``` component it will render as a semi-transparent button layover (see live demo).
 * Passing a ```<ion-spinner>``` as a child element will display a loading spinner while loading.
 *
 * ````
 * <audio-track #audio [track]="track" (onFinish)="onTrackFinished($event)">
 *   <ion-item>
 *       <ion-thumbnail item-left>
 *         <img src="{{audio.art}}">
 *         <audio-track-play dark [audioTrack]="audio"><ion-spinner></ion-spinner></audio-track-play>
 *       </ion-thumbnail>
 *       <p><strong>{{audio.title}}</strong></p>
 *   </ion-item>
 * </audio-track>
 * ````
 *
 * @element audio-track-play
 * @parents audio-track
 * @export
 * @class AudioTrackPlayComponent
 */
var AudioTrackPlayComponent = (function () {
    function AudioTrackPlayComponent(el) {
        this.el = el;
    }
    Object.defineProperty(AudioTrackPlayComponent.prototype, "light", {
        set: /**
           * Renders the component using the light theme
           *
           * @property @Input() light
           * @type {boolean}
           */
        function (val) {
            this.el.nativeElement.firstElementChild.classList.add('light');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AudioTrackPlayComponent.prototype, "dark", {
        set: /**
           * Renders the component using the dark theme
           *
           * @property @Input() dark
           * @type {boolean}
           */
        function (val) {
            this.el.nativeElement.firstElementChild.classList.add('dark');
        },
        enumerable: true,
        configurable: true
    });
    AudioTrackPlayComponent.prototype.toggle = function (event) {
        if (this.audioTrack.isPlaying) {
            this.audioTrack.pause();
        }
        else {
            this.audioTrack.play();
        }
    };
    AudioTrackPlayComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */], args: [{
                    selector: 'audio-track-play',
                    template: "\n    <button ion-button icon-only clear (click)=\"toggle($event)\" [disabled]=\"audioTrack.error || audioTrack.isLoading\">\n      <ion-icon name=\"pause\" *ngIf=\"audioTrack.isPlaying && !audioTrack.isLoading\"></ion-icon>\n      <ion-icon name=\"play\" *ngIf=\"!audioTrack.isPlaying && !audioTrack.isLoading\"></ion-icon>\n      <ng-content *ngIf=\"audioTrack.isLoading && !audioTrack.error\"></ng-content>\n    </button>\n    "
                },] },
    ];
    /** @nocollapse */
    AudioTrackPlayComponent.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], },
    ]; };
    AudioTrackPlayComponent.propDecorators = {
        "audioTrack": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
        "light": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
        "dark": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    };
    return AudioTrackPlayComponent;
}());

//# sourceMappingURL=ionic-audio-track-play-component.js.map

/***/ }),

/***/ 720:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AudioTimePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);

/**
 * A pipe to convert milliseconds to a string representation
 *
 * @export
 * @class AudioTimePipe
 * @implements {PipeTransform}
 */
var AudioTimePipe = (function () {
    function AudioTimePipe() {
    }
    /**
     * Transforms milliseconds to hh:mm:ss
     *
     * @method transform
     * @param {number} [value] The milliseconds
     * @return {string} hh:mm:ss
     */
    /**
       * Transforms milliseconds to hh:mm:ss
       *
       * @method transform
       * @param {number} [value] The milliseconds
       * @return {string} hh:mm:ss
       */
    AudioTimePipe.prototype.transform = /**
       * Transforms milliseconds to hh:mm:ss
       *
       * @method transform
       * @param {number} [value] The milliseconds
       * @return {string} hh:mm:ss
       */
    function (value) {
        if (value === undefined || Number.isNaN(value))
            return '';
        var s = Math.trunc(value % 60);
        var m = Math.trunc((value / 60) % 60);
        var h = Math.trunc(((value / 60) / 60) % 60);
        return h > 0 ? (h < 10 ? '0' + h : h) + ":" + (m < 10 ? '0' + m : m) + ":" + (s < 10 ? '0' + s : s) : (m < 10 ? '0' + m : m) + ":" + (s < 10 ? '0' + s : s);
    };
    AudioTimePipe.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */], args: [{ name: 'audioTime' },] },
    ];
    /** @nocollapse */
    AudioTimePipe.ctorParameters = function () { return []; };
    return AudioTimePipe;
}());

//# sourceMappingURL=ionic-audio-time-pipe.js.map

/***/ }),

/***/ 721:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AudioPlaylistItemDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_audio_providers__ = __webpack_require__(707);


/**
 * Generated class for the AudioPlaylistItemDirective directive.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/DirectiveMetadata-class.html
 * for more info on Angular Directives.
 */
var AudioPlaylistItemDirective = (function () {
    function AudioPlaylistItemDirective(_audioProvider) {
        this._audioProvider = _audioProvider;
        this.currentTrackChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    AudioPlaylistItemDirective.prototype.ngOnInit = function () {
        this._index = AudioPlaylistItemDirective._tracklist.push(this.track) - 1;
    };
    AudioPlaylistItemDirective.prototype.onClick = function () {
        this._play();
    };
    AudioPlaylistItemDirective.prototype.next = function () {
        if (AudioPlaylistItemDirective._currentIndex > -1 && AudioPlaylistItemDirective._currentIndex < AudioPlaylistItemDirective._tracklist.length - 1) {
            this._play(++AudioPlaylistItemDirective._currentIndex);
        }
    };
    Object.defineProperty(AudioPlaylistItemDirective.prototype, "currentIndex", {
        get: function () {
            return AudioPlaylistItemDirective._currentIndex;
        },
        enumerable: true,
        configurable: true
    });
    AudioPlaylistItemDirective.prototype._play = function (index) {
        index = index || this._index;
        console.log('Playing', index);
        AudioPlaylistItemDirective._currentIndex = index;
        this.currentTrack = AudioPlaylistItemDirective._tracklist[index];
        this.currentTrackChange.emit(this.currentTrack);
    };
    AudioPlaylistItemDirective._currentIndex = -1;
    AudioPlaylistItemDirective._tracklist = [];
    AudioPlaylistItemDirective.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */], args: [{
                    selector: '[audio-playlist-item]' // Attribute selector
                },] },
    ];
    /** @nocollapse */
    AudioPlaylistItemDirective.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_1__ionic_audio_providers__["a" /* AudioProvider */], },
    ]; };
    AudioPlaylistItemDirective.propDecorators = {
        "track": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
        "currentTrack": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
        "currentTrackChange": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */] },],
        "onClick": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostListener */], args: ['click',] },],
    };
    return AudioPlaylistItemDirective;
}());

//# sourceMappingURL=ionic-audio-playlist-item-directive.js.map

/***/ }),

/***/ 734:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TranscriptPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_shared_vars__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_audio__ = __webpack_require__(716);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TranscriptPage = /** @class */ (function () {
    function TranscriptPage(_audioProvider, navParams, sharedVars) {
        this._audioProvider = _audioProvider;
        this.navParams = navParams;
        this.sharedVars = sharedVars;
        this.track_playing = false;
        this.selectedItem = this.navParams.get('item');
        this.myTracks = this.selectedItem.content.audio;
        this.parent = this.navParams.get('parent');
    }
    TranscriptPage.prototype.ionViewDidEnter = function () {
        this.sharedVars.trackView('Transcript - ' + this.parent + ":" + this.selectedItem.id);
    };
    TranscriptPage.prototype.ionViewWillLeave = function () {
        this._audioProvider.pause();
        if (this.track_playing == true) {
            this.sharedVars.trackEvent('Audio', 'navigation-pause', this.selectedItem.id);
            this.track_playing = false;
        }
    };
    TranscriptPage.prototype.ngAfterContentInit = function () {
        // get all tracks managed by AudioProvider so we can control playback via the API
        this.allTracks = this._audioProvider.tracks;
    };
    TranscriptPage.prototype.onTrackFinished = function (track) {
        this.sharedVars.trackEvent('Audio', 'completed', this.selectedItem.id);
        this.track_playing = false;
    };
    TranscriptPage.prototype.trackEvent = function (track) {
        if (this.track_playing == true) {
            this.sharedVars.trackEvent('Audio', 'pause', this.selectedItem.id);
            this.track_playing = false;
        }
        else if (this.track_playing == false) {
            this.sharedVars.trackEvent('Audio', 'play', this.selectedItem.id);
            this.track_playing = true;
        }
    };
    TranscriptPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-transcript',template:/*ion-inline-start:"/Users/sclark/Documents/Development/mobile/ionic/sciedtourguide/src/pages/transcript/transcript.html"*/'<ion-header>\n  <app-title [title]="selectedItem.content.title | translate" [titlebarColor]="parent"></app-title>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-card-header>\n    {{ selectedItem.content.title | translate }}\n  </ion-card-header>\n  <ion-card-content [innerHTML]="selectedItem.content.audio[0].transcriptId | translate">\n  </ion-card-content>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar class="audio">\n    <audio-track #audio *ngFor="let track of myTracks" [track]="track" (onFinish)="onTrackFinished($event)">\n      <ion-grid>\n        <ion-row>\n          <ion-col col-2 class="audio-icon"><img src="assets/images/audio.png" /></ion-col>\n          <ion-col col-10 class="audio-track">\n            <audio-track-progress-bar dark duration progress [audioTrack]="audio"></audio-track-progress-bar>\n            <ion-thumbnail item-start (tap)="trackEvent()">\n              <audio-track-play dark [audioTrack]="audio">\n                <ion-spinner></ion-spinner>\n              </audio-track-play>\n            </ion-thumbnail>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </audio-track>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/Users/sclark/Documents/Development/mobile/ionic/sciedtourguide/src/pages/transcript/transcript.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_audio__["a" /* AudioProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1__providers_shared_vars__["a" /* SharedVars */]])
    ], TranscriptPage);
    return TranscriptPage;
}());

//# sourceMappingURL=transcript.js.map

/***/ }),

/***/ 735:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export declarations */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IonicAudioModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_audio_track_component__ = __webpack_require__(717);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_audio_track_progress_component__ = __webpack_require__(718);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_audio_track_play_component__ = __webpack_require__(719);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_audio_time_pipe__ = __webpack_require__(720);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_audio_providers__ = __webpack_require__(707);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_audio_playlist_item_directive__ = __webpack_require__(721);









function declarations() {
    return [
        __WEBPACK_IMPORTED_MODULE_3__ionic_audio_track_component__["a" /* AudioTrackComponent */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_audio_track_progress_component__["b" /* AudioTrackProgressComponent */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_audio_track_progress_component__["a" /* AudioTrackProgressBarComponent */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_audio_track_play_component__["a" /* AudioTrackPlayComponent */],
        __WEBPACK_IMPORTED_MODULE_6__ionic_audio_time_pipe__["a" /* AudioTimePipe */],
        __WEBPACK_IMPORTED_MODULE_8__ionic_audio_playlist_item_directive__["a" /* AudioPlaylistItemDirective */]
    ];
}
var IonicAudioModule = (function () {
    function IonicAudioModule() {
    }
    /**
     * Configures Ionic Audio to use either Cordova or HTML5 audio.
     * If no ```audioProvider``` is set it will automatically choose one based on the current environment
     */
    /**
       * Configures Ionic Audio to use either Cordova or HTML5 audio.
       * If no ```audioProvider``` is set it will automatically choose one based on the current environment
       */
    IonicAudioModule.forRoot = /**
       * Configures Ionic Audio to use either Cordova or HTML5 audio.
       * If no ```audioProvider``` is set it will automatically choose one based on the current environment
       */
    function (audioProviderFactory) {
        return {
            ngModule: IonicAudioModule,
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_7__ionic_audio_providers__["a" /* AudioProvider */], useFactory: audioProviderFactory }
            ]
        };
    };
    IonicAudioModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */], args: [{
                    imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */]],
                    declarations: declarations(),
                    exports: declarations(),
                    providers: [],
                    schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
                },] },
    ];
    /** @nocollapse */
    IonicAudioModule.ctorParameters = function () { return []; };
    return IonicAudioModule;
}());

//# sourceMappingURL=ionic-audio.module.js.map

/***/ })

});
//# sourceMappingURL=0.js.map