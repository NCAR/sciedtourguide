webpackJsonp([1],{

/***/ 696:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapAccessPageModule", function() { return MapAccessPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mapaccess__ = __webpack_require__(726);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_titlebar_title_module__ = __webpack_require__(703);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var MapAccessPageModule = /** @class */ (function () {
    function MapAccessPageModule() {
    }
    MapAccessPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__mapaccess__["a" /* MapAccessPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__components_titlebar_title_module__["a" /* TitleComponentModule */],
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild(),
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__mapaccess__["a" /* MapAccessPage */]),
            ],
        })
    ], MapAccessPageModule);
    return MapAccessPageModule;
}());

//# sourceMappingURL=mapaccess.module.js.map

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

/***/ 705:
/***/ (function(module, exports, __webpack_require__) {

var Utils = __webpack_require__(706)
  , _browser = 'unknown'
  ;

// http://stackoverflow.com/questions/9847580/how-to-detect-safari-chrome-ie-firefox-and-opera-browser
if (/*@cc_on!@*/false || !!document.documentMode) { // internet explorer
  _browser = 'ie';
}

module.exports = {
  svgNS:  'http://www.w3.org/2000/svg'
, xmlNS:  'http://www.w3.org/XML/1998/namespace'
, xmlnsNS:  'http://www.w3.org/2000/xmlns/'
, xlinkNS:  'http://www.w3.org/1999/xlink'
, evNS:  'http://www.w3.org/2001/xml-events'

  /**
   * Get svg dimensions: width and height
   *
   * @param  {SVGSVGElement} svg
   * @return {Object}     {width: 0, height: 0}
   */
, getBoundingClientRectNormalized: function(svg) {
    if (svg.clientWidth && svg.clientHeight) {
      return {width: svg.clientWidth, height: svg.clientHeight}
    } else if (!!svg.getBoundingClientRect()) {
      return svg.getBoundingClientRect();
    } else {
      throw new Error('Cannot get BoundingClientRect for SVG.');
    }
  }

  /**
   * Gets g element with class of "viewport" or creates it if it doesn't exist
   *
   * @param  {SVGSVGElement} svg
   * @return {SVGElement}     g (group) element
   */
, getOrCreateViewport: function(svg, selector) {
    var viewport = null

    if (Utils.isElement(selector)) {
      viewport = selector
    } else {
      viewport = svg.querySelector(selector)
    }

    // Check if there is just one main group in SVG
    if (!viewport) {
      var childNodes = Array.prototype.slice.call(svg.childNodes || svg.children).filter(function(el){
        return el.nodeName !== 'defs' && el.nodeName !== '#text'
      })

      // Node name should be SVGGElement and should have no transform attribute
      // Groups with transform are not used as viewport because it involves parsing of all transform possibilities
      if (childNodes.length === 1 && childNodes[0].nodeName === 'g' && childNodes[0].getAttribute('transform') === null) {
        viewport = childNodes[0]
      }
    }

    // If no favorable group element exists then create one
    if (!viewport) {
      var viewportId = 'viewport-' + new Date().toISOString().replace(/\D/g, '');
      viewport = document.createElementNS(this.svgNS, 'g');
      viewport.setAttribute('id', viewportId);

      // Internet Explorer (all versions?) can't use childNodes, but other browsers prefer (require?) using childNodes
      var svgChildren = svg.childNodes || svg.children;
      if (!!svgChildren && svgChildren.length > 0) {
        for (var i = svgChildren.length; i > 0; i--) {
          // Move everything into viewport except defs
          if (svgChildren[svgChildren.length - i].nodeName !== 'defs') {
            viewport.appendChild(svgChildren[svgChildren.length - i]);
          }
        }
      }
      svg.appendChild(viewport);
    }

    // Parse class names
    var classNames = [];
    if (viewport.getAttribute('class')) {
      classNames = viewport.getAttribute('class').split(' ')
    }

    // Set class (if not set already)
    if (!~classNames.indexOf('svg-pan-zoom_viewport')) {
      classNames.push('svg-pan-zoom_viewport')
      viewport.setAttribute('class', classNames.join(' '))
    }

    return viewport
  }

  /**
   * Set SVG attributes
   *
   * @param  {SVGSVGElement} svg
   */
  , setupSvgAttributes: function(svg) {
    // Setting default attributes
    svg.setAttribute('xmlns', this.svgNS);
    svg.setAttributeNS(this.xmlnsNS, 'xmlns:xlink', this.xlinkNS);
    svg.setAttributeNS(this.xmlnsNS, 'xmlns:ev', this.evNS);

    // Needed for Internet Explorer, otherwise the viewport overflows
    if (svg.parentNode !== null) {
      var style = svg.getAttribute('style') || '';
      if (style.toLowerCase().indexOf('overflow') === -1) {
        svg.setAttribute('style', 'overflow: hidden; ' + style);
      }
    }
  }

/**
 * How long Internet Explorer takes to finish updating its display (ms).
 */
, internetExplorerRedisplayInterval: 300

/**
 * Forces the browser to redisplay all SVG elements that rely on an
 * element defined in a 'defs' section. It works globally, for every
 * available defs element on the page.
 * The throttling is intentionally global.
 *
 * This is only needed for IE. It is as a hack to make markers (and 'use' elements?)
 * visible after pan/zoom when there are multiple SVGs on the page.
 * See bug report: https://connect.microsoft.com/IE/feedback/details/781964/
 * also see svg-pan-zoom issue: https://github.com/ariutta/svg-pan-zoom/issues/62
 */
, refreshDefsGlobal: Utils.throttle(function() {
    var allDefs = document.querySelectorAll('defs');
    var allDefsCount = allDefs.length;
    for (var i = 0; i < allDefsCount; i++) {
      var thisDefs = allDefs[i];
      thisDefs.parentNode.insertBefore(thisDefs, thisDefs);
    }
  }, this ? this.internetExplorerRedisplayInterval : null)

  /**
   * Sets the current transform matrix of an element
   *
   * @param {SVGElement} element
   * @param {SVGMatrix} matrix  CTM
   * @param {SVGElement} defs
   */
, setCTM: function(element, matrix, defs) {
    var that = this
      , s = 'matrix(' + matrix.a + ',' + matrix.b + ',' + matrix.c + ',' + matrix.d + ',' + matrix.e + ',' + matrix.f + ')';

    element.setAttributeNS(null, 'transform', s);
    if ('transform' in element.style) {
      element.style.transform = s;
    } else if ('-ms-transform' in element.style) {
      element.style['-ms-transform'] = s;
    } else if ('-webkit-transform' in element.style) {
      element.style['-webkit-transform'] = s;
    }

    // IE has a bug that makes markers disappear on zoom (when the matrix "a" and/or "d" elements change)
    // see http://stackoverflow.com/questions/17654578/svg-marker-does-not-work-in-ie9-10
    // and http://srndolha.wordpress.com/2013/11/25/svg-line-markers-may-disappear-in-internet-explorer-11/
    if (_browser === 'ie' && !!defs) {
      // this refresh is intended for redisplaying the SVG during zooming
      defs.parentNode.insertBefore(defs, defs);
      // this refresh is intended for redisplaying the other SVGs on a page when panning a given SVG
      // it is also needed for the given SVG itself, on zoomEnd, if the SVG contains any markers that
      // are located under any other element(s).
      window.setTimeout(function() {
        that.refreshDefsGlobal();
      }, that.internetExplorerRedisplayInterval);
    }
  }

  /**
   * Instantiate an SVGPoint object with given event coordinates
   *
   * @param {Event} evt
   * @param  {SVGSVGElement} svg
   * @return {SVGPoint}     point
   */
, getEventPoint: function(evt, svg) {
    var point = svg.createSVGPoint()

    Utils.mouseAndTouchNormalize(evt, svg)

    point.x = evt.clientX
    point.y = evt.clientY

    return point
  }

  /**
   * Get SVG center point
   *
   * @param  {SVGSVGElement} svg
   * @return {SVGPoint}
   */
, getSvgCenterPoint: function(svg, width, height) {
    return this.createSVGPoint(svg, width / 2, height / 2)
  }

  /**
   * Create a SVGPoint with given x and y
   *
   * @param  {SVGSVGElement} svg
   * @param  {Number} x
   * @param  {Number} y
   * @return {SVGPoint}
   */
, createSVGPoint: function(svg, x, y) {
    var point = svg.createSVGPoint()
    point.x = x
    point.y = y

    return point
  }
}


/***/ }),

/***/ 706:
/***/ (function(module, exports) {

module.exports = {
  /**
   * Extends an object
   *
   * @param  {Object} target object to extend
   * @param  {Object} source object to take properties from
   * @return {Object}        extended object
   */
  extend: function(target, source) {
    target = target || {};
    for (var prop in source) {
      // Go recursively
      if (this.isObject(source[prop])) {
        target[prop] = this.extend(target[prop], source[prop])
      } else {
        target[prop] = source[prop]
      }
    }
    return target;
  }

  /**
   * Checks if an object is a DOM element
   *
   * @param  {Object}  o HTML element or String
   * @return {Boolean}   returns true if object is a DOM element
   */
, isElement: function(o){
    return (
      o instanceof HTMLElement || o instanceof SVGElement || o instanceof SVGSVGElement || //DOM2
      (o && typeof o === 'object' && o !== null && o.nodeType === 1 && typeof o.nodeName === 'string')
    );
  }

  /**
   * Checks if an object is an Object
   *
   * @param  {Object}  o Object
   * @return {Boolean}   returns true if object is an Object
   */
, isObject: function(o){
    return Object.prototype.toString.call(o) === '[object Object]';
  }

  /**
   * Checks if variable is Number
   *
   * @param  {Integer|Float}  n
   * @return {Boolean}   returns true if variable is Number
   */
, isNumber: function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }

  /**
   * Search for an SVG element
   *
   * @param  {Object|String} elementOrSelector DOM Element or selector String
   * @return {Object|Null}                   SVG or null
   */
, getSvg: function(elementOrSelector) {
    var element
      , svg;

    if (!this.isElement(elementOrSelector)) {
      // If selector provided
      if (typeof elementOrSelector === 'string' || elementOrSelector instanceof String) {
        // Try to find the element
        element = document.querySelector(elementOrSelector)

        if (!element) {
          throw new Error('Provided selector did not find any elements. Selector: ' + elementOrSelector)
          return null
        }
      } else {
        throw new Error('Provided selector is not an HTML object nor String')
        return null
      }
    } else {
      element = elementOrSelector
    }

    if (element.tagName.toLowerCase() === 'svg') {
      svg = element;
    } else {
      if (element.tagName.toLowerCase() === 'object') {
        svg = element.contentDocument.documentElement;
      } else {
        if (element.tagName.toLowerCase() === 'embed') {
          svg = element.getSVGDocument().documentElement;
        } else {
          if (element.tagName.toLowerCase() === 'img') {
            throw new Error('Cannot script an SVG in an "img" element. Please use an "object" element or an in-line SVG.');
          } else {
            throw new Error('Cannot get SVG.');
          }
          return null
        }
      }
    }

    return svg
  }

  /**
   * Attach a given context to a function
   * @param  {Function} fn      Function
   * @param  {Object}   context Context
   * @return {Function}           Function with certain context
   */
, proxy: function(fn, context) {
    return function() {
      return fn.apply(context, arguments)
    }
  }

  /**
   * Returns object type
   * Uses toString that returns [object SVGPoint]
   * And than parses object type from string
   *
   * @param  {Object} o Any object
   * @return {String}   Object type
   */
, getType: function(o) {
    return Object.prototype.toString.apply(o).replace(/^\[object\s/, '').replace(/\]$/, '')
  }

  /**
   * If it is a touch event than add clientX and clientY to event object
   *
   * @param  {Event} evt
   * @param  {SVGSVGElement} svg
   */
, mouseAndTouchNormalize: function(evt, svg) {
    // If no clientX then fallback
    if (evt.clientX === void 0 || evt.clientX === null) {
      // Fallback
      evt.clientX = 0
      evt.clientY = 0

      // If it is a touch event
      if (evt.touches !== void 0 && evt.touches.length) {
        if (evt.touches[0].clientX !== void 0) {
          evt.clientX = evt.touches[0].clientX
          evt.clientY = evt.touches[0].clientY
        } else if (evt.touches[0].pageX !== void 0) {
          var rect = svg.getBoundingClientRect();

          evt.clientX = evt.touches[0].pageX - rect.left
          evt.clientY = evt.touches[0].pageY - rect.top
        }
      // If it is a custom event
      } else if (evt.originalEvent !== void 0) {
        if (evt.originalEvent.clientX !== void 0) {
          evt.clientX = evt.originalEvent.clientX
          evt.clientY = evt.originalEvent.clientY
        }
      }
    }
  }

  /**
   * Check if an event is a double click/tap
   * TODO: For touch gestures use a library (hammer.js) that takes in account other events
   * (touchmove and touchend). It should take in account tap duration and traveled distance
   *
   * @param  {Event}  evt
   * @param  {Event}  prevEvt Previous Event
   * @return {Boolean}
   */
, isDblClick: function(evt, prevEvt) {
    // Double click detected by browser
    if (evt.detail === 2) {
      return true;
    }
    // Try to compare events
    else if (prevEvt !== void 0 && prevEvt !== null) {
      var timeStampDiff = evt.timeStamp - prevEvt.timeStamp // should be lower than 250 ms
        , touchesDistance = Math.sqrt(Math.pow(evt.clientX - prevEvt.clientX, 2) + Math.pow(evt.clientY - prevEvt.clientY, 2))

      return timeStampDiff < 250 && touchesDistance < 10
    }

    // Nothing found
    return false;
  }

  /**
   * Returns current timestamp as an integer
   *
   * @return {Number}
   */
, now: Date.now || function() {
    return new Date().getTime();
  }

  // From underscore.
  // Returns a function, that, when invoked, will only be triggered at most once
  // during a given window of time. Normally, the throttled function will run
  // as much as it can, without ever going more than once per `wait` duration;
  // but if you'd like to disable the execution on the leading edge, pass
  // `{leading: false}`. To disable execution on the trailing edge, ditto.
// jscs:disable
// jshint ignore:start
, throttle: function(func, wait, options) {
    var that = this;
    var context, args, result;
    var timeout = null;
    var previous = 0;
    if (!options) options = {};
    var later = function() {
      previous = options.leading === false ? 0 : that.now();
      timeout = null;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    };
    return function() {
      var now = that.now();
      if (!previous && options.leading === false) previous = now;
      var remaining = wait - (now - previous);
      context = this;
      args = arguments;
      if (remaining <= 0 || remaining > wait) {
        clearTimeout(timeout);
        timeout = null;
        previous = now;
        result = func.apply(context, args);
        if (!timeout) context = args = null;
      } else if (!timeout && options.trailing !== false) {
        timeout = setTimeout(later, remaining);
      }
      return result;
    };
  }
// jshint ignore:end
// jscs:enable

  /**
   * Create a requestAnimationFrame simulation
   *
   * @param  {Number|String} refreshRate
   * @return {Function}
   */
, createRequestAnimationFrame: function(refreshRate) {
    var timeout = null

    // Convert refreshRate to timeout
    if (refreshRate !== 'auto' && refreshRate < 60 && refreshRate > 1) {
      timeout = Math.floor(1000 / refreshRate)
    }

    if (timeout === null) {
      return window.requestAnimationFrame || requestTimeout(33)
    } else {
      return requestTimeout(timeout)
    }
  }
}

/**
 * Create a callback that will execute after a given timeout
 *
 * @param  {Function} timeout
 * @return {Function}
 */
function requestTimeout(timeout) {
  return function(callback) {
    window.setTimeout(callback, timeout)
  }
}


/***/ }),

/***/ 708:
/***/ (function(module, exports, __webpack_require__) {

var SvgPanZoom = __webpack_require__(709);

module.exports = SvgPanZoom;


/***/ }),

/***/ 709:
/***/ (function(module, exports, __webpack_require__) {

var Wheel = __webpack_require__(710)
, ControlIcons = __webpack_require__(711)
, Utils = __webpack_require__(706)
, SvgUtils = __webpack_require__(705)
, ShadowViewport = __webpack_require__(712)

var SvgPanZoom = function(svg, options) {
  this.init(svg, options)
}

var optionsDefaults = {
  viewportSelector: '.svg-pan-zoom_viewport' // Viewport selector. Can be querySelector string or SVGElement
, panEnabled: true // enable or disable panning (default enabled)
, controlIconsEnabled: false // insert icons to give user an option in addition to mouse events to control pan/zoom (default disabled)
, zoomEnabled: true // enable or disable zooming (default enabled)
, dblClickZoomEnabled: true // enable or disable zooming by double clicking (default enabled)
, mouseWheelZoomEnabled: true // enable or disable zooming by mouse wheel (default enabled)
, preventMouseEventsDefault: true // enable or disable preventDefault for mouse events
, zoomScaleSensitivity: 0.1 // Zoom sensitivity
, minZoom: 0.5 // Minimum Zoom level
, maxZoom: 10 // Maximum Zoom level
, fit: true // enable or disable viewport fit in SVG (default true)
, contain: false // enable or disable viewport contain the svg (default false)
, center: true // enable or disable viewport centering in SVG (default true)
, refreshRate: 'auto' // Maximum number of frames per second (altering SVG's viewport)
, beforeZoom: null
, onZoom: null
, beforePan: null
, onPan: null
, customEventsHandler: null
, eventsListenerElement: null
, onUpdatedCTM: null
}

SvgPanZoom.prototype.init = function(svg, options) {
  var that = this

  this.svg = svg
  this.defs = svg.querySelector('defs')

  // Add default attributes to SVG
  SvgUtils.setupSvgAttributes(this.svg)

  // Set options
  this.options = Utils.extend(Utils.extend({}, optionsDefaults), options)

  // Set default state
  this.state = 'none'

  // Get dimensions
  var boundingClientRectNormalized = SvgUtils.getBoundingClientRectNormalized(svg)
  this.width = boundingClientRectNormalized.width
  this.height = boundingClientRectNormalized.height

  // Init shadow viewport
  this.viewport = ShadowViewport(SvgUtils.getOrCreateViewport(this.svg, this.options.viewportSelector), {
    svg: this.svg
  , width: this.width
  , height: this.height
  , fit: this.options.fit
  , contain: this.options.contain
  , center: this.options.center
  , refreshRate: this.options.refreshRate
  // Put callbacks into functions as they can change through time
  , beforeZoom: function(oldScale, newScale) {
      if (that.viewport && that.options.beforeZoom) {return that.options.beforeZoom(oldScale, newScale)}
    }
  , onZoom: function(scale) {
      if (that.viewport && that.options.onZoom) {return that.options.onZoom(scale)}
    }
  , beforePan: function(oldPoint, newPoint) {
      if (that.viewport && that.options.beforePan) {return that.options.beforePan(oldPoint, newPoint)}
    }
  , onPan: function(point) {
      if (that.viewport && that.options.onPan) {return that.options.onPan(point)}
    }
  , onUpdatedCTM: function(ctm) {
      if (that.viewport && that.options.onUpdatedCTM) {return that.options.onUpdatedCTM(ctm)}
    }
  })

  // Wrap callbacks into public API context
  var publicInstance = this.getPublicInstance()
  publicInstance.setBeforeZoom(this.options.beforeZoom)
  publicInstance.setOnZoom(this.options.onZoom)
  publicInstance.setBeforePan(this.options.beforePan)
  publicInstance.setOnPan(this.options.onPan)
  publicInstance.setOnUpdatedCTM(this.options.onUpdatedCTM)

  if (this.options.controlIconsEnabled) {
    ControlIcons.enable(this)
  }

  // Init events handlers
  this.lastMouseWheelEventTime = Date.now()
  this.setupHandlers()
}

/**
 * Register event handlers
 */
SvgPanZoom.prototype.setupHandlers = function() {
  var that = this
    , prevEvt = null // use for touchstart event to detect double tap
    ;

  this.eventListeners = {
    // Mouse down group
    mousedown: function(evt) {
      var result = that.handleMouseDown(evt, prevEvt);
      prevEvt = evt
      return result;
    }
  , touchstart: function(evt) {
      var result = that.handleMouseDown(evt, prevEvt);
      prevEvt = evt
      return result;
    }

    // Mouse up group
  , mouseup: function(evt) {
      return that.handleMouseUp(evt);
    }
  , touchend: function(evt) {
      return that.handleMouseUp(evt);
    }

    // Mouse move group
  , mousemove: function(evt) {
      return that.handleMouseMove(evt);
    }
  , touchmove: function(evt) {
      return that.handleMouseMove(evt);
    }

    // Mouse leave group
  , mouseleave: function(evt) {
      return that.handleMouseUp(evt);
    }
  , touchleave: function(evt) {
      return that.handleMouseUp(evt);
    }
  , touchcancel: function(evt) {
      return that.handleMouseUp(evt);
    }
  }

  // Init custom events handler if available
  if (this.options.customEventsHandler != null) { // jshint ignore:line
    this.options.customEventsHandler.init({
      svgElement: this.svg
    , eventsListenerElement: this.options.eventsListenerElement
    , instance: this.getPublicInstance()
    })

    // Custom event handler may halt builtin listeners
    var haltEventListeners = this.options.customEventsHandler.haltEventListeners
    if (haltEventListeners && haltEventListeners.length) {
      for (var i = haltEventListeners.length - 1; i >= 0; i--) {
        if (this.eventListeners.hasOwnProperty(haltEventListeners[i])) {
          delete this.eventListeners[haltEventListeners[i]]
        }
      }
    }
  }

  // Bind eventListeners
  for (var event in this.eventListeners) {
    // Attach event to eventsListenerElement or SVG if not available
    (this.options.eventsListenerElement || this.svg)
      .addEventListener(event, this.eventListeners[event], false)
  }

  // Zoom using mouse wheel
  if (this.options.mouseWheelZoomEnabled) {
    this.options.mouseWheelZoomEnabled = false // set to false as enable will set it back to true
    this.enableMouseWheelZoom()
  }
}

/**
 * Enable ability to zoom using mouse wheel
 */
SvgPanZoom.prototype.enableMouseWheelZoom = function() {
  if (!this.options.mouseWheelZoomEnabled) {
    var that = this

    // Mouse wheel listener
    this.wheelListener = function(evt) {
      return that.handleMouseWheel(evt);
    }

    // Bind wheelListener
    Wheel.on(this.options.eventsListenerElement || this.svg, this.wheelListener, false)

    this.options.mouseWheelZoomEnabled = true
  }
}

/**
 * Disable ability to zoom using mouse wheel
 */
SvgPanZoom.prototype.disableMouseWheelZoom = function() {
  if (this.options.mouseWheelZoomEnabled) {
    Wheel.off(this.options.eventsListenerElement || this.svg, this.wheelListener, false)
    this.options.mouseWheelZoomEnabled = false
  }
}

/**
 * Handle mouse wheel event
 *
 * @param  {Event} evt
 */
SvgPanZoom.prototype.handleMouseWheel = function(evt) {
  if (!this.options.zoomEnabled || this.state !== 'none') {
    return;
  }

  if (this.options.preventMouseEventsDefault){
    if (evt.preventDefault) {
      evt.preventDefault();
    } else {
      evt.returnValue = false;
    }
  }

  // Default delta in case that deltaY is not available
  var delta = evt.deltaY || 1
    , timeDelta = Date.now() - this.lastMouseWheelEventTime
    , divider = 3 + Math.max(0, 30 - timeDelta)

  // Update cache
  this.lastMouseWheelEventTime = Date.now()

  // Make empirical adjustments for browsers that give deltaY in pixels (deltaMode=0)
  if ('deltaMode' in evt && evt.deltaMode === 0 && evt.wheelDelta) {
    delta = evt.deltaY === 0 ? 0 :  Math.abs(evt.wheelDelta) / evt.deltaY
  }

  delta = -0.3 < delta && delta < 0.3 ? delta : (delta > 0 ? 1 : -1) * Math.log(Math.abs(delta) + 10) / divider

  var inversedScreenCTM = this.svg.getScreenCTM().inverse()
    , relativeMousePoint = SvgUtils.getEventPoint(evt, this.svg).matrixTransform(inversedScreenCTM)
    , zoom = Math.pow(1 + this.options.zoomScaleSensitivity, (-1) * delta); // multiplying by neg. 1 so as to make zoom in/out behavior match Google maps behavior

  this.zoomAtPoint(zoom, relativeMousePoint)
}

/**
 * Zoom in at a SVG point
 *
 * @param  {SVGPoint} point
 * @param  {Float} zoomScale    Number representing how much to zoom
 * @param  {Boolean} zoomAbsolute Default false. If true, zoomScale is treated as an absolute value.
 *                                Otherwise, zoomScale is treated as a multiplied (e.g. 1.10 would zoom in 10%)
 */
SvgPanZoom.prototype.zoomAtPoint = function(zoomScale, point, zoomAbsolute) {
  var originalState = this.viewport.getOriginalState()

  if (!zoomAbsolute) {
    // Fit zoomScale in set bounds
    if (this.getZoom() * zoomScale < this.options.minZoom * originalState.zoom) {
      zoomScale = (this.options.minZoom * originalState.zoom) / this.getZoom()
    } else if (this.getZoom() * zoomScale > this.options.maxZoom * originalState.zoom) {
      zoomScale = (this.options.maxZoom * originalState.zoom) / this.getZoom()
    }
  } else {
    // Fit zoomScale in set bounds
    zoomScale = Math.max(this.options.minZoom * originalState.zoom, Math.min(this.options.maxZoom * originalState.zoom, zoomScale))
    // Find relative scale to achieve desired scale
    zoomScale = zoomScale/this.getZoom()
  }

  var oldCTM = this.viewport.getCTM()
    , relativePoint = point.matrixTransform(oldCTM.inverse())
    , modifier = this.svg.createSVGMatrix().translate(relativePoint.x, relativePoint.y).scale(zoomScale).translate(-relativePoint.x, -relativePoint.y)
    , newCTM = oldCTM.multiply(modifier)

  if (newCTM.a !== oldCTM.a) {
    this.viewport.setCTM(newCTM)
  }
}

/**
 * Zoom at center point
 *
 * @param  {Float} scale
 * @param  {Boolean} absolute Marks zoom scale as relative or absolute
 */
SvgPanZoom.prototype.zoom = function(scale, absolute) {
  this.zoomAtPoint(scale, SvgUtils.getSvgCenterPoint(this.svg, this.width, this.height), absolute)
}

/**
 * Zoom used by public instance
 *
 * @param  {Float} scale
 * @param  {Boolean} absolute Marks zoom scale as relative or absolute
 */
SvgPanZoom.prototype.publicZoom = function(scale, absolute) {
  if (absolute) {
    scale = this.computeFromRelativeZoom(scale)
  }

  this.zoom(scale, absolute)
}

/**
 * Zoom at point used by public instance
 *
 * @param  {Float} scale
 * @param  {SVGPoint|Object} point    An object that has x and y attributes
 * @param  {Boolean} absolute Marks zoom scale as relative or absolute
 */
SvgPanZoom.prototype.publicZoomAtPoint = function(scale, point, absolute) {
  if (absolute) {
    // Transform zoom into a relative value
    scale = this.computeFromRelativeZoom(scale)
  }

  // If not a SVGPoint but has x and y then create a SVGPoint
  if (Utils.getType(point) !== 'SVGPoint') {
    if('x' in point && 'y' in point) {
      point = SvgUtils.createSVGPoint(this.svg, point.x, point.y)
    } else {
      throw new Error('Given point is invalid')
    }
  }

  this.zoomAtPoint(scale, point, absolute)
}

/**
 * Get zoom scale
 *
 * @return {Float} zoom scale
 */
SvgPanZoom.prototype.getZoom = function() {
  return this.viewport.getZoom()
}

/**
 * Get zoom scale for public usage
 *
 * @return {Float} zoom scale
 */
SvgPanZoom.prototype.getRelativeZoom = function() {
  return this.viewport.getRelativeZoom()
}

/**
 * Compute actual zoom from public zoom
 *
 * @param  {Float} zoom
 * @return {Float} zoom scale
 */
SvgPanZoom.prototype.computeFromRelativeZoom = function(zoom) {
  return zoom * this.viewport.getOriginalState().zoom
}

/**
 * Set zoom to initial state
 */
SvgPanZoom.prototype.resetZoom = function() {
  var originalState = this.viewport.getOriginalState()

  this.zoom(originalState.zoom, true);
}

/**
 * Set pan to initial state
 */
SvgPanZoom.prototype.resetPan = function() {
  this.pan(this.viewport.getOriginalState());
}

/**
 * Set pan and zoom to initial state
 */
SvgPanZoom.prototype.reset = function() {
  this.resetZoom()
  this.resetPan()
}

/**
 * Handle double click event
 * See handleMouseDown() for alternate detection method
 *
 * @param {Event} evt
 */
SvgPanZoom.prototype.handleDblClick = function(evt) {
  if (this.options.preventMouseEventsDefault) {
    if (evt.preventDefault) {
      evt.preventDefault()
    } else {
      evt.returnValue = false
    }
  }

  // Check if target was a control button
  if (this.options.controlIconsEnabled) {
    var targetClass = evt.target.getAttribute('class') || ''
    if (targetClass.indexOf('svg-pan-zoom-control') > -1) {
      return false
    }
  }

  var zoomFactor

  if (evt.shiftKey) {
    zoomFactor = 1/((1 + this.options.zoomScaleSensitivity) * 2) // zoom out when shift key pressed
  } else {
    zoomFactor = (1 + this.options.zoomScaleSensitivity) * 2
  }

  var point = SvgUtils.getEventPoint(evt, this.svg).matrixTransform(this.svg.getScreenCTM().inverse())
  this.zoomAtPoint(zoomFactor, point)
}

/**
 * Handle click event
 *
 * @param {Event} evt
 */
SvgPanZoom.prototype.handleMouseDown = function(evt, prevEvt) {
  if (this.options.preventMouseEventsDefault) {
    if (evt.preventDefault) {
      evt.preventDefault()
    } else {
      evt.returnValue = false
    }
  }

  Utils.mouseAndTouchNormalize(evt, this.svg)

  // Double click detection; more consistent than ondblclick
  if (this.options.dblClickZoomEnabled && Utils.isDblClick(evt, prevEvt)){
    this.handleDblClick(evt)
  } else {
    // Pan mode
    this.state = 'pan'
    this.firstEventCTM = this.viewport.getCTM()
    this.stateOrigin = SvgUtils.getEventPoint(evt, this.svg).matrixTransform(this.firstEventCTM.inverse())
  }
}

/**
 * Handle mouse move event
 *
 * @param  {Event} evt
 */
SvgPanZoom.prototype.handleMouseMove = function(evt) {
  if (this.options.preventMouseEventsDefault) {
    if (evt.preventDefault) {
      evt.preventDefault()
    } else {
      evt.returnValue = false
    }
  }

  if (this.state === 'pan' && this.options.panEnabled) {
    // Pan mode
    var point = SvgUtils.getEventPoint(evt, this.svg).matrixTransform(this.firstEventCTM.inverse())
      , viewportCTM = this.firstEventCTM.translate(point.x - this.stateOrigin.x, point.y - this.stateOrigin.y)

    this.viewport.setCTM(viewportCTM)
  }
}

/**
 * Handle mouse button release event
 *
 * @param {Event} evt
 */
SvgPanZoom.prototype.handleMouseUp = function(evt) {
  if (this.options.preventMouseEventsDefault) {
    if (evt.preventDefault) {
      evt.preventDefault()
    } else {
      evt.returnValue = false
    }
  }

  if (this.state === 'pan') {
    // Quit pan mode
    this.state = 'none'
  }
}

/**
 * Adjust viewport size (only) so it will fit in SVG
 * Does not center image
 */
SvgPanZoom.prototype.fit = function() {
  var viewBox = this.viewport.getViewBox()
    , newScale = Math.min(this.width/viewBox.width, this.height/viewBox.height)

  this.zoom(newScale, true)
}

/**
 * Adjust viewport size (only) so it will contain the SVG
 * Does not center image
 */
SvgPanZoom.prototype.contain = function() {
  var viewBox = this.viewport.getViewBox()
    , newScale = Math.max(this.width/viewBox.width, this.height/viewBox.height)

  this.zoom(newScale, true)
}

/**
 * Adjust viewport pan (only) so it will be centered in SVG
 * Does not zoom/fit/contain image
 */
SvgPanZoom.prototype.center = function() {
  var viewBox = this.viewport.getViewBox()
    , offsetX = (this.width - (viewBox.width + viewBox.x * 2) * this.getZoom()) * 0.5
    , offsetY = (this.height - (viewBox.height + viewBox.y * 2) * this.getZoom()) * 0.5

  this.getPublicInstance().pan({x: offsetX, y: offsetY})
}

/**
 * Update content cached BorderBox
 * Use when viewport contents change
 */
SvgPanZoom.prototype.updateBBox = function() {
  this.viewport.simpleViewBoxCache()
}

/**
 * Pan to a rendered position
 *
 * @param  {Object} point {x: 0, y: 0}
 */
SvgPanZoom.prototype.pan = function(point) {
  var viewportCTM = this.viewport.getCTM()
  viewportCTM.e = point.x
  viewportCTM.f = point.y
  this.viewport.setCTM(viewportCTM)
}

/**
 * Relatively pan the graph by a specified rendered position vector
 *
 * @param  {Object} point {x: 0, y: 0}
 */
SvgPanZoom.prototype.panBy = function(point) {
  var viewportCTM = this.viewport.getCTM()
  viewportCTM.e += point.x
  viewportCTM.f += point.y
  this.viewport.setCTM(viewportCTM)
}

/**
 * Get pan vector
 *
 * @return {Object} {x: 0, y: 0}
 */
SvgPanZoom.prototype.getPan = function() {
  var state = this.viewport.getState()

  return {x: state.x, y: state.y}
}

/**
 * Recalculates cached svg dimensions and controls position
 */
SvgPanZoom.prototype.resize = function() {
  // Get dimensions
  var boundingClientRectNormalized = SvgUtils.getBoundingClientRectNormalized(this.svg)
  this.width = boundingClientRectNormalized.width
  this.height = boundingClientRectNormalized.height

  // Recalculate original state
  var viewport = this.viewport
  viewport.options.width = this.width
  viewport.options.height = this.height
  viewport.processCTM()

  // Reposition control icons by re-enabling them
  if (this.options.controlIconsEnabled) {
    this.getPublicInstance().disableControlIcons()
    this.getPublicInstance().enableControlIcons()
  }
}

/**
 * Unbind mouse events, free callbacks and destroy public instance
 */
SvgPanZoom.prototype.destroy = function() {
  var that = this

  // Free callbacks
  this.beforeZoom = null
  this.onZoom = null
  this.beforePan = null
  this.onPan = null
  this.onUpdatedCTM = null

  // Destroy custom event handlers
  if (this.options.customEventsHandler != null) { // jshint ignore:line
    this.options.customEventsHandler.destroy({
      svgElement: this.svg
    , eventsListenerElement: this.options.eventsListenerElement
    , instance: this.getPublicInstance()
    })
  }

  // Unbind eventListeners
  for (var event in this.eventListeners) {
    (this.options.eventsListenerElement || this.svg)
      .removeEventListener(event, this.eventListeners[event], false)
  }

  // Unbind wheelListener
  this.disableMouseWheelZoom()

  // Remove control icons
  this.getPublicInstance().disableControlIcons()

  // Reset zoom and pan
  this.reset()

  // Remove instance from instancesStore
  instancesStore = instancesStore.filter(function(instance){
    return instance.svg !== that.svg
  })

  // Delete options and its contents
  delete this.options

  // Delete viewport to make public shadow viewport functions uncallable
  delete this.viewport

  // Destroy public instance and rewrite getPublicInstance
  delete this.publicInstance
  delete this.pi
  this.getPublicInstance = function(){
    return null
  }
}

/**
 * Returns a public instance object
 *
 * @return {Object} Public instance object
 */
SvgPanZoom.prototype.getPublicInstance = function() {
  var that = this

  // Create cache
  if (!this.publicInstance) {
    this.publicInstance = this.pi = {
      // Pan
      enablePan: function() {that.options.panEnabled = true; return that.pi}
    , disablePan: function() {that.options.panEnabled = false; return that.pi}
    , isPanEnabled: function() {return !!that.options.panEnabled}
    , pan: function(point) {that.pan(point); return that.pi}
    , panBy: function(point) {that.panBy(point); return that.pi}
    , getPan: function() {return that.getPan()}
      // Pan event
    , setBeforePan: function(fn) {that.options.beforePan = fn === null ? null : Utils.proxy(fn, that.publicInstance); return that.pi}
    , setOnPan: function(fn) {that.options.onPan = fn === null ? null : Utils.proxy(fn, that.publicInstance); return that.pi}
      // Zoom and Control Icons
    , enableZoom: function() {that.options.zoomEnabled = true; return that.pi}
    , disableZoom: function() {that.options.zoomEnabled = false; return that.pi}
    , isZoomEnabled: function() {return !!that.options.zoomEnabled}
    , enableControlIcons: function() {
        if (!that.options.controlIconsEnabled) {
          that.options.controlIconsEnabled = true
          ControlIcons.enable(that)
        }
        return that.pi
      }
    , disableControlIcons: function() {
        if (that.options.controlIconsEnabled) {
          that.options.controlIconsEnabled = false;
          ControlIcons.disable(that)
        }
        return that.pi
      }
    , isControlIconsEnabled: function() {return !!that.options.controlIconsEnabled}
      // Double click zoom
    , enableDblClickZoom: function() {that.options.dblClickZoomEnabled = true; return that.pi}
    , disableDblClickZoom: function() {that.options.dblClickZoomEnabled = false; return that.pi}
    , isDblClickZoomEnabled: function() {return !!that.options.dblClickZoomEnabled}
      // Mouse wheel zoom
    , enableMouseWheelZoom: function() {that.enableMouseWheelZoom(); return that.pi}
    , disableMouseWheelZoom: function() {that.disableMouseWheelZoom(); return that.pi}
    , isMouseWheelZoomEnabled: function() {return !!that.options.mouseWheelZoomEnabled}
      // Zoom scale and bounds
    , setZoomScaleSensitivity: function(scale) {that.options.zoomScaleSensitivity = scale; return that.pi}
    , setMinZoom: function(zoom) {that.options.minZoom = zoom; return that.pi}
    , setMaxZoom: function(zoom) {that.options.maxZoom = zoom; return that.pi}
      // Zoom event
    , setBeforeZoom: function(fn) {that.options.beforeZoom = fn === null ? null : Utils.proxy(fn, that.publicInstance); return that.pi}
    , setOnZoom: function(fn) {that.options.onZoom = fn === null ? null : Utils.proxy(fn, that.publicInstance); return that.pi}
      // Zooming
    , zoom: function(scale) {that.publicZoom(scale, true); return that.pi}
    , zoomBy: function(scale) {that.publicZoom(scale, false); return that.pi}
    , zoomAtPoint: function(scale, point) {that.publicZoomAtPoint(scale, point, true); return that.pi}
    , zoomAtPointBy: function(scale, point) {that.publicZoomAtPoint(scale, point, false); return that.pi}
    , zoomIn: function() {this.zoomBy(1 + that.options.zoomScaleSensitivity); return that.pi}
    , zoomOut: function() {this.zoomBy(1 / (1 + that.options.zoomScaleSensitivity)); return that.pi}
    , getZoom: function() {return that.getRelativeZoom()}
      // CTM update
    , setOnUpdatedCTM: function(fn) {that.options.onUpdatedCTM = fn === null ? null : Utils.proxy(fn, that.publicInstance); return that.pi}
      // Reset
    , resetZoom: function() {that.resetZoom(); return that.pi}
    , resetPan: function() {that.resetPan(); return that.pi}
    , reset: function() {that.reset(); return that.pi}
      // Fit, Contain and Center
    , fit: function() {that.fit(); return that.pi}
    , contain: function() {that.contain(); return that.pi}
    , center: function() {that.center(); return that.pi}
      // Size and Resize
    , updateBBox: function() {that.updateBBox(); return that.pi}
    , resize: function() {that.resize(); return that.pi}
    , getSizes: function() {
        return {
          width: that.width
        , height: that.height
        , realZoom: that.getZoom()
        , viewBox: that.viewport.getViewBox()
        }
      }
      // Destroy
    , destroy: function() {that.destroy(); return that.pi}
    }
  }

  return this.publicInstance
}

/**
 * Stores pairs of instances of SvgPanZoom and SVG
 * Each pair is represented by an object {svg: SVGSVGElement, instance: SvgPanZoom}
 *
 * @type {Array}
 */
var instancesStore = []

var svgPanZoom = function(elementOrSelector, options){
  var svg = Utils.getSvg(elementOrSelector)

  if (svg === null) {
    return null
  } else {
    // Look for existent instance
    for(var i = instancesStore.length - 1; i >= 0; i--) {
      if (instancesStore[i].svg === svg) {
        return instancesStore[i].instance.getPublicInstance()
      }
    }

    // If instance not found - create one
    instancesStore.push({
      svg: svg
    , instance: new SvgPanZoom(svg, options)
    })

    // Return just pushed instance
    return instancesStore[instancesStore.length - 1].instance.getPublicInstance()
  }
}

module.exports = svgPanZoom;


/***/ }),

/***/ 710:
/***/ (function(module, exports) {

// uniwheel 0.1.2 (customized)
// A unified cross browser mouse wheel event handler
// https://github.com/teemualap/uniwheel

module.exports = (function(){

  //Full details: https://developer.mozilla.org/en-US/docs/Web/Reference/Events/wheel

  var prefix = "", _addEventListener, _removeEventListener, onwheel, support, fns = [];

  // detect event model
  if ( window.addEventListener ) {
    _addEventListener = "addEventListener";
    _removeEventListener = "removeEventListener";
  } else {
    _addEventListener = "attachEvent";
    _removeEventListener = "detachEvent";
    prefix = "on";
  }

  // detect available wheel event
  support = "onwheel" in document.createElement("div") ? "wheel" : // Modern browsers support "wheel"
            document.onmousewheel !== undefined ? "mousewheel" : // Webkit and IE support at least "mousewheel"
            "DOMMouseScroll"; // let's assume that remaining browsers are older Firefox


  function createCallback(element,callback,capture) {

    var fn = function(originalEvent) {

      !originalEvent && ( originalEvent = window.event );

      // create a normalized event object
      var event = {
        // keep a ref to the original event object
        originalEvent: originalEvent,
        target: originalEvent.target || originalEvent.srcElement,
        type: "wheel",
        deltaMode: originalEvent.type == "MozMousePixelScroll" ? 0 : 1,
        deltaX: 0,
        delatZ: 0,
        preventDefault: function() {
          originalEvent.preventDefault ?
            originalEvent.preventDefault() :
            originalEvent.returnValue = false;
        }
      };

      // calculate deltaY (and deltaX) according to the event
      if ( support == "mousewheel" ) {
        event.deltaY = - 1/40 * originalEvent.wheelDelta;
        // Webkit also support wheelDeltaX
        originalEvent.wheelDeltaX && ( event.deltaX = - 1/40 * originalEvent.wheelDeltaX );
      } else {
        event.deltaY = originalEvent.detail;
      }

      // it's time to fire the callback
      return callback( event );

    };

    fns.push({
      element: element,
      fn: fn,
      capture: capture
    });

    return fn;
  }

  function getCallback(element,capture) {
    for (var i = 0; i < fns.length; i++) {
      if (fns[i].element === element && fns[i].capture === capture) {
        return fns[i].fn;
      }
    }
    return function(){};
  }

  function removeCallback(element,capture) {
    for (var i = 0; i < fns.length; i++) {
      if (fns[i].element === element && fns[i].capture === capture) {
        return fns.splice(i,1);
      }
    }
  }

  function _addWheelListener( elem, eventName, callback, useCapture ) {

    var cb;

    if (support === "wheel") {
      cb = callback;
    } else {
      cb = createCallback(elem,callback,useCapture);
    }

    elem[ _addEventListener ]( prefix + eventName, cb, useCapture || false );

  }

  function _removeWheelListener( elem, eventName, callback, useCapture ) {

    var cb;

    if (support === "wheel") {
      cb = callback;
    } else {
      cb = getCallback(elem,useCapture);
    }

    elem[ _removeEventListener ]( prefix + eventName, cb, useCapture || false );

    removeCallback(elem,useCapture);

  }

  function addWheelListener( elem, callback, useCapture ) {
    _addWheelListener( elem, support, callback, useCapture );

    // handle MozMousePixelScroll in older Firefox
    if( support == "DOMMouseScroll" ) {
        _addWheelListener( elem, "MozMousePixelScroll", callback, useCapture);
    }
  }

  function removeWheelListener(elem,callback,useCapture){
    _removeWheelListener(elem,support,callback,useCapture);

    // handle MozMousePixelScroll in older Firefox
    if( support == "DOMMouseScroll" ) {
        _removeWheelListener(elem, "MozMousePixelScroll", callback, useCapture);
    }
  }

  return {
    on: addWheelListener,
    off: removeWheelListener
  };

})();


/***/ }),

/***/ 711:
/***/ (function(module, exports, __webpack_require__) {

var SvgUtils = __webpack_require__(705);

module.exports = {
  enable: function(instance) {
    // Select (and create if necessary) defs
    var defs = instance.svg.querySelector('defs')
    if (!defs) {
      defs = document.createElementNS(SvgUtils.svgNS, 'defs')
      instance.svg.appendChild(defs)
    }

    // Check for style element, and create it if it doesn't exist
    var styleEl = defs.querySelector('style#svg-pan-zoom-controls-styles');
    if (!styleEl) {
      var style = document.createElementNS(SvgUtils.svgNS, 'style')
      style.setAttribute('id', 'svg-pan-zoom-controls-styles')
      style.setAttribute('type', 'text/css')
      style.textContent = '.svg-pan-zoom-control { cursor: pointer; fill: black; fill-opacity: 0.333; } .svg-pan-zoom-control:hover { fill-opacity: 0.8; } .svg-pan-zoom-control-background { fill: white; fill-opacity: 0.5; } .svg-pan-zoom-control-background { fill-opacity: 0.8; }'
      defs.appendChild(style)
    }

    // Zoom Group
    var zoomGroup = document.createElementNS(SvgUtils.svgNS, 'g');
    zoomGroup.setAttribute('id', 'svg-pan-zoom-controls');
    zoomGroup.setAttribute('transform', 'translate(' + ( instance.width - 70 ) + ' ' + ( instance.height - 76 ) + ') scale(0.75)');
    zoomGroup.setAttribute('class', 'svg-pan-zoom-control');

    // Control elements
    zoomGroup.appendChild(this._createZoomIn(instance))
    zoomGroup.appendChild(this._createZoomReset(instance))
    zoomGroup.appendChild(this._createZoomOut(instance))

    // Finally append created element
    instance.svg.appendChild(zoomGroup)

    // Cache control instance
    instance.controlIcons = zoomGroup
  }

, _createZoomIn: function(instance) {
    var zoomIn = document.createElementNS(SvgUtils.svgNS, 'g');
    zoomIn.setAttribute('id', 'svg-pan-zoom-zoom-in');
    zoomIn.setAttribute('transform', 'translate(30.5 5) scale(0.015)');
    zoomIn.setAttribute('class', 'svg-pan-zoom-control');
    zoomIn.addEventListener('click', function() {instance.getPublicInstance().zoomIn()}, false)
    zoomIn.addEventListener('touchstart', function() {instance.getPublicInstance().zoomIn()}, false)

    var zoomInBackground = document.createElementNS(SvgUtils.svgNS, 'rect'); // TODO change these background space fillers to rounded rectangles so they look prettier
    zoomInBackground.setAttribute('x', '0');
    zoomInBackground.setAttribute('y', '0');
    zoomInBackground.setAttribute('width', '1500'); // larger than expected because the whole group is transformed to scale down
    zoomInBackground.setAttribute('height', '1400');
    zoomInBackground.setAttribute('class', 'svg-pan-zoom-control-background');
    zoomIn.appendChild(zoomInBackground);

    var zoomInShape = document.createElementNS(SvgUtils.svgNS, 'path');
    zoomInShape.setAttribute('d', 'M1280 576v128q0 26 -19 45t-45 19h-320v320q0 26 -19 45t-45 19h-128q-26 0 -45 -19t-19 -45v-320h-320q-26 0 -45 -19t-19 -45v-128q0 -26 19 -45t45 -19h320v-320q0 -26 19 -45t45 -19h128q26 0 45 19t19 45v320h320q26 0 45 19t19 45zM1536 1120v-960 q0 -119 -84.5 -203.5t-203.5 -84.5h-960q-119 0 -203.5 84.5t-84.5 203.5v960q0 119 84.5 203.5t203.5 84.5h960q119 0 203.5 -84.5t84.5 -203.5z');
    zoomInShape.setAttribute('class', 'svg-pan-zoom-control-element');
    zoomIn.appendChild(zoomInShape);

    return zoomIn
  }

, _createZoomReset: function(instance){
    // reset
    var resetPanZoomControl = document.createElementNS(SvgUtils.svgNS, 'g');
    resetPanZoomControl.setAttribute('id', 'svg-pan-zoom-reset-pan-zoom');
    resetPanZoomControl.setAttribute('transform', 'translate(5 35) scale(0.4)');
    resetPanZoomControl.setAttribute('class', 'svg-pan-zoom-control');
    resetPanZoomControl.addEventListener('click', function() {instance.getPublicInstance().reset()}, false);
    resetPanZoomControl.addEventListener('touchstart', function() {instance.getPublicInstance().reset()}, false);

    var resetPanZoomControlBackground = document.createElementNS(SvgUtils.svgNS, 'rect'); // TODO change these background space fillers to rounded rectangles so they look prettier
    resetPanZoomControlBackground.setAttribute('x', '2');
    resetPanZoomControlBackground.setAttribute('y', '2');
    resetPanZoomControlBackground.setAttribute('width', '182'); // larger than expected because the whole group is transformed to scale down
    resetPanZoomControlBackground.setAttribute('height', '58');
    resetPanZoomControlBackground.setAttribute('class', 'svg-pan-zoom-control-background');
    resetPanZoomControl.appendChild(resetPanZoomControlBackground);

    var resetPanZoomControlShape1 = document.createElementNS(SvgUtils.svgNS, 'path');
    resetPanZoomControlShape1.setAttribute('d', 'M33.051,20.632c-0.742-0.406-1.854-0.609-3.338-0.609h-7.969v9.281h7.769c1.543,0,2.701-0.188,3.473-0.562c1.365-0.656,2.048-1.953,2.048-3.891C35.032,22.757,34.372,21.351,33.051,20.632z');
    resetPanZoomControlShape1.setAttribute('class', 'svg-pan-zoom-control-element');
    resetPanZoomControl.appendChild(resetPanZoomControlShape1);

    var resetPanZoomControlShape2 = document.createElementNS(SvgUtils.svgNS, 'path');
    resetPanZoomControlShape2.setAttribute('d', 'M170.231,0.5H15.847C7.102,0.5,0.5,5.708,0.5,11.84v38.861C0.5,56.833,7.102,61.5,15.847,61.5h154.384c8.745,0,15.269-4.667,15.269-10.798V11.84C185.5,5.708,178.976,0.5,170.231,0.5z M42.837,48.569h-7.969c-0.219-0.766-0.375-1.383-0.469-1.852c-0.188-0.969-0.289-1.961-0.305-2.977l-0.047-3.211c-0.03-2.203-0.41-3.672-1.142-4.406c-0.732-0.734-2.103-1.102-4.113-1.102h-7.05v13.547h-7.055V14.022h16.524c2.361,0.047,4.178,0.344,5.45,0.891c1.272,0.547,2.351,1.352,3.234,2.414c0.731,0.875,1.31,1.844,1.737,2.906s0.64,2.273,0.64,3.633c0,1.641-0.414,3.254-1.242,4.84s-2.195,2.707-4.102,3.363c1.594,0.641,2.723,1.551,3.387,2.73s0.996,2.98,0.996,5.402v2.32c0,1.578,0.063,2.648,0.19,3.211c0.19,0.891,0.635,1.547,1.333,1.969V48.569z M75.579,48.569h-26.18V14.022h25.336v6.117H56.454v7.336h16.781v6H56.454v8.883h19.125V48.569z M104.497,46.331c-2.44,2.086-5.887,3.129-10.34,3.129c-4.548,0-8.125-1.027-10.731-3.082s-3.909-4.879-3.909-8.473h6.891c0.224,1.578,0.662,2.758,1.316,3.539c1.196,1.422,3.246,2.133,6.15,2.133c1.739,0,3.151-0.188,4.236-0.562c2.058-0.719,3.087-2.055,3.087-4.008c0-1.141-0.504-2.023-1.512-2.648c-1.008-0.609-2.607-1.148-4.796-1.617l-3.74-0.82c-3.676-0.812-6.201-1.695-7.576-2.648c-2.328-1.594-3.492-4.086-3.492-7.477c0-3.094,1.139-5.664,3.417-7.711s5.623-3.07,10.036-3.07c3.685,0,6.829,0.965,9.431,2.895c2.602,1.93,3.966,4.73,4.093,8.402h-6.938c-0.128-2.078-1.057-3.555-2.787-4.43c-1.154-0.578-2.587-0.867-4.301-0.867c-1.907,0-3.428,0.375-4.565,1.125c-1.138,0.75-1.706,1.797-1.706,3.141c0,1.234,0.561,2.156,1.682,2.766c0.721,0.406,2.25,0.883,4.589,1.43l6.063,1.43c2.657,0.625,4.648,1.461,5.975,2.508c2.059,1.625,3.089,3.977,3.089,7.055C108.157,41.624,106.937,44.245,104.497,46.331z M139.61,48.569h-26.18V14.022h25.336v6.117h-18.281v7.336h16.781v6h-16.781v8.883h19.125V48.569z M170.337,20.14h-10.336v28.43h-7.266V20.14h-10.383v-6.117h27.984V20.14z');
    resetPanZoomControlShape2.setAttribute('class', 'svg-pan-zoom-control-element');
    resetPanZoomControl.appendChild(resetPanZoomControlShape2);

    return resetPanZoomControl
  }

, _createZoomOut: function(instance){
    // zoom out
    var zoomOut = document.createElementNS(SvgUtils.svgNS, 'g');
    zoomOut.setAttribute('id', 'svg-pan-zoom-zoom-out');
    zoomOut.setAttribute('transform', 'translate(30.5 70) scale(0.015)');
    zoomOut.setAttribute('class', 'svg-pan-zoom-control');
    zoomOut.addEventListener('click', function() {instance.getPublicInstance().zoomOut()}, false);
    zoomOut.addEventListener('touchstart', function() {instance.getPublicInstance().zoomOut()}, false);

    var zoomOutBackground = document.createElementNS(SvgUtils.svgNS, 'rect'); // TODO change these background space fillers to rounded rectangles so they look prettier
    zoomOutBackground.setAttribute('x', '0');
    zoomOutBackground.setAttribute('y', '0');
    zoomOutBackground.setAttribute('width', '1500'); // larger than expected because the whole group is transformed to scale down
    zoomOutBackground.setAttribute('height', '1400');
    zoomOutBackground.setAttribute('class', 'svg-pan-zoom-control-background');
    zoomOut.appendChild(zoomOutBackground);

    var zoomOutShape = document.createElementNS(SvgUtils.svgNS, 'path');
    zoomOutShape.setAttribute('d', 'M1280 576v128q0 26 -19 45t-45 19h-896q-26 0 -45 -19t-19 -45v-128q0 -26 19 -45t45 -19h896q26 0 45 19t19 45zM1536 1120v-960q0 -119 -84.5 -203.5t-203.5 -84.5h-960q-119 0 -203.5 84.5t-84.5 203.5v960q0 119 84.5 203.5t203.5 84.5h960q119 0 203.5 -84.5 t84.5 -203.5z');
    zoomOutShape.setAttribute('class', 'svg-pan-zoom-control-element');
    zoomOut.appendChild(zoomOutShape);

    return zoomOut
  }

, disable: function(instance) {
    if (instance.controlIcons) {
      instance.controlIcons.parentNode.removeChild(instance.controlIcons)
      instance.controlIcons = null
    }
  }
}


/***/ }),

/***/ 712:
/***/ (function(module, exports, __webpack_require__) {

var SvgUtils = __webpack_require__(705)
  , Utils = __webpack_require__(706)
  ;

var ShadowViewport = function(viewport, options){
  this.init(viewport, options)
}

/**
 * Initialization
 *
 * @param  {SVGElement} viewport
 * @param  {Object} options
 */
ShadowViewport.prototype.init = function(viewport, options) {
  // DOM Elements
  this.viewport = viewport
  this.options = options

  // State cache
  this.originalState = {zoom: 1, x: 0, y: 0}
  this.activeState = {zoom: 1, x: 0, y: 0}

  this.updateCTMCached = Utils.proxy(this.updateCTM, this)

  // Create a custom requestAnimationFrame taking in account refreshRate
  this.requestAnimationFrame = Utils.createRequestAnimationFrame(this.options.refreshRate)

  // ViewBox
  this.viewBox = {x: 0, y: 0, width: 0, height: 0}
  this.cacheViewBox()

  // Process CTM
  var newCTM = this.processCTM()

  // Update viewport CTM and cache zoom and pan
  this.setCTM(newCTM)

  // Update CTM in this frame
  this.updateCTM()
}

/**
 * Cache initial viewBox value
 * If no viewBox is defined, then use viewport size/position instead for viewBox values
 */
ShadowViewport.prototype.cacheViewBox = function() {
  var svgViewBox = this.options.svg.getAttribute('viewBox')

  if (svgViewBox) {
    var viewBoxValues = svgViewBox.split(/[\s\,]/).filter(function(v){return v}).map(parseFloat)

    // Cache viewbox x and y offset
    this.viewBox.x = viewBoxValues[0]
    this.viewBox.y = viewBoxValues[1]
    this.viewBox.width = viewBoxValues[2]
    this.viewBox.height = viewBoxValues[3]

    var zoom = Math.min(this.options.width / this.viewBox.width, this.options.height / this.viewBox.height)

    // Update active state
    this.activeState.zoom = zoom
    this.activeState.x = (this.options.width - this.viewBox.width * zoom) / 2
    this.activeState.y = (this.options.height - this.viewBox.height * zoom) / 2

    // Force updating CTM
    this.updateCTMOnNextFrame()

    this.options.svg.removeAttribute('viewBox')
  } else {
    this.simpleViewBoxCache()
  }
}

/**
 * Recalculate viewport sizes and update viewBox cache
 */
ShadowViewport.prototype.simpleViewBoxCache = function() {
  var bBox = this.viewport.getBBox()

  this.viewBox.x = bBox.x
  this.viewBox.y = bBox.y
  this.viewBox.width = bBox.width
  this.viewBox.height = bBox.height
}

/**
 * Returns a viewbox object. Safe to alter
 *
 * @return {Object} viewbox object
 */
ShadowViewport.prototype.getViewBox = function() {
  return Utils.extend({}, this.viewBox)
}

/**
 * Get initial zoom and pan values. Save them into originalState
 * Parses viewBox attribute to alter initial sizes
 *
 * @return {CTM} CTM object based on options
 */
ShadowViewport.prototype.processCTM = function() {
  var newCTM = this.getCTM()

  if (this.options.fit || this.options.contain) {
    var newScale;
    if (this.options.fit) {
      newScale = Math.min(this.options.width/this.viewBox.width, this.options.height/this.viewBox.height);
    } else {
      newScale = Math.max(this.options.width/this.viewBox.width, this.options.height/this.viewBox.height);
    }

    newCTM.a = newScale; //x-scale
    newCTM.d = newScale; //y-scale
    newCTM.e = -this.viewBox.x * newScale; //x-transform
    newCTM.f = -this.viewBox.y * newScale; //y-transform
  }

  if (this.options.center) {
    var offsetX = (this.options.width - (this.viewBox.width + this.viewBox.x * 2) * newCTM.a) * 0.5
      , offsetY = (this.options.height - (this.viewBox.height + this.viewBox.y * 2) * newCTM.a) * 0.5

    newCTM.e = offsetX
    newCTM.f = offsetY
  }

  // Cache initial values. Based on activeState and fix+center opitons
  this.originalState.zoom = newCTM.a
  this.originalState.x = newCTM.e
  this.originalState.y = newCTM.f

  return newCTM
}

/**
 * Return originalState object. Safe to alter
 *
 * @return {Object}
 */
ShadowViewport.prototype.getOriginalState = function() {
  return Utils.extend({}, this.originalState)
}

/**
 * Return actualState object. Safe to alter
 *
 * @return {Object}
 */
ShadowViewport.prototype.getState = function() {
  return Utils.extend({}, this.activeState)
}

/**
 * Get zoom scale
 *
 * @return {Float} zoom scale
 */
ShadowViewport.prototype.getZoom = function() {
  return this.activeState.zoom
}

/**
 * Get zoom scale for pubilc usage
 *
 * @return {Float} zoom scale
 */
ShadowViewport.prototype.getRelativeZoom = function() {
  return this.activeState.zoom / this.originalState.zoom
}

/**
 * Compute zoom scale for pubilc usage
 *
 * @return {Float} zoom scale
 */
ShadowViewport.prototype.computeRelativeZoom = function(scale) {
  return scale / this.originalState.zoom
}

/**
 * Get pan
 *
 * @return {Object}
 */
ShadowViewport.prototype.getPan = function() {
  return {x: this.activeState.x, y: this.activeState.y}
}

/**
 * Return cached viewport CTM value that can be safely modified
 *
 * @return {SVGMatrix}
 */
ShadowViewport.prototype.getCTM = function() {
  var safeCTM = this.options.svg.createSVGMatrix()

  // Copy values manually as in FF they are not itterable
  safeCTM.a = this.activeState.zoom
  safeCTM.b = 0
  safeCTM.c = 0
  safeCTM.d = this.activeState.zoom
  safeCTM.e = this.activeState.x
  safeCTM.f = this.activeState.y

  return safeCTM
}

/**
 * Set a new CTM
 *
 * @param {SVGMatrix} newCTM
 */
ShadowViewport.prototype.setCTM = function(newCTM) {
  var willZoom = this.isZoomDifferent(newCTM)
    , willPan = this.isPanDifferent(newCTM)

  if (willZoom || willPan) {
    // Before zoom
    if (willZoom) {
      // If returns false then cancel zooming
      if (this.options.beforeZoom(this.getRelativeZoom(), this.computeRelativeZoom(newCTM.a)) === false) {
        newCTM.a = newCTM.d = this.activeState.zoom
        willZoom = false
      } else {
        this.updateCache(newCTM);
        this.options.onZoom(this.getRelativeZoom())
      }
    }

    // Before pan
    if (willPan) {
      var preventPan = this.options.beforePan(this.getPan(), {x: newCTM.e, y: newCTM.f})
          // If prevent pan is an object
        , preventPanX = false
        , preventPanY = false

      // If prevent pan is Boolean false
      if (preventPan === false) {
        // Set x and y same as before
        newCTM.e = this.getPan().x
        newCTM.f = this.getPan().y

        preventPanX = preventPanY = true
      } else if (Utils.isObject(preventPan)) {
        // Check for X axes attribute
        if (preventPan.x === false) {
          // Prevent panning on x axes
          newCTM.e = this.getPan().x
          preventPanX = true
        } else if (Utils.isNumber(preventPan.x)) {
          // Set a custom pan value
          newCTM.e = preventPan.x
        }

        // Check for Y axes attribute
        if (preventPan.y === false) {
          // Prevent panning on x axes
          newCTM.f = this.getPan().y
          preventPanY = true
        } else if (Utils.isNumber(preventPan.y)) {
          // Set a custom pan value
          newCTM.f = preventPan.y
        }
      }

      // Update willPan flag
      // Check if newCTM is still different
      if ((preventPanX && preventPanY) || !this.isPanDifferent(newCTM)) {
        willPan = false
      } else {
        this.updateCache(newCTM);
        this.options.onPan(this.getPan());
      }
    }

    // Check again if should zoom or pan
    if (willZoom || willPan) {
      this.updateCTMOnNextFrame()
    }
  }
}

ShadowViewport.prototype.isZoomDifferent = function(newCTM) {
  return this.activeState.zoom !== newCTM.a
}

ShadowViewport.prototype.isPanDifferent = function(newCTM) {
  return this.activeState.x !== newCTM.e || this.activeState.y !== newCTM.f
}


/**
 * Update cached CTM and active state
 *
 * @param {SVGMatrix} newCTM
 */
ShadowViewport.prototype.updateCache = function(newCTM) {
  this.activeState.zoom = newCTM.a
  this.activeState.x = newCTM.e
  this.activeState.y = newCTM.f
}

ShadowViewport.prototype.pendingUpdate = false

/**
 * Place a request to update CTM on next Frame
 */
ShadowViewport.prototype.updateCTMOnNextFrame = function() {
  if (!this.pendingUpdate) {
    // Lock
    this.pendingUpdate = true

    // Throttle next update
    this.requestAnimationFrame.call(window, this.updateCTMCached)
  }
}

/**
 * Update viewport CTM with cached CTM
 */
ShadowViewport.prototype.updateCTM = function() {
  var ctm = this.getCTM()

  // Updates SVG element
  SvgUtils.setCTM(this.viewport, ctm, this.defs)

  // Free the lock
  this.pendingUpdate = false

  // Notify about the update
  if(this.options.onUpdatedCTM) {
    this.options.onUpdatedCTM(ctm)
  }
}

module.exports = function(viewport, options){
  return new ShadowViewport(viewport, options)
}


/***/ }),

/***/ 713:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*! Hammer.JS - v2.0.7 - 2016-04-22
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2016 Jorik Tangelder;
 * Licensed under the MIT license */
(function(window, document, exportName, undefined) {
  'use strict';

var VENDOR_PREFIXES = ['', 'webkit', 'Moz', 'MS', 'ms', 'o'];
var TEST_ELEMENT = document.createElement('div');

var TYPE_FUNCTION = 'function';

var round = Math.round;
var abs = Math.abs;
var now = Date.now;

/**
 * set a timeout with a given scope
 * @param {Function} fn
 * @param {Number} timeout
 * @param {Object} context
 * @returns {number}
 */
function setTimeoutContext(fn, timeout, context) {
    return setTimeout(bindFn(fn, context), timeout);
}

/**
 * if the argument is an array, we want to execute the fn on each entry
 * if it aint an array we don't want to do a thing.
 * this is used by all the methods that accept a single and array argument.
 * @param {*|Array} arg
 * @param {String} fn
 * @param {Object} [context]
 * @returns {Boolean}
 */
function invokeArrayArg(arg, fn, context) {
    if (Array.isArray(arg)) {
        each(arg, context[fn], context);
        return true;
    }
    return false;
}

/**
 * walk objects and arrays
 * @param {Object} obj
 * @param {Function} iterator
 * @param {Object} context
 */
function each(obj, iterator, context) {
    var i;

    if (!obj) {
        return;
    }

    if (obj.forEach) {
        obj.forEach(iterator, context);
    } else if (obj.length !== undefined) {
        i = 0;
        while (i < obj.length) {
            iterator.call(context, obj[i], i, obj);
            i++;
        }
    } else {
        for (i in obj) {
            obj.hasOwnProperty(i) && iterator.call(context, obj[i], i, obj);
        }
    }
}

/**
 * wrap a method with a deprecation warning and stack trace
 * @param {Function} method
 * @param {String} name
 * @param {String} message
 * @returns {Function} A new function wrapping the supplied method.
 */
function deprecate(method, name, message) {
    var deprecationMessage = 'DEPRECATED METHOD: ' + name + '\n' + message + ' AT \n';
    return function() {
        var e = new Error('get-stack-trace');
        var stack = e && e.stack ? e.stack.replace(/^[^\(]+?[\n$]/gm, '')
            .replace(/^\s+at\s+/gm, '')
            .replace(/^Object.<anonymous>\s*\(/gm, '{anonymous}()@') : 'Unknown Stack Trace';

        var log = window.console && (window.console.warn || window.console.log);
        if (log) {
            log.call(window.console, deprecationMessage, stack);
        }
        return method.apply(this, arguments);
    };
}

/**
 * extend object.
 * means that properties in dest will be overwritten by the ones in src.
 * @param {Object} target
 * @param {...Object} objects_to_assign
 * @returns {Object} target
 */
var assign;
if (typeof Object.assign !== 'function') {
    assign = function assign(target) {
        if (target === undefined || target === null) {
            throw new TypeError('Cannot convert undefined or null to object');
        }

        var output = Object(target);
        for (var index = 1; index < arguments.length; index++) {
            var source = arguments[index];
            if (source !== undefined && source !== null) {
                for (var nextKey in source) {
                    if (source.hasOwnProperty(nextKey)) {
                        output[nextKey] = source[nextKey];
                    }
                }
            }
        }
        return output;
    };
} else {
    assign = Object.assign;
}

/**
 * extend object.
 * means that properties in dest will be overwritten by the ones in src.
 * @param {Object} dest
 * @param {Object} src
 * @param {Boolean} [merge=false]
 * @returns {Object} dest
 */
var extend = deprecate(function extend(dest, src, merge) {
    var keys = Object.keys(src);
    var i = 0;
    while (i < keys.length) {
        if (!merge || (merge && dest[keys[i]] === undefined)) {
            dest[keys[i]] = src[keys[i]];
        }
        i++;
    }
    return dest;
}, 'extend', 'Use `assign`.');

/**
 * merge the values from src in the dest.
 * means that properties that exist in dest will not be overwritten by src
 * @param {Object} dest
 * @param {Object} src
 * @returns {Object} dest
 */
var merge = deprecate(function merge(dest, src) {
    return extend(dest, src, true);
}, 'merge', 'Use `assign`.');

/**
 * simple class inheritance
 * @param {Function} child
 * @param {Function} base
 * @param {Object} [properties]
 */
function inherit(child, base, properties) {
    var baseP = base.prototype,
        childP;

    childP = child.prototype = Object.create(baseP);
    childP.constructor = child;
    childP._super = baseP;

    if (properties) {
        assign(childP, properties);
    }
}

/**
 * simple function bind
 * @param {Function} fn
 * @param {Object} context
 * @returns {Function}
 */
function bindFn(fn, context) {
    return function boundFn() {
        return fn.apply(context, arguments);
    };
}

/**
 * let a boolean value also be a function that must return a boolean
 * this first item in args will be used as the context
 * @param {Boolean|Function} val
 * @param {Array} [args]
 * @returns {Boolean}
 */
function boolOrFn(val, args) {
    if (typeof val == TYPE_FUNCTION) {
        return val.apply(args ? args[0] || undefined : undefined, args);
    }
    return val;
}

/**
 * use the val2 when val1 is undefined
 * @param {*} val1
 * @param {*} val2
 * @returns {*}
 */
function ifUndefined(val1, val2) {
    return (val1 === undefined) ? val2 : val1;
}

/**
 * addEventListener with multiple events at once
 * @param {EventTarget} target
 * @param {String} types
 * @param {Function} handler
 */
function addEventListeners(target, types, handler) {
    each(splitStr(types), function(type) {
        target.addEventListener(type, handler, false);
    });
}

/**
 * removeEventListener with multiple events at once
 * @param {EventTarget} target
 * @param {String} types
 * @param {Function} handler
 */
function removeEventListeners(target, types, handler) {
    each(splitStr(types), function(type) {
        target.removeEventListener(type, handler, false);
    });
}

/**
 * find if a node is in the given parent
 * @method hasParent
 * @param {HTMLElement} node
 * @param {HTMLElement} parent
 * @return {Boolean} found
 */
function hasParent(node, parent) {
    while (node) {
        if (node == parent) {
            return true;
        }
        node = node.parentNode;
    }
    return false;
}

/**
 * small indexOf wrapper
 * @param {String} str
 * @param {String} find
 * @returns {Boolean} found
 */
function inStr(str, find) {
    return str.indexOf(find) > -1;
}

/**
 * split string on whitespace
 * @param {String} str
 * @returns {Array} words
 */
function splitStr(str) {
    return str.trim().split(/\s+/g);
}

/**
 * find if a array contains the object using indexOf or a simple polyFill
 * @param {Array} src
 * @param {String} find
 * @param {String} [findByKey]
 * @return {Boolean|Number} false when not found, or the index
 */
function inArray(src, find, findByKey) {
    if (src.indexOf && !findByKey) {
        return src.indexOf(find);
    } else {
        var i = 0;
        while (i < src.length) {
            if ((findByKey && src[i][findByKey] == find) || (!findByKey && src[i] === find)) {
                return i;
            }
            i++;
        }
        return -1;
    }
}

/**
 * convert array-like objects to real arrays
 * @param {Object} obj
 * @returns {Array}
 */
function toArray(obj) {
    return Array.prototype.slice.call(obj, 0);
}

/**
 * unique array with objects based on a key (like 'id') or just by the array's value
 * @param {Array} src [{id:1},{id:2},{id:1}]
 * @param {String} [key]
 * @param {Boolean} [sort=False]
 * @returns {Array} [{id:1},{id:2}]
 */
function uniqueArray(src, key, sort) {
    var results = [];
    var values = [];
    var i = 0;

    while (i < src.length) {
        var val = key ? src[i][key] : src[i];
        if (inArray(values, val) < 0) {
            results.push(src[i]);
        }
        values[i] = val;
        i++;
    }

    if (sort) {
        if (!key) {
            results = results.sort();
        } else {
            results = results.sort(function sortUniqueArray(a, b) {
                return a[key] > b[key];
            });
        }
    }

    return results;
}

/**
 * get the prefixed property
 * @param {Object} obj
 * @param {String} property
 * @returns {String|Undefined} prefixed
 */
function prefixed(obj, property) {
    var prefix, prop;
    var camelProp = property[0].toUpperCase() + property.slice(1);

    var i = 0;
    while (i < VENDOR_PREFIXES.length) {
        prefix = VENDOR_PREFIXES[i];
        prop = (prefix) ? prefix + camelProp : property;

        if (prop in obj) {
            return prop;
        }
        i++;
    }
    return undefined;
}

/**
 * get a unique id
 * @returns {number} uniqueId
 */
var _uniqueId = 1;
function uniqueId() {
    return _uniqueId++;
}

/**
 * get the window object of an element
 * @param {HTMLElement} element
 * @returns {DocumentView|Window}
 */
function getWindowForElement(element) {
    var doc = element.ownerDocument || element;
    return (doc.defaultView || doc.parentWindow || window);
}

var MOBILE_REGEX = /mobile|tablet|ip(ad|hone|od)|android/i;

var SUPPORT_TOUCH = ('ontouchstart' in window);
var SUPPORT_POINTER_EVENTS = prefixed(window, 'PointerEvent') !== undefined;
var SUPPORT_ONLY_TOUCH = SUPPORT_TOUCH && MOBILE_REGEX.test(navigator.userAgent);

var INPUT_TYPE_TOUCH = 'touch';
var INPUT_TYPE_PEN = 'pen';
var INPUT_TYPE_MOUSE = 'mouse';
var INPUT_TYPE_KINECT = 'kinect';

var COMPUTE_INTERVAL = 25;

var INPUT_START = 1;
var INPUT_MOVE = 2;
var INPUT_END = 4;
var INPUT_CANCEL = 8;

var DIRECTION_NONE = 1;
var DIRECTION_LEFT = 2;
var DIRECTION_RIGHT = 4;
var DIRECTION_UP = 8;
var DIRECTION_DOWN = 16;

var DIRECTION_HORIZONTAL = DIRECTION_LEFT | DIRECTION_RIGHT;
var DIRECTION_VERTICAL = DIRECTION_UP | DIRECTION_DOWN;
var DIRECTION_ALL = DIRECTION_HORIZONTAL | DIRECTION_VERTICAL;

var PROPS_XY = ['x', 'y'];
var PROPS_CLIENT_XY = ['clientX', 'clientY'];

/**
 * create new input type manager
 * @param {Manager} manager
 * @param {Function} callback
 * @returns {Input}
 * @constructor
 */
function Input(manager, callback) {
    var self = this;
    this.manager = manager;
    this.callback = callback;
    this.element = manager.element;
    this.target = manager.options.inputTarget;

    // smaller wrapper around the handler, for the scope and the enabled state of the manager,
    // so when disabled the input events are completely bypassed.
    this.domHandler = function(ev) {
        if (boolOrFn(manager.options.enable, [manager])) {
            self.handler(ev);
        }
    };

    this.init();

}

Input.prototype = {
    /**
     * should handle the inputEvent data and trigger the callback
     * @virtual
     */
    handler: function() { },

    /**
     * bind the events
     */
    init: function() {
        this.evEl && addEventListeners(this.element, this.evEl, this.domHandler);
        this.evTarget && addEventListeners(this.target, this.evTarget, this.domHandler);
        this.evWin && addEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
    },

    /**
     * unbind the events
     */
    destroy: function() {
        this.evEl && removeEventListeners(this.element, this.evEl, this.domHandler);
        this.evTarget && removeEventListeners(this.target, this.evTarget, this.domHandler);
        this.evWin && removeEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
    }
};

/**
 * create new input type manager
 * called by the Manager constructor
 * @param {Hammer} manager
 * @returns {Input}
 */
function createInputInstance(manager) {
    var Type;
    var inputClass = manager.options.inputClass;

    if (inputClass) {
        Type = inputClass;
    } else if (SUPPORT_POINTER_EVENTS) {
        Type = PointerEventInput;
    } else if (SUPPORT_ONLY_TOUCH) {
        Type = TouchInput;
    } else if (!SUPPORT_TOUCH) {
        Type = MouseInput;
    } else {
        Type = TouchMouseInput;
    }
    return new (Type)(manager, inputHandler);
}

/**
 * handle input events
 * @param {Manager} manager
 * @param {String} eventType
 * @param {Object} input
 */
function inputHandler(manager, eventType, input) {
    var pointersLen = input.pointers.length;
    var changedPointersLen = input.changedPointers.length;
    var isFirst = (eventType & INPUT_START && (pointersLen - changedPointersLen === 0));
    var isFinal = (eventType & (INPUT_END | INPUT_CANCEL) && (pointersLen - changedPointersLen === 0));

    input.isFirst = !!isFirst;
    input.isFinal = !!isFinal;

    if (isFirst) {
        manager.session = {};
    }

    // source event is the normalized value of the domEvents
    // like 'touchstart, mouseup, pointerdown'
    input.eventType = eventType;

    // compute scale, rotation etc
    computeInputData(manager, input);

    // emit secret event
    manager.emit('hammer.input', input);

    manager.recognize(input);
    manager.session.prevInput = input;
}

/**
 * extend the data with some usable properties like scale, rotate, velocity etc
 * @param {Object} manager
 * @param {Object} input
 */
function computeInputData(manager, input) {
    var session = manager.session;
    var pointers = input.pointers;
    var pointersLength = pointers.length;

    // store the first input to calculate the distance and direction
    if (!session.firstInput) {
        session.firstInput = simpleCloneInputData(input);
    }

    // to compute scale and rotation we need to store the multiple touches
    if (pointersLength > 1 && !session.firstMultiple) {
        session.firstMultiple = simpleCloneInputData(input);
    } else if (pointersLength === 1) {
        session.firstMultiple = false;
    }

    var firstInput = session.firstInput;
    var firstMultiple = session.firstMultiple;
    var offsetCenter = firstMultiple ? firstMultiple.center : firstInput.center;

    var center = input.center = getCenter(pointers);
    input.timeStamp = now();
    input.deltaTime = input.timeStamp - firstInput.timeStamp;

    input.angle = getAngle(offsetCenter, center);
    input.distance = getDistance(offsetCenter, center);

    computeDeltaXY(session, input);
    input.offsetDirection = getDirection(input.deltaX, input.deltaY);

    var overallVelocity = getVelocity(input.deltaTime, input.deltaX, input.deltaY);
    input.overallVelocityX = overallVelocity.x;
    input.overallVelocityY = overallVelocity.y;
    input.overallVelocity = (abs(overallVelocity.x) > abs(overallVelocity.y)) ? overallVelocity.x : overallVelocity.y;

    input.scale = firstMultiple ? getScale(firstMultiple.pointers, pointers) : 1;
    input.rotation = firstMultiple ? getRotation(firstMultiple.pointers, pointers) : 0;

    input.maxPointers = !session.prevInput ? input.pointers.length : ((input.pointers.length >
        session.prevInput.maxPointers) ? input.pointers.length : session.prevInput.maxPointers);

    computeIntervalInputData(session, input);

    // find the correct target
    var target = manager.element;
    if (hasParent(input.srcEvent.target, target)) {
        target = input.srcEvent.target;
    }
    input.target = target;
}

function computeDeltaXY(session, input) {
    var center = input.center;
    var offset = session.offsetDelta || {};
    var prevDelta = session.prevDelta || {};
    var prevInput = session.prevInput || {};

    if (input.eventType === INPUT_START || prevInput.eventType === INPUT_END) {
        prevDelta = session.prevDelta = {
            x: prevInput.deltaX || 0,
            y: prevInput.deltaY || 0
        };

        offset = session.offsetDelta = {
            x: center.x,
            y: center.y
        };
    }

    input.deltaX = prevDelta.x + (center.x - offset.x);
    input.deltaY = prevDelta.y + (center.y - offset.y);
}

/**
 * velocity is calculated every x ms
 * @param {Object} session
 * @param {Object} input
 */
function computeIntervalInputData(session, input) {
    var last = session.lastInterval || input,
        deltaTime = input.timeStamp - last.timeStamp,
        velocity, velocityX, velocityY, direction;

    if (input.eventType != INPUT_CANCEL && (deltaTime > COMPUTE_INTERVAL || last.velocity === undefined)) {
        var deltaX = input.deltaX - last.deltaX;
        var deltaY = input.deltaY - last.deltaY;

        var v = getVelocity(deltaTime, deltaX, deltaY);
        velocityX = v.x;
        velocityY = v.y;
        velocity = (abs(v.x) > abs(v.y)) ? v.x : v.y;
        direction = getDirection(deltaX, deltaY);

        session.lastInterval = input;
    } else {
        // use latest velocity info if it doesn't overtake a minimum period
        velocity = last.velocity;
        velocityX = last.velocityX;
        velocityY = last.velocityY;
        direction = last.direction;
    }

    input.velocity = velocity;
    input.velocityX = velocityX;
    input.velocityY = velocityY;
    input.direction = direction;
}

/**
 * create a simple clone from the input used for storage of firstInput and firstMultiple
 * @param {Object} input
 * @returns {Object} clonedInputData
 */
function simpleCloneInputData(input) {
    // make a simple copy of the pointers because we will get a reference if we don't
    // we only need clientXY for the calculations
    var pointers = [];
    var i = 0;
    while (i < input.pointers.length) {
        pointers[i] = {
            clientX: round(input.pointers[i].clientX),
            clientY: round(input.pointers[i].clientY)
        };
        i++;
    }

    return {
        timeStamp: now(),
        pointers: pointers,
        center: getCenter(pointers),
        deltaX: input.deltaX,
        deltaY: input.deltaY
    };
}

/**
 * get the center of all the pointers
 * @param {Array} pointers
 * @return {Object} center contains `x` and `y` properties
 */
function getCenter(pointers) {
    var pointersLength = pointers.length;

    // no need to loop when only one touch
    if (pointersLength === 1) {
        return {
            x: round(pointers[0].clientX),
            y: round(pointers[0].clientY)
        };
    }

    var x = 0, y = 0, i = 0;
    while (i < pointersLength) {
        x += pointers[i].clientX;
        y += pointers[i].clientY;
        i++;
    }

    return {
        x: round(x / pointersLength),
        y: round(y / pointersLength)
    };
}

/**
 * calculate the velocity between two points. unit is in px per ms.
 * @param {Number} deltaTime
 * @param {Number} x
 * @param {Number} y
 * @return {Object} velocity `x` and `y`
 */
function getVelocity(deltaTime, x, y) {
    return {
        x: x / deltaTime || 0,
        y: y / deltaTime || 0
    };
}

/**
 * get the direction between two points
 * @param {Number} x
 * @param {Number} y
 * @return {Number} direction
 */
function getDirection(x, y) {
    if (x === y) {
        return DIRECTION_NONE;
    }

    if (abs(x) >= abs(y)) {
        return x < 0 ? DIRECTION_LEFT : DIRECTION_RIGHT;
    }
    return y < 0 ? DIRECTION_UP : DIRECTION_DOWN;
}

/**
 * calculate the absolute distance between two points
 * @param {Object} p1 {x, y}
 * @param {Object} p2 {x, y}
 * @param {Array} [props] containing x and y keys
 * @return {Number} distance
 */
function getDistance(p1, p2, props) {
    if (!props) {
        props = PROPS_XY;
    }
    var x = p2[props[0]] - p1[props[0]],
        y = p2[props[1]] - p1[props[1]];

    return Math.sqrt((x * x) + (y * y));
}

/**
 * calculate the angle between two coordinates
 * @param {Object} p1
 * @param {Object} p2
 * @param {Array} [props] containing x and y keys
 * @return {Number} angle
 */
function getAngle(p1, p2, props) {
    if (!props) {
        props = PROPS_XY;
    }
    var x = p2[props[0]] - p1[props[0]],
        y = p2[props[1]] - p1[props[1]];
    return Math.atan2(y, x) * 180 / Math.PI;
}

/**
 * calculate the rotation degrees between two pointersets
 * @param {Array} start array of pointers
 * @param {Array} end array of pointers
 * @return {Number} rotation
 */
function getRotation(start, end) {
    return getAngle(end[1], end[0], PROPS_CLIENT_XY) + getAngle(start[1], start[0], PROPS_CLIENT_XY);
}

/**
 * calculate the scale factor between two pointersets
 * no scale is 1, and goes down to 0 when pinched together, and bigger when pinched out
 * @param {Array} start array of pointers
 * @param {Array} end array of pointers
 * @return {Number} scale
 */
function getScale(start, end) {
    return getDistance(end[0], end[1], PROPS_CLIENT_XY) / getDistance(start[0], start[1], PROPS_CLIENT_XY);
}

var MOUSE_INPUT_MAP = {
    mousedown: INPUT_START,
    mousemove: INPUT_MOVE,
    mouseup: INPUT_END
};

var MOUSE_ELEMENT_EVENTS = 'mousedown';
var MOUSE_WINDOW_EVENTS = 'mousemove mouseup';

/**
 * Mouse events input
 * @constructor
 * @extends Input
 */
function MouseInput() {
    this.evEl = MOUSE_ELEMENT_EVENTS;
    this.evWin = MOUSE_WINDOW_EVENTS;

    this.pressed = false; // mousedown state

    Input.apply(this, arguments);
}

inherit(MouseInput, Input, {
    /**
     * handle mouse events
     * @param {Object} ev
     */
    handler: function MEhandler(ev) {
        var eventType = MOUSE_INPUT_MAP[ev.type];

        // on start we want to have the left mouse button down
        if (eventType & INPUT_START && ev.button === 0) {
            this.pressed = true;
        }

        if (eventType & INPUT_MOVE && ev.which !== 1) {
            eventType = INPUT_END;
        }

        // mouse must be down
        if (!this.pressed) {
            return;
        }

        if (eventType & INPUT_END) {
            this.pressed = false;
        }

        this.callback(this.manager, eventType, {
            pointers: [ev],
            changedPointers: [ev],
            pointerType: INPUT_TYPE_MOUSE,
            srcEvent: ev
        });
    }
});

var POINTER_INPUT_MAP = {
    pointerdown: INPUT_START,
    pointermove: INPUT_MOVE,
    pointerup: INPUT_END,
    pointercancel: INPUT_CANCEL,
    pointerout: INPUT_CANCEL
};

// in IE10 the pointer types is defined as an enum
var IE10_POINTER_TYPE_ENUM = {
    2: INPUT_TYPE_TOUCH,
    3: INPUT_TYPE_PEN,
    4: INPUT_TYPE_MOUSE,
    5: INPUT_TYPE_KINECT // see https://twitter.com/jacobrossi/status/480596438489890816
};

var POINTER_ELEMENT_EVENTS = 'pointerdown';
var POINTER_WINDOW_EVENTS = 'pointermove pointerup pointercancel';

// IE10 has prefixed support, and case-sensitive
if (window.MSPointerEvent && !window.PointerEvent) {
    POINTER_ELEMENT_EVENTS = 'MSPointerDown';
    POINTER_WINDOW_EVENTS = 'MSPointerMove MSPointerUp MSPointerCancel';
}

/**
 * Pointer events input
 * @constructor
 * @extends Input
 */
function PointerEventInput() {
    this.evEl = POINTER_ELEMENT_EVENTS;
    this.evWin = POINTER_WINDOW_EVENTS;

    Input.apply(this, arguments);

    this.store = (this.manager.session.pointerEvents = []);
}

inherit(PointerEventInput, Input, {
    /**
     * handle mouse events
     * @param {Object} ev
     */
    handler: function PEhandler(ev) {
        var store = this.store;
        var removePointer = false;

        var eventTypeNormalized = ev.type.toLowerCase().replace('ms', '');
        var eventType = POINTER_INPUT_MAP[eventTypeNormalized];
        var pointerType = IE10_POINTER_TYPE_ENUM[ev.pointerType] || ev.pointerType;

        var isTouch = (pointerType == INPUT_TYPE_TOUCH);

        // get index of the event in the store
        var storeIndex = inArray(store, ev.pointerId, 'pointerId');

        // start and mouse must be down
        if (eventType & INPUT_START && (ev.button === 0 || isTouch)) {
            if (storeIndex < 0) {
                store.push(ev);
                storeIndex = store.length - 1;
            }
        } else if (eventType & (INPUT_END | INPUT_CANCEL)) {
            removePointer = true;
        }

        // it not found, so the pointer hasn't been down (so it's probably a hover)
        if (storeIndex < 0) {
            return;
        }

        // update the event in the store
        store[storeIndex] = ev;

        this.callback(this.manager, eventType, {
            pointers: store,
            changedPointers: [ev],
            pointerType: pointerType,
            srcEvent: ev
        });

        if (removePointer) {
            // remove from the store
            store.splice(storeIndex, 1);
        }
    }
});

var SINGLE_TOUCH_INPUT_MAP = {
    touchstart: INPUT_START,
    touchmove: INPUT_MOVE,
    touchend: INPUT_END,
    touchcancel: INPUT_CANCEL
};

var SINGLE_TOUCH_TARGET_EVENTS = 'touchstart';
var SINGLE_TOUCH_WINDOW_EVENTS = 'touchstart touchmove touchend touchcancel';

/**
 * Touch events input
 * @constructor
 * @extends Input
 */
function SingleTouchInput() {
    this.evTarget = SINGLE_TOUCH_TARGET_EVENTS;
    this.evWin = SINGLE_TOUCH_WINDOW_EVENTS;
    this.started = false;

    Input.apply(this, arguments);
}

inherit(SingleTouchInput, Input, {
    handler: function TEhandler(ev) {
        var type = SINGLE_TOUCH_INPUT_MAP[ev.type];

        // should we handle the touch events?
        if (type === INPUT_START) {
            this.started = true;
        }

        if (!this.started) {
            return;
        }

        var touches = normalizeSingleTouches.call(this, ev, type);

        // when done, reset the started state
        if (type & (INPUT_END | INPUT_CANCEL) && touches[0].length - touches[1].length === 0) {
            this.started = false;
        }

        this.callback(this.manager, type, {
            pointers: touches[0],
            changedPointers: touches[1],
            pointerType: INPUT_TYPE_TOUCH,
            srcEvent: ev
        });
    }
});

/**
 * @this {TouchInput}
 * @param {Object} ev
 * @param {Number} type flag
 * @returns {undefined|Array} [all, changed]
 */
function normalizeSingleTouches(ev, type) {
    var all = toArray(ev.touches);
    var changed = toArray(ev.changedTouches);

    if (type & (INPUT_END | INPUT_CANCEL)) {
        all = uniqueArray(all.concat(changed), 'identifier', true);
    }

    return [all, changed];
}

var TOUCH_INPUT_MAP = {
    touchstart: INPUT_START,
    touchmove: INPUT_MOVE,
    touchend: INPUT_END,
    touchcancel: INPUT_CANCEL
};

var TOUCH_TARGET_EVENTS = 'touchstart touchmove touchend touchcancel';

/**
 * Multi-user touch events input
 * @constructor
 * @extends Input
 */
function TouchInput() {
    this.evTarget = TOUCH_TARGET_EVENTS;
    this.targetIds = {};

    Input.apply(this, arguments);
}

inherit(TouchInput, Input, {
    handler: function MTEhandler(ev) {
        var type = TOUCH_INPUT_MAP[ev.type];
        var touches = getTouches.call(this, ev, type);
        if (!touches) {
            return;
        }

        this.callback(this.manager, type, {
            pointers: touches[0],
            changedPointers: touches[1],
            pointerType: INPUT_TYPE_TOUCH,
            srcEvent: ev
        });
    }
});

/**
 * @this {TouchInput}
 * @param {Object} ev
 * @param {Number} type flag
 * @returns {undefined|Array} [all, changed]
 */
function getTouches(ev, type) {
    var allTouches = toArray(ev.touches);
    var targetIds = this.targetIds;

    // when there is only one touch, the process can be simplified
    if (type & (INPUT_START | INPUT_MOVE) && allTouches.length === 1) {
        targetIds[allTouches[0].identifier] = true;
        return [allTouches, allTouches];
    }

    var i,
        targetTouches,
        changedTouches = toArray(ev.changedTouches),
        changedTargetTouches = [],
        target = this.target;

    // get target touches from touches
    targetTouches = allTouches.filter(function(touch) {
        return hasParent(touch.target, target);
    });

    // collect touches
    if (type === INPUT_START) {
        i = 0;
        while (i < targetTouches.length) {
            targetIds[targetTouches[i].identifier] = true;
            i++;
        }
    }

    // filter changed touches to only contain touches that exist in the collected target ids
    i = 0;
    while (i < changedTouches.length) {
        if (targetIds[changedTouches[i].identifier]) {
            changedTargetTouches.push(changedTouches[i]);
        }

        // cleanup removed touches
        if (type & (INPUT_END | INPUT_CANCEL)) {
            delete targetIds[changedTouches[i].identifier];
        }
        i++;
    }

    if (!changedTargetTouches.length) {
        return;
    }

    return [
        // merge targetTouches with changedTargetTouches so it contains ALL touches, including 'end' and 'cancel'
        uniqueArray(targetTouches.concat(changedTargetTouches), 'identifier', true),
        changedTargetTouches
    ];
}

/**
 * Combined touch and mouse input
 *
 * Touch has a higher priority then mouse, and while touching no mouse events are allowed.
 * This because touch devices also emit mouse events while doing a touch.
 *
 * @constructor
 * @extends Input
 */

var DEDUP_TIMEOUT = 2500;
var DEDUP_DISTANCE = 25;

function TouchMouseInput() {
    Input.apply(this, arguments);

    var handler = bindFn(this.handler, this);
    this.touch = new TouchInput(this.manager, handler);
    this.mouse = new MouseInput(this.manager, handler);

    this.primaryTouch = null;
    this.lastTouches = [];
}

inherit(TouchMouseInput, Input, {
    /**
     * handle mouse and touch events
     * @param {Hammer} manager
     * @param {String} inputEvent
     * @param {Object} inputData
     */
    handler: function TMEhandler(manager, inputEvent, inputData) {
        var isTouch = (inputData.pointerType == INPUT_TYPE_TOUCH),
            isMouse = (inputData.pointerType == INPUT_TYPE_MOUSE);

        if (isMouse && inputData.sourceCapabilities && inputData.sourceCapabilities.firesTouchEvents) {
            return;
        }

        // when we're in a touch event, record touches to  de-dupe synthetic mouse event
        if (isTouch) {
            recordTouches.call(this, inputEvent, inputData);
        } else if (isMouse && isSyntheticEvent.call(this, inputData)) {
            return;
        }

        this.callback(manager, inputEvent, inputData);
    },

    /**
     * remove the event listeners
     */
    destroy: function destroy() {
        this.touch.destroy();
        this.mouse.destroy();
    }
});

function recordTouches(eventType, eventData) {
    if (eventType & INPUT_START) {
        this.primaryTouch = eventData.changedPointers[0].identifier;
        setLastTouch.call(this, eventData);
    } else if (eventType & (INPUT_END | INPUT_CANCEL)) {
        setLastTouch.call(this, eventData);
    }
}

function setLastTouch(eventData) {
    var touch = eventData.changedPointers[0];

    if (touch.identifier === this.primaryTouch) {
        var lastTouch = {x: touch.clientX, y: touch.clientY};
        this.lastTouches.push(lastTouch);
        var lts = this.lastTouches;
        var removeLastTouch = function() {
            var i = lts.indexOf(lastTouch);
            if (i > -1) {
                lts.splice(i, 1);
            }
        };
        setTimeout(removeLastTouch, DEDUP_TIMEOUT);
    }
}

function isSyntheticEvent(eventData) {
    var x = eventData.srcEvent.clientX, y = eventData.srcEvent.clientY;
    for (var i = 0; i < this.lastTouches.length; i++) {
        var t = this.lastTouches[i];
        var dx = Math.abs(x - t.x), dy = Math.abs(y - t.y);
        if (dx <= DEDUP_DISTANCE && dy <= DEDUP_DISTANCE) {
            return true;
        }
    }
    return false;
}

var PREFIXED_TOUCH_ACTION = prefixed(TEST_ELEMENT.style, 'touchAction');
var NATIVE_TOUCH_ACTION = PREFIXED_TOUCH_ACTION !== undefined;

// magical touchAction value
var TOUCH_ACTION_COMPUTE = 'compute';
var TOUCH_ACTION_AUTO = 'auto';
var TOUCH_ACTION_MANIPULATION = 'manipulation'; // not implemented
var TOUCH_ACTION_NONE = 'none';
var TOUCH_ACTION_PAN_X = 'pan-x';
var TOUCH_ACTION_PAN_Y = 'pan-y';
var TOUCH_ACTION_MAP = getTouchActionProps();

/**
 * Touch Action
 * sets the touchAction property or uses the js alternative
 * @param {Manager} manager
 * @param {String} value
 * @constructor
 */
function TouchAction(manager, value) {
    this.manager = manager;
    this.set(value);
}

TouchAction.prototype = {
    /**
     * set the touchAction value on the element or enable the polyfill
     * @param {String} value
     */
    set: function(value) {
        // find out the touch-action by the event handlers
        if (value == TOUCH_ACTION_COMPUTE) {
            value = this.compute();
        }

        if (NATIVE_TOUCH_ACTION && this.manager.element.style && TOUCH_ACTION_MAP[value]) {
            this.manager.element.style[PREFIXED_TOUCH_ACTION] = value;
        }
        this.actions = value.toLowerCase().trim();
    },

    /**
     * just re-set the touchAction value
     */
    update: function() {
        this.set(this.manager.options.touchAction);
    },

    /**
     * compute the value for the touchAction property based on the recognizer's settings
     * @returns {String} value
     */
    compute: function() {
        var actions = [];
        each(this.manager.recognizers, function(recognizer) {
            if (boolOrFn(recognizer.options.enable, [recognizer])) {
                actions = actions.concat(recognizer.getTouchAction());
            }
        });
        return cleanTouchActions(actions.join(' '));
    },

    /**
     * this method is called on each input cycle and provides the preventing of the browser behavior
     * @param {Object} input
     */
    preventDefaults: function(input) {
        var srcEvent = input.srcEvent;
        var direction = input.offsetDirection;

        // if the touch action did prevented once this session
        if (this.manager.session.prevented) {
            srcEvent.preventDefault();
            return;
        }

        var actions = this.actions;
        var hasNone = inStr(actions, TOUCH_ACTION_NONE) && !TOUCH_ACTION_MAP[TOUCH_ACTION_NONE];
        var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y) && !TOUCH_ACTION_MAP[TOUCH_ACTION_PAN_Y];
        var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X) && !TOUCH_ACTION_MAP[TOUCH_ACTION_PAN_X];

        if (hasNone) {
            //do not prevent defaults if this is a tap gesture

            var isTapPointer = input.pointers.length === 1;
            var isTapMovement = input.distance < 2;
            var isTapTouchTime = input.deltaTime < 250;

            if (isTapPointer && isTapMovement && isTapTouchTime) {
                return;
            }
        }

        if (hasPanX && hasPanY) {
            // `pan-x pan-y` means browser handles all scrolling/panning, do not prevent
            return;
        }

        if (hasNone ||
            (hasPanY && direction & DIRECTION_HORIZONTAL) ||
            (hasPanX && direction & DIRECTION_VERTICAL)) {
            return this.preventSrc(srcEvent);
        }
    },

    /**
     * call preventDefault to prevent the browser's default behavior (scrolling in most cases)
     * @param {Object} srcEvent
     */
    preventSrc: function(srcEvent) {
        this.manager.session.prevented = true;
        srcEvent.preventDefault();
    }
};

/**
 * when the touchActions are collected they are not a valid value, so we need to clean things up. *
 * @param {String} actions
 * @returns {*}
 */
function cleanTouchActions(actions) {
    // none
    if (inStr(actions, TOUCH_ACTION_NONE)) {
        return TOUCH_ACTION_NONE;
    }

    var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X);
    var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y);

    // if both pan-x and pan-y are set (different recognizers
    // for different directions, e.g. horizontal pan but vertical swipe?)
    // we need none (as otherwise with pan-x pan-y combined none of these
    // recognizers will work, since the browser would handle all panning
    if (hasPanX && hasPanY) {
        return TOUCH_ACTION_NONE;
    }

    // pan-x OR pan-y
    if (hasPanX || hasPanY) {
        return hasPanX ? TOUCH_ACTION_PAN_X : TOUCH_ACTION_PAN_Y;
    }

    // manipulation
    if (inStr(actions, TOUCH_ACTION_MANIPULATION)) {
        return TOUCH_ACTION_MANIPULATION;
    }

    return TOUCH_ACTION_AUTO;
}

function getTouchActionProps() {
    if (!NATIVE_TOUCH_ACTION) {
        return false;
    }
    var touchMap = {};
    var cssSupports = window.CSS && window.CSS.supports;
    ['auto', 'manipulation', 'pan-y', 'pan-x', 'pan-x pan-y', 'none'].forEach(function(val) {

        // If css.supports is not supported but there is native touch-action assume it supports
        // all values. This is the case for IE 10 and 11.
        touchMap[val] = cssSupports ? window.CSS.supports('touch-action', val) : true;
    });
    return touchMap;
}

/**
 * Recognizer flow explained; *
 * All recognizers have the initial state of POSSIBLE when a input session starts.
 * The definition of a input session is from the first input until the last input, with all it's movement in it. *
 * Example session for mouse-input: mousedown -> mousemove -> mouseup
 *
 * On each recognizing cycle (see Manager.recognize) the .recognize() method is executed
 * which determines with state it should be.
 *
 * If the recognizer has the state FAILED, CANCELLED or RECOGNIZED (equals ENDED), it is reset to
 * POSSIBLE to give it another change on the next cycle.
 *
 *               Possible
 *                  |
 *            +-----+---------------+
 *            |                     |
 *      +-----+-----+               |
 *      |           |               |
 *   Failed      Cancelled          |
 *                          +-------+------+
 *                          |              |
 *                      Recognized       Began
 *                                         |
 *                                      Changed
 *                                         |
 *                                  Ended/Recognized
 */
var STATE_POSSIBLE = 1;
var STATE_BEGAN = 2;
var STATE_CHANGED = 4;
var STATE_ENDED = 8;
var STATE_RECOGNIZED = STATE_ENDED;
var STATE_CANCELLED = 16;
var STATE_FAILED = 32;

/**
 * Recognizer
 * Every recognizer needs to extend from this class.
 * @constructor
 * @param {Object} options
 */
function Recognizer(options) {
    this.options = assign({}, this.defaults, options || {});

    this.id = uniqueId();

    this.manager = null;

    // default is enable true
    this.options.enable = ifUndefined(this.options.enable, true);

    this.state = STATE_POSSIBLE;

    this.simultaneous = {};
    this.requireFail = [];
}

Recognizer.prototype = {
    /**
     * @virtual
     * @type {Object}
     */
    defaults: {},

    /**
     * set options
     * @param {Object} options
     * @return {Recognizer}
     */
    set: function(options) {
        assign(this.options, options);

        // also update the touchAction, in case something changed about the directions/enabled state
        this.manager && this.manager.touchAction.update();
        return this;
    },

    /**
     * recognize simultaneous with an other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    recognizeWith: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'recognizeWith', this)) {
            return this;
        }

        var simultaneous = this.simultaneous;
        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        if (!simultaneous[otherRecognizer.id]) {
            simultaneous[otherRecognizer.id] = otherRecognizer;
            otherRecognizer.recognizeWith(this);
        }
        return this;
    },

    /**
     * drop the simultaneous link. it doesnt remove the link on the other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    dropRecognizeWith: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'dropRecognizeWith', this)) {
            return this;
        }

        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        delete this.simultaneous[otherRecognizer.id];
        return this;
    },

    /**
     * recognizer can only run when an other is failing
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    requireFailure: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'requireFailure', this)) {
            return this;
        }

        var requireFail = this.requireFail;
        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        if (inArray(requireFail, otherRecognizer) === -1) {
            requireFail.push(otherRecognizer);
            otherRecognizer.requireFailure(this);
        }
        return this;
    },

    /**
     * drop the requireFailure link. it does not remove the link on the other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    dropRequireFailure: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'dropRequireFailure', this)) {
            return this;
        }

        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        var index = inArray(this.requireFail, otherRecognizer);
        if (index > -1) {
            this.requireFail.splice(index, 1);
        }
        return this;
    },

    /**
     * has require failures boolean
     * @returns {boolean}
     */
    hasRequireFailures: function() {
        return this.requireFail.length > 0;
    },

    /**
     * if the recognizer can recognize simultaneous with an other recognizer
     * @param {Recognizer} otherRecognizer
     * @returns {Boolean}
     */
    canRecognizeWith: function(otherRecognizer) {
        return !!this.simultaneous[otherRecognizer.id];
    },

    /**
     * You should use `tryEmit` instead of `emit` directly to check
     * that all the needed recognizers has failed before emitting.
     * @param {Object} input
     */
    emit: function(input) {
        var self = this;
        var state = this.state;

        function emit(event) {
            self.manager.emit(event, input);
        }

        // 'panstart' and 'panmove'
        if (state < STATE_ENDED) {
            emit(self.options.event + stateStr(state));
        }

        emit(self.options.event); // simple 'eventName' events

        if (input.additionalEvent) { // additional event(panleft, panright, pinchin, pinchout...)
            emit(input.additionalEvent);
        }

        // panend and pancancel
        if (state >= STATE_ENDED) {
            emit(self.options.event + stateStr(state));
        }
    },

    /**
     * Check that all the require failure recognizers has failed,
     * if true, it emits a gesture event,
     * otherwise, setup the state to FAILED.
     * @param {Object} input
     */
    tryEmit: function(input) {
        if (this.canEmit()) {
            return this.emit(input);
        }
        // it's failing anyway
        this.state = STATE_FAILED;
    },

    /**
     * can we emit?
     * @returns {boolean}
     */
    canEmit: function() {
        var i = 0;
        while (i < this.requireFail.length) {
            if (!(this.requireFail[i].state & (STATE_FAILED | STATE_POSSIBLE))) {
                return false;
            }
            i++;
        }
        return true;
    },

    /**
     * update the recognizer
     * @param {Object} inputData
     */
    recognize: function(inputData) {
        // make a new copy of the inputData
        // so we can change the inputData without messing up the other recognizers
        var inputDataClone = assign({}, inputData);

        // is is enabled and allow recognizing?
        if (!boolOrFn(this.options.enable, [this, inputDataClone])) {
            this.reset();
            this.state = STATE_FAILED;
            return;
        }

        // reset when we've reached the end
        if (this.state & (STATE_RECOGNIZED | STATE_CANCELLED | STATE_FAILED)) {
            this.state = STATE_POSSIBLE;
        }

        this.state = this.process(inputDataClone);

        // the recognizer has recognized a gesture
        // so trigger an event
        if (this.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED | STATE_CANCELLED)) {
            this.tryEmit(inputDataClone);
        }
    },

    /**
     * return the state of the recognizer
     * the actual recognizing happens in this method
     * @virtual
     * @param {Object} inputData
     * @returns {Const} STATE
     */
    process: function(inputData) { }, // jshint ignore:line

    /**
     * return the preferred touch-action
     * @virtual
     * @returns {Array}
     */
    getTouchAction: function() { },

    /**
     * called when the gesture isn't allowed to recognize
     * like when another is being recognized or it is disabled
     * @virtual
     */
    reset: function() { }
};

/**
 * get a usable string, used as event postfix
 * @param {Const} state
 * @returns {String} state
 */
function stateStr(state) {
    if (state & STATE_CANCELLED) {
        return 'cancel';
    } else if (state & STATE_ENDED) {
        return 'end';
    } else if (state & STATE_CHANGED) {
        return 'move';
    } else if (state & STATE_BEGAN) {
        return 'start';
    }
    return '';
}

/**
 * direction cons to string
 * @param {Const} direction
 * @returns {String}
 */
function directionStr(direction) {
    if (direction == DIRECTION_DOWN) {
        return 'down';
    } else if (direction == DIRECTION_UP) {
        return 'up';
    } else if (direction == DIRECTION_LEFT) {
        return 'left';
    } else if (direction == DIRECTION_RIGHT) {
        return 'right';
    }
    return '';
}

/**
 * get a recognizer by name if it is bound to a manager
 * @param {Recognizer|String} otherRecognizer
 * @param {Recognizer} recognizer
 * @returns {Recognizer}
 */
function getRecognizerByNameIfManager(otherRecognizer, recognizer) {
    var manager = recognizer.manager;
    if (manager) {
        return manager.get(otherRecognizer);
    }
    return otherRecognizer;
}

/**
 * This recognizer is just used as a base for the simple attribute recognizers.
 * @constructor
 * @extends Recognizer
 */
function AttrRecognizer() {
    Recognizer.apply(this, arguments);
}

inherit(AttrRecognizer, Recognizer, {
    /**
     * @namespace
     * @memberof AttrRecognizer
     */
    defaults: {
        /**
         * @type {Number}
         * @default 1
         */
        pointers: 1
    },

    /**
     * Used to check if it the recognizer receives valid input, like input.distance > 10.
     * @memberof AttrRecognizer
     * @param {Object} input
     * @returns {Boolean} recognized
     */
    attrTest: function(input) {
        var optionPointers = this.options.pointers;
        return optionPointers === 0 || input.pointers.length === optionPointers;
    },

    /**
     * Process the input and return the state for the recognizer
     * @memberof AttrRecognizer
     * @param {Object} input
     * @returns {*} State
     */
    process: function(input) {
        var state = this.state;
        var eventType = input.eventType;

        var isRecognized = state & (STATE_BEGAN | STATE_CHANGED);
        var isValid = this.attrTest(input);

        // on cancel input and we've recognized before, return STATE_CANCELLED
        if (isRecognized && (eventType & INPUT_CANCEL || !isValid)) {
            return state | STATE_CANCELLED;
        } else if (isRecognized || isValid) {
            if (eventType & INPUT_END) {
                return state | STATE_ENDED;
            } else if (!(state & STATE_BEGAN)) {
                return STATE_BEGAN;
            }
            return state | STATE_CHANGED;
        }
        return STATE_FAILED;
    }
});

/**
 * Pan
 * Recognized when the pointer is down and moved in the allowed direction.
 * @constructor
 * @extends AttrRecognizer
 */
function PanRecognizer() {
    AttrRecognizer.apply(this, arguments);

    this.pX = null;
    this.pY = null;
}

inherit(PanRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof PanRecognizer
     */
    defaults: {
        event: 'pan',
        threshold: 10,
        pointers: 1,
        direction: DIRECTION_ALL
    },

    getTouchAction: function() {
        var direction = this.options.direction;
        var actions = [];
        if (direction & DIRECTION_HORIZONTAL) {
            actions.push(TOUCH_ACTION_PAN_Y);
        }
        if (direction & DIRECTION_VERTICAL) {
            actions.push(TOUCH_ACTION_PAN_X);
        }
        return actions;
    },

    directionTest: function(input) {
        var options = this.options;
        var hasMoved = true;
        var distance = input.distance;
        var direction = input.direction;
        var x = input.deltaX;
        var y = input.deltaY;

        // lock to axis?
        if (!(direction & options.direction)) {
            if (options.direction & DIRECTION_HORIZONTAL) {
                direction = (x === 0) ? DIRECTION_NONE : (x < 0) ? DIRECTION_LEFT : DIRECTION_RIGHT;
                hasMoved = x != this.pX;
                distance = Math.abs(input.deltaX);
            } else {
                direction = (y === 0) ? DIRECTION_NONE : (y < 0) ? DIRECTION_UP : DIRECTION_DOWN;
                hasMoved = y != this.pY;
                distance = Math.abs(input.deltaY);
            }
        }
        input.direction = direction;
        return hasMoved && distance > options.threshold && direction & options.direction;
    },

    attrTest: function(input) {
        return AttrRecognizer.prototype.attrTest.call(this, input) &&
            (this.state & STATE_BEGAN || (!(this.state & STATE_BEGAN) && this.directionTest(input)));
    },

    emit: function(input) {

        this.pX = input.deltaX;
        this.pY = input.deltaY;

        var direction = directionStr(input.direction);

        if (direction) {
            input.additionalEvent = this.options.event + direction;
        }
        this._super.emit.call(this, input);
    }
});

/**
 * Pinch
 * Recognized when two or more pointers are moving toward (zoom-in) or away from each other (zoom-out).
 * @constructor
 * @extends AttrRecognizer
 */
function PinchRecognizer() {
    AttrRecognizer.apply(this, arguments);
}

inherit(PinchRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof PinchRecognizer
     */
    defaults: {
        event: 'pinch',
        threshold: 0,
        pointers: 2
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_NONE];
    },

    attrTest: function(input) {
        return this._super.attrTest.call(this, input) &&
            (Math.abs(input.scale - 1) > this.options.threshold || this.state & STATE_BEGAN);
    },

    emit: function(input) {
        if (input.scale !== 1) {
            var inOut = input.scale < 1 ? 'in' : 'out';
            input.additionalEvent = this.options.event + inOut;
        }
        this._super.emit.call(this, input);
    }
});

/**
 * Press
 * Recognized when the pointer is down for x ms without any movement.
 * @constructor
 * @extends Recognizer
 */
function PressRecognizer() {
    Recognizer.apply(this, arguments);

    this._timer = null;
    this._input = null;
}

inherit(PressRecognizer, Recognizer, {
    /**
     * @namespace
     * @memberof PressRecognizer
     */
    defaults: {
        event: 'press',
        pointers: 1,
        time: 251, // minimal time of the pointer to be pressed
        threshold: 9 // a minimal movement is ok, but keep it low
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_AUTO];
    },

    process: function(input) {
        var options = this.options;
        var validPointers = input.pointers.length === options.pointers;
        var validMovement = input.distance < options.threshold;
        var validTime = input.deltaTime > options.time;

        this._input = input;

        // we only allow little movement
        // and we've reached an end event, so a tap is possible
        if (!validMovement || !validPointers || (input.eventType & (INPUT_END | INPUT_CANCEL) && !validTime)) {
            this.reset();
        } else if (input.eventType & INPUT_START) {
            this.reset();
            this._timer = setTimeoutContext(function() {
                this.state = STATE_RECOGNIZED;
                this.tryEmit();
            }, options.time, this);
        } else if (input.eventType & INPUT_END) {
            return STATE_RECOGNIZED;
        }
        return STATE_FAILED;
    },

    reset: function() {
        clearTimeout(this._timer);
    },

    emit: function(input) {
        if (this.state !== STATE_RECOGNIZED) {
            return;
        }

        if (input && (input.eventType & INPUT_END)) {
            this.manager.emit(this.options.event + 'up', input);
        } else {
            this._input.timeStamp = now();
            this.manager.emit(this.options.event, this._input);
        }
    }
});

/**
 * Rotate
 * Recognized when two or more pointer are moving in a circular motion.
 * @constructor
 * @extends AttrRecognizer
 */
function RotateRecognizer() {
    AttrRecognizer.apply(this, arguments);
}

inherit(RotateRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof RotateRecognizer
     */
    defaults: {
        event: 'rotate',
        threshold: 0,
        pointers: 2
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_NONE];
    },

    attrTest: function(input) {
        return this._super.attrTest.call(this, input) &&
            (Math.abs(input.rotation) > this.options.threshold || this.state & STATE_BEGAN);
    }
});

/**
 * Swipe
 * Recognized when the pointer is moving fast (velocity), with enough distance in the allowed direction.
 * @constructor
 * @extends AttrRecognizer
 */
function SwipeRecognizer() {
    AttrRecognizer.apply(this, arguments);
}

inherit(SwipeRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof SwipeRecognizer
     */
    defaults: {
        event: 'swipe',
        threshold: 10,
        velocity: 0.3,
        direction: DIRECTION_HORIZONTAL | DIRECTION_VERTICAL,
        pointers: 1
    },

    getTouchAction: function() {
        return PanRecognizer.prototype.getTouchAction.call(this);
    },

    attrTest: function(input) {
        var direction = this.options.direction;
        var velocity;

        if (direction & (DIRECTION_HORIZONTAL | DIRECTION_VERTICAL)) {
            velocity = input.overallVelocity;
        } else if (direction & DIRECTION_HORIZONTAL) {
            velocity = input.overallVelocityX;
        } else if (direction & DIRECTION_VERTICAL) {
            velocity = input.overallVelocityY;
        }

        return this._super.attrTest.call(this, input) &&
            direction & input.offsetDirection &&
            input.distance > this.options.threshold &&
            input.maxPointers == this.options.pointers &&
            abs(velocity) > this.options.velocity && input.eventType & INPUT_END;
    },

    emit: function(input) {
        var direction = directionStr(input.offsetDirection);
        if (direction) {
            this.manager.emit(this.options.event + direction, input);
        }

        this.manager.emit(this.options.event, input);
    }
});

/**
 * A tap is ecognized when the pointer is doing a small tap/click. Multiple taps are recognized if they occur
 * between the given interval and position. The delay option can be used to recognize multi-taps without firing
 * a single tap.
 *
 * The eventData from the emitted event contains the property `tapCount`, which contains the amount of
 * multi-taps being recognized.
 * @constructor
 * @extends Recognizer
 */
function TapRecognizer() {
    Recognizer.apply(this, arguments);

    // previous time and center,
    // used for tap counting
    this.pTime = false;
    this.pCenter = false;

    this._timer = null;
    this._input = null;
    this.count = 0;
}

inherit(TapRecognizer, Recognizer, {
    /**
     * @namespace
     * @memberof PinchRecognizer
     */
    defaults: {
        event: 'tap',
        pointers: 1,
        taps: 1,
        interval: 300, // max time between the multi-tap taps
        time: 250, // max time of the pointer to be down (like finger on the screen)
        threshold: 9, // a minimal movement is ok, but keep it low
        posThreshold: 10 // a multi-tap can be a bit off the initial position
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_MANIPULATION];
    },

    process: function(input) {
        var options = this.options;

        var validPointers = input.pointers.length === options.pointers;
        var validMovement = input.distance < options.threshold;
        var validTouchTime = input.deltaTime < options.time;

        this.reset();

        if ((input.eventType & INPUT_START) && (this.count === 0)) {
            return this.failTimeout();
        }

        // we only allow little movement
        // and we've reached an end event, so a tap is possible
        if (validMovement && validTouchTime && validPointers) {
            if (input.eventType != INPUT_END) {
                return this.failTimeout();
            }

            var validInterval = this.pTime ? (input.timeStamp - this.pTime < options.interval) : true;
            var validMultiTap = !this.pCenter || getDistance(this.pCenter, input.center) < options.posThreshold;

            this.pTime = input.timeStamp;
            this.pCenter = input.center;

            if (!validMultiTap || !validInterval) {
                this.count = 1;
            } else {
                this.count += 1;
            }

            this._input = input;

            // if tap count matches we have recognized it,
            // else it has began recognizing...
            var tapCount = this.count % options.taps;
            if (tapCount === 0) {
                // no failing requirements, immediately trigger the tap event
                // or wait as long as the multitap interval to trigger
                if (!this.hasRequireFailures()) {
                    return STATE_RECOGNIZED;
                } else {
                    this._timer = setTimeoutContext(function() {
                        this.state = STATE_RECOGNIZED;
                        this.tryEmit();
                    }, options.interval, this);
                    return STATE_BEGAN;
                }
            }
        }
        return STATE_FAILED;
    },

    failTimeout: function() {
        this._timer = setTimeoutContext(function() {
            this.state = STATE_FAILED;
        }, this.options.interval, this);
        return STATE_FAILED;
    },

    reset: function() {
        clearTimeout(this._timer);
    },

    emit: function() {
        if (this.state == STATE_RECOGNIZED) {
            this._input.tapCount = this.count;
            this.manager.emit(this.options.event, this._input);
        }
    }
});

/**
 * Simple way to create a manager with a default set of recognizers.
 * @param {HTMLElement} element
 * @param {Object} [options]
 * @constructor
 */
function Hammer(element, options) {
    options = options || {};
    options.recognizers = ifUndefined(options.recognizers, Hammer.defaults.preset);
    return new Manager(element, options);
}

/**
 * @const {string}
 */
Hammer.VERSION = '2.0.7';

/**
 * default settings
 * @namespace
 */
Hammer.defaults = {
    /**
     * set if DOM events are being triggered.
     * But this is slower and unused by simple implementations, so disabled by default.
     * @type {Boolean}
     * @default false
     */
    domEvents: false,

    /**
     * The value for the touchAction property/fallback.
     * When set to `compute` it will magically set the correct value based on the added recognizers.
     * @type {String}
     * @default compute
     */
    touchAction: TOUCH_ACTION_COMPUTE,

    /**
     * @type {Boolean}
     * @default true
     */
    enable: true,

    /**
     * EXPERIMENTAL FEATURE -- can be removed/changed
     * Change the parent input target element.
     * If Null, then it is being set the to main element.
     * @type {Null|EventTarget}
     * @default null
     */
    inputTarget: null,

    /**
     * force an input class
     * @type {Null|Function}
     * @default null
     */
    inputClass: null,

    /**
     * Default recognizer setup when calling `Hammer()`
     * When creating a new Manager these will be skipped.
     * @type {Array}
     */
    preset: [
        // RecognizerClass, options, [recognizeWith, ...], [requireFailure, ...]
        [RotateRecognizer, {enable: false}],
        [PinchRecognizer, {enable: false}, ['rotate']],
        [SwipeRecognizer, {direction: DIRECTION_HORIZONTAL}],
        [PanRecognizer, {direction: DIRECTION_HORIZONTAL}, ['swipe']],
        [TapRecognizer],
        [TapRecognizer, {event: 'doubletap', taps: 2}, ['tap']],
        [PressRecognizer]
    ],

    /**
     * Some CSS properties can be used to improve the working of Hammer.
     * Add them to this method and they will be set when creating a new Manager.
     * @namespace
     */
    cssProps: {
        /**
         * Disables text selection to improve the dragging gesture. Mainly for desktop browsers.
         * @type {String}
         * @default 'none'
         */
        userSelect: 'none',

        /**
         * Disable the Windows Phone grippers when pressing an element.
         * @type {String}
         * @default 'none'
         */
        touchSelect: 'none',

        /**
         * Disables the default callout shown when you touch and hold a touch target.
         * On iOS, when you touch and hold a touch target such as a link, Safari displays
         * a callout containing information about the link. This property allows you to disable that callout.
         * @type {String}
         * @default 'none'
         */
        touchCallout: 'none',

        /**
         * Specifies whether zooming is enabled. Used by IE10>
         * @type {String}
         * @default 'none'
         */
        contentZooming: 'none',

        /**
         * Specifies that an entire element should be draggable instead of its contents. Mainly for desktop browsers.
         * @type {String}
         * @default 'none'
         */
        userDrag: 'none',

        /**
         * Overrides the highlight color shown when the user taps a link or a JavaScript
         * clickable element in iOS. This property obeys the alpha value, if specified.
         * @type {String}
         * @default 'rgba(0,0,0,0)'
         */
        tapHighlightColor: 'rgba(0,0,0,0)'
    }
};

var STOP = 1;
var FORCED_STOP = 2;

/**
 * Manager
 * @param {HTMLElement} element
 * @param {Object} [options]
 * @constructor
 */
function Manager(element, options) {
    this.options = assign({}, Hammer.defaults, options || {});

    this.options.inputTarget = this.options.inputTarget || element;

    this.handlers = {};
    this.session = {};
    this.recognizers = [];
    this.oldCssProps = {};

    this.element = element;
    this.input = createInputInstance(this);
    this.touchAction = new TouchAction(this, this.options.touchAction);

    toggleCssProps(this, true);

    each(this.options.recognizers, function(item) {
        var recognizer = this.add(new (item[0])(item[1]));
        item[2] && recognizer.recognizeWith(item[2]);
        item[3] && recognizer.requireFailure(item[3]);
    }, this);
}

Manager.prototype = {
    /**
     * set options
     * @param {Object} options
     * @returns {Manager}
     */
    set: function(options) {
        assign(this.options, options);

        // Options that need a little more setup
        if (options.touchAction) {
            this.touchAction.update();
        }
        if (options.inputTarget) {
            // Clean up existing event listeners and reinitialize
            this.input.destroy();
            this.input.target = options.inputTarget;
            this.input.init();
        }
        return this;
    },

    /**
     * stop recognizing for this session.
     * This session will be discarded, when a new [input]start event is fired.
     * When forced, the recognizer cycle is stopped immediately.
     * @param {Boolean} [force]
     */
    stop: function(force) {
        this.session.stopped = force ? FORCED_STOP : STOP;
    },

    /**
     * run the recognizers!
     * called by the inputHandler function on every movement of the pointers (touches)
     * it walks through all the recognizers and tries to detect the gesture that is being made
     * @param {Object} inputData
     */
    recognize: function(inputData) {
        var session = this.session;
        if (session.stopped) {
            return;
        }

        // run the touch-action polyfill
        this.touchAction.preventDefaults(inputData);

        var recognizer;
        var recognizers = this.recognizers;

        // this holds the recognizer that is being recognized.
        // so the recognizer's state needs to be BEGAN, CHANGED, ENDED or RECOGNIZED
        // if no recognizer is detecting a thing, it is set to `null`
        var curRecognizer = session.curRecognizer;

        // reset when the last recognizer is recognized
        // or when we're in a new session
        if (!curRecognizer || (curRecognizer && curRecognizer.state & STATE_RECOGNIZED)) {
            curRecognizer = session.curRecognizer = null;
        }

        var i = 0;
        while (i < recognizers.length) {
            recognizer = recognizers[i];

            // find out if we are allowed try to recognize the input for this one.
            // 1.   allow if the session is NOT forced stopped (see the .stop() method)
            // 2.   allow if we still haven't recognized a gesture in this session, or the this recognizer is the one
            //      that is being recognized.
            // 3.   allow if the recognizer is allowed to run simultaneous with the current recognized recognizer.
            //      this can be setup with the `recognizeWith()` method on the recognizer.
            if (session.stopped !== FORCED_STOP && ( // 1
                    !curRecognizer || recognizer == curRecognizer || // 2
                    recognizer.canRecognizeWith(curRecognizer))) { // 3
                recognizer.recognize(inputData);
            } else {
                recognizer.reset();
            }

            // if the recognizer has been recognizing the input as a valid gesture, we want to store this one as the
            // current active recognizer. but only if we don't already have an active recognizer
            if (!curRecognizer && recognizer.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED)) {
                curRecognizer = session.curRecognizer = recognizer;
            }
            i++;
        }
    },

    /**
     * get a recognizer by its event name.
     * @param {Recognizer|String} recognizer
     * @returns {Recognizer|Null}
     */
    get: function(recognizer) {
        if (recognizer instanceof Recognizer) {
            return recognizer;
        }

        var recognizers = this.recognizers;
        for (var i = 0; i < recognizers.length; i++) {
            if (recognizers[i].options.event == recognizer) {
                return recognizers[i];
            }
        }
        return null;
    },

    /**
     * add a recognizer to the manager
     * existing recognizers with the same event name will be removed
     * @param {Recognizer} recognizer
     * @returns {Recognizer|Manager}
     */
    add: function(recognizer) {
        if (invokeArrayArg(recognizer, 'add', this)) {
            return this;
        }

        // remove existing
        var existing = this.get(recognizer.options.event);
        if (existing) {
            this.remove(existing);
        }

        this.recognizers.push(recognizer);
        recognizer.manager = this;

        this.touchAction.update();
        return recognizer;
    },

    /**
     * remove a recognizer by name or instance
     * @param {Recognizer|String} recognizer
     * @returns {Manager}
     */
    remove: function(recognizer) {
        if (invokeArrayArg(recognizer, 'remove', this)) {
            return this;
        }

        recognizer = this.get(recognizer);

        // let's make sure this recognizer exists
        if (recognizer) {
            var recognizers = this.recognizers;
            var index = inArray(recognizers, recognizer);

            if (index !== -1) {
                recognizers.splice(index, 1);
                this.touchAction.update();
            }
        }

        return this;
    },

    /**
     * bind event
     * @param {String} events
     * @param {Function} handler
     * @returns {EventEmitter} this
     */
    on: function(events, handler) {
        if (events === undefined) {
            return;
        }
        if (handler === undefined) {
            return;
        }

        var handlers = this.handlers;
        each(splitStr(events), function(event) {
            handlers[event] = handlers[event] || [];
            handlers[event].push(handler);
        });
        return this;
    },

    /**
     * unbind event, leave emit blank to remove all handlers
     * @param {String} events
     * @param {Function} [handler]
     * @returns {EventEmitter} this
     */
    off: function(events, handler) {
        if (events === undefined) {
            return;
        }

        var handlers = this.handlers;
        each(splitStr(events), function(event) {
            if (!handler) {
                delete handlers[event];
            } else {
                handlers[event] && handlers[event].splice(inArray(handlers[event], handler), 1);
            }
        });
        return this;
    },

    /**
     * emit event to the listeners
     * @param {String} event
     * @param {Object} data
     */
    emit: function(event, data) {
        // we also want to trigger dom events
        if (this.options.domEvents) {
            triggerDomEvent(event, data);
        }

        // no handlers, so skip it all
        var handlers = this.handlers[event] && this.handlers[event].slice();
        if (!handlers || !handlers.length) {
            return;
        }

        data.type = event;
        data.preventDefault = function() {
            data.srcEvent.preventDefault();
        };

        var i = 0;
        while (i < handlers.length) {
            handlers[i](data);
            i++;
        }
    },

    /**
     * destroy the manager and unbinds all events
     * it doesn't unbind dom events, that is the user own responsibility
     */
    destroy: function() {
        this.element && toggleCssProps(this, false);

        this.handlers = {};
        this.session = {};
        this.input.destroy();
        this.element = null;
    }
};

/**
 * add/remove the css properties as defined in manager.options.cssProps
 * @param {Manager} manager
 * @param {Boolean} add
 */
function toggleCssProps(manager, add) {
    var element = manager.element;
    if (!element.style) {
        return;
    }
    var prop;
    each(manager.options.cssProps, function(value, name) {
        prop = prefixed(element.style, name);
        if (add) {
            manager.oldCssProps[prop] = element.style[prop];
            element.style[prop] = value;
        } else {
            element.style[prop] = manager.oldCssProps[prop] || '';
        }
    });
    if (!add) {
        manager.oldCssProps = {};
    }
}

/**
 * trigger dom event
 * @param {String} event
 * @param {Object} data
 */
function triggerDomEvent(event, data) {
    var gestureEvent = document.createEvent('Event');
    gestureEvent.initEvent(event, true, true);
    gestureEvent.gesture = data;
    data.target.dispatchEvent(gestureEvent);
}

assign(Hammer, {
    INPUT_START: INPUT_START,
    INPUT_MOVE: INPUT_MOVE,
    INPUT_END: INPUT_END,
    INPUT_CANCEL: INPUT_CANCEL,

    STATE_POSSIBLE: STATE_POSSIBLE,
    STATE_BEGAN: STATE_BEGAN,
    STATE_CHANGED: STATE_CHANGED,
    STATE_ENDED: STATE_ENDED,
    STATE_RECOGNIZED: STATE_RECOGNIZED,
    STATE_CANCELLED: STATE_CANCELLED,
    STATE_FAILED: STATE_FAILED,

    DIRECTION_NONE: DIRECTION_NONE,
    DIRECTION_LEFT: DIRECTION_LEFT,
    DIRECTION_RIGHT: DIRECTION_RIGHT,
    DIRECTION_UP: DIRECTION_UP,
    DIRECTION_DOWN: DIRECTION_DOWN,
    DIRECTION_HORIZONTAL: DIRECTION_HORIZONTAL,
    DIRECTION_VERTICAL: DIRECTION_VERTICAL,
    DIRECTION_ALL: DIRECTION_ALL,

    Manager: Manager,
    Input: Input,
    TouchAction: TouchAction,

    TouchInput: TouchInput,
    MouseInput: MouseInput,
    PointerEventInput: PointerEventInput,
    TouchMouseInput: TouchMouseInput,
    SingleTouchInput: SingleTouchInput,

    Recognizer: Recognizer,
    AttrRecognizer: AttrRecognizer,
    Tap: TapRecognizer,
    Pan: PanRecognizer,
    Swipe: SwipeRecognizer,
    Pinch: PinchRecognizer,
    Rotate: RotateRecognizer,
    Press: PressRecognizer,

    on: addEventListeners,
    off: removeEventListeners,
    each: each,
    merge: merge,
    extend: extend,
    assign: assign,
    inherit: inherit,
    bindFn: bindFn,
    prefixed: prefixed
});

// this prevents errors when Hammer is loaded in the presence of an AMD
//  style loader but by script tag, not by the loader.
var freeGlobal = (typeof window !== 'undefined' ? window : (typeof self !== 'undefined' ? self : {})); // jshint ignore:line
freeGlobal.Hammer = Hammer;

if (true) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
        return Hammer;
    }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
} else if (typeof module != 'undefined' && module.exports) {
    module.exports = Hammer;
} else {
    window[exportName] = Hammer;
}

})(window, document, 'Hammer');


/***/ }),

/***/ 726:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapAccessPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_shared_vars__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_svg_pan_zoom__ = __webpack_require__(708);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_svg_pan_zoom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_svg_pan_zoom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_hammerjs__ = __webpack_require__(713);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_hammerjs__);
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




var MapAccessPage = /** @class */ (function () {
    function MapAccessPage(sharedVars) {
        this.sharedVars = sharedVars;
    }
    MapAccessPage.prototype.ngOnInit = function () {
        var eventsHandler;
        eventsHandler = {
            haltEventListeners: ['touchstart', 'touchend', 'touchmove', 'touchleave', 'touchcancel'],
            init: function (options) {
                var instance = options.instance, initialScale = 1, pannedX = 0, pannedY = 0;
                // Init Hammer
                // Listen only for pointer and touch events
                this.hammer = __WEBPACK_IMPORTED_MODULE_3_hammerjs___default()(options.svgElement, {
                    inputClass: __WEBPACK_IMPORTED_MODULE_3_hammerjs___default.a.SUPPORT_POINTER_EVENTS ? __WEBPACK_IMPORTED_MODULE_3_hammerjs___default.a.PointerEventInput : __WEBPACK_IMPORTED_MODULE_3_hammerjs___default.a.TouchInput
                });
                // Enable pinch
                this.hammer.get('pinch').set({ enable: true });
                // Handle double tap
                this.hammer.on('doubletap', function (ev) {
                    instance.zoomIn();
                });
                // Handle pan
                this.hammer.on('panstart panmove', function (ev) {
                    if (ev.type === 'panstart') {
                        pannedX = 0;
                        pannedY = 0;
                    }
                    // Pan only the difference
                    instance.panBy({ x: ev.deltaX - pannedX, y: ev.deltaY - pannedY });
                    pannedX = ev.deltaX;
                    pannedY = ev.deltaY;
                });
                // Handle pinch
                this.hammer.on('pinchstart pinchmove', function (ev) {
                    if (ev.type === 'pinchstart') {
                        initialScale = instance.getZoom();
                        instance.zoom(initialScale * ev.scale);
                    }
                    instance.zoom(initialScale * ev.scale);
                });
                // Prevent moving the page on some devices when panning over SVG
                options.svgElement.addEventListener('touchmove', function (e) { e.preventDefault(); });
            },
            destroy: function () {
                this.hammer.destroy();
            }
        };
        var options = {
            controlIconsEnabled: false,
            customEventsHandler: eventsHandler
        };
        this.panZoom = __WEBPACK_IMPORTED_MODULE_2_svg_pan_zoom___default()('#svg', options);
    };
    MapAccessPage.prototype.ionViewDidEnter = function () {
        this.sharedVars.trackView('Map - Accessible');
    };
    MapAccessPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-map-access',template:/*ion-inline-start:"/Users/sclark/Documents/Development/mobile/ionic/sciedtourguide/src/pages/map/mapaccess.html"*/'<ion-header>\n  <app-title [title]="\'map.access.button_text\' | translate"></app-title>\n</ion-header>\n<ion-content no-bounce>\n  <div class="zoom">\n    <svg id="svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1668.23 2033.64" role="group" style="width:100%;height:100%;" aria-labelledby="mapTitle mapDesc">\n      <title id="mapTitle">{{\'map.text.titleaccess\'|translate}}</title>\n      <desc id="mapDesc">{{\'map.text.descaccess\'|translate}}</desc>\n          <defs>\n            <linearGradient id="linear-gradient" x1="607.19" y1="1016.24" x2="644.15" y2="1016.24" gradientUnits="userSpaceOnUse">\n              <stop offset="0" stop-color="#5272b8"/>\n              <stop offset="1" stop-color="#3c5eab"/>\n            </linearGradient>\n            <linearGradient id="linear-gradient-2" x1="625.89" y1="985.18" x2="643.97" y2="985.18" xlink:href="#linear-gradient"/>\n            <linearGradient id="linear-gradient-3" x1="607.32" y1="985.2" x2="625.4" y2="985.2" xlink:href="#linear-gradient"/>\n            <linearGradient id="linear-gradient-4" x1="615.16" y1="1007.51" x2="618.64" y2="1007.51" xlink:href="#linear-gradient"/>\n            <linearGradient id="linear-gradient-5" x1="612.81" y1="1018.15" x2="620.99" y2="1018.15" xlink:href="#linear-gradient"/>\n            <linearGradient id="linear-gradient-6" x1="623.93" y1="1007.51" x2="627.41" y2="1007.51" xlink:href="#linear-gradient"/>\n            <linearGradient id="linear-gradient-7" x1="621.58" y1="1018.15" x2="629.76" y2="1018.15" xlink:href="#linear-gradient"/>\n            <linearGradient id="linear-gradient-8" x1="632.7" y1="1007.51" x2="636.18" y2="1007.51" xlink:href="#linear-gradient"/>\n            <linearGradient id="linear-gradient-9" x1="630.35" y1="1018.15" x2="638.53" y2="1018.15" xlink:href="#linear-gradient"/>\n            <linearGradient id="linear-gradient-10" x1="607.19" y1="1418.24" x2="644.15" y2="1418.24" xlink:href="#linear-gradient"/>\n            <linearGradient id="linear-gradient-11" x1="625.89" y1="1387.18" x2="643.97" y2="1387.18" xlink:href="#linear-gradient"/>\n            <linearGradient id="linear-gradient-12" x1="607.32" y1="1387.2" x2="625.4" y2="1387.2" xlink:href="#linear-gradient"/>\n            <linearGradient id="linear-gradient-13" x1="615.16" y1="1409.51" x2="618.64" y2="1409.51" xlink:href="#linear-gradient"/>\n            <linearGradient id="linear-gradient-14" x1="612.81" y1="1420.15" x2="620.99" y2="1420.15" xlink:href="#linear-gradient"/>\n            <linearGradient id="linear-gradient-15" x1="623.93" y1="1409.51" x2="627.41" y2="1409.51" xlink:href="#linear-gradient"/>\n            <linearGradient id="linear-gradient-16" x1="621.58" y1="1420.15" x2="629.76" y2="1420.15" xlink:href="#linear-gradient"/>\n            <linearGradient id="linear-gradient-17" x1="632.7" y1="1409.51" x2="636.18" y2="1409.51" xlink:href="#linear-gradient"/>\n            <linearGradient id="linear-gradient-18" x1="630.35" y1="1420.15" x2="638.53" y2="1420.15" xlink:href="#linear-gradient"/>\n            <linearGradient id="linear-gradient-19" x1="607.19" y1="1680.24" x2="644.15" y2="1680.24" xlink:href="#linear-gradient"/>\n            <linearGradient id="linear-gradient-20" x1="625.89" y1="1649.18" x2="643.97" y2="1649.18" xlink:href="#linear-gradient"/>\n            <linearGradient id="linear-gradient-21" x1="607.32" y1="1649.2" x2="625.4" y2="1649.2" xlink:href="#linear-gradient"/>\n            <linearGradient id="linear-gradient-22" x1="615.16" y1="1671.51" x2="618.64" y2="1671.51" xlink:href="#linear-gradient"/>\n            <linearGradient id="linear-gradient-23" x1="612.81" y1="1682.15" x2="620.99" y2="1682.15" xlink:href="#linear-gradient"/>\n            <linearGradient id="linear-gradient-24" x1="623.93" y1="1671.51" x2="627.41" y2="1671.51" xlink:href="#linear-gradient"/>\n            <linearGradient id="linear-gradient-25" x1="621.58" y1="1682.15" x2="629.76" y2="1682.15" xlink:href="#linear-gradient"/>\n            <linearGradient id="linear-gradient-26" x1="632.7" y1="1671.51" x2="636.18" y2="1671.51" xlink:href="#linear-gradient"/>\n            <linearGradient id="linear-gradient-27" x1="630.35" y1="1682.15" x2="638.53" y2="1682.15" xlink:href="#linear-gradient"/>\n            <linearGradient id="linear-gradient-28" x1="607.19" y1="240.66" x2="644.15" y2="240.66" xlink:href="#linear-gradient"/>\n            <linearGradient id="linear-gradient-29" x1="625.89" y1="209.59" x2="643.97" y2="209.59" xlink:href="#linear-gradient"/>\n            <linearGradient id="linear-gradient-30" x1="607.32" y1="209.62" x2="625.4" y2="209.62" xlink:href="#linear-gradient"/>\n            <linearGradient id="linear-gradient-31" x1="615.16" y1="231.93" x2="618.64" y2="231.93" xlink:href="#linear-gradient"/>\n            <linearGradient id="linear-gradient-32" x1="612.81" y1="242.57" x2="620.99" y2="242.57" xlink:href="#linear-gradient"/>\n            <linearGradient id="linear-gradient-33" x1="623.93" y1="231.93" x2="627.41" y2="231.93" xlink:href="#linear-gradient"/>\n            <linearGradient id="linear-gradient-34" x1="621.58" y1="242.57" x2="629.76" y2="242.57" xlink:href="#linear-gradient"/>\n            <linearGradient id="linear-gradient-35" x1="632.7" y1="231.93" x2="636.18" y2="231.93" xlink:href="#linear-gradient"/>\n            <linearGradient id="linear-gradient-36" x1="630.35" y1="242.57" x2="638.53" y2="242.57" xlink:href="#linear-gradient"/>\n            <linearGradient id="linear-gradient-37" x1="1383.9" y1="240.66" x2="1420.85" y2="240.66" xlink:href="#linear-gradient"/>\n            <linearGradient id="linear-gradient-38" x1="1402.59" y1="209.59" x2="1420.68" y2="209.59" xlink:href="#linear-gradient"/>\n            <linearGradient id="linear-gradient-39" x1="1384.02" y1="209.62" x2="1402.11" y2="209.62" xlink:href="#linear-gradient"/>\n            <linearGradient id="linear-gradient-40" x1="1391.86" y1="231.93" x2="1395.34" y2="231.93" xlink:href="#linear-gradient"/>\n            <linearGradient id="linear-gradient-41" x1="1389.51" y1="242.57" x2="1397.7" y2="242.57" xlink:href="#linear-gradient"/>\n            <linearGradient id="linear-gradient-42" x1="1400.63" y1="231.93" x2="1404.12" y2="231.93" xlink:href="#linear-gradient"/>\n            <linearGradient id="linear-gradient-43" x1="1398.28" y1="242.57" x2="1406.47" y2="242.57" xlink:href="#linear-gradient"/>\n            <linearGradient id="linear-gradient-44" x1="1409.41" y1="231.93" x2="1412.89" y2="231.93" xlink:href="#linear-gradient"/>\n            <linearGradient id="linear-gradient-45" x1="1407.05" y1="242.57" x2="1415.24" y2="242.57" xlink:href="#linear-gradient"/>\n            <linearGradient id="linear-gradient-46" x1="1383.9" y1="947.72" x2="1420.85" y2="947.72" xlink:href="#linear-gradient"/>\n            <linearGradient id="linear-gradient-47" x1="1402.59" y1="916.66" x2="1420.68" y2="916.66" xlink:href="#linear-gradient"/>\n            <linearGradient id="linear-gradient-48" x1="1384.02" y1="916.68" x2="1402.11" y2="916.68" xlink:href="#linear-gradient"/>\n            <linearGradient id="linear-gradient-49" x1="1391.86" y1="938.99" x2="1395.34" y2="938.99" xlink:href="#linear-gradient"/>\n            <linearGradient id="linear-gradient-50" x1="1389.51" y1="949.63" x2="1397.7" y2="949.63" xlink:href="#linear-gradient"/>\n            <linearGradient id="linear-gradient-51" x1="1400.63" y1="938.99" x2="1404.12" y2="938.99" xlink:href="#linear-gradient"/>\n            <linearGradient id="linear-gradient-52" x1="1398.28" y1="949.63" x2="1406.47" y2="949.63" xlink:href="#linear-gradient"/>\n            <linearGradient id="linear-gradient-53" x1="1409.41" y1="938.99" x2="1412.89" y2="938.99" xlink:href="#linear-gradient"/>\n            <linearGradient id="linear-gradient-54" x1="1407.05" y1="949.63" x2="1415.24" y2="949.63" xlink:href="#linear-gradient"/>\n            <linearGradient id="linear-gradient-55" x1="1330.75" y1="192.03" x2="1330.75" y2="224.77" xlink:href="#linear-gradient"/>\n            <linearGradient id="linear-gradient-56" x1="1295.03" y1="192.03" x2="1295.03" y2="224.77" xlink:href="#linear-gradient"/>\n            <linearGradient id="linear-gradient-57" x1="1259.3" y1="192.03" x2="1259.3" y2="224.77" xlink:href="#linear-gradient"/>\n            <linearGradient id="linear-gradient-58" x1="642.03" y1="1722.03" x2="642.03" y2="1754.77" xlink:href="#linear-gradient"/>\n            <linearGradient id="linear-gradient-59" x1="606.3" y1="1722.03" x2="606.3" y2="1754.77" xlink:href="#linear-gradient"/>\n            <linearGradient id="linear-gradient-60" x1="1340.09" y1="933.36" x2="1340.09" y2="966.1" xlink:href="#linear-gradient"/>\n            <linearGradient id="linear-gradient-61" x1="1302.91" y1="933.35" x2="1302.91" y2="966.1" xlink:href="#linear-gradient"/>\n            <linearGradient id="linear-gradient-62" x1="798.09" y1="1707.36" x2="798.09" y2="1740.1" xlink:href="#linear-gradient"/>\n            <linearGradient id="linear-gradient-63" x1="760.91" y1="1707.35" x2="760.91" y2="1740.1" xlink:href="#linear-gradient"/>\n            <linearGradient id="linear-gradient-64" x1="512.09" y1="1993.36" x2="512.09" y2="2026.1" xlink:href="#linear-gradient"/>\n            <linearGradient id="linear-gradient-65" x1="474.91" y1="1993.35" x2="474.91" y2="2026.1" xlink:href="#linear-gradient"/>\n          </defs>\n          <g id="more_stairs" data-name="more stairs">\n            <g id="Stairs_1st_to_2nd_by_cafeteria" data-name="Stairs 1st to 2nd by cafeteria">\n              <g class="cls-1">\n                <polygon class="cls-2" points="420.99 820.93 439.04 836.34 403.96 838.97 385.92 823.56 420.99 820.93"/>\n                <polygon class="cls-3" points="439.04 836.34 435.9 854.49 400.83 857.12 403.96 838.97 439.04 836.34"/>\n                <polygon class="cls-4" points="403.96 838.97 400.83 857.12 382.78 841.71 385.92 823.56 403.96 838.97"/>\n              </g>\n              <g class="cls-1">\n                <polygon class="cls-5" points="450.92 885.22 454.3 888.22 418.63 890.71 415.25 887.72 450.92 885.22"/>\n                <polygon class="cls-2" points="454.3 888.22 452.68 897.16 417.01 899.66 418.63 890.71 454.3 888.22"/>\n                <polygon class="cls-4" points="418.63 890.71 417.01 899.66 413.63 896.66 415.25 887.72 418.63 890.71"/>\n              </g>\n              <g class="cls-1">\n                <polygon class="cls-5" points="447.81 872.77 451.19 875.76 415.52 878.26 412.14 875.26 447.81 872.77"/>\n                <polygon class="cls-2" points="451.19 875.76 449.56 884.71 413.89 887.2 415.52 878.26 451.19 875.76"/>\n                <polygon class="cls-4" points="415.52 878.26 413.89 887.2 410.51 884.21 412.14 875.26 415.52 878.26"/>\n              </g>\n              <g class="cls-1">\n                <polygon class="cls-5" points="444.69 860.3 448.07 863.3 412.4 865.79 409.02 862.8 444.69 860.3"/>\n                <polygon class="cls-2" points="448.07 863.3 446.45 872.24 410.78 874.74 412.4 865.79 448.07 863.3"/>\n                <polygon class="cls-4" points="412.4 865.79 410.78 874.74 407.4 871.74 409.02 862.8 412.4 865.79"/>\n              </g>\n              <g class="cls-1">\n                <polygon class="cls-5" points="441.58 847.85 444.96 850.84 409.29 853.34 405.91 850.34 441.58 847.85"/>\n                <polygon class="cls-2" points="444.96 850.84 443.34 859.79 407.66 862.28 409.29 853.34 444.96 850.84"/>\n                <polygon class="cls-4" points="409.29 853.34 407.66 862.28 404.28 859.29 405.91 850.34 409.29 853.34"/>\n              </g>\n              <g class="cls-1">\n                <polygon class="cls-5" points="438.47 835.39 441.85 838.38 406.17 840.88 402.79 837.88 438.47 835.39"/>\n                <polygon class="cls-2" points="441.85 838.38 440.22 847.33 404.55 849.83 406.17 840.88 441.85 838.38"/>\n                <polygon class="cls-4" points="406.17 840.88 404.55 849.83 401.17 846.83 402.79 837.88 406.17 840.88"/>\n              </g>\n              <g class="cls-1">\n                <polygon class="cls-2" points="436.37 809.98 455.04 825.93 441.9 826.91 423.23 810.97 436.37 809.98"/>\n                <polygon class="cls-3" points="455.04 825.93 453.09 837.23 439.95 838.21 441.9 826.91 455.04 825.93"/>\n                <polygon class="cls-4" points="441.9 826.91 439.95 838.21 421.27 822.27 423.23 810.97 441.9 826.91"/>\n              </g>\n              <g class="cls-1">\n                <polygon class="cls-2" points="448.83 803.76 467.51 819.7 454.37 820.68 435.69 804.74 448.83 803.76"/>\n                <polygon class="cls-3" points="467.51 819.7 465.56 831 452.41 831.99 454.37 820.68 467.51 819.7"/>\n                <polygon class="cls-4" points="454.37 820.68 452.41 831.99 433.74 816.04 435.69 804.74 454.37 820.68"/>\n              </g>\n              <g class="cls-1">\n                <polygon class="cls-2" points="461.29 797.52 479.96 813.47 466.82 814.45 448.15 798.51 461.29 797.52"/>\n                <polygon class="cls-3" points="479.96 813.47 478.01 824.77 464.87 825.75 466.82 814.45 479.96 813.47"/>\n                <polygon class="cls-4" points="466.82 814.45 464.87 825.75 446.2 809.81 448.15 798.51 466.82 814.45"/>\n              </g>\n              <text class="cls-6" transform="translate(428 788.55) scale(0.97 1)">{{\'map.text.tosecondfloor\'|translate}}</text>\n              <g>\n                <line class="cls-7" x1="382.02" y1="806.28" x2="417.94" y2="787.7"/>\n                <polygon class="cls-8" points="413.26 810.34 409.12 808.86 416.44 788.48 395.58 782.67 396.76 778.44 422.17 785.52 413.26 810.34"/>\n              </g>\n            </g>\n            <g id="Stairs_2nd_to_mezzanine" data-name="Stairs 2nd to mezzanine">\n              <g class="cls-1">\n                <polygon class="cls-2" points="894.44 182.4 912.48 197.81 877.42 200.43 859.37 185.02 894.44 182.4"/>\n                <polygon class="cls-3" points="912.48 197.81 909.35 215.96 874.28 218.58 877.42 200.43 912.48 197.81"/>\n                <polygon class="cls-4" points="877.42 200.43 874.28 218.58 856.24 203.17 859.37 185.02 877.42 200.43"/>\n              </g>\n              <g class="cls-1">\n                <polygon class="cls-2" points="906.9 185.52 924.95 200.93 889.87 203.55 871.83 188.14 906.9 185.52"/>\n                <polygon class="cls-3" points="924.95 200.93 921.82 219.07 886.74 221.7 889.87 203.55 924.95 200.93"/>\n                <polygon class="cls-4" points="889.87 203.55 886.74 221.7 868.69 206.29 871.83 188.14 889.87 203.55"/>\n              </g>\n              <g class="cls-1">\n                <polygon class="cls-2" points="919.36 188.63 937.4 204.04 902.34 206.66 884.29 191.25 919.36 188.63"/>\n                <polygon class="cls-3" points="937.4 204.04 934.27 222.19 899.2 224.81 902.34 206.66 937.4 204.04"/>\n                <polygon class="cls-4" points="902.34 206.66 899.2 224.81 881.16 209.4 884.29 191.25 902.34 206.66"/>\n              </g>\n              <text class="cls-6" transform="translate(875 163.55) scale(0.97 1)">{{\'map.text.tomezzanine\'|translate}}</text>\n              <g>\n                <line class="cls-7" x1="865.17" y1="158.51" x2="829.25" y2="177.09"/>\n                <polygon class="cls-8" points="833.92 154.45 838.06 155.93 830.75 176.31 851.61 182.12 850.43 186.36 825.02 179.28 833.92 154.45"/>\n              </g>\n            </g>\n\n          </g>\n          <g id="arch">\n            <g class="cls-1">\n              <polygon class="cls-9" points="874.58 529.17 956.95 599.5 819.15 609.8 736.78 539.48 874.58 529.17"/>\n              <polygon class="cls-10" points="956.95 599.5 952.06 627.82 814.26 638.12 819.15 609.8 956.95 599.5"/>\n              <polygon class="cls-11" points="819.15 609.8 814.26 638.12 731.89 567.79 736.78 539.48 819.15 609.8"/>\n            </g>\n          </g>\n          <g id="ozone">\n            <g class="cls-1">\n              <polygon class="cls-12" points="1184.82 1093.32 1214.77 1118.9 1121.01 1125.91 1091.05 1100.33 1184.82 1093.32"/>\n              <polygon class="cls-13" points="1214.77 1118.9 1210.99 1140.8 1117.22 1147.81 1121.01 1125.91 1214.77 1118.9"/>\n              <polygon class="cls-14" points="1121.01 1125.91 1117.22 1147.81 1087.27 1122.23 1091.05 1100.33 1121.01 1125.91"/>\n            </g>\n          </g>\n          <g id="sun_earth">\n            <g class="cls-1">\n              <polygon class="cls-12" points="1099.29 588.4 1183.41 660.23 1042.43 670.77 958.31 598.95 1099.29 588.4"/>\n              <polygon class="cls-13" points="1183.41 660.23 1178.52 688.54 1037.54 699.09 1042.43 670.77 1183.41 660.23"/>\n              <polygon class="cls-14" points="1042.43 670.77 1037.54 699.09 953.42 627.26 958.31 598.95 1042.43 670.77"/>\n            </g>\n          </g>\n          <g id="spaces">\n\n            <g class="cls-1">\n              <polygon class="cls-12" points="570.3 888.58 689.89 990.69 613.97 996.37 494.38 894.26 570.3 888.58"/>\n              <polygon class="cls-13" points="689.89 990.69 685 1019.01 609.08 1024.69 613.97 996.37 689.89 990.69"/>\n              <polygon class="cls-14" points="613.97 996.37 609.08 1024.69 489.49 922.58 494.38 894.26 613.97 996.37"/>\n            </g>\n            <g class="cls-1">\n              <polygon class="cls-12" points="537.71 60.98 592.21 107.52 497.77 114.58 443.27 68.04 537.71 60.98"/>\n              <polygon class="cls-13" points="592.21 107.52 587.32 135.83 492.88 142.89 497.77 114.58 592.21 107.52"/>\n              <polygon class="cls-14" points="497.77 114.58 492.88 142.89 438.38 96.36 443.27 68.04 497.77 114.58"/>\n            </g>\n            <g class="cls-1">\n              <polygon class="cls-12" points="572.24 107.68 692.13 210.04 616.2 215.72 496.31 113.35 572.24 107.68"/>\n              <polygon class="cls-13" points="692.13 210.04 687.24 238.36 611.31 244.04 616.2 215.72 692.13 210.04"/>\n              <polygon class="cls-14" points="616.2 215.72 611.31 244.04 491.42 141.67 496.31 113.35 616.2 215.72"/>\n            </g>\n            <g>\n              <line class="cls-18" x1="1392.04" y1="193.96" x2="1392.04" y2="1479.32"/>\n              <g>\n                <line class="cls-19" x1="1392.04" y1="193.96" x2="1392.04" y2="196.77"/>\n                <line class="cls-20" x1="1392.04" y1="202.41" x2="1392.04" y2="890.69"/>\n                <line class="cls-19" x1="1392.04" y1="1476.51" x2="1392.04" y2="1479.32"/>\n              </g>\n            </g>\n            <g class="cls-1">\n              <polygon class="cls-12" points="874.58 529.17 956.95 599.5 819.15 609.8 736.78 539.48 874.58 529.17"/>\n              <polygon class="cls-13" points="956.95 599.5 952.06 627.82 814.26 638.12 819.15 609.8 956.95 599.5"/>\n              <polygon class="cls-14" points="819.15 609.8 814.26 638.12 731.89 567.79 736.78 539.48 819.15 609.8"/>\n            </g>\n            <g class="cls-1">\n              <polygon class="cls-15" points="1378.46 179.19 1396.7 194.76 1074.08 218.88 1055.84 203.31 1378.46 179.19"/>\n              <polygon class="cls-16" points="1396.7 194.76 1391.81 223.08 1069.19 247.2 1074.08 218.88 1396.7 194.76"/>\n              <polygon class="cls-17" points="1074.08 218.88 1069.19 247.2 1050.95 231.63 1055.84 203.31 1074.08 218.88"/>\n            </g>\n            <g class="cls-1">\n              <polygon class="cls-15" points="959.88 602.16 1047.81 677.24 765.74 698.33 677.82 623.25 959.88 602.16"/>\n              <polygon class="cls-16" points="1047.81 677.24 1043.89 699.95 761.82 721.04 765.74 698.33 1047.81 677.24"/>\n              <polygon class="cls-17" points="765.74 698.33 761.82 721.04 673.89 645.96 677.82 623.25 765.74 698.33"/>\n            </g>\n            <g class="cls-1">\n              <polygon class="cls-12" points="753.16 616.93 837.34 688.8 711.75 698.19 627.57 626.32 753.16 616.93"/>\n              <polygon class="cls-13" points="837.34 688.8 832.45 717.12 706.86 726.51 711.75 698.19 837.34 688.8"/>\n              <polygon class="cls-14" points="711.75 698.19 706.86 726.51 622.68 654.64 627.57 626.32 711.75 698.19"/>\n            </g>\n            <g class="cls-1">\n              <polygon class="cls-15" points="1405.73 927 1429.14 946.99 1254.77 960.02 1231.36 940.03 1405.73 927"/>\n              <polygon class="cls-16" points="1429.14 946.99 1424.25 975.3 1249.88 988.34 1254.77 960.02 1429.14 946.99"/>\n              <polygon class="cls-17" points="1254.77 960.02 1249.88 988.34 1226.47 968.35 1231.36 940.03 1254.77 960.02"/>\n            </g>\n            <g class="cls-1">\n              <polygon class="cls-15" points="1195.32 889.27 1252.56 938.14 978.34 958.64 921.1 909.77 1195.32 889.27"/>\n              <polygon class="cls-16" points="1252.56 938.14 1247.67 966.46 973.45 986.96 978.34 958.64 1252.56 938.14"/>\n              <polygon class="cls-17" points="978.34 958.64 973.45 986.96 916.21 938.09 921.1 909.77 978.34 958.64"/>\n            </g>\n            <g class="cls-1">\n              <polygon class="cls-12" points="1423.75 944.55 1491.52 1002.41 1390.09 1010 1322.32 952.13 1423.75 944.55"/>\n              <polygon class="cls-13" points="1491.52 1002.41 1486.63 1030.73 1385.2 1038.32 1390.09 1010 1491.52 1002.41"/>\n              <polygon class="cls-14" points="1390.09 1010 1385.2 1038.32 1317.43 980.45 1322.32 952.13 1390.09 1010"/>\n            </g>\n            <g class="cls-1">\n              <polygon class="cls-12" points="1323.3 951.98 1391.07 1009.85 1321.78 1015.03 1254.01 957.16 1323.3 951.98"/>\n              <polygon class="cls-13" points="1391.07 1009.85 1386.18 1038.17 1316.89 1043.35 1321.78 1015.03 1391.07 1009.85"/>\n              <polygon class="cls-14" points="1321.78 1015.03 1316.89 1043.35 1249.12 985.48 1254.01 957.16 1321.78 1015.03"/>\n            </g>\n            <g class="cls-1">\n              <polygon class="cls-12" points="343.9 838.24 415.12 899.05 236.72 912.39 165.49 851.57 343.9 838.24"/>\n              <polygon class="cls-13" points="415.12 899.05 410.24 927.37 231.83 940.71 236.72 912.39 415.12 899.05"/>\n              <polygon class="cls-14" points="236.72 912.39 231.83 940.71 160.6 879.89 165.49 851.57 236.72 912.39"/>\n            </g>\n            <g class="cls-1">\n              <polygon class="cls-15" points="493.64 894.38 517.05 914.38 250.97 934.27 227.56 914.28 493.64 894.38"/>\n              <polygon class="cls-16" points="517.05 914.38 512.16 942.69 246.09 962.59 250.97 934.27 517.05 914.38"/>\n              <polygon class="cls-17" points="250.97 934.27 246.09 962.59 222.67 942.6 227.56 914.28 250.97 934.27"/>\n            </g>\n            <g class="cls-1">\n              <polygon class="cls-15" points="1242.45 948.67 1322.72 1017.22 717.57 1062.46 637.3 993.91 1242.45 948.67"/>\n              <polygon class="cls-16" points="1322.72 1017.22 1317.87 1045.34 712.72 1090.58 717.57 1062.46 1322.72 1017.22"/>\n              <polygon class="cls-17" points="717.57 1062.46 712.72 1090.58 632.44 1022.04 637.3 993.91 717.57 1062.46"/>\n            </g>\n\n            <g class="cls-1">\n              <polygon class="cls-12" points="172.72 850.86 473.1 1107.34 305.26 1119.88 4.89 863.4 172.72 850.86"/>\n              <polygon class="cls-13" points="473.1 1107.34 468.21 1135.65 300.38 1148.2 305.26 1119.88 473.1 1107.34"/>\n              <polygon class="cls-14" points="305.26 1119.88 300.38 1148.2 0 891.72 4.89 863.4 305.26 1119.88"/>\n            </g>\n            <text class="cls-21" transform="translate(1179.47 645.2)">{{\'map.text.mezzanine.line1\' | translate | uppercase}}</text>\n            <text class="cls-21" transform="translate(881.21 341.62)">{{\'map.text.secondfloor.line1\' | translate | uppercase}}</text>\n            <text class="cls-21" transform="translate(834.21 1119.32)">{{\'map.text.firstfloor.line1\' | translate | uppercase}}</text>\n            <text class="cls-21" transform="translate(922.21 1726.32)">{{\'map.text.floor2b\' | translate | uppercase}}</text>\n            <text class="cls-25" transform="translate(1235.65 1105.94)">{{\'map.text.entrance.line1\' | translate }}</text>\n          </g>\n          <g id="climate">\n            <g class="cls-1">\n              <polygon class="cls-12" points="1198.63 173.5 1280.99 243.83 672.95 289.29 590.58 218.96 1198.63 173.5"/>\n              <polygon class="cls-13" points="1280.99 243.83 1276.1 272.15 668.06 317.61 672.95 289.29 1280.99 243.83"/>\n              <polygon class="cls-14" points="672.95 289.29 668.06 317.61 585.69 247.28 590.58 218.96 672.95 289.29"/>\n            </g>\n          </g>\n          <g id="library_and_hall" data-name="library and hall">\n            <g>\n              <line class="cls-18" x1="604.36" y1="250.7" x2="604.36" y2="1658.92"/>\n              <g>\n                <line class="cls-19" x1="604.36" y1="250.7" x2="604.36" y2="253.52"/>\n                <line class="cls-28" x1="604.36" y1="259.15" x2="604.36" y2="1653.29"/>\n                <line class="cls-19" x1="604.36" y1="1656.11" x2="604.36" y2="1658.92"/>\n              </g>\n            </g>\n            <g class="cls-1">\n              <polygon class="cls-15" points="773.38 286.29 853.3 354.53 812.84 357.56 732.92 289.31 773.38 286.29"/>\n              <polygon class="cls-16" points="853.3 354.53 848.41 382.85 807.95 385.87 812.84 357.56 853.3 354.53"/>\n              <polygon class="cls-17" points="812.84 357.56 807.95 385.87 728.03 317.63 732.92 289.31 812.84 357.56"/>\n            </g>\n            <g class="cls-1">\n              <polygon class="cls-12" points="729.5 287.31 791.74 340.46 484.35 363.44 422.12 310.3 729.5 287.31"/>\n              <polygon class="cls-13" points="791.74 340.46 786.85 368.78 479.46 391.76 484.35 363.44 791.74 340.46"/>\n              <polygon class="cls-14" points="484.35 363.44 479.46 391.76 417.23 338.62 422.12 310.3 484.35 363.44"/>\n            </g>\n            <g class="cls-1">\n              <polygon class="cls-15" points="805.34 341.16 823.58 356.73 500.95 380.86 482.71 365.28 805.34 341.16"/>\n              <polygon class="cls-16" points="823.58 356.73 818.69 385.05 496.06 409.17 500.95 380.86 823.58 356.73"/>\n              <polygon class="cls-17" points="500.95 380.86 496.06 409.17 477.82 393.6 482.71 365.28 500.95 380.86"/>\n            </g>\n            <line class="cls-29" x1="503.49" y1="382.19" x2="851.89" y2="356.39"/>\n            <line class="cls-29" x1="838.98" y1="691.6" x2="1046.89" y2="676.39"/>\n            <g>\n              <g class="cls-1">\n                <polygon class="cls-2" points="770.05 380.14 788.72 396.09 775.58 397.07 756.91 381.13 770.05 380.14"/>\n                <polygon class="cls-3" points="788.72 396.09 786.76 407.39 773.63 408.37 775.58 397.07 788.72 396.09"/>\n                <polygon class="cls-4" points="775.58 397.07 773.63 408.37 754.96 392.43 756.91 381.13 775.58 397.07"/>\n              </g>\n              <g>\n                <g class="cls-1">\n                  <polygon class="cls-2" points="782.51 373.92 801.18 389.86 788.04 390.84 769.37 374.9 782.51 373.92"/>\n                  <polygon class="cls-3" points="801.18 389.86 799.23 401.16 786.09 402.14 788.04 390.84 801.18 389.86"/>\n                  <polygon class="cls-4" points="788.04 390.84 786.09 402.14 767.42 386.2 769.37 374.9 788.04 390.84"/>\n                </g>\n                <g class="cls-1">\n                  <polygon class="cls-2" points="794.96 367.68 813.64 383.63 800.5 384.61 781.82 368.66 794.96 367.68"/>\n                  <polygon class="cls-3" points="813.64 383.63 811.69 394.93 798.54 395.91 800.5 384.61 813.64 383.63"/>\n                  <polygon class="cls-4" points="800.5 384.61 798.54 395.91 779.87 379.96 781.82 368.66 800.5 384.61"/>\n                </g>\n                <g class="cls-1">\n                  <polygon class="cls-2" points="807.43 361.45 826.1 377.4 812.96 378.38 794.29 362.44 807.43 361.45"/>\n                  <polygon class="cls-3" points="826.1 377.4 824.15 388.7 811.01 389.68 812.96 378.38 826.1 377.4"/>\n                  <polygon class="cls-4" points="812.96 378.38 811.01 389.68 792.33 373.74 794.29 362.44 812.96 378.38"/>\n                </g>\n                <g class="cls-1">\n                  <polygon class="cls-2" points="819.88 355.23 838.56 371.17 825.42 372.15 806.74 356.21 819.88 355.23"/>\n                  <polygon class="cls-3" points="838.56 371.17 836.61 382.47 823.47 383.45 825.42 372.15 838.56 371.17"/>\n                  <polygon class="cls-4" points="825.42 372.15 823.47 383.45 804.79 367.51 806.74 356.21 825.42 372.15"/>\n                </g>\n              </g>\n            </g>\n          </g>\n          <g id="weather">\n            <g class="cls-1">\n              <polygon class="cls-12" points="921.27 900.21 1003.64 970.54 944.66 974.95 862.29 904.62 921.27 900.21"/>\n              <polygon class="cls-13" points="1003.64 970.54 998.75 998.86 939.77 1003.27 944.66 974.95 1003.64 970.54"/>\n              <polygon class="cls-14" points="944.66 974.95 939.77 1003.27 857.4 932.94 862.29 904.62 944.66 974.95"/>\n            </g>\n            <g class="cls-1">\n              <polygon class="cls-12" points="1077.09 960.74 1157.71 1029.57 663.01 1066.56 582.39 997.72 1077.09 960.74"/>\n              <polygon class="cls-13" points="1157.71 1029.57 1152.78 1058.15 658.08 1095.14 663.01 1066.56 1157.71 1029.57"/>\n              <polygon class="cls-14" points="663.01 1066.56 658.08 1095.14 577.46 1026.3 582.39 997.72 663.01 1066.56"/>\n            </g>\n          </g>\n          <g id="theater_and_hall" data-name="theater and hall">\n            <g class="cls-1">\n              <polygon class="cls-16" points="793.81 1643.4 1054.61 1863.25 1014.96 1866.57 754.15 1646.72 793.81 1643.4"/>\n              <polygon class="cls-15" points="1054.61 1863.25 1049.5 1891.42 1009.85 1894.75 1014.96 1866.57 1054.61 1863.25"/>\n              <polygon class="cls-30" points="1014.96 1866.57 1009.85 1894.75 749.04 1674.9 754.15 1646.72 1014.96 1866.57"/>\n            </g>\n            <g class="cls-1">\n              <polygon class="cls-16" points="924.53 1790.53 947.74 1810.1 502.25 1847.44 479.02 1827.86 924.53 1790.53"/>\n              <polygon class="cls-15" points="947.74 1810.1 942.62 1838.28 497.13 1875.62 502.25 1847.44 947.74 1810.1"/>\n              <polygon class="cls-30" points="502.25 1847.44 497.13 1875.62 473.91 1856.04 479.02 1827.86 502.25 1847.44"/>\n            </g>\n            <g class="cls-1">\n              <polygon class="cls-16" points="844.53 1720.53 867.74 1740.1 422.25 1777.44 399.03 1757.86 844.53 1720.53"/>\n              <polygon class="cls-15" points="867.74 1740.1 862.62 1768.28 417.13 1805.62 422.25 1777.44 867.74 1740.1"/>\n              <polygon class="cls-30" points="422.25 1777.44 417.13 1805.62 393.91 1786.04 399.03 1757.86 422.25 1777.44"/>\n            </g>\n            <g class="cls-1">\n              <polygon class="cls-15" points="763.98 1060.95 858.54 1141.69 818.07 1144.71 723.51 1063.98 763.98 1060.95"/>\n              <polygon class="cls-16" points="858.54 1141.69 853.65 1170.01 813.18 1173.03 818.07 1144.71 858.54 1141.69"/>\n              <polygon class="cls-17" points="818.07 1144.71 813.18 1173.03 718.62 1092.3 723.51 1063.98 818.07 1144.71"/>\n            </g>\n            <g class="cls-1">\n              <polygon class="cls-15" points="754.29 1646.85 776.91 1666.17 607.75 1678.82 585.13 1659.5 754.29 1646.85"/>\n              <polygon class="cls-16" points="776.91 1666.17 772.02 1694.49 602.86 1707.13 607.75 1678.82 776.91 1666.17"/>\n              <polygon class="cls-17" points="607.75 1678.82 602.86 1707.13 580.24 1687.82 585.13 1659.5 607.75 1678.82"/>\n            </g>\n            <g class="cls-1">\n              <polygon class="cls-15" points="580.97 1834.95 675.53 1915.69 635.07 1918.72 540.5 1837.97 580.97 1834.95"/>\n              <polygon class="cls-16" points="675.53 1915.69 670.65 1944.01 630.18 1947.03 635.07 1918.72 675.53 1915.69"/>\n              <polygon class="cls-17" points="635.07 1918.72 630.18 1947.03 535.62 1866.29 540.5 1837.97 635.07 1918.72"/>\n            </g>\n            <g class="cls-1">\n              <polygon class="cls-15" points="671.29 1911.86 693.91 1931.17 524.75 1943.82 502.13 1924.5 671.29 1911.86"/>\n              <polygon class="cls-16" points="693.91 1931.17 689.02 1959.49 519.87 1972.14 524.75 1943.82 693.91 1931.17"/>\n              <polygon class="cls-17" points="524.75 1943.82 519.87 1972.14 497.24 1952.82 502.13 1924.5 524.75 1943.82"/>\n            </g>\n            <g class="cls-1">\n              <polygon class="cls-12" points="726.17 1063.94 815.05 1139.84 697.52 1148.62 608.64 1072.73 726.17 1063.94"/>\n              <polygon class="cls-13" points="815.05 1139.84 810.16 1168.15 692.63 1176.94 697.52 1148.62 815.05 1139.84"/>\n              <polygon class="cls-14" points="697.52 1148.62 692.63 1176.94 603.75 1101.05 608.64 1072.73 697.52 1148.62"/>\n            </g>\n            <g class="cls-1">\n              <polygon class="cls-16" points="857.53 1141.04 880.75 1160.61 435.25 1197.94 412.04 1178.37 857.53 1141.04"/>\n              <polygon class="cls-15" points="880.75 1160.61 875.63 1188.78 430.14 1226.12 435.25 1197.94 880.75 1160.61"/>\n              <polygon class="cls-30" points="435.25 1197.94 430.14 1226.12 406.92 1206.55 412.04 1178.37 435.25 1197.94"/>\n            </g>\n            <g class="cls-1">\n              <polygon class="cls-15" points="467.98 1101.72 568.25 1187.34 400.4 1199.89 300.13 1114.27 467.98 1101.72"/>\n              <polygon class="cls-16" points="568.25 1187.34 563.36 1215.66 395.51 1228.21 400.4 1199.89 568.25 1187.34"/>\n              <polygon class="cls-17" points="400.4 1199.89 395.51 1228.21 295.25 1142.59 300.13 1114.27 400.4 1199.89"/>\n            </g>\n            <line class="cls-29" x1="400.87" y1="1200.64" x2="879.89" y2="1160.39"/>\n            <line class="cls-29" x1="609.48" y1="1679.65" x2="777.05" y2="1667.86"/>\n            <line class="cls-31" x1="765.69" y1="1061.45" x2="1158.31" y2="1030.66"/>\n          </g>\n          <g id="Elevators">\n            <g id="Elevator_south_1st" data-name="Elevator south 1st">\n              <rect class="cls-18" x="595.69" y="960.89" width="31.67" height="33.22"/>\n              <g>\n                <path class="cls-32" d="M644.15,1029.78v-27a4.91,4.91,0,0,0-4.93-4.94h-27.1a4.86,4.86,0,0,0-4.92,4.94h0v27a4.9,4.9,0,0,0,4.93,4.9h27.13a4.8,4.8,0,0,0,4.9-4.9Zm-5.11-.22H612.3V1003H639Z" transform="translate(-13.96 -38.36)"/>\n                <g>\n                  <path class="cls-33" d="M632.35,976.88a2.56,2.56,0,1,1,5.12,0l-.08,10.73,2.75-3.37c1.9-2.09,5.24.82,3.18,3.18l-6.67,7.94a2.3,2.3,0,0,1-3.47,0l-6.65-8c-2.06-2.36,1.31-5.3,3.18-3.18l2.72,3.4Z" transform="translate(-13.96 -38.36)"/>\n                  <path class="cls-34" d="M613.78,993.51a2.56,2.56,0,1,0,5.12,0l-.08-10.73,2.75,3.37c1.9,2.08,5.24-.83,3.18-3.18l-6.67-8a2.32,2.32,0,0,0-3.48,0L608,983c-2.06,2.35,1.31,5.29,3.18,3.18l2.72-3.4Z" transform="translate(-13.96 -38.36)"/>\n                </g>\n                <g>\n                  <g>\n                    <path class="cls-35" d="M616.9,1009.25a1.74,1.74,0,1,0-1.74-1.74A1.74,1.74,0,0,0,616.9,1009.25Z" transform="translate(-13.96 -38.36)"/>\n                    <path class="cls-36" d="M618.77,1009.6H615c-1.68,0-2.22.43-2.22,2.26v5.34a.7.7,0,1,0,1.4,0l.12-4.89h.36v13.38a1,1,0,1,0,1.9,0l.12-7.77h.38l.12,7.77a1,1,0,1,0,1.9,0v-13.38h.36l.12,4.89a.7.7,0,1,0,1.4,0v-5.34C621,1010,620.45,1009.6,618.77,1009.6Z" transform="translate(-13.96 -38.36)"/>\n                  </g>\n                  <g>\n                    <path class="cls-37" d="M625.67,1009.25a1.74,1.74,0,1,0-1.74-1.74A1.74,1.74,0,0,0,625.67,1009.25Z" transform="translate(-13.96 -38.36)"/>\n                    <path class="cls-38" d="M627.54,1009.6H623.8c-1.68,0-2.22.43-2.22,2.26v5.34a.7.7,0,1,0,1.4,0l.12-4.89h.36v13.38a1,1,0,1,0,1.9,0l.12-7.77h.38l.12,7.77a1,1,0,1,0,1.9,0v-13.38h.36l.12,4.89a.7.7,0,1,0,1.4,0v-5.34C629.76,1010,629.22,1009.6,627.54,1009.6Z" transform="translate(-13.96 -38.36)"/>\n                  </g>\n                  <g>\n                    <path class="cls-39" d="M634.44,1009.25a1.74,1.74,0,1,0-1.74-1.74A1.74,1.74,0,0,0,634.44,1009.25Z" transform="translate(-13.96 -38.36)"/>\n                    <path class="cls-40" d="M636.31,1009.6h-3.74c-1.67,0-2.22.43-2.22,2.26v5.34a.7.7,0,1,0,1.4,0l.12-4.89h.36v13.38a1,1,0,1,0,1.9,0l.12-7.77h.38l.12,7.77a1,1,0,1,0,1.91,0v-13.38H637l.12,4.89a.7.7,0,1,0,1.4,0v-5.34C638.53,1010,638,1009.6,636.31,1009.6Z" transform="translate(-13.96 -38.36)"/>\n                  </g>\n                </g>\n              </g>\n            </g>\n\n            <g id="Elevator_2b" data-name="Elevator 2b">\n              <rect class="cls-18" x="595.69" y="1624.89" width="31.67" height="33.22"/>\n              <g>\n                <path class="cls-50" d="M644.15,1693.78v-27a4.91,4.91,0,0,0-4.93-4.94h-27.1a4.86,4.86,0,0,0-4.92,4.94h0v27a4.9,4.9,0,0,0,4.93,4.9h27.13a4.8,4.8,0,0,0,4.9-4.9Zm-5.11-.22H612.3V1667H639Z" transform="translate(-13.96 -38.36)"/>\n                <g>\n                  <path class="cls-51" d="M632.35,1640.88a2.56,2.56,0,1,1,5.12,0l-.08,10.73,2.75-3.37c1.9-2.09,5.24.82,3.18,3.18l-6.67,7.94a2.3,2.3,0,0,1-3.47,0l-6.65-8c-2.06-2.36,1.31-5.3,3.18-3.18l2.72,3.4Z" transform="translate(-13.96 -38.36)"/>\n                  <path class="cls-52" d="M613.78,1657.51a2.56,2.56,0,1,0,5.12,0l-.08-10.73,2.75,3.37c1.9,2.08,5.24-.83,3.18-3.18l-6.67-8a2.32,2.32,0,0,0-3.48,0l-6.64,8c-2.06,2.35,1.31,5.29,3.18,3.18l2.72-3.4Z" transform="translate(-13.96 -38.36)"/>\n                </g>\n                <g>\n                  <g>\n                    <path class="cls-53" d="M616.9,1673.25a1.74,1.74,0,1,0-1.74-1.74A1.74,1.74,0,0,0,616.9,1673.25Z" transform="translate(-13.96 -38.36)"/>\n                    <path class="cls-54" d="M618.77,1673.6H615c-1.68,0-2.22.43-2.22,2.26v5.34a.7.7,0,1,0,1.4,0l.12-4.89h.36v13.38a1,1,0,1,0,1.9,0l.12-7.77h.38l.12,7.77a1,1,0,1,0,1.9,0v-13.38h.36l.12,4.89a.7.7,0,1,0,1.4,0v-5.34C621,1674,620.45,1673.6,618.77,1673.6Z" transform="translate(-13.96 -38.36)"/>\n                  </g>\n                  <g>\n                    <path class="cls-55" d="M625.67,1673.25a1.74,1.74,0,1,0-1.74-1.74A1.74,1.74,0,0,0,625.67,1673.25Z" transform="translate(-13.96 -38.36)"/>\n                    <path class="cls-56" d="M627.54,1673.6H623.8c-1.68,0-2.22.43-2.22,2.26v5.34a.7.7,0,1,0,1.4,0l.12-4.89h.36v13.38a1,1,0,1,0,1.9,0l.12-7.77h.38l.12,7.77a1,1,0,1,0,1.9,0v-13.38h.36l.12,4.89a.7.7,0,1,0,1.4,0v-5.34C629.76,1674,629.22,1673.6,627.54,1673.6Z" transform="translate(-13.96 -38.36)"/>\n                  </g>\n                  <g>\n                    <path class="cls-57" d="M634.44,1673.25a1.74,1.74,0,1,0-1.74-1.74A1.74,1.74,0,0,0,634.44,1673.25Z" transform="translate(-13.96 -38.36)"/>\n                    <path class="cls-58" d="M636.31,1673.6h-3.74c-1.67,0-2.22.43-2.22,2.26v5.34a.7.7,0,1,0,1.4,0l.12-4.89h.36v13.38a1,1,0,1,0,1.9,0l.12-7.77h.38l.12,7.77a1,1,0,1,0,1.91,0v-13.38H637l.12,4.89a.7.7,0,1,0,1.4,0v-5.34C638.53,1674,638,1673.6,636.31,1673.6Z" transform="translate(-13.96 -38.36)"/>\n                  </g>\n                </g>\n              </g>\n            </g>\n            <g id="Elevator_south_2nd" data-name="Elevator south 2nd">\n              <rect class="cls-18" x="595.69" y="185.3" width="31.67" height="33.22"/>\n              <g>\n                <path class="cls-59" d="M644.15,254.19v-27a4.91,4.91,0,0,0-4.93-4.93h-27.1a4.86,4.86,0,0,0-4.92,4.93h0v27a4.9,4.9,0,0,0,4.93,4.9h27.13a4.79,4.79,0,0,0,4.9-4.89ZM639,254H612.3V227.39H639Z" transform="translate(-13.96 -38.36)"/>\n                <g>\n                  <path class="cls-60" d="M632.35,201.29a2.56,2.56,0,1,1,5.12,0L637.39,212l2.75-3.37c1.9-2.08,5.24.82,3.18,3.18l-6.67,7.95a2.31,2.31,0,0,1-3.47,0l-6.65-8c-2.06-2.36,1.31-5.29,3.18-3.18l2.72,3.4Z" transform="translate(-13.96 -38.36)"/>\n                  <path class="cls-61" d="M613.78,217.92a2.56,2.56,0,1,0,5.12,0l-.08-10.73,2.75,3.37c1.9,2.09,5.24-.82,3.18-3.18l-6.67-7.94a2.31,2.31,0,0,0-3.48,0l-6.64,8c-2.06,2.36,1.31,5.3,3.18,3.18l2.72-3.4Z" transform="translate(-13.96 -38.36)"/>\n                </g>\n                <g>\n                  <g>\n                    <path class="cls-62" d="M616.9,233.67a1.74,1.74,0,1,0-1.74-1.74A1.74,1.74,0,0,0,616.9,233.67Z" transform="translate(-13.96 -38.36)"/>\n                    <path class="cls-63" d="M618.77,234H615c-1.68,0-2.22.43-2.22,2.26v5.34a.7.7,0,1,0,1.4,0l.12-4.89h.36V250.1a1,1,0,1,0,1.9,0l.12-7.76h.38l.12,7.76a1,1,0,1,0,1.9,0V236.72h.36l.12,4.89a.7.7,0,1,0,1.4,0v-5.34C621,234.44,620.45,234,618.77,234Z" transform="translate(-13.96 -38.36)"/>\n                  </g>\n                  <g>\n                    <path class="cls-64" d="M625.67,233.67a1.74,1.74,0,1,0-1.74-1.74A1.74,1.74,0,0,0,625.67,233.67Z" transform="translate(-13.96 -38.36)"/>\n                    <path class="cls-65" d="M627.54,234H623.8c-1.68,0-2.22.43-2.22,2.26v5.34a.7.7,0,1,0,1.4,0l.12-4.89h.36V250.1a1,1,0,1,0,1.9,0l.12-7.76h.38l.12,7.76a1,1,0,1,0,1.9,0V236.72h.36l.12,4.89a.7.7,0,1,0,1.4,0v-5.34C629.76,234.44,629.22,234,627.54,234Z" transform="translate(-13.96 -38.36)"/>\n                  </g>\n                  <g>\n                    <path class="cls-66" d="M634.44,233.67a1.74,1.74,0,1,0-1.74-1.74A1.74,1.74,0,0,0,634.44,233.67Z" transform="translate(-13.96 -38.36)"/>\n                    <path class="cls-67" d="M636.31,234h-3.74c-1.67,0-2.22.43-2.22,2.26v5.34a.7.7,0,1,0,1.4,0l.12-4.89h.36V250.1a1,1,0,1,0,1.9,0l.12-7.76h.38l.12,7.76a1,1,0,1,0,1.91,0V236.72H637l.12,4.89a.7.7,0,1,0,1.4,0v-5.34C638.53,234.44,638,234,636.31,234Z" transform="translate(-13.96 -38.36)"/>\n                  </g>\n                </g>\n              </g>\n            </g>\n            <g id="Elevator_north_2nd" data-name="Elevator north 2nd">\n              <rect class="cls-18" x="1372.39" y="185.3" width="31.67" height="33.22"/>\n              <g>\n                <path class="cls-68" d="M1420.85,254.19v-27a4.9,4.9,0,0,0-4.92-4.93h-27.1a4.87,4.87,0,0,0-4.93,4.93h0v27a4.9,4.9,0,0,0,4.93,4.9H1416a4.78,4.78,0,0,0,4.89-4.89Zm-5.11-.22H1389V227.39h26.74Z" transform="translate(-13.96 -38.36)"/>\n                <g>\n                  <path class="cls-69" d="M1409.06,201.29a2.56,2.56,0,1,1,5.12,0L1414.1,212l2.75-3.37c1.9-2.08,5.24.82,3.18,3.18l-6.68,7.95a2.31,2.31,0,0,1-3.47,0l-6.64-8c-2.06-2.36,1.31-5.29,3.18-3.18l2.72,3.4Z" transform="translate(-13.96 -38.36)"/>\n                  <path class="cls-70" d="M1390.49,217.92a2.56,2.56,0,1,0,5.11,0l-.07-10.73,2.75,3.37c1.9,2.09,5.24-.82,3.18-3.18l-6.68-7.94a2.3,2.3,0,0,0-3.47,0l-6.64,8c-2.06,2.36,1.31,5.3,3.18,3.18l2.72-3.4Z" transform="translate(-13.96 -38.36)"/>\n                </g>\n                <g>\n                  <g>\n                    <path class="cls-71" d="M1393.6,233.67a1.74,1.74,0,1,0-1.74-1.74A1.74,1.74,0,0,0,1393.6,233.67Z" transform="translate(-13.96 -38.36)"/>\n                    <path class="cls-72" d="M1395.47,234h-3.74c-1.67,0-2.22.43-2.22,2.26v5.34a.7.7,0,1,0,1.4,0l.12-4.89h.36V250.1a1,1,0,1,0,1.91,0l.12-7.76h.37l.12,7.76a1,1,0,1,0,1.91,0V236.72h.36l.12,4.89a.7.7,0,1,0,1.4,0v-5.34C1397.7,234.44,1397.15,234,1395.47,234Z" transform="translate(-13.96 -38.36)"/>\n                  </g>\n                  <g>\n                    <path class="cls-73" d="M1402.38,233.67a1.74,1.74,0,1,0-1.75-1.74A1.74,1.74,0,0,0,1402.38,233.67Z" transform="translate(-13.96 -38.36)"/>\n                    <path class="cls-74" d="M1404.25,234h-3.74c-1.68,0-2.23.43-2.23,2.26v5.34a.7.7,0,1,0,1.4,0l.12-4.89h.36V250.1a1,1,0,1,0,1.91,0l.12-7.76h.37l.12,7.76a1,1,0,1,0,1.91,0V236.72h.36l.12,4.89a.7.7,0,1,0,1.4,0v-5.34C1406.47,234.44,1405.92,234,1404.25,234Z" transform="translate(-13.96 -38.36)"/>\n                  </g>\n                  <g>\n                    <path class="cls-75" d="M1411.15,233.67a1.74,1.74,0,1,0-1.74-1.74A1.74,1.74,0,0,0,1411.15,233.67Z" transform="translate(-13.96 -38.36)"/>\n                    <path class="cls-76" d="M1413,234h-3.74c-1.68,0-2.23.43-2.23,2.26v5.34a.7.7,0,1,0,1.4,0l.13-4.89h.35V250.1a1,1,0,1,0,1.91,0l.12-7.76h.38l.12,7.76a1,1,0,1,0,1.9,0V236.72h.36l.12,4.89a.7.7,0,1,0,1.4,0v-5.34C1415.24,234.44,1414.69,234,1413,234Z" transform="translate(-13.96 -38.36)"/>\n                  </g>\n                </g>\n              </g>\n            </g>\n            <g id="Elevator_north_1" data-name="Elevator north 1">\n              <rect class="cls-18" x="1372.39" y="892.36" width="31.67" height="33.22"/>\n              <g>\n                <path class="cls-77" d="M1420.85,961.25v-27a4.9,4.9,0,0,0-4.92-4.94h-27.1a4.87,4.87,0,0,0-4.93,4.93h0v27a4.9,4.9,0,0,0,4.93,4.91H1416a4.79,4.79,0,0,0,4.89-4.9Zm-5.11-.22H1389V934.45h26.74Z" transform="translate(-13.96 -38.36)"/>\n                <g>\n                  <path class="cls-78" d="M1409.06,908.35a2.56,2.56,0,1,1,5.12,0l-.08,10.73,2.75-3.37c1.9-2.08,5.24.83,3.18,3.18l-6.68,8a2.31,2.31,0,0,1-3.47,0l-6.64-8c-2.06-2.36,1.31-5.29,3.18-3.18l2.72,3.4Z" transform="translate(-13.96 -38.36)"/>\n                  <path class="cls-79" d="M1390.49,925a2.56,2.56,0,1,0,5.11,0l-.07-10.73,2.75,3.37c1.9,2.09,5.24-.82,3.18-3.18l-6.68-7.94a2.3,2.3,0,0,0-3.47,0l-6.64,8c-2.06,2.36,1.31,5.3,3.18,3.18l2.72-3.4Z" transform="translate(-13.96 -38.36)"/>\n                </g>\n                <g>\n                  <g>\n                    <path class="cls-80" d="M1393.6,940.73a1.74,1.74,0,1,0-1.74-1.74A1.74,1.74,0,0,0,1393.6,940.73Z" transform="translate(-13.96 -38.36)"/>\n                    <path class="cls-81" d="M1395.47,941.07h-3.74c-1.67,0-2.22.43-2.22,2.26v5.34a.7.7,0,1,0,1.4,0l.12-4.89h.36v13.38a1,1,0,1,0,1.91,0l.12-7.76h.37l.12,7.76a1,1,0,1,0,1.91,0V943.78h.36l.12,4.89a.7.7,0,1,0,1.4,0v-5.34C1397.7,941.5,1397.15,941.07,1395.47,941.07Z" transform="translate(-13.96 -38.36)"/>\n                  </g>\n                  <g>\n                    <path class="cls-82" d="M1402.38,940.73a1.74,1.74,0,1,0-1.75-1.74A1.74,1.74,0,0,0,1402.38,940.73Z" transform="translate(-13.96 -38.36)"/>\n                    <path class="cls-83" d="M1404.25,941.07h-3.74c-1.68,0-2.23.43-2.23,2.26v5.34a.7.7,0,1,0,1.4,0l.12-4.89h.36v13.38a1,1,0,1,0,1.91,0l.12-7.76h.37l.12,7.76a1,1,0,1,0,1.91,0V943.78h.36l.12,4.89a.7.7,0,1,0,1.4,0v-5.34C1406.47,941.5,1405.92,941.07,1404.25,941.07Z" transform="translate(-13.96 -38.36)"/>\n                  </g>\n                  <g>\n                    <path class="cls-84" d="M1411.15,940.73a1.74,1.74,0,1,0-1.74-1.74A1.74,1.74,0,0,0,1411.15,940.73Z" transform="translate(-13.96 -38.36)"/>\n                    <path class="cls-85" d="M1413,941.07h-3.74c-1.68,0-2.23.43-2.23,2.26v5.34a.7.7,0,1,0,1.4,0l.13-4.89h.35v13.38a1,1,0,1,0,1.91,0l.12-7.76h.38l.12,7.76a1,1,0,1,0,1.9,0V943.78h.36l.12,4.89a.7.7,0,1,0,1.4,0v-5.34C1415.24,941.5,1414.69,941.07,1413,941.07Z" transform="translate(-13.96 -38.36)"/>\n                  </g>\n                </g>\n              </g>\n            </g>\n          </g>\n          <g id="annotation">\n            <g>\n              <path class="cls-18" d="M1339.45,821.56a2.19,2.19,0,1,0-2.18-2.19A2.19,2.19,0,0,0,1339.45,821.56Z" transform="translate(-13.96 -38.36)"/>\n              <path class="cls-18" d="M1341.8,822h-4.69c-2.11,0-2.8.54-2.8,2.83v6.71a.89.89,0,1,0,1.76,0l.15-6.13h.45v16.8a1.2,1.2,0,1,0,2.4,0l.15-9.75h.47l.15,9.75a1.2,1.2,0,1,0,2.39,0V825.4h.45l.16,6.13a.88.88,0,1,0,1.75,0v-6.71C1344.59,822.53,1343.91,822,1341.8,822Z" transform="translate(-13.96 -38.36)"/>\n            </g>\n            <g>\n              <path class="cls-18" d="M1299,821.86a2.3,2.3,0,1,0-2.3-2.3A2.3,2.3,0,0,0,1299,821.86Z" transform="translate(-13.96 -38.36)"/>\n              <path class="cls-18" d="M1310.2,839a1.39,1.39,0,0,0,1.85.46,1.36,1.36,0,0,0,.46-1.84l-3.92-6.77a1.32,1.32,0,0,0-1.11-.65h-5.76l0-2h4.18a1.06,1.06,0,0,0,1-1,1,1,0,0,0-1-1.05h-4.3l-.15-1.67a2.22,2.22,0,0,0-4.44.26l.4,7a2.3,2.3,0,0,0,2.34,2.09h7.46Z" transform="translate(-13.96 -38.36)"/>\n              <path class="cls-18" d="M1300.49,841.6a6.81,6.81,0,0,1-4.43-12l-.13-2.14a8.63,8.63,0,1,0,12.44,10.82l-1.22-2.1A6.81,6.81,0,0,1,1300.49,841.6Z" transform="translate(-13.96 -38.36)"/>\n            </g>\n            <g id="Stairs">\n              <g id="Stairs_1st_to_mezzanine" data-name="Stairs 1st to mezzanine">\n                <g class="cls-1">\n                  <polygon class="cls-2" points="1028.58 897.2 1047.25 913.14 1034.11 914.13 1015.44 898.18 1028.58 897.2"/>\n                  <polygon class="cls-3" points="1047.25 913.14 1045.3 924.44 1032.15 925.43 1034.11 914.13 1047.25 913.14"/>\n                  <polygon class="cls-4" points="1034.11 914.13 1032.15 925.43 1013.49 909.48 1015.44 898.18 1034.11 914.13"/>\n                </g>\n                <g class="cls-1">\n                  <polygon class="cls-2" points="1016.12 890.97 1034.8 906.91 1021.65 907.89 1002.98 891.95 1016.12 890.97"/>\n                  <polygon class="cls-3" points="1034.8 906.91 1032.84 918.21 1019.7 919.2 1021.65 907.89 1034.8 906.91"/>\n                  <polygon class="cls-4" points="1021.65 907.89 1019.7 919.2 1001.03 903.25 1002.98 891.95 1021.65 907.89"/>\n                </g>\n                <g class="cls-1">\n                  <polygon class="cls-2" points="1003.66 884.74 1022.33 900.68 1009.19 901.67 990.51 885.72 1003.66 884.74"/>\n                  <polygon class="cls-3" points="1022.33 900.68 1020.38 911.99 1007.24 912.97 1009.19 901.67 1022.33 900.68"/>\n                  <polygon class="cls-4" points="1009.19 901.67 1007.24 912.97 988.56 897.02 990.51 885.72 1009.19 901.67"/>\n                </g>\n                <g class="cls-1">\n                  <polygon class="cls-2" points="991.2 878.51 1009.88 894.46 996.73 895.44 978.06 879.49 991.2 878.51"/>\n                  <polygon class="cls-3" points="1009.88 894.46 1007.92 905.76 994.78 906.74 996.73 895.44 1009.88 894.46"/>\n                  <polygon class="cls-4" points="996.73 895.44 994.78 906.74 976.11 890.79 978.06 879.49 996.73 895.44"/>\n                </g>\n                <text class="cls-6" transform="translate(1027 863.55) scale(0.97 1)">{{\'map.text.tomezzanine\'|translate}}</text>\n                <g>\n                  <line class="cls-7" x1="1028.17" y1="875.28" x2="992.25" y2="856.7"/>\n                  <polygon class="cls-8" points="1013.43 847.43 1014.61 851.67 993.75 857.47 1001.06 877.86 996.92 879.34 988.02 854.51 1013.43 847.43"/>\n                </g>\n              </g>\n              <g id="Stairs_1st_to_2nd_by_atmosphere" data-name="Stairs 1st to 2nd by atmosphere">\n                <g class="cls-1">\n                  <polygon class="cls-2" points="651.57 1040.48 670.25 1056.43 657.1 1057.41 638.43 1041.47 651.57 1040.48"/>\n                  <polygon class="cls-3" points="670.25 1056.43 668.29 1067.73 655.15 1068.71 657.1 1057.41 670.25 1056.43"/>\n                  <polygon class="cls-4" points="657.1 1057.41 655.15 1068.71 636.48 1052.77 638.43 1041.47 657.1 1057.41"/>\n                </g>\n                <g class="cls-1">\n                  <polygon class="cls-2" points="639.12 1034.25 657.79 1050.19 644.64 1051.18 625.97 1035.23 639.12 1034.25"/>\n                  <polygon class="cls-3" points="657.79 1050.19 655.84 1061.5 642.69 1062.48 644.64 1051.18 657.79 1050.19"/>\n                  <polygon class="cls-4" points="644.64 1051.18 642.69 1062.48 624.02 1046.54 625.97 1035.23 644.64 1051.18"/>\n                </g>\n                <g class="cls-1">\n                  <polygon class="cls-2" points="626.65 1028.02 645.32 1043.96 632.18 1044.95 613.51 1029 626.65 1028.02"/>\n                  <polygon class="cls-3" points="645.32 1043.96 643.37 1055.27 630.23 1056.25 632.18 1044.95 645.32 1043.96"/>\n                  <polygon class="cls-4" points="632.18 1044.95 630.23 1056.25 611.55 1040.3 613.51 1029 632.18 1044.95"/>\n                </g>\n                <g class="cls-1">\n                  <polygon class="cls-2" points="614.19 1021.79 632.87 1037.74 619.73 1038.72 601.05 1022.77 614.19 1021.79"/>\n                  <polygon class="cls-3" points="632.87 1037.74 630.92 1049.04 617.77 1050.02 619.73 1038.72 632.87 1037.74"/>\n                  <polygon class="cls-4" points="619.73 1038.72 617.77 1050.02 599.1 1034.07 601.05 1022.77 619.73 1038.72"/>\n                </g>\n                <g>\n                  <text class="cls-86" transform="translate(694 1027.55) scale(0.97 1)">{{\'map.text.tosecondfloor\'|translate}}</text>\n                  <text class="cls-87" transform="translate(694 1027.55) scale(0.97 1)">{{\'map.text.tosecondfloor\'|translate}}</text>\n                </g>\n                <g>\n                  <line class="cls-88" x1="695.17" y1="1042.28" x2="659.25" y2="1023.7"/>\n                  <polygon class="cls-89" points="680.43 1014.43 681.61 1018.67 660.75 1024.47 668.06 1044.86 663.92 1046.34 655.02 1021.51 680.43 1014.43"/>\n                </g>\n              </g>\n\n\n              <g id="Stairs_mezzanine_to_1st" data-name="Stairs mezzanine to 1st">\n                <g class="cls-1">\n                  <polygon class="cls-2" points="941.37 714.59 960.04 730.53 946.9 731.52 928.22 715.57 941.37 714.59"/>\n                  <polygon class="cls-3" points="960.04 730.53 958.09 741.84 944.95 742.82 946.9 731.52 960.04 730.53"/>\n                  <polygon class="cls-4" points="946.9 731.52 944.95 742.82 926.27 726.87 928.22 715.57 946.9 731.52"/>\n                </g>\n                <g class="cls-1">\n                  <polygon class="cls-2" points="928.9 708.36 947.58 724.31 934.43 725.29 915.76 709.34 928.9 708.36"/>\n                  <polygon class="cls-3" points="947.58 724.31 945.63 735.61 932.48 736.59 934.43 725.29 947.58 724.31"/>\n                  <polygon class="cls-4" points="934.43 725.29 932.48 736.59 913.81 720.64 915.76 709.34 934.43 725.29"/>\n                </g>\n                <g class="cls-1">\n                  <polygon class="cls-2" points="916.45 702.13 935.12 718.08 921.98 719.06 903.3 703.12 916.45 702.13"/>\n                  <polygon class="cls-3" points="935.12 718.08 933.17 729.38 920.03 730.36 921.98 719.06 935.12 718.08"/>\n                  <polygon class="cls-4" points="921.98 719.06 920.03 730.36 901.35 714.42 903.3 703.12 921.98 719.06"/>\n                </g>\n                <g class="cls-1">\n                  <polygon class="cls-2" points="903.98 695.9 922.65 711.84 909.51 712.83 890.84 696.88 903.98 695.9"/>\n                  <polygon class="cls-3" points="922.65 711.84 920.7 723.15 907.56 724.13 909.51 712.83 922.65 711.84"/>\n                  <polygon class="cls-4" points="909.51 712.83 907.56 724.13 888.89 708.19 890.84 696.88 909.51 712.83"/>\n                </g>\n                <g class="cls-1">\n                  <polygon class="cls-2" points="891.53 689.67 910.2 705.62 897.05 706.6 878.38 690.66 891.53 689.67"/>\n                  <polygon class="cls-3" points="910.2 705.62 908.25 716.92 895.1 717.9 897.05 706.6 910.2 705.62"/>\n                  <polygon class="cls-4" points="897.05 706.6 895.1 717.9 876.43 701.96 878.38 690.66 897.05 706.6"/>\n                </g>\n                <g class="cls-1">\n                  <polygon class="cls-2" points="878.87 688.16 896.91 703.57 861.85 706.19 843.8 690.78 878.87 688.16"/>\n                  <polygon class="cls-3" points="896.91 703.57 893.78 721.72 858.71 724.34 861.85 706.19 896.91 703.57"/>\n                  <polygon class="cls-4" points="861.85 706.19 858.71 724.34 840.67 708.93 843.8 690.78 861.85 706.19"/>\n                </g>\n                <text class="cls-6" transform="translate(1010 734.55) scale(0.97 1)">{{\'map.text.tofirstfloor\'|translate}}</text>\n                <g>\n                  <line class="cls-7" x1="962.02" y1="716.51" x2="997.94" y2="735.09"/>\n                  <polygon class="cls-8" points="976.76 744.36 975.58 740.13 996.44 734.32 989.12 713.94 993.26 712.46 1002.16 737.28 976.76 744.36"/>\n                </g>\n              </g>\n              <g id="Stairs_2nd_to_1st_by_weather_trail" data-name="Stairs 2nd to 1st by weather trail">\n                <g class="cls-1">\n                  <polygon class="cls-2" points="414.57 112.27 433.25 128.21 420.1 129.19 401.43 113.25 414.57 112.27"/>\n                  <polygon class="cls-3" points="433.25 128.21 431.29 139.51 418.15 140.5 420.1 129.19 433.25 128.21"/>\n                  <polygon class="cls-4" points="420.1 129.19 418.15 140.5 399.48 124.55 401.43 113.25 420.1 129.19"/>\n                </g>\n                <g class="cls-1">\n                  <polygon class="cls-2" points="427.03 106.04 445.7 121.98 432.56 122.97 413.88 107.02 427.03 106.04"/>\n                  <polygon class="cls-3" points="445.7 121.98 443.75 133.29 430.61 134.27 432.56 122.97 445.7 121.98"/>\n                  <polygon class="cls-4" points="432.56 122.97 430.61 134.27 411.93 118.32 413.88 107.02 432.56 122.97"/>\n                </g>\n                <g class="cls-1">\n                  <polygon class="cls-2" points="439.49 99.81 458.17 115.76 445.02 116.74 426.35 100.79 439.49 99.81"/>\n                  <polygon class="cls-3" points="458.17 115.76 456.21 127.06 443.07 128.04 445.02 116.74 458.17 115.76"/>\n                  <polygon class="cls-4" points="445.02 116.74 443.07 128.04 424.4 112.09 426.35 100.79 445.02 116.74"/>\n                </g>\n                <g class="cls-1">\n                  <polygon class="cls-2" points="451.95 93.58 470.62 109.52 457.48 110.5 438.81 94.56 451.95 93.58"/>\n                  <polygon class="cls-3" points="470.62 109.52 468.67 120.82 455.52 121.81 457.48 110.5 470.62 109.52"/>\n                  <polygon class="cls-4" points="457.48 110.5 455.52 121.81 436.86 105.86 438.81 94.56 457.48 110.5"/>\n                </g>\n                <g class="cls-1">\n                  <polygon class="cls-2" points="464.4 87.35 483.08 103.29 469.94 104.27 451.26 88.33 464.4 87.35"/>\n                  <polygon class="cls-3" points="483.08 103.29 481.13 114.59 467.98 115.58 469.94 104.27 483.08 103.29"/>\n                  <polygon class="cls-4" points="469.94 104.27 467.98 115.58 449.31 99.63 451.26 88.33 469.94 104.27"/>\n                </g>\n                <g>\n                  <line class="cls-7" x1="422.17" y1="75.51" x2="386.25" y2="94.09"/>\n                  <polygon class="cls-8" points="390.92 71.45 395.06 72.93 387.75 93.31 408.61 99.12 407.43 103.36 382.02 96.28 390.92 71.45"/>\n                </g>\n                <text class="cls-6" transform="translate(288 117.55) scale(0.97 1)">{{\'map.text.tofirstfloor\'|translate}}</text>\n              </g>\n\n              <g id="Stairs_-_2nd_to_1st" data-name="Stairs - 2nd to 1st">\n                <g class="cls-1">\n                  <polygon class="cls-2" points="544.57 249.27 563.25 265.22 550.1 266.2 531.43 250.25 544.57 249.27"/>\n                  <polygon class="cls-3" points="563.25 265.22 561.29 276.52 548.15 277.5 550.1 266.2 563.25 265.22"/>\n                  <polygon class="cls-4" points="550.1 266.2 548.15 277.5 529.48 261.55 531.43 250.25 550.1 266.2"/>\n                </g>\n                <g class="cls-1">\n                  <polygon class="cls-2" points="557.03 243.04 575.7 258.98 562.55 259.96 543.88 244.02 557.03 243.04"/>\n                  <polygon class="cls-3" points="575.7 258.98 573.75 270.28 560.6 271.26 562.55 259.96 575.7 258.98"/>\n                  <polygon class="cls-4" points="562.55 259.96 560.6 271.26 541.93 255.32 543.88 244.02 562.55 259.96"/>\n                </g>\n                <g class="cls-1">\n                  <polygon class="cls-2" points="569.49 236.81 588.17 252.75 575.02 253.73 556.35 237.79 569.49 236.81"/>\n                  <polygon class="cls-3" points="588.17 252.75 586.21 264.05 573.07 265.04 575.02 253.73 588.17 252.75"/>\n                  <polygon class="cls-4" points="575.02 253.73 573.07 265.04 554.4 249.09 556.35 237.79 575.02 253.73"/>\n                </g>\n                <g class="cls-1">\n                  <polygon class="cls-2" points="581.95 230.58 600.62 246.52 587.48 247.5 568.8 231.56 581.95 230.58"/>\n                  <polygon class="cls-3" points="600.62 246.52 598.67 257.82 585.53 258.81 587.48 247.5 600.62 246.52"/>\n                  <polygon class="cls-4" points="587.48 247.5 585.53 258.81 566.85 242.86 568.8 231.56 587.48 247.5"/>\n                </g>\n                <g class="cls-1">\n                  <polygon class="cls-2" points="594.4 224.35 613.08 240.29 599.93 241.28 581.26 225.33 594.4 224.35"/>\n                  <polygon class="cls-3" points="613.08 240.29 611.13 251.6 597.98 252.58 599.93 241.28 613.08 240.29"/>\n                  <polygon class="cls-4" points="599.93 241.28 597.98 252.58 579.31 236.63 581.26 225.33 599.93 241.28"/>\n                </g>\n                <text class="cls-6" transform="translate(423 253.55) scale(0.97 1)">{{\'map.text.tofirstfloor\'|translate}}</text>\n                <g>\n                  <line class="cls-7" x1="555.17" y1="214.51" x2="519.25" y2="233.09"/>\n                  <polygon class="cls-8" points="523.92 210.45 528.06 211.93 520.75 232.31 541.61 238.12 540.43 242.36 515.02 235.28 523.92 210.45"/>\n                </g>\n              </g>\n              <g id="Stairs_-_2nd_to_1st-2" data-name="Stairs - 2nd to 1st">\n                <text class="cls-6" transform="translate(836 424.55) scale(0.97 1)">{{\'map.text.tofirstfloor\'|translate}}</text>\n                <g>\n                  <line class="cls-7" x1="839.17" y1="398.51" x2="803.25" y2="417.09"/>\n                  <polygon class="cls-8" points="807.92 394.45 812.06 395.93 804.75 416.31 825.61 422.12 824.43 426.36 799.02 419.28 807.92 394.45"/>\n                </g>\n              </g>\n              <g id="Stairs_1st_to_2nd_by_cafeteria-2" data-name="Stairs 1st to 2nd by cafeteria">\n                <g class="cls-1">\n                  <polygon class="cls-2" points="670.99 1178.93 689.04 1194.34 653.96 1196.96 635.91 1181.55 670.99 1178.93"/>\n                  <polygon class="cls-3" points="689.04 1194.34 685.9 1212.49 650.83 1215.12 653.96 1196.96 689.04 1194.34"/>\n                  <polygon class="cls-4" points="653.96 1196.96 650.83 1215.12 632.78 1199.7 635.91 1181.55 653.96 1196.96"/>\n                </g>\n                <g class="cls-1">\n                  <polygon class="cls-2" points="685.95 1168.19 704.62 1184.13 691.48 1185.12 672.81 1169.17 685.95 1168.19"/>\n                  <polygon class="cls-3" points="704.62 1184.13 702.67 1195.43 689.52 1196.42 691.48 1185.12 704.62 1184.13"/>\n                  <polygon class="cls-4" points="691.48 1185.12 689.52 1196.42 670.86 1180.47 672.81 1169.17 691.48 1185.12"/>\n                </g>\n                <g class="cls-1">\n                  <polygon class="cls-2" points="698.4 1161.96 717.08 1177.9 703.93 1178.88 685.26 1162.94 698.4 1161.96"/>\n                  <polygon class="cls-3" points="717.08 1177.9 715.13 1189.2 701.98 1190.19 703.93 1178.88 717.08 1177.9"/>\n                  <polygon class="cls-4" points="703.93 1178.88 701.98 1190.19 683.31 1174.24 685.26 1162.94 703.93 1178.88"/>\n                </g>\n                <g class="cls-1">\n                  <polygon class="cls-2" points="710.87 1155.73 729.54 1171.67 716.4 1172.66 697.73 1156.71 710.87 1155.73"/>\n                  <polygon class="cls-3" points="729.54 1171.67 727.59 1182.97 714.45 1183.96 716.4 1172.66 729.54 1171.67"/>\n                  <polygon class="cls-4" points="716.4 1172.66 714.45 1183.96 695.77 1168.01 697.73 1156.71 716.4 1172.66"/>\n                </g>\n                <g class="cls-1">\n                  <polygon class="cls-2" points="723.32 1149.5 742 1165.45 728.86 1166.43 710.18 1150.48 723.32 1149.5"/>\n                  <polygon class="cls-3" points="742 1165.45 740.05 1176.75 726.9 1177.73 728.86 1166.43 742 1165.45"/>\n                  <polygon class="cls-4" points="728.86 1166.43 726.9 1177.73 708.23 1161.78 710.18 1150.48 728.86 1166.43"/>\n                </g>\n                <g>\n                  <line class="cls-88" x1="736.02" y1="1192.28" x2="771.94" y2="1173.7"/>\n                  <polygon class="cls-89" points="767.26 1196.34 763.12 1194.86 770.44 1174.48 749.58 1168.67 750.76 1164.44 776.17 1171.52 767.26 1196.34"/>\n                </g>\n                <g>\n                  <text class="cls-86" transform="translate(731 1160.55) scale(0.97 1)">{{\'map.text.tosecondfloor\'|translate}}</text>\n                  <text class="cls-87" transform="translate(731 1160.55) scale(0.97 1)">{{\'map.text.tosecondfloor\'|translate}}</text>\n                </g>\n              </g>\n            </g>\n            <g id="Bathrooms">\n              <g id="_2nd_floor_mens_bathroom" data-name="2nd floor mens bathroom">\n                <g>\n                  <path class="cls-90" d="M1316.93,192c-2.43,0-3.8,1.26-3.8,3.83v26.48c0,2.4,1.23,3.66,3.66,3.66h26.63c2.44,0,3.67-1.2,3.67-3.66V195.86c0-2.51-1.23-3.83-3.74-3.83Z" transform="translate(-13.96 -38.36)"/>\n                  <path class="cls-91" d="M1346.42,224.77a4,4,0,0,0,.67-2.43V195.86c0-2.5-1.23-3.82-3.74-3.82h-26.42a4.12,4.12,0,0,0-2.52.72A42.16,42.16,0,0,0,1346.42,224.77Z" transform="translate(-13.96 -38.36)"/>\n                </g>\n                <g>\n                  <path class="cls-18" d="M1330.11,200.23a2.19,2.19,0,1,0-2.19-2.18A2.18,2.18,0,0,0,1330.11,200.23Z" transform="translate(-13.96 -38.36)"/>\n                  <path class="cls-18" d="M1332.46,200.66h-4.7c-2.11,0-2.79.55-2.79,2.84v6.71a.88.88,0,1,0,1.76,0l.15-6.14h.45v16.8a1.2,1.2,0,1,0,2.39,0l.15-9.75h.48l.15,9.75a1.2,1.2,0,1,0,2.39,0v-16.8h.45l.15,6.14a.88.88,0,1,0,1.76,0V203.5C1335.25,201.21,1334.56,200.66,1332.46,200.66Z" transform="translate(-13.96 -38.36)"/>\n                </g>\n              </g>\n              <g id="_2nd_floor_womens_bathroom" data-name="2nd floor womens bathroom">\n                <g>\n                  <path class="cls-90" d="M1281.21,192c-2.44,0-3.81,1.26-3.81,3.83v26.48c0,2.4,1.23,3.66,3.67,3.66h26.63c2.44,0,3.67-1.2,3.67-3.66V195.86c0-2.5-1.23-3.83-3.75-3.83Z" transform="translate(-13.96 -38.36)"/>\n                  <path class="cls-92" d="M1310.69,224.77a4,4,0,0,0,.68-2.43V195.86c0-2.5-1.23-3.82-3.74-3.82h-26.42a4.13,4.13,0,0,0-2.53.72A42.17,42.17,0,0,0,1310.69,224.77Z" transform="translate(-13.96 -38.36)"/>\n                </g>\n                <g>\n                  <path class="cls-18" d="M1294.39,201.29a2.08,2.08,0,1,0-2.19-2.08A2.13,2.13,0,0,0,1294.39,201.29Z" transform="translate(-13.96 -38.36)"/>\n                  <path class="cls-18" d="M1300.31,209.43l-1.87-5.87a3,3,0,0,0-3-1.86h-2a3.05,3.05,0,0,0-3.05,1.86l-1.87,5.87c-.39,1.27,1.14,1.71,1.54.53l2-5.37h.22s-2.6,9.62-2.71,10c0,.18,0,.31.23.31H1292v6.32a1,1,0,0,0,2,0v-6.37h.77v6.37a1,1,0,0,0,2,0v-6.32h2.25c.2,0,.28-.13.22-.31-.11-.36-2.71-10-2.71-10h.23l2,5.37C1299.17,211.14,1300.7,210.7,1300.31,209.43Z" transform="translate(-13.96 -38.36)"/>\n                </g>\n              </g>\n              <g id="_2nd_floor_handicap_bathroom" data-name="2nd floor handicap bathroom">\n                <g>\n                  <path class="cls-90" d="M1245.48,192c-2.43,0-3.8,1.26-3.8,3.83v26.48c0,2.4,1.23,3.65,3.67,3.65H1272c2.43,0,3.66-1.19,3.66-3.65V195.86c0-2.5-1.23-3.83-3.74-3.83Z" transform="translate(-13.96 -38.36)"/>\n                  <path class="cls-93" d="M1275,224.77a4,4,0,0,0,.68-2.43V195.86c0-2.5-1.24-3.83-3.75-3.83h-26.42a4.12,4.12,0,0,0-2.52.73A42.17,42.17,0,0,0,1275,224.77Z" transform="translate(-13.96 -38.36)"/>\n                </g>\n                <g>\n                  <path class="cls-18" d="M1255.41,200.54a2.3,2.3,0,1,0-2.3-2.3A2.31,2.31,0,0,0,1255.41,200.54Z" transform="translate(-13.96 -38.36)"/>\n                  <path class="cls-18" d="M1266.59,217.65a1.38,1.38,0,0,0,1.85.46,1.36,1.36,0,0,0,.46-1.84L1265,209.5a1.37,1.37,0,0,0-1.11-.65h-5.75l-.06-2h4.18a1.07,1.07,0,0,0,1-1,1.05,1.05,0,0,0-1-1.05h-4.3l-.15-1.67a2.22,2.22,0,0,0-4.44.25l.4,7a2.3,2.3,0,0,0,2.34,2.1h7.46Z" transform="translate(-13.96 -38.36)"/>\n                  <path class="cls-18" d="M1256.89,220.28a6.82,6.82,0,0,1-4.44-12l-.12-2.14A8.62,8.62,0,1,0,1264.76,217l-1.22-2.1A6.82,6.82,0,0,1,1256.89,220.28Z" transform="translate(-13.96 -38.36)"/>\n                </g>\n              </g>\n              <g id="basement_women_s_bathroom" data-name="basement women&apos;s bathroom">\n                <g>\n                  <path class="cls-90" d="M628.21,1722c-2.44,0-3.81,1.26-3.81,3.83v26.48c0,2.4,1.23,3.66,3.67,3.66H654.7c2.44,0,3.67-1.2,3.67-3.66v-26.48c0-2.5-1.23-3.83-3.75-3.83Z" transform="translate(-13.96 -38.36)"/>\n                  <path class="cls-94" d="M657.69,1754.77a4,4,0,0,0,.68-2.43v-26.48c0-2.5-1.23-3.82-3.74-3.82H628.21a4.13,4.13,0,0,0-2.53.72A42.17,42.17,0,0,0,657.69,1754.77Z" transform="translate(-13.96 -38.36)"/>\n                </g>\n                <g>\n                  <path class="cls-18" d="M641.39,1731.29a2.08,2.08,0,1,0-2.19-2.08A2.13,2.13,0,0,0,641.39,1731.29Z" transform="translate(-13.96 -38.36)"/>\n                  <path class="cls-18" d="M647.31,1739.43l-1.87-5.87a3,3,0,0,0-3.05-1.86h-2a3.05,3.05,0,0,0-3,1.86l-1.87,5.87c-.39,1.27,1.14,1.71,1.54.53l2-5.37h.22s-2.6,9.62-2.71,10c0,.18,0,.31.23.31H639v6.32a1,1,0,0,0,2,0v-6.37h.77v6.37a1,1,0,0,0,2,0v-6.32h2.25c.2,0,.28-.13.22-.31-.11-.36-2.71-10-2.71-10h.23l2,5.37C646.17,1741.14,647.7,1740.7,647.31,1739.43Z" transform="translate(-13.96 -38.36)"/>\n                </g>\n              </g>\n              <g id="basement_handicap_bathroom" data-name="basement handicap bathroom">\n                <g>\n                  <path class="cls-90" d="M592.48,1722c-2.43,0-3.8,1.26-3.8,3.83v26.48c0,2.4,1.23,3.65,3.67,3.65H619c2.43,0,3.66-1.19,3.66-3.65v-26.48c0-2.5-1.23-3.83-3.74-3.83Z" transform="translate(-13.96 -38.36)"/>\n                  <path class="cls-95" d="M622,1754.77a4,4,0,0,0,.68-2.43v-26.48c0-2.5-1.24-3.83-3.75-3.83H592.48a4.12,4.12,0,0,0-2.52.73A42.17,42.17,0,0,0,622,1754.77Z" transform="translate(-13.96 -38.36)"/>\n                </g>\n                <g>\n                  <path class="cls-18" d="M602.41,1730.54a2.3,2.3,0,1,0-2.3-2.3A2.31,2.31,0,0,0,602.41,1730.54Z" transform="translate(-13.96 -38.36)"/>\n                  <path class="cls-18" d="M613.59,1747.65a1.38,1.38,0,0,0,1.85.46,1.36,1.36,0,0,0,.46-1.84L612,1739.5a1.37,1.37,0,0,0-1.11-.65h-5.75l-.06-2h4.18a1.07,1.07,0,0,0,1-1,1.05,1.05,0,0,0-1-1h-4.3l-.15-1.67a2.22,2.22,0,0,0-4.44.25l.4,7a2.3,2.3,0,0,0,2.34,2.1h7.46Z" transform="translate(-13.96 -38.36)"/>\n                  <path class="cls-18" d="M603.89,1750.28a6.82,6.82,0,0,1-4.44-12l-.12-2.14A8.62,8.62,0,1,0,611.76,1747l-1.22-2.1A6.82,6.82,0,0,1,603.89,1750.28Z" transform="translate(-13.96 -38.36)"/>\n                </g>\n              </g>\n              <g id="_1st_floor_-_mens_bathroom" data-name="1st floor - mens bathroom">\n                <g>\n                  <path class="cls-90" d="M1326.27,933.36c-2.43,0-3.8,1.26-3.8,3.82v26.48c0,2.4,1.23,3.66,3.67,3.66h26.63c2.43,0,3.66-1.2,3.66-3.66V937.18c0-2.5-1.23-3.82-3.74-3.82Z" transform="translate(-13.96 -38.36)"/>\n                  <path class="cls-96" d="M1355.76,966.1a4,4,0,0,0,.68-2.44V937.18c0-2.5-1.24-3.82-3.75-3.82h-26.42a4.06,4.06,0,0,0-2.52.73A42.2,42.2,0,0,0,1355.76,966.1Z" transform="translate(-13.96 -38.36)"/>\n                </g>\n                <path class="cls-18" d="M1340.11,940.23a2.19,2.19,0,1,0-2.19-2.18A2.18,2.18,0,0,0,1340.11,940.23Z" transform="translate(-13.96 -38.36)"/>\n                <path class="cls-18" d="M1342.46,940.66h-4.7c-2.11,0-2.79.55-2.79,2.84v6.71a.88.88,0,1,0,1.76,0l.15-6.14h.45v16.8a1.2,1.2,0,1,0,2.39,0l.15-9.75h.48l.15,9.75a1.2,1.2,0,1,0,2.39,0v-16.8h.45l.15,6.14a.88.88,0,1,0,1.76,0V943.5C1345.25,941.21,1344.56,940.66,1342.46,940.66Z" transform="translate(-13.96 -38.36)"/>\n              </g>\n              <g id="_1st_floor_-_handicap_bathrrom" data-name="1st floor - handicap bathrrom">\n                <g>\n                  <path class="cls-90" d="M1289.09,933.36c-2.43,0-3.8,1.25-3.8,3.82v26.48c0,2.4,1.23,3.66,3.66,3.66h26.64c2.43,0,3.66-1.2,3.66-3.66V937.18c0-2.5-1.23-3.82-3.74-3.82Z" transform="translate(-13.96 -38.36)"/>\n                  <path class="cls-97" d="M1318.58,966.1a4,4,0,0,0,.67-2.44V937.18c0-2.5-1.23-3.82-3.74-3.82h-26.42a4.06,4.06,0,0,0-2.52.73A42.18,42.18,0,0,0,1318.58,966.1Z" transform="translate(-13.96 -38.36)"/>\n                </g>\n                <path class="cls-18" d="M1299.41,940.54a2.3,2.3,0,1,0-2.3-2.3A2.31,2.31,0,0,0,1299.41,940.54Z" transform="translate(-13.96 -38.36)"/>\n                <path class="cls-18" d="M1310.59,957.65a1.38,1.38,0,0,0,1.85.46,1.36,1.36,0,0,0,.46-1.84L1309,949.5a1.37,1.37,0,0,0-1.11-.65h-5.75l-.06-2h4.18a1.07,1.07,0,0,0,1-1.05,1.05,1.05,0,0,0-1-1h-4.3l-.15-1.67a2.22,2.22,0,0,0-4.44.25l.4,7a2.3,2.3,0,0,0,2.34,2.1h7.46Z" transform="translate(-13.96 -38.36)"/>\n                <path class="cls-18" d="M1300.89,960.28a6.82,6.82,0,0,1-4.44-12l-.12-2.14A8.62,8.62,0,1,0,1308.76,957l-1.22-2.1A6.82,6.82,0,0,1,1300.89,960.28Z" transform="translate(-13.96 -38.36)"/>\n              </g>\n              <g id="basement_-_mens_bathroom" data-name="basement - mens bathroom">\n                <g>\n                  <path class="cls-90" d="M784.27,1707.36c-2.43,0-3.8,1.26-3.8,3.82v26.48c0,2.4,1.23,3.66,3.67,3.66h26.63c2.43,0,3.66-1.2,3.66-3.66v-26.48c0-2.5-1.23-3.82-3.74-3.82Z" transform="translate(-13.96 -38.36)"/>\n                  <path class="cls-98" d="M813.76,1740.1a4,4,0,0,0,.68-2.44v-26.48c0-2.5-1.24-3.82-3.75-3.82H784.27a4.06,4.06,0,0,0-2.52.73A42.2,42.2,0,0,0,813.76,1740.1Z" transform="translate(-13.96 -38.36)"/>\n                </g>\n                <path class="cls-18" d="M798.11,1714.23a2.19,2.19,0,1,0-2.19-2.18A2.18,2.18,0,0,0,798.11,1714.23Z" transform="translate(-13.96 -38.36)"/>\n                <path class="cls-18" d="M800.46,1714.66h-4.7c-2.11,0-2.79.55-2.79,2.84v6.71a.88.88,0,1,0,1.76,0l.15-6.14h.45v16.8a1.2,1.2,0,1,0,2.39,0l.15-9.75h.48l.15,9.75a1.2,1.2,0,1,0,2.39,0v-16.8h.45l.15,6.14a.88.88,0,1,0,1.76,0v-6.71C803.25,1715.21,802.56,1714.66,800.46,1714.66Z" transform="translate(-13.96 -38.36)"/>\n              </g>\n              <g id="basement-handicap_bathrrom" data-name="basement-handicap bathrrom">\n                <g>\n                  <path class="cls-90" d="M747.09,1707.36c-2.43,0-3.8,1.25-3.8,3.82v26.48c0,2.4,1.23,3.66,3.66,3.66h26.64c2.43,0,3.66-1.2,3.66-3.66v-26.48c0-2.5-1.23-3.82-3.74-3.82Z" transform="translate(-13.96 -38.36)"/>\n                  <path class="cls-99" d="M776.58,1740.1a4,4,0,0,0,.67-2.44v-26.48c0-2.5-1.23-3.82-3.74-3.82H747.09a4.06,4.06,0,0,0-2.52.73A42.18,42.18,0,0,0,776.58,1740.1Z" transform="translate(-13.96 -38.36)"/>\n                </g>\n                <path class="cls-18" d="M757.41,1714.54a2.3,2.3,0,1,0-2.3-2.3A2.31,2.31,0,0,0,757.41,1714.54Z" transform="translate(-13.96 -38.36)"/>\n                <path class="cls-18" d="M768.59,1731.65a1.38,1.38,0,0,0,1.85.46,1.36,1.36,0,0,0,.46-1.84L767,1723.5a1.37,1.37,0,0,0-1.11-.65h-5.75l-.06-2h4.18a1.07,1.07,0,0,0,1-1,1.05,1.05,0,0,0-1-1h-4.3l-.15-1.67a2.22,2.22,0,0,0-4.44.25l.4,7a2.3,2.3,0,0,0,2.34,2.1h7.46Z" transform="translate(-13.96 -38.36)"/>\n                <path class="cls-18" d="M758.89,1734.28a6.82,6.82,0,0,1-4.44-12l-.12-2.14A8.62,8.62,0,1,0,766.76,1731l-1.22-2.1A6.82,6.82,0,0,1,758.89,1734.28Z" transform="translate(-13.96 -38.36)"/>\n              </g>\n            </g>\n            <g id="Location_Labels" data-name="Location Labels">\n              <text class="cls-100" transform="translate(788.4 634.32) scale(0.97 1)">{{\'map.text.satellite.line1\' | translate }}</text>\n              <text class="cls-100" transform="translate(1131.75 1113.32) scale(0.97 1)" attr.aria-label="{{\'map.label.ozonegarden\'|translate}}" role="img">{{\'map.text.ozonegarden.line1\' | translate }}<tspan x="-4.38" y="18">{{\'map.text.ozonegarden.line2\' | translate }}</tspan></text>\n              <text class="cls-100" transform="translate(295.5 854.93) scale(0.97 1)" attr.aria-label="{{\'map.label.classroom\'|translate}}" role="img"><tspan x="-45.26" y="18">{{\'map.text.classroom.line1\' | translate }}</tspan></text>\n              <text class="cls-100" transform="translate(171.37 970.37) scale(0.97 1)" attr.aria-label="{{\'map.label.cafeteria\'|translate}}" role="img">{{\'map.text.cafeteria.line1\' | translate }} <tspan x="11.71" y="18">{{\'map.text.cafeteria.line2\' | translate }}</tspan></text>\n              <text class="cls-102" transform="translate(889.4 1008.44) scale(0.97 1)" attr.aria-label="{{\'map.label.weatherexhibit\'|translate}}" role="img">{{\'map.text.weatherexhibit.line1\' | translate }}</text>\n              <text class="cls-100" transform="translate(683.05 1111.73) scale(0.97 1)" attr.aria-label="{{\'map.text.theater\'|translate}}" role="img">{{\'map.text.theater.line1\' | translate }}</text>\n              <text class="cls-100" transform="translate(1044.06 975.18) scale(0.97 1)" attr.aria-label="{{\'map.label.aq\'|translate}}" role="img">{{\'map.text.aq.line1\' | translate }} <tspan x="-15.65" y="18">{{\'map.text.aq.line2\' | translate }}</tspan></text>\n              <text class="cls-100" transform="translate(1392.25 980.61) scale(0.97 1)" attr.aria-label="{{\'map.label.security\'|translate}}" role="img">{{\'map.text.security.line1\' | translate }}<tspan x="-10.71" y="18">{{\'map.text.security.line2\' | translate }}</tspan></text>\n              <text class="cls-100" transform="translate(1311.39 982.47) scale(0.97 1)" attr.aria-label="{{\'map.label.frontdesk\'|translate}}" role="img">{{\'map.text.frontdesk.line1\' | translate }}<tspan x="1.18" y="18">{{\'map.text.frontdesk.line2\' | translate }}</tspan></text>\n              <text class="cls-106" transform="translate(1154.43 975.28) scale(0.97 1)" attr.aria-label="{{\'map.text.lobby\'|translate}}" role="img">{{\'map.text.lobby.line1\' | translate | uppercase}}</text>\n              <g id="Weather_trail" data-name="Weather trail">\n                <text class="cls-108" transform="translate(484.88 20.43) scale(0.97 1)" attr.aria-label="{{\'map.text.weathertrail\'|translate}}" role="img">{{\'map.text.weathertrail.line1\' | translate }} <tspan class="cls-109" x="18.53" y="18">{{\'map.text.weathertrail.line2\' | translate }}</tspan></text>\n                <g class="cls-1">\n                  <polygon class="cls-111" points="449.39 1.74 449.59 1.73 449.71 1.84 449.39 1.74"/>\n                  <polygon class="cls-112" points="449.71 1.84 446.64 18.74 446.31 18.65 449.39 1.74 449.71 1.84"/>\n                  <polygon class="cls-113" points="441.64 2.4 438.57 19.31 438.45 19.2 441.52 2.29 441.64 2.4"/>\n                  <polygon class="cls-111" points="441.52 2.29 441.72 2.28 441.64 2.4 441.52 2.29"/>\n                  <polygon class="cls-114" points="441.72 2.28 438.65 19.19 438.57 19.31 441.64 2.4 441.72 2.28"/>\n                  <polygon class="cls-112" points="452.78 4.56 449.71 21.47 443.29 19.63 446.36 2.72 452.78 4.56"/>\n                  <polygon class="cls-115" points="468 7.07 464.93 23.97 463.57 25.43 466.64 8.52 468 7.07"/>\n                  <polygon class="cls-112" points="466.64 8.52 463.57 25.43 449.71 21.47 452.78 4.56 466.64 8.52"/>\n                  <polygon class="cls-114" points="446.36 2.72 443.29 19.63 441.64 22.03 444.71 5.12 446.36 2.72"/>\n                  <polygon class="cls-114" points="444.71 5.12 441.64 22.03 438.1 27.21 441.17 10.3 444.71 5.12"/>\n                  <polygon class="cls-116" points="441.17 10.3 438.1 27.21 433.89 26.14 436.96 9.24 441.17 10.3"/>\n                  <polygon class="cls-113" points="488.5 43.92 485.43 60.82 441.64 22.03 444.71 5.12 488.5 43.92"/>\n                  <polygon class="cls-111" points="443.28 0 449.39 1.74 449.71 1.84 468 7.07 466.64 8.52 452.78 4.56 446.36 2.72 444.71 5.12 441.17 10.3 436.96 9.24 441.64 2.4 441.72 2.28 443.28 0"/>\n                  <polygon class="cls-111" points="444.71 5.12 446.36 2.72 452.78 4.56 496.57 43.35 488.5 43.92 444.71 5.12"/>\n                  <polygon class="cls-117" points="496.57 43.35 493.5 60.26 485.43 60.82 488.5 43.92 496.57 43.35"/>\n                </g>\n              </g>\n              <g id="Sounding_climate" data-name="Sounding Climate">\n                <text class="cls-108" transform="translate(584.88 100.43) scale(0.97 1)" attr.aria-label="{{\'map.text.soundingclimate\'|translate}}" role="img">{{\'map.text.soundingclimate.line1\' | translate }} <tspan class="cls-109" x="18.53" y="18">{{\'map.text.soundingclimate.line2\' | translate }}</tspan></text>\n              </g>\n              <g id="ATM">\n                <path class="cls-118" d="M528.4,1165c0,9.48-7.42,17.16-16.57,17.16s-16.57-7.68-16.57-17.16,7.42-17.15,16.57-17.15S528.4,1155.53,528.4,1165Z" transform="translate(-13.96 -38.36)"/>\n                <text class="cls-119" transform="translate(477.69 1132.95) scale(0.97 1)">ATM</text>\n              </g>\n              <text class="cls-120" transform="translate(775.59 514.3) scale(0.97 1)" attr.aria-label="{{\'map.label.architecture\' | translate}}" role="img">{{\'map.text.ncararchitecture.line1\' | translate }} <tspan x="-21.62" y="18">{{\'map.text.ncararchitecture.line2\' | translate }}</tspan></text>\n              <text class="cls-100" transform="translate(1039.12 629.13) scale(0.97 1)" attr.aria-label="{{\'map.label.sunearth\' | translate}}" role="img">{{\'map.text.sunearth.line1\' | translate }}<tspan x="-8.79" y="18">{{\'map.text.sunearth.line2\' | translate }}</tspan></text>\n              <text class="cls-100" transform="translate(932.15 240.43) scale(0.97 1)" attr.aria-label="{{\'map.label.climateexhibit\' | translate}}" role="img">{{\'map.text.climateexhibit.line1\' | translate }} <tspan x="3.49" y="18">{{\'map.text.climateexhibit.line2\' | translate }}</tspan></text>\n              <text class="cls-100" transform="translate(713.87 644.37) scale(0.97 1)" attr.aria-label="{{\'map.label.seminarroom.line1\' | translate}}" role="img">{{\'map.text.seminarroom.line1\' | translate }} <tspan x="-15.85" y="18">{{\'map.text.seminarroom.line2\' | translate }}</tspan><tspan class="cls-124" x="-4.56" y="36" aria-hidden="true">{{\'map.text.seminarroom.line3\' | translate }}</tspan></text>\n              <text class="cls-100" transform="translate(592.77 329.36) scale(0.97 1)" attr.aria-label="{{\'map.text.library\' | translate}}" role="img">{{\'map.text.library\' | translate }}</text>\n              <text class="cls-100" transform="translate(528.52 89.85) scale(0.97 1)" attr.aria-label="{{\'map.label.artscigallery\' | translate}}" role="img">{{\'map.text.artsci.line1\' | translate }}<tspan x="-19.98" y="18">{{\'map.text.artsci.line2\' | translate }}</tspan><tspan x="-17.41" y="36">{{\'map.text.artsci.line3\' | translate }}</tspan></text>\n              <text class="cls-100" transform="translate(548.52 906.85) scale(0.97 1)" attr.aria-label="{{\'map.label.artsci\' | translate}}" role="img">{{\'map.text.artsci.line1\' | translate }}<tspan x="-19.98" y="18">{{\'map.text.artsci.line2\' | translate }}</tspan></text>\n              <text class="cls-126" transform="translate(479.49 1070.65) scale(0.97 1)" attr.aria-label="{{\'map.text.atmosphere]\' | translate}}" role="img">{{\'map.text.atmosphere.line1\' | translate }}</text>\n              <text class="cls-126" transform="translate(473.49 291.65) scale(0.97 1)" attr.aria-label="{{\'map.text.atmosphere\' | translate}}" role="img">{{\'map.text.atmosphere.line1\' | translate }}</text>\n              <g id="To_picnic_area" data-name="To picnic area">\n                <text transform="translate(397.1 1261.47) scale(0.97 1)" attr.aria-label="{{\'map.text.topicnicarea\' | translate}}" role="img">{{\'map.text.topicnicarea\'|translate}}</text>\n                <g class="cls-1">\n                  <polygon class="cls-129" points="507.54 1242.95 504.47 1259.86 460.68 1221.07 463.75 1204.16 507.54 1242.95"/>\n                  <polygon class="cls-130" points="523.36 1238.28 520.29 1255.19 515.62 1262.01 518.68 1245.11 523.36 1238.28"/>\n                  <polygon class="cls-130" points="518.68 1245.11 515.62 1262.01 515.53 1262.14 518.6 1245.23 518.68 1245.11"/>\n                  <polygon class="cls-131" points="518.81 1245.22 518.6 1245.23 518.68 1245.11 518.81 1245.22"/>\n                  <polygon class="cls-132" points="518.81 1245.22 515.74 1262.12 515.53 1262.14 518.6 1245.23 518.81 1245.22"/>\n                  <polygon class="cls-130" points="515.61 1242.38 512.54 1259.29 510.89 1261.7 513.97 1244.79 515.61 1242.38"/>\n                  <polygon class="cls-133" points="513.97 1244.79 510.89 1261.7 504.47 1259.86 507.54 1242.95 513.97 1244.79"/>\n                  <polygon class="cls-131" points="519.15 1237.21 523.36 1238.28 518.68 1245.11 518.6 1245.23 517.04 1247.51 510.94 1245.77 510.61 1245.67 492.33 1240.45 493.68 1238.99 507.54 1242.95 513.97 1244.79 515.61 1242.38 519.15 1237.21"/>\n                  <polygon class="cls-131" points="463.75 1204.16 471.83 1203.59 515.61 1242.38 513.97 1244.79 507.54 1242.95 463.75 1204.16"/>\n                  <polygon class="cls-133" points="510.61 1245.67 507.54 1262.58 489.26 1257.36 492.33 1240.45 510.61 1245.67"/>\n                  <polygon class="cls-133" points="510.94 1245.77 507.87 1262.67 507.54 1262.58 510.61 1245.67 510.94 1245.77"/>\n                  <polygon class="cls-129" points="510.73 1245.78 507.66 1262.69 507.54 1262.58 510.61 1245.67 510.73 1245.78"/>\n                  <polygon class="cls-131" points="510.73 1245.78 510.61 1245.67 510.94 1245.77 510.73 1245.78"/>\n                  <polygon class="cls-132" points="510.94 1245.77 507.87 1262.67 507.66 1262.69 510.73 1245.78 510.94 1245.77"/>\n                  <polygon class="cls-130" points="518.6 1245.23 515.53 1262.14 513.97 1264.42 517.04 1247.51 518.6 1245.23"/>\n                  <polygon class="cls-133" points="517.04 1247.51 513.97 1264.42 507.87 1262.67 510.94 1245.77 517.04 1247.51"/>\n                </g>\n              </g>\n            </g>\n            <line class="cls-31" x1="178.31" y1="850.73" x2="248.81" y2="912.23"/>\n            <g id="group_-_front_entrance_to_lobby" data-name="group - front entrance to lobby">\n              <g class="cls-1">\n                <polygon class="cls-133" points="1222.2 1018.82 1219.13 1035.73 1218.81 1035.64 1221.88 1018.73 1222.2 1018.82"/>\n                <polygon class="cls-129" points="1214.13 1019.39 1211.06 1036.3 1210.94 1036.19 1214.01 1019.28 1214.13 1019.39"/>\n                <polygon class="cls-130" points="1214.22 1019.26 1211.15 1036.17 1211.06 1036.3 1214.13 1019.39 1214.22 1019.26"/>\n                <polygon class="cls-131" points="1215.78 1016.99 1221.88 1018.73 1222.2 1018.82 1240.49 1024.05 1239.13 1025.51 1225.28 1021.54 1218.85 1019.71 1217.2 1022.11 1213.66 1027.29 1209.46 1026.22 1214.13 1019.39 1214.22 1019.26 1215.78 1016.99"/>\n                <polygon class="cls-131" points="1221.88 1018.73 1222.08 1018.72 1222.2 1018.82 1221.88 1018.73"/>\n                <polygon class="cls-131" points="1214.01 1019.28 1214.22 1019.26 1214.13 1019.39 1214.01 1019.28"/>\n                <polygon class="cls-133" points="1225.28 1021.54 1222.2 1038.45 1215.78 1036.61 1218.85 1019.71 1225.28 1021.54"/>\n                <polygon class="cls-134" points="1240.49 1024.05 1237.42 1040.96 1236.06 1042.41 1239.13 1025.51 1240.49 1024.05"/>\n                <polygon class="cls-133" points="1239.13 1025.51 1236.06 1042.41 1222.2 1038.45 1225.28 1021.54 1239.13 1025.51"/>\n                <polygon class="cls-130" points="1218.85 1019.71 1215.78 1036.61 1214.13 1039.02 1217.2 1022.11 1218.85 1019.71"/>\n                <polygon class="cls-130" points="1217.2 1022.11 1214.13 1039.02 1210.59 1044.19 1213.66 1027.29 1217.2 1022.11"/>\n                <polygon class="cls-135" points="1213.66 1027.29 1210.59 1044.19 1206.39 1043.13 1209.46 1026.22 1213.66 1027.29"/>\n                <polygon class="cls-131" points="1217.2 1022.11 1218.85 1019.71 1225.28 1021.54 1269.06 1060.34 1260.99 1060.9 1217.2 1022.11"/>\n                <polygon class="cls-132" points="1269.06 1060.34 1265.99 1077.24 1257.92 1077.81 1260.99 1060.9 1269.06 1060.34"/>\n                <polygon class="cls-129" points="1260.99 1060.9 1257.92 1077.81 1214.13 1039.02 1217.2 1022.11 1260.99 1060.9"/>\n              </g>\n              <polyline id="Path_-_entrance_to_lobby" data-name="Path - entrance to lobby" class="cls-136" points="1174.2 1057.64 1272.2 1159.64 1134.2 1171.64 1172.2 1209.64 1307.2 1201.64"/>\n              <g>\n                <text class="cls-137" transform="translate(1178 1187.83) scale(0.97 1)">{{\'map.text.ramptolobby\'|translate}}</text>\n              </g>\n            </g>\n            <g id="group_-_parking_to_elevator" data-name="group - parking to elevator" role="img" attr.aria-label="{{\'map.label.wheelchairentrance\' | translate}}">\n              <g>\n                <path class="cls-90" d="M498.27,1993.36c-2.43,0-3.8,1.26-3.8,3.82v26.48c0,2.4,1.23,3.66,3.67,3.66h26.63c2.43,0,3.66-1.2,3.66-3.66v-26.48c0-2.5-1.23-3.82-3.74-3.82Z" transform="translate(-13.96 -38.36)"/>\n                <path class="cls-138" d="M527.76,2026.1a4,4,0,0,0,.68-2.44v-26.48c0-2.5-1.24-3.82-3.75-3.82H498.27a4.06,4.06,0,0,0-2.52.73A42.2,42.2,0,0,0,527.76,2026.1Z" transform="translate(-13.96 -38.36)"/>\n              </g>\n              <g>\n                <path class="cls-90" d="M461.09,1993.36c-2.43,0-3.8,1.25-3.8,3.82v26.48c0,2.4,1.23,3.66,3.66,3.66h26.64c2.43,0,3.66-1.2,3.66-3.66v-26.48c0-2.5-1.23-3.82-3.74-3.82Z" transform="translate(-13.96 -38.36)"/>\n                <path class="cls-139" d="M490.58,2026.1a4,4,0,0,0,.67-2.44v-26.48c0-2.5-1.23-3.82-3.74-3.82H461.09a4.06,4.06,0,0,0-2.52.73A42.18,42.18,0,0,0,490.58,2026.1Z" transform="translate(-13.96 -38.36)"/>\n              </g>\n              <g id="Wheelchair_access_from_parking" data-name="Wheelchair access from parking">\n                <path class="cls-18" d="M471.41,2001.54a2.3,2.3,0,1,0-2.3-2.3A2.31,2.31,0,0,0,471.41,2001.54Z" transform="translate(-13.96 -38.36)"/>\n                <path class="cls-18" d="M482.59,2018.65a1.38,1.38,0,0,0,1.85.46,1.36,1.36,0,0,0,.46-1.84L481,2010.5a1.37,1.37,0,0,0-1.11-.65h-5.75l-.06-2h4.18a1.07,1.07,0,0,0,1-1,1.05,1.05,0,0,0-1-1h-4.3l-.15-1.67a2.22,2.22,0,0,0-4.44.25l.4,7a2.3,2.3,0,0,0,2.34,2.1h7.46Z" transform="translate(-13.96 -38.36)"/>\n                <path class="cls-18" d="M472.89,2021.28a6.82,6.82,0,0,1-4.44-12l-.12-2.14A8.62,8.62,0,1,0,480.76,2018l-1.22-2.1A6.82,6.82,0,0,1,472.89,2021.28Z" transform="translate(-13.96 -38.36)"/>\n              </g>\n              <text class="cls-25" transform="translate(293.65 1980.94)">{{\'map.text.entrance.line1\' | translate }}</text>\n              <g class="cls-1">\n                <polygon class="cls-131" points="435.87 1925.37 436.09 1925.36 436.2 1925.46 435.87 1925.37"/>\n                <polygon class="cls-140" points="436.2 1925.46 433.13 1942.37 432.79 1942.28 435.87 1925.37 436.2 1925.46"/>\n                <polygon class="cls-140" points="430.18 1925.66 427.11 1942.57 413.1 1938.8 416.17 1921.89 430.18 1925.66"/>\n                <polygon class="cls-140" points="436.7 1927.42 433.63 1944.32 427.11 1942.57 430.18 1925.66 436.7 1927.42"/>\n                <polygon class="cls-141" points="442.37 1927.12 439.3 1944.03 437.08 1946.13 440.15 1929.22 442.37 1927.12"/>\n                <polygon class="cls-141" points="440.15 1929.22 437.08 1946.13 436.96 1946.24 440.03 1929.33 440.15 1929.22"/>\n                <polygon class="cls-131" points="440.25 1929.32 440.03 1929.33 440.15 1929.22 440.25 1929.32"/>\n                <polygon class="cls-132" points="440.25 1929.32 437.18 1946.23 436.96 1946.24 440.03 1929.33 440.25 1929.32"/>\n                <polygon class="cls-141" points="436.7 1927.42 433.63 1944.32 431.28 1946.53 434.35 1929.62 436.7 1927.42"/>\n                <polygon class="cls-132" points="434.35 1929.62 431.28 1946.53 350.31 1950.7 353.38 1933.79 434.35 1929.62"/>\n                <polygon class="cls-142" points="433.36 1935.61 430.29 1952.52 426.22 1951.29 429.29 1934.38 433.36 1935.61"/>\n                <polygon class="cls-131" points="417.37 1920.39 435.87 1925.37 436.2 1925.46 442.37 1927.12 440.15 1929.22 440.03 1929.33 433.36 1935.61 429.29 1934.38 434.35 1929.62 436.7 1927.42 430.18 1925.66 416.17 1921.89 417.37 1920.39"/>\n                <polygon class="cls-141" points="440.03 1929.33 436.96 1946.24 430.29 1952.52 433.36 1935.61 440.03 1929.33"/>\n                <polygon class="cls-131" points="349.23 1929.84 430.18 1925.66 436.7 1927.42 434.35 1929.62 353.38 1933.79 349.23 1929.84"/>\n                <polygon class="cls-143" points="353.38 1933.79 350.31 1950.7 346.16 1946.74 349.23 1929.84 353.38 1933.79"/>\n              </g>\n              <text class="cls-144" transform="translate(487.08 1983.44) scale(0.97 1)">P</text>\n              <g>\n                <text class="cls-137" transform="translate(348 2017.83) scale(0.97 1)">{{\'map.text.disabilityparking\'|translate}}</text>\n              </g>\n              <polyline id="path_-_from_parking_to_elevator" data-name="path - from parking to elevator" class="cls-145" points="611.2 1669.64 789.2 1655.64 955.2 1794.64 550.2 1828.64 658.2 1920.64 510.2 1933.64"/>\n              <g>\n                <text class="cls-137" transform="translate(668 1841.83) scale(0.97 1)">{{\'map.text.routetoelevator\'|translate}}</text>\n              </g>\n            </g>\n            <g id="group_-_first_floor_to_mezzanine" data-name="group - first floor to mezzanine" attr.aria-label="{{\'map.label.routetomezzanine\'| translate}}" role="img">\n              <g>\n                <text class="cls-137" transform="translate(1406 839.83) scale(0.97 1)">{{\'map.text.routeto\'|translate}} <tspan x="0" y="23.36">{{\'map.text.mezzanine.line1\' | translate}}</tspan></text>\n              </g>\n              <polyline id="path_-_1st_floor_to_mezzanine" data-name="path - 1st floor to mezzanine" class="cls-145" points="1334.2 940.64 1455.2 930.64 1416.2 892.64"/>\n              <g>\n                <circle class="cls-146" cx="1429.7" cy="886.14" r="14.5"/>\n                <text class="cls-147" transform="translate(1422.2 892.6) scale(0.97 1)">A</text>\n              </g>\n            </g>\n            <g id="group_-_mezzanine_to_1st_floor" data-name="group - mezzanine to 1st floor" role="img" attr.aria-label="{{\'map.label.wheelchairramp1\' | translate}}">\n              <g id="Ramp">\n                <text class="cls-137" transform="translate(829 581.83) scale(0.97 1)">Ramp</text>\n                <g>\n                  <line class="cls-7" x1="933.54" y1="585.38" x2="973.89" y2="582.72"/>\n                  <polygon class="cls-8" points="960.55 601.6 957.35 598.59 972.21 582.84 955.41 569.17 958.19 565.76 978.64 582.41 960.55 601.6"/>\n                </g>\n              </g>\n              <g>\n                <circle class="cls-146" cx="1174.7" cy="586.14" r="14.5"/>\n                <text class="cls-147" transform="translate(1167.2 592.6) scale(0.97 1)">A</text>\n              </g>\n              <polyline id="path_-_mezzanine_to_1st_floor" data-name="path - mezzanine to 1st floor" class="cls-145" points="1162.2 591.64 1136.2 566.64 913.2 583.64 874.2 547.64 774.2 555.64 838.2 612.64"/>\n            </g>\n          </g>\n        </svg>\n    </div>\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <ion-buttons start>\n      <button icon-only role="button" color="positive" id="pan-left" (tap)="panZoom.panBy({x:-50, y:0})" attr.aria-label="{{ \'map.buttons.panleft\' | translate }}" ion-button><ion-icon name="arrow-dropleft-circle" aria-hidden="true"></ion-icon></button>\n      <button icon-only role="button" color="positive" id="pan-left" (tap)="panZoom.panBy({x:50, y:0})" attr.aria-label="{{ \'map.buttons.panright\' | translate }}" ion-button><ion-icon name="arrow-dropright-circle" aria-hidden="true"></ion-icon></button>\n      <button icon-only role="button" color="positive" id="pan-left" (tap)="panZoom.panBy({x:0, y:-50})" attr.aria-label="{{ \'map.buttons.panup\' | translate }}" ion-button><ion-icon name="arrow-dropup-circle" aria-hidden="true"></ion-icon></button>\n      <button icon-only role="button" color="positive" id="pan-left" (tap)="panZoom.panBy({x:0, y:50})" attr.aria-label="{{ \'map.buttons.pandown\' | translate }}" ion-button><ion-icon name="arrow-dropdown-circle" aria-hidden="true"></ion-icon></button>\n      <button icon-only role="button" color="positive" id="zoom-in" (tap)="panZoom.zoomIn()" attr.aria-label="{{\'map.buttons.zoomin\' | translate}} " ion-button><ion-icon name="add-circle" aria-hidden="true"></ion-icon></button>\n      <button icon-only role="button" color="positive" id="zoom-out" (tap)="panZoom.zoomOut()" attr.aria-label="{{\'map.buttons.zoomout\' | translate}}" ion-button><ion-icon name="remove-circle" aria-hidden="true"></ion-icon></button>\n    </ion-buttons>\n    <ion-buttons end>\n      <button icon-only role="button" color="danger" id="reset" (tap)="panZoom.reset()" attr.aria-label="{{\'map.buttons.reset\' | translate}}" ion-button><ion-icon name="refresh" aria-hidden="true"></ion-icon></button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/Users/sclark/Documents/Development/mobile/ionic/sciedtourguide/src/pages/map/mapaccess.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_shared_vars__["a" /* SharedVars */]])
    ], MapAccessPage);
    return MapAccessPage;
}());

//# sourceMappingURL=mapaccess.js.map

/***/ })

});
//# sourceMappingURL=1.js.map