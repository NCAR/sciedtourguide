webpackJsonp([2],{

/***/ 694:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapPageModule", function() { return MapPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__map__ = __webpack_require__(722);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_titlebar_title_module__ = __webpack_require__(701);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var MapPageModule = /** @class */ (function () {
    function MapPageModule() {
    }
    MapPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__map__["a" /* MapPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__components_titlebar_title_module__["a" /* TitleComponentModule */],
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild(),
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__map__["a" /* MapPage */]),
            ],
        })
    ], MapPageModule);
    return MapPageModule;
}());

//# sourceMappingURL=map.module.js.map

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

/***/ 703:
/***/ (function(module, exports, __webpack_require__) {

var Utils = __webpack_require__(704)
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

/***/ 704:
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

/***/ 706:
/***/ (function(module, exports, __webpack_require__) {

var SvgPanZoom = __webpack_require__(707);

module.exports = SvgPanZoom;


/***/ }),

/***/ 707:
/***/ (function(module, exports, __webpack_require__) {

var Wheel = __webpack_require__(708)
, ControlIcons = __webpack_require__(709)
, Utils = __webpack_require__(704)
, SvgUtils = __webpack_require__(703)
, ShadowViewport = __webpack_require__(710)

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

/***/ 708:
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

/***/ 709:
/***/ (function(module, exports, __webpack_require__) {

var SvgUtils = __webpack_require__(703);

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

/***/ 710:
/***/ (function(module, exports, __webpack_require__) {

var SvgUtils = __webpack_require__(703)
  , Utils = __webpack_require__(704)
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

/***/ 711:
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
    !(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
        return Hammer;
    }.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
} else if (typeof module != 'undefined' && module.exports) {
    module.exports = Hammer;
} else {
    window[exportName] = Hammer;
}

})(window, document, 'Hammer');


/***/ }),

/***/ 722:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_shared_vars__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_svg_pan_zoom__ = __webpack_require__(706);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_svg_pan_zoom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_svg_pan_zoom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs__ = __webpack_require__(711);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_hammerjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MapPage = /** @class */ (function () {
    function MapPage(sharedVars, events) {
        this.sharedVars = sharedVars;
        this.events = events;
        this.selectedItem = '';
        this.highlightedStop = '';
    }
    MapPage.prototype.ngOnInit = function () {
        var eventsHandler;
        eventsHandler = {
            haltEventListeners: ['touchstart', 'touchend', 'touchmove', 'touchleave', 'touchcancel'],
            init: function (options) {
                var instance = options.instance, initialScale = 1, pannedX = 0, pannedY = 0;
                // Init Hammer
                // Listen only for pointer and touch events
                this.hammer = __WEBPACK_IMPORTED_MODULE_4_hammerjs___default()(options.svgElement, {
                    inputClass: __WEBPACK_IMPORTED_MODULE_4_hammerjs___default.a.SUPPORT_POINTER_EVENTS ? __WEBPACK_IMPORTED_MODULE_4_hammerjs___default.a.PointerEventInput : __WEBPACK_IMPORTED_MODULE_4_hammerjs___default.a.TouchInput
                });
                // Enable pinch
                this.hammer.get('pinch').set({ enable: true });
                // Handle double tap
                this.hammer.on('doubletap', function (ev) {
                    instance.zoomIn();
                });
                // Handle pan
                this.hammer.on('panstart panmove', function (ev) {
                    // On pan start reset panned variables
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
                    // On pinch start remember initial zoom
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
        this.panZoom = __WEBPACK_IMPORTED_MODULE_3_svg_pan_zoom___default()('#svg', options);
    };
    MapPage.prototype.ionViewDidEnter = function () {
        this.sharedVars.trackView('Map - Interactive');
    };
    MapPage.prototype.loadPage = function (item) {
        this.events.publish('reset-exhibits', 0);
        this.events.publish('change-tab', 0, item);
    };
    MapPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-map',template:/*ion-inline-start:"/Users/sclark/Documents/Development/mobile/ionic/sciedtourguide/src/pages/map/map.html"*/'<ion-header>\n  <app-title [title]="\'map.interactive.button_text\' | translate"></app-title>\n</ion-header>\n<ion-content no-bounce>\n  <div class="zoom">\n  <svg id="svg" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n  	 viewBox="0 0 1536 1727.051" style="enable-background:new 0 0 1536 1727.051;" xml:space="preserve" width="100%" height="100%" aria-labelledby="mapTitle mapDesc" role="group">\n<title id="mapTitle">{{ \'map.text.title\' | translate}}</title>\n<desc id="mapDesc">{{\'map.text.desc\' | translate}}</desc>\n  <g id="More_stairs">\n  	<g id="stairs_to_2nd_floor_from_1st_floor_by_classroom" role="region" attr.aria-label="{{\'map.label.stairsclassroom\'| translate}}">\n  		<g>\n  			<g>\n  				<g class="st0">\n  					<g>\n  						<polygon class="st1" points="441.953,910.79 460.003,926.202 424.927,928.824 406.877,913.412"/>\n  					</g>\n  					<g>\n  						<polygon class="st2" points="460.003,926.202 456.87,944.352 421.793,946.974 424.927,928.824"/>\n  					</g>\n  					<g>\n  						<polygon class="st3" points="424.927,928.824 421.793,946.974 403.743,931.562 406.877,913.412"/>\n  					</g>\n  				</g>\n  			</g>\n  		</g>\n  		<g>\n  			<g>\n  				<g class="st0">\n  					<g>\n  						<polygon class="st4" points="471.886,975.084 475.266,978.079 439.601,980.573 436.221,977.578"/>\n  					</g>\n  					<g>\n  						<polygon class="st1" points="475.266,978.079 473.642,987.025 437.977,989.519 439.601,980.573"/>\n  					</g>\n  					<g>\n  						<polygon class="st3" points="439.601,980.573 437.977,989.519 434.596,986.524 436.221,977.578"/>\n  					</g>\n  				</g>\n  			</g>\n  		</g>\n  		<g>\n  			<g>\n  				<g class="st0">\n  					<g>\n  						<polygon class="st4" points="468.771,962.618 472.152,965.614 436.479,968.108 433.098,965.113"/>\n  					</g>\n  					<g>\n  						<polygon class="st1" points="472.152,965.614 470.527,974.56 434.854,977.054 436.479,968.108"/>\n  					</g>\n  					<g>\n  						<polygon class="st3" points="436.479,968.108 434.854,977.054 431.474,974.059 433.098,965.113"/>\n  					</g>\n  				</g>\n  			</g>\n  		</g>\n  		<g>\n  			<g>\n  				<g class="st0">\n  					<g>\n  						<polygon class="st4" points="465.657,950.162 469.038,953.158 433.365,955.652 429.984,952.657"/>\n  					</g>\n  					<g>\n  						<polygon class="st1" points="469.038,953.158 467.413,962.104 431.74,964.598 433.365,955.652"/>\n  					</g>\n  					<g>\n  						<polygon class="st3" points="433.365,955.652 431.74,964.598 428.36,961.603 429.984,952.657"/>\n  					</g>\n  				</g>\n  			</g>\n  		</g>\n  		<g>\n  			<g>\n  				<g class="st0">\n  					<g>\n  						<polygon class="st4" points="462.543,937.706 465.924,940.702 430.251,943.196 426.87,940.201"/>\n  					</g>\n  					<g>\n  						<polygon class="st1" points="465.924,940.702 464.299,949.648 428.626,952.142 430.251,943.196"/>\n  					</g>\n  					<g>\n  						<polygon class="st3" points="430.251,943.196 428.626,952.142 425.246,949.147 426.87,940.201"/>\n  					</g>\n  				</g>\n  			</g>\n  		</g>\n  		<g>\n  			<g>\n  				<g class="st0">\n  					<g>\n  						<polygon class="st4" points="459.429,925.241 462.81,928.237 427.137,930.731 423.756,927.736"/>\n  					</g>\n  					<g>\n  						<polygon class="st1" points="462.81,928.237 461.185,937.183 425.512,939.677 427.137,930.731"/>\n  					</g>\n  					<g>\n  						<polygon class="st3" points="427.137,930.731 425.512,939.677 422.132,936.682 423.756,927.736"/>\n  					</g>\n  				</g>\n  			</g>\n  		</g>\n  		<g>\n  			<g>\n  				<g class="st0">\n  					<g>\n  						<polygon class="st1" points="457.33,899.845 476.005,915.791 462.862,916.773 444.187,900.828"/>\n  					</g>\n  					<g>\n  						<polygon class="st2" points="476.005,915.791 474.054,927.092 460.911,928.075 462.862,916.773"/>\n  					</g>\n  					<g>\n  						<polygon class="st3" points="462.862,916.773 460.911,928.075 442.236,912.129 444.187,900.828"/>\n  					</g>\n  				</g>\n  			</g>\n  		</g>\n  		<g>\n  			<g>\n  				<g class="st0">\n  					<g>\n  						<polygon class="st1" points="469.798,893.614 488.468,909.556 475.325,910.539 456.655,894.597"/>\n  					</g>\n  					<g>\n  						<polygon class="st2" points="488.468,909.556 486.517,920.858 473.374,921.84 475.325,910.539"/>\n  					</g>\n  					<g>\n  						<polygon class="st3" points="475.325,910.539 473.374,921.84 454.703,905.898 456.655,894.597"/>\n  					</g>\n  				</g>\n  			</g>\n  		</g>\n  		<g>\n  			<g>\n  				<g class="st0">\n  					<g>\n  						<polygon class="st1" points="482.251,887.38 500.926,903.326 487.783,904.308 469.108,888.363"/>\n  					</g>\n  					<g>\n  						<polygon class="st2" points="500.926,903.326 498.975,914.627 485.832,915.61 487.783,904.308"/>\n  					</g>\n  					<g>\n  						<polygon class="st3" points="487.783,904.308 485.832,915.61 467.157,899.664 469.108,888.363"/>\n  					</g>\n  				</g>\n  			</g>\n  		</g>\n  		<g id="to_2nd_floor_from_1st_floor_2_">\n  			<rect x="448.961" y="864.732" class="st5" width="262.235" height="80.979"/>\n  			<text transform="matrix(0.9661 0 0 1 448.9615 878.412)" class="st6 st7 st8" role="presentation">{{\'map.text.tosecondfloor\'|translate}}</text>\n  			<g id="to_2nd_floor_from_1st_floor_4_">\n  				<g>\n  					<line class="st9" x1="402.982" y1="896.138" x2="438.899" y2="877.56"/>\n  					<g>\n  						<polygon class="st6" points="434.226,900.201 430.087,898.72 437.404,878.339 416.54,872.529 417.723,868.296\n  							443.132,875.376"/>\n  					</g>\n  				</g>\n  			</g>\n  		</g>\n  	</g>\n  	<g id="stairs_to_mezzanine_from_2nd_floor" role="region" attr.aria-label="{{\'map.label.stairscentral2m\'| translate}}">\n  		<g>\n  			<g>\n  				<g class="st0">\n  					<g>\n  						<polygon class="st1" points="915.399,272.258 933.449,287.67 898.38,290.292 880.33,274.88"/>\n  					</g>\n  					<g>\n  						<polygon class="st2" points="933.449,287.67 930.315,305.82 895.247,308.442 898.38,290.292"/>\n  					</g>\n  					<g>\n  						<polygon class="st3" points="898.38,290.292 895.247,308.442 877.196,293.029 880.33,274.88"/>\n  					</g>\n  				</g>\n  			</g>\n  		</g>\n  		<g>\n  			<g>\n  				<g class="st0">\n  					<g>\n  						<polygon class="st1" points="927.863,275.372 945.913,290.784 910.837,293.406 892.787,277.994"/>\n  					</g>\n  					<g>\n  						<polygon class="st2" points="945.913,290.784 942.78,308.934 907.703,311.556 910.837,293.406"/>\n  					</g>\n  					<g>\n  						<polygon class="st3" points="910.837,293.406 907.703,311.556 889.653,296.144 892.787,277.994"/>\n  					</g>\n  				</g>\n  			</g>\n  		</g>\n  		<g>\n  			<g>\n  				<g class="st0">\n  					<g>\n  						<polygon class="st1" points="940.32,278.486 958.37,293.898 923.301,296.52 905.251,281.108"/>\n  					</g>\n  					<g>\n  						<polygon class="st2" points="958.37,293.898 955.236,312.048 920.168,314.67 923.301,296.52"/>\n  					</g>\n  					<g>\n  						<polygon class="st3" points="923.301,296.52 920.168,314.67 902.117,299.257 905.251,281.108"/>\n  					</g>\n  				</g>\n  			</g>\n  		</g>\n  		<g id="to_mezzanine_from_2nd_floor">\n  			<rect x="895.961" y="239.732" class="st5" width="262.235" height="80.979"/>\n  			<text transform="matrix(0.9661 0 0 1 895.9615 253.412)" class="st6 st7 st8" role="presentation">{{\'map.text.tomezzanine\'|translate}}</text>\n  			<g id="to_mezzanine_from_2nd_floor_1_">\n  				<g>\n  					<line class="st9" x1="886.13" y1="248.372" x2="850.213" y2="266.95"/>\n  					<g>\n  						<polygon class="st6" points="854.886,244.31 859.025,245.791 851.708,266.172 872.572,271.981 871.389,276.215\n  							845.98,269.135"/>\n  					</g>\n  				</g>\n  			</g>\n  		</g>\n  	</g>\n  </g>\n  <g id="Spaces">\n  	<g id="Ozone_garden">\n  		<g id="Ozone_Garden">\n  			<g>\n  				<g class="st0">\n  					<g>\n  						<polygon class="st11" points="1205.782,1183.179 1235.737,1208.756 1141.967,1215.767 1112.012,1190.189"/>\n  					</g>\n  					<g>\n  						<polygon class="st11" points="1235.737,1208.756 1231.955,1230.659 1138.185,1237.67 1141.967,1215.767"/>\n  					</g>\n  					<g>\n  						<polygon class="st12" points="1141.967,1215.767 1138.185,1237.67 1108.23,1212.093 1112.012,1190.189"/>\n  					</g>\n  				</g>\n  			</g>\n  		</g>\n  	</g>\n  	<g id="architecture">\n  		<g id="Ramp_to_supercomputing_area">\n  			<g>\n  				<g class="st0">\n  					<g>\n  						<polygon class="st16" points="1095.681,654.678 1121.247,676.508 978.343,687.192 952.776,665.362"/>\n  					</g>\n  					<g>\n  						<polygon class="st17" points="1121.247,676.508 1116.358,704.826 973.453,715.511 978.343,687.192"/>\n  					</g>\n  					<g>\n  						<polygon class="st18" points="978.343,687.192 973.453,715.511 947.887,693.681 952.776,665.362"/>\n  					</g>\n  				</g>\n  			</g>\n  		</g>\n  		<g id="NCAR_architecture">\n  			<g>\n  				<g class="st0">\n  					<g>\n  						<polygon class="st19" points="895.546,619.032 977.913,689.361 840.113,699.664 757.747,629.334"/>\n  					</g>\n  					<g>\n  						<polygon class="st20" points="977.913,689.361 973.024,717.68 835.224,727.982 840.113,699.664"/>\n  					</g>\n  					<g>\n  						<polygon class="st21" points="840.113,699.664 835.224,727.982 752.857,657.653 757.747,629.334"/>\n  					</g>\n  				</g>\n  			</g>\n  		</g>\n  	</g>\n  	<g id="Sun-Earth_connections">\n  		<g id="Sun-Earth_connections_1_">\n  			<g>\n  				<g class="st0">\n  					<g>\n  						<polygon class="st22" points="1120.254,678.264 1204.369,750.086 1063.38,760.627 979.266,688.805"/>\n  					</g>\n  					<g>\n  						<polygon class="st23" points="1204.369,750.086 1199.479,778.404 1058.491,788.945 1063.38,760.627"/>\n  					</g>\n  					<g>\n  						<polygon class="st24" points="1063.38,760.627 1058.491,788.945 974.376,717.123 979.266,688.805"/>\n  					</g>\n  				</g>\n  			</g>\n  		</g>\n  	</g>\n  	<g id="Art_science_gallery">\n  		<g id="Art_science_gallery_1_" aria-labelledby="art_science_gallery_label_2nd_floor">\n  			<g>\n  				<g class="st0">\n  					<g>\n  						<polygon class="st25" points="558.672,150.837 613.174,197.374 518.737,204.435 464.235,157.898"/>\n  					</g>\n  					<g>\n  						<polygon class="st25" points="613.174,197.374 608.285,225.693 513.847,232.753 518.737,204.435"/>\n  					</g>\n  					<g>\n  						<polygon class="st26" points="518.737,204.435 513.847,232.753 459.345,186.216 464.235,157.898"/>\n  					</g>\n  				</g>\n  			</g>\n  		</g>\n  		<g id="Art_science_gallery_hallway" aria-labelledby="art_science_gallery_label_1st_floor">\n  			<g>\n  				<g class="st0">\n  					<g>\n  						<polygon class="st25" points="593.203,197.535 713.093,299.904 637.16,305.581 517.27,203.212"/>\n  					</g>\n  					<g>\n  						<polygon class="st25" points="713.093,299.904 708.204,328.222 632.271,333.899 637.16,305.581"/>\n  					</g>\n  					<g>\n  						<polygon class="st26" points="637.16,305.581 632.271,333.899 512.381,231.53 517.27,203.212"/>\n  					</g>\n  				</g>\n  			</g>\n  		</g>\n  		<g>\n  			<g>\n  				<g class="st0">\n  					<g>\n  						<polygon class="st25" points="591.268,978.442 710.854,1080.551 634.929,1086.228 515.343,984.118"/>\n  					</g>\n  					<g>\n  						<polygon class="st25" points="710.854,1080.551 705.965,1108.87 630.04,1114.546 634.929,1086.228"/>\n  					</g>\n  					<g>\n  						<polygon class="st26" points="634.929,1086.228 630.04,1114.546 510.453,1012.436 515.343,984.118"/>\n  					</g>\n  				</g>\n  			</g>\n  		</g>\n  		<g role="region" id="art_science_gallery_label_2nd_floor" attr.aria-label="{{\'map.label.art2\'|translate}}">\n  			<rect x="491.624" y="166.03" class="st5" width="131.012" height="96.86"/>\n  			<text transform="matrix(0.9661 0 0 1 544.4835 179.7104)" role="presentation"><tspan x="0" y="0" class="st27 st28 st8">{{\'map.text.art\' | translate }}</tspan><tspan x="-19.979" y="18" class="st27 st28 st8">{{\'map.text.science\' | translate }}</tspan><tspan x="-17.412" y="36" class="st27 st28 st8">{{\'map.text.gallery\' | translate }}</tspan></text>\n  		</g>\n  		<g role="region" id="art_science_gallery_label_1st_floor" attr.aria-label="{{\'map.label.artsci1\' | translate}}">\n  			<rect x="516.624" y="988.03" class="st5" width="131.012" height="96.86"/>\n  			<text transform="matrix(0.9661 0 0 1 569.4835 1001.7104)" role="presentation"><tspan x="0" y="0" class="st27 st28 st8">{{\'map.text.art\' | translate }}</tspan><tspan x="-19.979" y="18" class="st27 st28 st8">{{\'map.text.science\' | translate }}</tspan></text>\n  		</g>\n  	</g>\n  	<g id="north_elevator_path">\n  		<line class="st29" x1="1413.005" y1="283.818" x2="1413.005" y2="1569.182"/>\n  		<g>\n  			<line class="st30" x1="1413.005" y1="283.818" x2="1413.005" y2="286.631"/>\n  			<line class="st31" x1="1413.005" y1="292.269" x2="1413.005" y2="1000.55"/>\n  			<line class="st30" x1="1413.005" y1="1566.369" x2="1413.005" y2="1569.182"/>\n  		</g>\n  	</g>\n  	<g id="satellite">\n  		<g>\n  			<g class="st0">\n  				<g>\n  					<polygon class="st16" points="980.847,692.016 1068.774,767.093 786.704,788.182 698.777,713.105"/>\n  				</g>\n  				<g>\n  					<polygon class="st17" points="1068.774,767.093 1064.852,789.807 782.782,810.896 786.704,788.182"/>\n  				</g>\n  				<g>\n  					<polygon class="st18" points="786.704,788.182 782.782,810.896 694.855,735.819 698.777,713.105"/>\n  				</g>\n  			</g>\n  		</g>\n  	</g>\n  	<g id="Main_Seminar_Room" attr.aria-label="{{\'map.label.mainseminarloc\' | translate}}" role="region">\n  		<g id="main_seminar_room">\n  			<g>\n  				<g class="st0">\n  					<g>\n  						<polygon class="st32" points="774.13,706.792 858.301,778.662 732.705,788.052 648.534,716.182"/>\n  					</g>\n  					<g>\n  						<polygon class="st33" points="858.301,778.662 853.411,806.98 727.816,816.37 732.705,788.052"/>\n  					</g>\n  					<g>\n  						<polygon class="st34" points="732.705,788.052 727.816,816.37 643.645,744.5 648.534,716.182"/>\n  					</g>\n  				</g>\n  			</g>\n  		</g>\n  		<g>\n  			<rect x="682.187" y="720.55" class="st5" width="144.861" height="87.057"/>\n  			<text transform="matrix(0.9661 0 0 1 734.8306 734.2294)" role="presentation"><tspan x="0" y="0" class="st27 st28 st8">{{\'map.text.main\' | translate }} </tspan><tspan x="-15.849" y="18" class="st27 st28 st8">{{\'map.text.seminar\' | translate }}</tspan><tspan x="-4.781" y="36" class="st27 st28 st8">{{\'map.text.room\' | translate }}</tspan></text>\n  		</g>\n  	</g>\n  	<g id="Front_Entrance">\n  		<g id="hallway_by_front_entrance_elevators_and_bathrooms">\n  			<g>\n  				<g class="st0">\n  					<g>\n  						<polygon class="st16" points="1426.692,1016.856 1450.103,1036.846 1275.729,1049.883 1252.319,1029.894"/>\n  					</g>\n  					<g>\n  						<polygon class="st17" points="1450.103,1036.846 1445.214,1065.164 1270.84,1078.201 1275.729,1049.883"/>\n  					</g>\n  					<g>\n  						<polygon class="st18" points="1275.729,1049.883 1270.84,1078.201 1247.429,1058.212 1252.319,1029.894"/>\n  					</g>\n  				</g>\n  			</g>\n  		</g>\n  		<g id="NCAR_Security" attr.aria-label="{{\'map.label.securityloc\' | translate}}" role="region">\n  			<g id="NCAR_security">\n  				<g>\n  					<g class="st0">\n  						<g>\n  							<polygon class="st32" points="1444.713,1034.411 1512.478,1092.272 1411.05,1099.855 1343.286,1041.994"/>\n  						</g>\n  						<g>\n  							<polygon class="st33" points="1512.478,1092.272 1507.588,1120.59 1406.161,1128.174 1411.05,1099.855"/>\n  						</g>\n  						<g>\n  							<polygon class="st34" points="1411.05,1099.855 1406.161,1128.174 1338.396,1070.312 1343.286,1041.994"/>\n  						</g>\n  					</g>\n  				</g>\n  			</g>\n  			<g>\n  				<rect x="1376.245" y="1056.788" class="st5" width="121.767" height="67.546"/>\n  				<text transform="matrix(0.9661 0 0 1 1413.2145 1070.4677)" role="presentation"><tspan x="0" y="0" class="st27 st28 st8">{{\'map.text.ncar\' | translate }}</tspan><tspan x="-10.754" y="18" class="st27 st28 st8">{{\'map.text.security\' | translate }}</tspan></text>\n  			</g>\n  		</g>\n  		<g id="Front_Desk" attr.aria-label="{{\'map.label.frontdeskloc\' | translate}}" role="region">\n  			<g id="front_desk">\n  				<g>\n  					<g class="st0">\n  						<g>\n  							<polygon class="st32" points="1344.26,1041.843 1412.029,1099.708 1342.745,1104.888 1274.976,1047.023"/>\n  						</g>\n  						<g>\n  							<polygon class="st33" points="1412.029,1099.708 1407.139,1128.026 1337.855,1133.206 1342.745,1104.888"/>\n  						</g>\n  						<g>\n  							<polygon class="st34" points="1342.745,1104.888 1337.855,1133.206 1270.087,1075.342 1274.976,1047.023"/>\n  						</g>\n  					</g>\n  				</g>\n  			</g>\n  			<g>\n  				<text transform="matrix(0.9661 0 0 1 1332.3571 1072.3322)" role="presentation"><tspan x="0" y="0" class="st27 st28 st8">{{\'map.text.front\' | translate }}</tspan><tspan x="1.182" y="18" class="st27 st28 st8">{{\'map.text.desk\' | translate }}</tspan></text>\n  			</g>\n  		</g>\n  		<g id="Lobby">\n  			<g>\n  				<g>\n  					<g class="st0">\n  						<g>\n  							<polygon class="st16" points="1216.286,979.129 1273.517,1027.995 999.298,1048.497 942.068,999.631"/>\n  						</g>\n  						<g>\n  							<polygon class="st17" points="1273.517,1027.995 1268.627,1056.313 994.409,1076.815 999.298,1048.497"/>\n  						</g>\n  						<g>\n  							<polygon class="st18" points="999.298,1048.497 994.409,1076.815 937.179,1027.949 942.068,999.631"/>\n  						</g>\n  					</g>\n  				</g>\n  			</g>\n  			<g>\n  				<g>\n  					<g class="st0">\n  						<g>\n  							<polygon class="st16" points="1263.41,1038.53 1343.687,1107.074 738.535,1152.318 658.258,1083.774"/>\n  						</g>\n  						<g>\n  							<polygon class="st17" points="1343.687,1107.074 1338.831,1135.196 733.679,1180.44 738.535,1152.318"/>\n  						</g>\n  						<g>\n  							<polygon class="st18" points="738.535,1152.318 733.679,1180.44 653.403,1111.896 658.258,1083.774"/>\n  						</g>\n  					</g>\n  				</g>\n  			</g>\n  			<text transform="matrix(0.9661 0 0 1 1175.2887 1065.1405)" class="st28 st35" attr.aria-label="{{\'map.label.lobbyloc\' | translate}}" role="region">{{\'map.text.lobby\' | translate | uppercase }}</text>\n  		</g>\n  		<g id="Building_entrance" attr.aria-label="{{\'map.label.frontentrance\'|translate}}" role="region">\n  			<g id="_x3C_Path_x3E__-_entrance">\n  				<g>\n  					<g class="st0">\n  						<g>\n  							<polygon class="st36" points="1257.166,1108.681 1254.096,1125.589 1253.77,1125.496 1256.841,1108.588"/>\n  						</g>\n  						<g>\n  							<polygon class="st37" points="1249.096,1109.247 1246.026,1126.154 1245.904,1126.046 1248.974,1109.138"/>\n  						</g>\n  						<g>\n  							<polygon class="st38" points="1249.181,1109.124 1246.11,1126.031 1246.026,1126.154 1249.096,1109.247"/>\n  						</g>\n  						<g>\n  							<polygon class="st39" points="1250.739,1106.844 1256.841,1108.588 1257.166,1108.681 1275.458,1113.91 1274.097,1115.365\n  								1260.239,1111.403 1253.811,1109.566 1252.168,1111.968 1248.625,1117.146 1244.427,1116.079 1249.097,1109.247\n  								1249.181,1109.124"/>\n  						</g>\n  						<g>\n  							<polygon class="st39" points="1256.841,1108.588 1257.045,1108.574 1257.166,1108.681"/>\n  						</g>\n  						<g>\n  							<polygon class="st39" points="1248.974,1109.138 1249.181,1109.124 1249.096,1109.247"/>\n  						</g>\n  						<g>\n  							<polygon class="st36" points="1260.239,1111.403 1257.168,1128.311 1250.741,1126.474 1253.811,1109.566"/>\n  						</g>\n  						<g>\n  							<polygon class="st40" points="1275.458,1113.91 1272.387,1130.817 1271.026,1132.272 1274.097,1115.365"/>\n  						</g>\n  						<g>\n  							<polygon class="st36" points="1274.097,1115.365 1271.026,1132.272 1257.168,1128.311 1260.239,1111.403"/>\n  						</g>\n  						<g>\n  							<polygon class="st38" points="1253.811,1109.566 1250.741,1126.474 1249.097,1128.875 1252.168,1111.968"/>\n  						</g>\n  						<g>\n  							<polygon class="st38" points="1252.168,1111.968 1249.097,1128.875 1245.555,1134.053 1248.625,1117.146"/>\n  						</g>\n  						<g>\n  							<polygon class="st41" points="1248.625,1117.146 1245.555,1134.053 1241.356,1132.987 1244.427,1116.079"/>\n  						</g>\n  						<g>\n  							<polygon class="st39" points="1252.168,1111.968 1253.811,1109.566 1260.238,1111.403 1304.023,1150.196 1295.952,1150.761\n  															"/>\n  						</g>\n  						<g>\n  							<polygon class="st42" points="1304.023,1150.196 1300.953,1167.104 1292.882,1167.668 1295.952,1150.761"/>\n  						</g>\n  						<g>\n  							<polygon class="st37" points="1295.952,1150.761 1292.882,1167.668 1249.097,1128.875 1252.168,1111.968"/>\n  						</g>\n  					</g>\n  				</g>\n  			</g>\n  			<rect x="1244.613" y="1171.264" class="st5" width="147.435" height="47.761"/>\n  			<text transform="matrix(1 0 0 1 1244.6129 1197.8007)" class="st43 st44" role="presentation">{{\'map.text.entrance\' | translate}}</text>\n  		</g>\n  	</g>\n  	<g id="Classroom" aria-labelledby="classroom_label">\n  		<g id="classroom">\n  			<g>\n  				<g class="st0">\n  					<g>\n  						<polygon class="st32" points="364.861,928.095 436.087,988.911 257.679,1002.25 186.453,941.433"/>\n  					</g>\n  					<g>\n  						<polygon class="st33" points="436.087,988.911 431.197,1017.229 252.789,1030.568 257.679,1002.25"/>\n  					</g>\n  					<g>\n  						<polygon class="st34" points="257.679,1002.25 252.789,1030.568 181.564,969.752 186.453,941.433"/>\n  					</g>\n  				</g>\n  			</g>\n  		</g>\n  		<g role="region" id="classroom_label" attr.aria-label="{{\'map.label.classroomloc\' | translate}}">\n  			<rect x="222.315" y="931.108" class="st5" width="188.293" height="67.601"/>\n  			<text transform="matrix(0.9661 0 0 1 316.4615 944.788)" role="presentation"><tspan x="-45.257" y="18" class="st27 st28 st8">{{\'map.text.classroom\' | translate }}</tspan></text>\n  		</g>\n  		<g id="Hallway_by_classroom">\n  			<g>\n  				<g class="st0">\n  					<g>\n  						<polygon class="st16" points="514.603,984.241 538.014,1004.231 271.934,1024.124 248.524,1004.135"/>\n  					</g>\n  					<g>\n  						<polygon class="st17" points="538.014,1004.231 533.125,1032.549 267.045,1052.443 271.934,1024.124"/>\n  					</g>\n  					<g>\n  						<polygon class="st18" points="271.934,1024.124 267.045,1052.443 243.634,1032.453 248.524,1004.135"/>\n  					</g>\n  				</g>\n  			</g>\n  		</g>\n  	</g>\n  	<g id="Cafeteria_and_art_gallery" labeledby="cafeteria_label">\n  		<g id="cafeteria_and_art_gallery">\n  			<g>\n  				<g class="st0">\n  					<g>\n  						<polygon class="st25" points="193.685,940.716 494.061,1197.194 326.228,1209.742 25.852,953.264"/>\n  					</g>\n  					<g>\n  						<polygon class="st25" points="494.061,1197.194 489.171,1225.512 321.338,1238.06 326.228,1209.742"/>\n  					</g>\n  					<g>\n  						<polygon class="st26" points="326.228,1209.742 321.338,1238.06 20.963,981.582 25.852,953.264"/>\n  					</g>\n  				</g>\n  			</g>\n  		</g>\n  		<g role="region" id="cafeteria_label" attr.aria-label="{{\'map.label.cafeterialoc\'|translate}}">\n  			<rect x="182.718" y="1046.549" class="st5" width="131.314" height="169.98"/>\n  			<text transform="matrix(0.9661 0 0 1 192.3282 1060.2284)" role="presentation"><tspan x="0" y="0" class="st27 st28 st8">{{\'map.text.cafeteria\' | translate }} </tspan><tspan x="11.705" y="18" class="st27 st28 st8">{{\'map.text.art\' | translate }} {{\'map.text.gallery\' | translate }}</tspan></text>\n  		</g>\n  	</g>\n  	<g id="climate">\n  		<g id="hallway_north_of_climate_exhibit">\n  			<g>\n  				<g class="st0">\n  					<g>\n  						<polygon class="st16" points="1399.427,269.048 1417.664,284.62 1095.04,308.741 1076.803,293.169"/>\n  					</g>\n  					<g>\n  						<polygon class="st17" points="1417.664,284.62 1412.775,312.938 1090.151,337.059 1095.04,308.741"/>\n  					</g>\n  					<g>\n  						<polygon class="st18" points="1095.04,308.741 1090.151,337.059 1071.914,321.487 1076.803,293.169"/>\n  					</g>\n  				</g>\n  			</g>\n  		</g>\n  		<g id="Climate_exhibit">\n  			<g>\n  				<g class="st0">\n  					<g>\n  						<polygon class="st45" points="1219.589,263.359 1301.956,333.688 693.91,379.149 611.544,308.819"/>\n  					</g>\n  					<g>\n  						<polygon class="st46" points="1301.956,333.688 1297.067,362.007 689.021,407.467 693.91,379.149"/>\n  					</g>\n  					<g>\n  						<polygon class="st47" points="693.91,379.149 689.021,407.467 606.654,337.138 611.544,308.819"/>\n  					</g>\n  				</g>\n  			</g>\n  		</g>\n  	</g>\n  	<g id="weather">\n  		<g id="Weather_exhibit_1_">\n  			<g>\n  				<g class="st0">\n  					<g>\n  						<polygon class="st48" points="942.235,990.069 1024.602,1060.399 965.622,1064.808 883.255,994.479"/>\n  					</g>\n  					<g>\n  						<polygon class="st49" points="1024.602,1060.399 1019.713,1088.717 960.732,1093.127 965.622,1064.808"/>\n  					</g>\n  					<g>\n  						<polygon class="st50" points="965.622,1064.808 960.732,1093.127 878.365,1022.797 883.255,994.479"/>\n  					</g>\n  				</g>\n  			</g>\n  		</g>\n  		<g id="Weather_exhibit">\n  			<g>\n  				<g class="st0">\n  					<g>\n  						<polygon class="st48" points="1098.055,1050.596 1178.674,1119.433 683.973,1156.419 603.354,1087.582"/>\n  					</g>\n  					<g>\n  						<polygon class="st49" points="1178.674,1119.433 1173.74,1148.011 679.039,1184.997 683.973,1156.419"/>\n  					</g>\n  					<g>\n  						<polygon class="st50" points="683.973,1156.419 679.039,1184.997 598.419,1116.16 603.354,1087.582"/>\n  					</g>\n  				</g>\n  			</g>\n  		</g>\n  		<polygon id="Air_quality_exhibit" class="st51" points="1035.508,1084.502 1131.164,1077.835 1099.508,1050.502\n  			1003.164,1057.169 		"/>\n  	</g>\n  	<g id="library_and_hall">\n  		<g id="South_elevator_path">\n  			<line class="st29" x1="625.326" y1="340.563" x2="625.326" y2="1423.035"/>\n  			<g>\n  				<line class="st30" x1="625.326" y1="340.563" x2="625.326" y2="343.376"/>\n  				<line class="st52" x1="625.326" y1="349.014" x2="625.326" y2="1050.403"/>\n  				<line class="st30" x1="625.326" y1="1420.222" x2="625.326" y2="1423.035"/>\n  			</g>\n  		</g>\n  		<g id="Hallway_next_to_library">\n  			<g>\n  				<g class="st0">\n  					<g>\n  						<polygon class="st16" points="794.341,376.145 874.266,444.39 833.805,447.415 753.88,379.17"/>\n  					</g>\n  					<g>\n  						<polygon class="st17" points="874.266,444.39 869.376,472.708 828.916,475.733 833.805,447.415"/>\n  					</g>\n  					<g>\n  						<polygon class="st18" points="833.805,447.415 828.916,475.733 748.99,407.489 753.88,379.17"/>\n  					</g>\n  				</g>\n  			</g>\n  		</g>\n  		<g id="Library">\n  			<g>\n  				<g class="st0">\n  					<g>\n  						<polygon class="st53" points="750.463,377.174 812.703,430.317 505.316,453.299 443.077,400.155"/>\n  					</g>\n  					<g>\n  						<polygon class="st54" points="812.703,430.317 807.813,458.635 500.427,481.617 505.316,453.299"/>\n  					</g>\n  					<g>\n  						<polygon class="st55" points="505.316,453.299 500.427,481.617 438.188,428.474 443.077,400.155"/>\n  					</g>\n  				</g>\n  			</g>\n  		</g>\n  		<g id="Hallway_behind_library">\n  			<g>\n  				<g class="st0">\n  					<g>\n  						<polygon class="st16" points="826.307,431.021 844.544,446.592 521.912,470.714 503.675,455.142"/>\n  					</g>\n  					<g>\n  						<polygon class="st17" points="844.544,446.592 839.654,474.911 517.022,499.032 521.912,470.714"/>\n  					</g>\n  					<g>\n  						<polygon class="st18" points="521.912,470.714 517.022,499.032 498.786,483.461 503.675,455.142"/>\n  					</g>\n  				</g>\n  			</g>\n  		</g>\n  	</g>\n  	<g id="theater_and_hall">\n  		<g id="hallway_next_to_the_theater">\n  			<g>\n  				<g class="st0">\n  					<g>\n  						<polygon class="st16" points="784.945,1150.81 879.503,1231.549 839.034,1234.574 744.476,1153.835"/>\n  					</g>\n  					<g>\n  						<polygon class="st17" points="879.503,1231.549 874.613,1259.867 834.145,1262.893 839.034,1234.574"/>\n  					</g>\n  					<g>\n  						<polygon class="st18" points="839.034,1234.574 834.145,1262.893 739.587,1182.154 744.476,1153.835"/>\n  					</g>\n  				</g>\n  			</g>\n  		</g>\n  		<g id="Theater" aria-labelledby="theater_label" role="region" >\n  			<g id="theater">\n  				<g>\n  					<g class="st0">\n  						<g>\n  							<polygon class="st56" points="747.13,1153.804 836.011,1229.696 718.485,1238.483 629.604,1162.591"/>\n  						</g>\n  						<g>\n  							<polygon class="st57" points="836.011,1229.696 831.122,1258.014 713.595,1266.801 718.485,1238.483"/>\n  						</g>\n  						<g>\n  							<polygon class="st58" points="718.485,1238.483 713.595,1266.801 624.714,1190.91 629.604,1162.591"/>\n  						</g>\n  					</g>\n  				</g>\n  			</g>\n  			<g id="theater_label" attr.aria-label="{{\'map.label.theaterloc\'|translate}}">\n  				<rect x="673.414" y="1187.912" class="st5" width="125.738" height="34.851"/>\n  				<text transform="matrix(0.9661 0 0 1 704.0084 1201.5907)" class="st28 st8" role="presentation">{{\'map.text.theater\' | translate }}</text>\n  			</g>\n  		</g>\n  		<g id="hallway_by_cafeteria_entrance">\n  			<g>\n  				<g class="st0">\n  					<g>\n  						<polygon class="st17" points="878.496,1230.896 901.715,1250.464 456.218,1287.801 433.002,1268.229"/>\n  					</g>\n  					<g>\n  						<polygon class="st16" points="901.715,1250.464 896.598,1278.643 451.101,1315.98 456.218,1287.801"/>\n  					</g>\n  					<g>\n  						<polygon class="st59" points="456.218,1287.801 451.101,1315.98 427.885,1296.407 433.002,1268.229"/>\n  					</g>\n  				</g>\n  			</g>\n  		</g>\n  		<g id="Entrance_to_cafeteria">\n  			<g>\n  				<g class="st0">\n  					<g>\n  						<polygon class="st16" points="488.938,1191.584 589.208,1277.2 421.367,1289.749 321.098,1204.133"/>\n  					</g>\n  					<g>\n  						<polygon class="st17" points="589.208,1277.2 584.319,1305.519 416.478,1318.067 421.367,1289.749"/>\n  					</g>\n  					<g>\n  						<polygon class="st18" points="421.367,1289.749 416.478,1318.067 316.208,1232.451 321.098,1204.133"/>\n  					</g>\n  				</g>\n  			</g>\n  		</g>\n  		<line class="st60" x1="421.83" y1="1290.502" x2="900.849" y2="1250.252"/>\n  	</g>\n  	<rect x="902.174" y="404.945" class="st5" width="315.635" height="85.138"/>\n  	<text transform="matrix(1 0 0 1 902.1744 431.4833)" class="st43 st44">{{\'map.text.secondfloor\' | translate | uppercase}}</text>\n  	<rect x="1180.431" y="688.518" class="st5" width="315.635" height="85.138"/>\n  	<text transform="matrix(1 0 0 1 1180.4313 715.0566)" class="st43 st44">{{\'map.text.mezzanine\' | translate | uppercase}}</text>\n  	<rect x="889.174" y="1192.646" class="st5" width="315.635" height="85.138"/>\n  	<text transform="matrix(1 0 0 1 869.1744 1219.1835)" class="st43 st44">{{\'map.text.firstfloor\' | translate | uppercase}}</text>\n  	<rect x="897.174" y="1497.646" class="st5" width="315.635" height="85.138"/>\n  </g>\n  <g id="Stairs">\n  	<g id="Stairs_to_mezzanine_from_1st_floor" role="region" attr.aria-label="{{\'map.label.stairscentralm1\'|translate}}">\n  		<g>\n  			<g>\n  				<g class="st0">\n  					<g>\n  						<polygon class="st1" points="1049.539,987.055 1068.214,1003.001 1055.071,1003.983 1036.396,988.038"/>\n  					</g>\n  					<g>\n  						<polygon class="st2" points="1068.214,1003.001 1066.263,1014.302 1053.12,1015.285 1055.071,1003.983"/>\n  					</g>\n  					<g>\n  						<polygon class="st3" points="1055.071,1003.983 1053.12,1015.285 1034.445,999.339 1036.396,988.038"/>\n  					</g>\n  				</g>\n  			</g>\n  		</g>\n  		<g>\n  			<g>\n  				<g class="st0">\n  					<g>\n  						<polygon class="st1" points="1037.083,980.827 1055.758,996.773 1042.615,997.755 1023.94,981.81"/>\n  					</g>\n  					<g>\n  						<polygon class="st2" points="1055.758,996.773 1053.807,1008.074 1040.664,1009.057 1042.615,997.755"/>\n  					</g>\n  					<g>\n  						<polygon class="st3" points="1042.615,997.755 1040.664,1009.057 1021.989,993.111 1023.94,981.81"/>\n  					</g>\n  				</g>\n  			</g>\n  		</g>\n  		<g>\n  			<g>\n  				<g class="st0">\n  					<g>\n  						<polygon class="st1" points="1024.618,974.599 1043.293,990.545 1030.15,991.527 1011.475,975.582"/>\n  					</g>\n  					<g>\n  						<polygon class="st2" points="1043.293,990.545 1041.342,1001.846 1028.199,1002.829 1030.15,991.527"/>\n  					</g>\n  					<g>\n  						<polygon class="st3" points="1030.15,991.527 1028.199,1002.829 1009.524,986.883 1011.475,975.582"/>\n  					</g>\n  				</g>\n  			</g>\n  		</g>\n  		<g>\n  			<g>\n  				<g class="st0">\n  					<g>\n  						<polygon class="st1" points="1012.165,968.368 1030.835,984.31 1017.692,985.293 999.021,969.351"/>\n  					</g>\n  					<g>\n  						<polygon class="st2" points="1030.835,984.31 1028.884,995.612 1015.741,996.594 1017.692,985.293"/>\n  					</g>\n  					<g>\n  						<polygon class="st3" points="1017.692,985.293 1015.741,996.594 997.07,980.652 999.021,969.351"/>\n  					</g>\n  				</g>\n  			</g>\n  		</g>\n  		<g id="to_mezzanine_from_1st_floor">\n  			<rect x="1045.961" y="937.732" class="st5" width="262.235" height="80.979"/>\n  			<text transform="matrix(0.9661 0 0 1 1045.9615 951.412)" class="st6 st7 st8" role="presentation">{{\'map.text.tomezzanine\'|translate}}</text>\n  			<g id="to_mezzanine_from_1st_floor_1_">\n  				<g>\n  					<line class="st9" x1="1049.13" y1="965.138" x2="1013.213" y2="946.56"/>\n  					<g>\n  						<polygon class="st6" points="1034.391,937.292 1035.574,941.526 1014.712,947.331 1022.027,967.716 1017.888,969.197\n  							1008.984,944.368"/>\n  					</g>\n  				</g>\n  			</g>\n  		</g>\n  	</g>\n  	<g id="Stairs_to_2nd_floor_from_1st_floor_by_theater" role="region" attr.aria-label="{{\'map.label.stairssouththeater\' | translate}}">\n  		<g>\n  			<g>\n  				<g class="st0">\n  					<g>\n  						<polygon class="st1" points="672.531,1130.341 691.202,1146.283 678.059,1147.266 659.389,1131.324"/>\n  					</g>\n  					<g>\n  						<polygon class="st2" points="691.202,1146.283 689.251,1157.585 676.108,1158.567 678.059,1147.266"/>\n  					</g>\n  					<g>\n  						<polygon class="st3" points="678.059,1147.266 676.108,1158.567 657.437,1142.625 659.389,1131.324"/>\n  					</g>\n  				</g>\n  			</g>\n  		</g>\n  		<g>\n  			<g>\n  				<g class="st0">\n  					<g>\n  						<polygon class="st1" points="660.073,1124.107 678.748,1140.053 665.605,1141.035 646.93,1125.09"/>\n  					</g>\n  					<g>\n  						<polygon class="st2" points="678.748,1140.053 676.797,1151.354 663.654,1152.337 665.605,1141.035"/>\n  					</g>\n  					<g>\n  						<polygon class="st3" points="665.605,1141.035 663.654,1152.337 644.979,1136.391 646.93,1125.09"/>\n  					</g>\n  				</g>\n  			</g>\n  		</g>\n  		<g>\n  			<g>\n  				<g class="st0">\n  					<g>\n  						<polygon class="st1" points="647.617,1117.879 666.292,1133.825 653.149,1134.807 634.474,1118.862"/>\n  					</g>\n  					<g>\n  						<polygon class="st2" points="666.292,1133.825 664.341,1145.126 651.198,1146.109 653.149,1134.807"/>\n  					</g>\n  					<g>\n  						<polygon class="st3" points="653.149,1134.807 651.198,1146.109 632.523,1130.163 634.474,1118.862"/>\n  					</g>\n  				</g>\n  			</g>\n  		</g>\n  		<g>\n  			<g>\n  				<g class="st0">\n  					<g>\n  						<polygon class="st1" points="635.152,1111.651 653.827,1127.597 640.684,1128.579 622.009,1112.634"/>\n  					</g>\n  					<g>\n  						<polygon class="st2" points="653.827,1127.597 651.876,1138.898 638.733,1139.881 640.684,1128.579"/>\n  					</g>\n  					<g>\n  						<polygon class="st3" points="640.684,1128.579 638.733,1139.881 620.058,1123.935 622.009,1112.634"/>\n  					</g>\n  				</g>\n  			</g>\n  		</g>\n  		<g id="to_2nd_floor_from_1st_floor_1_">\n  			<g>\n  				<rect x="714.961" y="1103.732" class="st5" width="262.235" height="80.979"/>\n  				<text transform="matrix(0.9661 0 0 1 714.9615 1117.412)" class="st29 st7 st8" role="presentation">{{\'map.text.tosecondfloor\'|translate}}</text>\n  			</g>\n  			<g id="to_2nd_floor_from_1st_floor_3_">\n  				<g>\n  					<line class="st62" x1="716.13" y1="1132.138" x2="680.213" y2="1113.561"/>\n  					<g>\n  						<polygon class="st61" points="701.391,1104.292 702.574,1108.526 681.712,1114.331 689.027,1134.716 684.888,1136.197\n  							675.984,1111.368"/>\n  					</g>\n  				</g>\n  			</g>\n  		</g>\n  	</g>\n  	<g id="Stairs_to_1st_floor_from_mezzanine" role="region" attr.aria-label="{{\'map.label.stairscentral1m\'|translate}}">\n  		<g>\n  			<g>\n  				<g class="st0">\n  					<g>\n  						<polygon class="st1" points="962.323,804.452 980.994,820.394 967.858,821.376 949.188,805.434"/>\n  					</g>\n  					<g>\n  						<polygon class="st2" points="980.994,820.394 979.042,831.695 965.907,832.677 967.858,821.376"/>\n  					</g>\n  					<g>\n  						<polygon class="st3" points="967.858,821.376 965.907,832.677 947.237,816.735 949.188,805.434"/>\n  					</g>\n  				</g>\n  			</g>\n  		</g>\n  		<g>\n  			<g>\n  				<g class="st0">\n  					<g>\n  						<polygon class="st1" points="949.867,798.223 968.537,814.165 955.394,815.148 936.724,799.206"/>\n  					</g>\n  					<g>\n  						<polygon class="st2" points="968.537,814.165 966.586,825.467 953.443,826.449 955.394,815.148"/>\n  					</g>\n  					<g>\n  						<polygon class="st3" points="955.394,815.148 953.443,826.449 934.772,810.507 936.724,799.206"/>\n  					</g>\n  				</g>\n  			</g>\n  		</g>\n  		<g>\n  			<g>\n  				<g class="st0">\n  					<g>\n  						<polygon class="st1" points="937.408,791.989 956.083,807.935 942.94,808.917 924.265,792.972"/>\n  					</g>\n  					<g>\n  						<polygon class="st2" points="956.083,807.935 954.132,819.236 940.989,820.219 942.94,808.917"/>\n  					</g>\n  					<g>\n  						<polygon class="st3" points="942.94,808.917 940.989,820.219 922.314,804.273 924.265,792.972"/>\n  					</g>\n  				</g>\n  			</g>\n  		</g>\n  		<g>\n  			<g>\n  				<g class="st0">\n  					<g>\n  						<polygon class="st1" points="924.943,785.761 943.618,801.707 930.475,802.689 911.8,786.744"/>\n  					</g>\n  					<g>\n  						<polygon class="st2" points="943.618,801.707 941.667,813.008 928.524,813.991 930.475,802.689"/>\n  					</g>\n  					<g>\n  						<polygon class="st3" points="930.475,802.689 928.524,813.991 909.849,798.045 911.8,786.744"/>\n  					</g>\n  				</g>\n  			</g>\n  		</g>\n  		<g>\n  			<g>\n  				<g class="st0">\n  					<g>\n  						<polygon class="st1" points="912.487,779.533 931.162,795.479 918.019,796.461 899.344,780.516"/>\n  					</g>\n  					<g>\n  						<polygon class="st2" points="931.162,795.479 929.211,806.78 916.068,807.763 918.019,796.461"/>\n  					</g>\n  					<g>\n  						<polygon class="st3" points="918.019,796.461 916.068,807.763 897.393,791.817 899.344,780.516"/>\n  					</g>\n  				</g>\n  			</g>\n  		</g>\n  		<g>\n  			<g>\n  				<g class="st0">\n  					<g>\n  						<polygon class="st1" points="899.829,778.022 917.879,793.434 882.81,796.056 864.76,780.644"/>\n  					</g>\n  					<g>\n  						<polygon class="st2" points="917.879,793.434 914.745,811.584 879.677,814.206 882.81,796.056"/>\n  					</g>\n  					<g>\n  						<polygon class="st3" points="882.81,796.056 879.677,814.206 861.626,798.793 864.76,780.644"/>\n  					</g>\n  				</g>\n  			</g>\n  		</g>\n  		<g id="to_1st_floor_from_mezzanine">\n  			<rect x="1030.961" y="810.732" class="st5" width="262.235" height="80.979"/>\n  			<text transform="matrix(0.9661 0 0 1 1030.9615 824.412)" class="st6 st7 st8" role="presentation">{{\'map.text.tofirstfloor\'|translate}}</text>\n  			<g id="to_1st_floor_from_mezzanine_1_">\n  				<g>\n  					<line class="st9" x1="982.982" y1="806.372" x2="1018.899" y2="824.95"/>\n  					<g>\n  						<polygon class="st6" points="997.721,834.219 996.538,829.985 1017.4,824.18 1010.085,803.795 1014.224,802.314\n  							1023.128,827.142"/>\n  					</g>\n  				</g>\n  			</g>\n  		</g>\n  	</g>\n  	<g id="Stairs_to_1st_floor_from_2nd_floor_by_weather_trail" attr.aria-label="{{\'map.label.stairswest21\'|translate}}" role="region">\n  		<g>\n  			<g>\n  				<g class="st0">\n  					<g>\n  						<polygon class="st1" points="435.532,202.129 454.207,218.075 441.064,219.057 422.389,203.112"/>\n  					</g>\n  					<g>\n  						<polygon class="st2" points="454.207,218.075 452.256,229.376 439.113,230.359 441.064,219.057"/>\n  					</g>\n  					<g>\n  						<polygon class="st3" points="441.064,219.057 439.113,230.359 420.438,214.413 422.389,203.112"/>\n  					</g>\n  				</g>\n  			</g>\n  		</g>\n  		<g>\n  			<g>\n  				<g class="st0">\n  					<g>\n  						<polygon class="st1" points="447.991,195.898 466.661,211.84 453.518,212.823 434.848,196.881"/>\n  					</g>\n  					<g>\n  						<polygon class="st2" points="466.661,211.84 464.71,223.142 451.567,224.124 453.518,212.823"/>\n  					</g>\n  					<g>\n  						<polygon class="st3" points="453.518,212.823 451.567,224.124 432.896,208.182 434.848,196.881"/>\n  					</g>\n  				</g>\n  			</g>\n  		</g>\n  		<g>\n  			<g>\n  				<g class="st0">\n  					<g>\n  						<polygon class="st1" points="460.453,189.664 479.128,205.61 465.985,206.592 447.31,190.647"/>\n  					</g>\n  					<g>\n  						<polygon class="st2" points="479.128,205.61 477.177,216.911 464.034,217.894 465.985,206.592"/>\n  					</g>\n  					<g>\n  						<polygon class="st3" points="465.985,206.592 464.034,217.894 445.359,201.948 447.31,190.647"/>\n  					</g>\n  				</g>\n  			</g>\n  		</g>\n  		<g>\n  			<g>\n  				<g class="st0">\n  					<g>\n  						<polygon class="st1" points="472.909,183.436 491.584,199.382 478.441,200.364 459.766,184.419"/>\n  					</g>\n  					<g>\n  						<polygon class="st2" points="491.584,199.382 489.633,210.683 476.49,211.666 478.441,200.364"/>\n  					</g>\n  					<g>\n  						<polygon class="st3" points="478.441,200.364 476.49,211.666 457.815,195.72 459.766,184.419"/>\n  					</g>\n  				</g>\n  			</g>\n  		</g>\n  		<g>\n  			<g>\n  				<g class="st0">\n  					<g>\n  						<polygon class="st1" points="485.365,177.208 504.04,193.154 490.897,194.136 472.222,178.191"/>\n  					</g>\n  					<g>\n  						<polygon class="st2" points="504.04,193.154 502.089,204.455 488.946,205.438 490.897,194.136"/>\n  					</g>\n  					<g>\n  						<polygon class="st3" points="490.897,194.136 488.946,205.438 470.271,189.492 472.222,178.191"/>\n  					</g>\n  				</g>\n  			</g>\n  		</g>\n  		<g id="to_1st_floor_from_2nd_floor_2_">\n  			<rect x="308.961" y="193.732" class="st5" width="262.235" height="80.979"/>\n  			<text transform="matrix(0.9661 0 0 1 308.9615 207.412)" class="st6 st7 st8" role="presentation">{{\'map.text.tofirstfloor\'|translate}}</text>\n  			<g id="to_1st_floor_from_2nd_floor_4_">\n  				<g>\n  					<line class="st9" x1="443.13" y1="165.372" x2="407.213" y2="183.95"/>\n  					<g>\n  						<polygon class="st6" points="411.886,161.31 416.025,162.791 408.708,183.172 429.572,188.981 428.389,193.215\n  							402.98,186.135"/>\n  					</g>\n  				</g>\n  			</g>\n  		</g>\n  	</g>\n  	<g id="Stairs_to_1st_Floor_from_2nd_floor_by_the_Atmosphere_exhibit" attr.aria-label="{{\'map.label.stairssouth21\'|translate}}" role="region">\n  		<g>\n  			<g>\n  				<g class="st0">\n  					<g>\n  						<polygon class="st1" points="565.528,339.127 584.203,355.073 571.06,356.055 552.385,340.11"/>\n  					</g>\n  					<g>\n  						<polygon class="st2" points="584.203,355.073 582.252,366.374 569.109,367.357 571.06,356.055"/>\n  					</g>\n  					<g>\n  						<polygon class="st3" points="571.06,356.055 569.109,367.357 550.434,351.411 552.385,340.11"/>\n  					</g>\n  				</g>\n  			</g>\n  		</g>\n  		<g>\n  			<g>\n  				<g class="st0">\n  					<g>\n  						<polygon class="st1" points="577.993,332.899 596.668,348.845 583.525,349.827 564.85,333.882"/>\n  					</g>\n  					<g>\n  						<polygon class="st2" points="596.668,348.845 594.717,360.146 581.574,361.129 583.525,349.827"/>\n  					</g>\n  					<g>\n  						<polygon class="st3" points="583.525,349.827 581.574,361.129 562.899,345.183 564.85,333.882"/>\n  					</g>\n  				</g>\n  			</g>\n  		</g>\n  		<g>\n  			<g>\n  				<g class="st0">\n  					<g>\n  						<polygon class="st1" points="590.452,326.668 609.122,342.61 595.979,343.593 577.309,327.651"/>\n  					</g>\n  					<g>\n  						<polygon class="st2" points="609.122,342.61 607.171,353.912 594.028,354.894 595.979,343.593"/>\n  					</g>\n  					<g>\n  						<polygon class="st3" points="595.979,343.593 594.028,354.894 575.357,338.952 577.309,327.651"/>\n  					</g>\n  				</g>\n  			</g>\n  		</g>\n  		<g>\n  			<g>\n  				<g class="st0">\n  					<g>\n  						<polygon class="st1" points="602.908,320.44 621.578,336.382 608.435,337.365 589.765,321.423"/>\n  					</g>\n  					<g>\n  						<polygon class="st2" points="621.578,336.382 619.627,347.684 606.484,348.666 608.435,337.365"/>\n  					</g>\n  					<g>\n  						<polygon class="st3" points="608.435,337.365 606.484,348.666 587.813,332.724 589.765,321.423"/>\n  					</g>\n  				</g>\n  			</g>\n  		</g>\n  		<g>\n  			<g>\n  				<g class="st0">\n  					<g>\n  						<polygon class="st1" points="615.37,314.206 634.045,330.152 620.902,331.134 602.227,315.189"/>\n  					</g>\n  					<g>\n  						<polygon class="st2" points="634.045,330.152 632.094,341.453 618.951,342.436 620.902,331.134"/>\n  					</g>\n  					<g>\n  						<polygon class="st3" points="620.902,331.134 618.951,342.436 600.276,326.49 602.227,315.189"/>\n  					</g>\n  				</g>\n  			</g>\n  		</g>\n  		<g id="to_1st_floor_from_2nd_floor_1_">\n  			<rect x="443.961" y="329.732" class="st5" width="262.235" height="80.979"/>\n  			<text transform="matrix(0.9661 0 0 1 443.9615 343.412)" class="st6 st7 st8" role="presentation">{{\'map.text.tofirstfloor\'|translate}}</text>\n  			<g id="to_1st_floor_from_2nd_floor_5_">\n  				<g>\n  					<line class="st9" x1="576.13" y1="304.372" x2="540.213" y2="322.95"/>\n  					<g>\n  						<polygon class="st6" points="544.886,300.31 549.025,301.791 541.708,322.172 562.572,327.981 561.389,332.215\n  							535.98,325.135"/>\n  					</g>\n  				</g>\n  			</g>\n  		</g>\n  	</g>\n  	<g id="Stairs_to_2nd_floor_by_Cafeteria" attr.aria-label="{{\'map.label.stairseast21\'|translate}}" role="region">\n  		<g>\n  			<g>\n  				<g>\n  					<g class="st0">\n  						<g>\n  							<polygon class="st1" points="691.947,1268.792 709.997,1284.204 674.928,1286.826 656.878,1271.414"/>\n  						</g>\n  						<g>\n  							<polygon class="st2" points="709.997,1284.204 706.863,1302.354 671.795,1304.976 674.928,1286.826"/>\n  						</g>\n  						<g>\n  							<polygon class="st3" points="674.928,1286.826 671.795,1304.976 653.744,1289.563 656.878,1271.414"/>\n  						</g>\n  					</g>\n  				</g>\n  			</g>\n  			<g>\n  				<g>\n  					<g class="st0">\n  						<g>\n  							<polygon class="st1" points="706.909,1258.045 725.584,1273.991 712.441,1274.973 693.766,1259.028"/>\n  						</g>\n  						<g>\n  							<polygon class="st2" points="725.584,1273.991 723.633,1285.292 710.49,1286.275 712.441,1274.973"/>\n  						</g>\n  						<g>\n  							<polygon class="st3" points="712.441,1274.973 710.49,1286.275 691.815,1270.329 693.766,1259.028"/>\n  						</g>\n  					</g>\n  				</g>\n  			</g>\n  			<g>\n  				<g>\n  					<g class="st0">\n  						<g>\n  							<polygon class="st1" points="719.365,1251.817 738.04,1267.763 724.897,1268.745 706.222,1252.8"/>\n  						</g>\n  						<g>\n  							<polygon class="st2" points="738.04,1267.763 736.089,1279.064 722.946,1280.047 724.897,1268.745"/>\n  						</g>\n  						<g>\n  							<polygon class="st3" points="724.897,1268.745 722.946,1280.047 704.271,1264.101 706.222,1252.8"/>\n  						</g>\n  					</g>\n  				</g>\n  			</g>\n  			<g>\n  				<g>\n  					<g class="st0">\n  						<g>\n  							<polygon class="st1" points="731.83,1245.589 750.505,1261.535 737.362,1262.517 718.687,1246.572"/>\n  						</g>\n  						<g>\n  							<polygon class="st2" points="750.505,1261.535 748.554,1272.836 735.411,1273.819 737.362,1262.517"/>\n  						</g>\n  						<g>\n  							<polygon class="st3" points="737.362,1262.517 735.411,1273.819 716.736,1257.873 718.687,1246.572"/>\n  						</g>\n  					</g>\n  				</g>\n  			</g>\n  			<g>\n  				<g>\n  					<g class="st0">\n  						<g>\n  							<polygon class="st1" points="744.286,1239.361 762.961,1255.307 749.818,1256.289 731.143,1240.344"/>\n  						</g>\n  						<g>\n  							<polygon class="st2" points="762.961,1255.307 761.01,1266.608 747.867,1267.591 749.818,1256.289"/>\n  						</g>\n  						<g>\n  							<polygon class="st3" points="749.818,1256.289 747.867,1267.591 729.192,1251.645 731.143,1240.344"/>\n  						</g>\n  					</g>\n  				</g>\n  			</g>\n  		</g>\n  		<g id="to_2nd_floor_from_1st_floor">\n\n  				<rect x="751.961" y="1236.732" class="st5" width="262.235" height="80.979"/>\n  				<text transform="matrix(0.9661 0 0 1 751.9615 1250.412)" class="st29 st7 st8" role="presentation">{{\'map.text.tosecondfloor\'|translate}}</text>\n\n  			<g id="_x3C_Path_x3E__-_to_2nd_floor_from_1st_floor_1_">\n  				<g>\n  					<line class="st62" x1="756.982" y1="1282.138" x2="792.899" y2="1263.561"/>\n  					<g>\n  						<polygon class="st61" points="788.226,1286.201 784.087,1284.72 791.404,1264.339 770.54,1258.529 771.723,1254.296\n  							797.132,1261.376"/>\n  					</g>\n  				</g>\n  			</g>\n  		</g>\n  	</g>\n  	<g id="Stairs_to_mezzanine_from_floor_1B_supercomputing_area" class="st10" attr.aria-label="{\'map.label.stairsnw1bm}" role="region">\n  		<g class="st63">\n  			<g>\n  				<g class="st0">\n  					<g>\n  						<polygon class="st1" points="1204.528,1550.338 1223.203,1566.284 1210.06,1567.266 1191.385,1551.321"/>\n  					</g>\n  					<g>\n  						<polygon class="st2" points="1223.203,1566.284 1221.252,1577.585 1208.109,1578.568 1210.06,1567.266"/>\n  					</g>\n  					<g>\n  						<polygon class="st3" points="1210.06,1567.266 1208.109,1578.568 1189.434,1562.622 1191.385,1551.321"/>\n  					</g>\n  				</g>\n  			</g>\n  		</g>\n  		<g class="st63">\n  			<g>\n  				<g class="st0">\n  					<g>\n  						<polygon class="st1" points="1192.072,1544.11 1210.747,1560.056 1197.604,1561.038 1178.929,1545.093"/>\n  					</g>\n  					<g>\n  						<polygon class="st2" points="1210.747,1560.056 1208.796,1571.357 1195.653,1572.34 1197.604,1561.038"/>\n  					</g>\n  					<g>\n  						<polygon class="st3" points="1197.604,1561.038 1195.653,1572.34 1176.978,1556.394 1178.929,1545.093"/>\n  					</g>\n  				</g>\n  			</g>\n  		</g>\n  		<g class="st63">\n  			<g>\n  				<g class="st0">\n  					<g>\n  						<polygon class="st1" points="1179.616,1537.882 1198.291,1553.828 1185.148,1554.81 1166.473,1538.865"/>\n  					</g>\n  					<g>\n  						<polygon class="st2" points="1198.291,1553.828 1196.34,1565.129 1183.197,1566.112 1185.148,1554.81"/>\n  					</g>\n  					<g>\n  						<polygon class="st3" points="1185.148,1554.81 1183.197,1566.112 1164.522,1550.166 1166.473,1538.865"/>\n  					</g>\n  				</g>\n  			</g>\n  		</g>\n  		<g class="st63">\n  			<g>\n  				<g class="st0">\n  					<g>\n  						<polygon class="st1" points="1167.154,1531.651 1185.824,1547.593 1172.681,1548.576 1154.01,1532.634"/>\n  					</g>\n  					<g>\n  						<polygon class="st2" points="1185.824,1547.593 1183.873,1558.895 1170.73,1559.877 1172.681,1548.576"/>\n  					</g>\n  					<g>\n  						<polygon class="st3" points="1172.681,1548.576 1170.73,1559.877 1152.059,1543.935 1154.01,1532.634"/>\n  					</g>\n  				</g>\n  			</g>\n  		</g>\n  		<g id="to_mezzanine_from_floor_1B" class="st63">\n  			<rect x="1090.966" y="1587.23" class="st5" width="130.235" height="80.979"/>\n  			<text transform="matrix(0.9661 0 0 1 1090.9662 1600.9098)" class="st6 st7 st8" role="presentation">{{\'map.text.tomezzanine\'|translate}}</text>\n  			<g id="to_mezzanine_from_floor_1B_1_">\n  				<g>\n  					<line class="st9" x1="1166.13" y1="1578.138" x2="1130.213" y2="1559.561"/>\n  					<g>\n  						<polygon class="st6" points="1151.391,1550.292 1152.574,1554.526 1131.712,1560.331 1139.027,1580.716 1134.888,1582.197\n  							1125.984,1557.368"/>\n  					</g>\n  				</g>\n  			</g>\n  		</g>\n  	</g>\n  	<g id="Stairs_to_1st_floor_from_2nd_floor_behind_library" attr.aria-label="{\'map.label.stairseast12\'| translate}" role="region">\n  		<g>\n  			<g>\n  				<g>\n  					<g class="st0">\n  						<g>\n  							<polygon class="st1" points="791.017,470.002 809.687,485.944 796.544,486.927 777.874,470.985"/>\n  						</g>\n  						<g>\n  							<polygon class="st2" points="809.687,485.944 807.736,497.246 794.593,498.228 796.544,486.927"/>\n  						</g>\n  						<g>\n  							<polygon class="st3" points="796.544,486.927 794.593,498.228 775.922,482.286 777.874,470.985"/>\n  						</g>\n  					</g>\n  				</g>\n  			</g>\n  			<g>\n  				<g>\n  					<g class="st0">\n  						<g>\n  							<polygon class="st1" points="803.473,463.774 822.143,479.716 809,480.699 790.33,464.757"/>\n  						</g>\n  						<g>\n  							<polygon class="st2" points="822.143,479.716 820.192,491.018 807.049,492 809,480.699"/>\n  						</g>\n  						<g>\n  							<polygon class="st3" points="809,480.699 807.049,492 788.378,476.058 790.33,464.757"/>\n  						</g>\n  					</g>\n  				</g>\n  			</g>\n  			<g>\n  				<g>\n  					<g class="st0">\n  						<g>\n  							<polygon class="st1" points="815.926,457.54 834.601,473.486 821.458,474.468 802.783,458.523"/>\n  						</g>\n  						<g>\n  							<polygon class="st2" points="834.601,473.486 832.65,484.787 819.507,485.77 821.458,474.468"/>\n  						</g>\n  						<g>\n  							<polygon class="st3" points="821.458,474.468 819.507,485.77 800.832,469.824 802.783,458.523"/>\n  						</g>\n  					</g>\n  				</g>\n  			</g>\n  			<g>\n  				<g>\n  					<g class="st0">\n  						<g>\n  							<polygon class="st1" points="828.391,451.312 847.066,467.258 833.923,468.24 815.248,452.295"/>\n  						</g>\n  						<g>\n  							<polygon class="st2" points="847.066,467.258 845.115,478.559 831.972,479.542 833.923,468.24"/>\n  						</g>\n  						<g>\n  							<polygon class="st3" points="833.923,468.24 831.972,479.542 813.297,463.596 815.248,452.295"/>\n  						</g>\n  					</g>\n  				</g>\n  			</g>\n  			<g>\n  				<g>\n  					<g class="st0">\n  						<g>\n  							<polygon class="st1" points="840.847,445.084 859.522,461.03 846.379,462.012 827.704,446.067"/>\n  						</g>\n  						<g>\n  							<polygon class="st2" points="859.522,461.03 857.571,472.331 844.428,473.314 846.379,462.012"/>\n  						</g>\n  						<g>\n  							<polygon class="st3" points="846.379,462.012 844.428,473.314 825.753,457.368 827.704,446.067"/>\n  						</g>\n  					</g>\n  				</g>\n  			</g>\n  		</g>\n  		<g id="to_1st_floor_from_2nd_floor">\n  			<rect x="856.961" y="500.732" class="st5" width="262.235" height="80.979"/>\n  			<text transform="matrix(0.9661 0 0 1 856.9615 514.412)" class="st6 st7 st8" role="presentation">{{\'map.text.tofirstfloor\'|translate}}</text>\n  			<g id="to_1st_floor_from_2nd_floor_3_">\n  				<g>\n  					<line class="st9" x1="860.13" y1="488.372" x2="824.213" y2="506.95"/>\n  					<g>\n  						<polygon class="st6" points="828.886,484.31 833.025,485.791 825.708,506.172 846.572,511.981 845.389,516.215\n  							819.98,509.135"/>\n  					</g>\n  				</g>\n  			</g>\n  		</g>\n  	</g>\n  	<g id="ramp_to_supercomputing_area" attr.aria-label="{{\'map.label.rampto1\'|translate}}" role="region">\n  		<rect x="1001.961" y="661.732" class="st5" width="262.235" height="20.313"/>\n  		<text id="Ramp_to_supercomputing_area_1_" transform="matrix(0.9661 0 0 1 1001.9615 675.412)" class="st6 st7 st8" role="presentation">{{\'map.text.rampto1stfloor\'|translate}}</text>\n  		<g id="ramp_to_supercomputing_area_1_">\n  			<g>\n  				<line class="st9" x1="954.505" y1="675.243" x2="994.854" y2="672.581"/>\n  				<g>\n  					<polygon class="st6" points="981.516,691.462 978.315,688.45 993.173,672.696 976.373,659.027 979.151,655.62 999.607,672.272\n  											"/>\n  				</g>\n  			</g>\n  		</g>\n  	</g>\n  </g>\n  <g id="annotation">\n  	<g>\n  		<g>\n  			<path class="st29" d="M1346.454,873.059c1.207,0,2.185-0.979,2.185-2.186c0-1.206-0.978-2.185-2.185-2.185\n  				c-1.207,0-2.186,0.979-2.186,2.185C1344.268,872.08,1345.247,873.059,1346.454,873.059z"/>\n  		</g>\n  		<path class="st29" d="M1348.803,873.489l-2.35,0.001l-2.348-0.001c-2.107,0-2.793,0.543-2.793,2.837v6.71\n  			c0,1.303,1.759,1.303,1.759,0l0.152-6.137h0.451v16.8c0,1.744,2.392,1.693,2.392,0l0.152-9.752h0.474l0.15,9.752\n  			c0,1.693,2.392,1.744,2.392,0v-16.8h0.451l0.152,6.137c0,1.303,1.757,1.303,1.757,0v-6.71\n  			C1351.594,874.032,1350.909,873.489,1348.803,873.489z"/>\n  	</g>\n  	<g>\n  		<path class="st29" d="M1306.016,873.362c1.274,0,2.298-1.042,2.298-2.3c0-1.275-1.025-2.299-2.298-2.299\n  			c-1.269,0-2.3,1.024-2.3,2.299C1303.716,872.32,1304.747,873.362,1306.016,873.362z"/>\n  		<path class="st29" d="M1317.202,890.477c0.365,0.597,1.209,0.841,1.846,0.461c0.63-0.383,0.819-1.173,0.461-1.839l-3.921-6.77\n  			c-0.243-0.407-0.67-0.638-1.111-0.651h-5.753l-0.057-2.037h4.179c0.57-0.034,1.038-0.468,1.038-1.051\n  			c0-0.577-0.455-1.024-1.038-1.044h-4.3l-0.149-1.675c-0.084-1.207-1.123-2.157-2.342-2.09c-1.229,0.068-2.157,1.127-2.098,2.347\n  			l0.404,6.981c0.1,1.225,1.124,2.093,2.337,2.093h7.457L1317.202,890.477z"/>\n  		<path class="st29" d="M1307.495,893.103c-3.772,0-6.831-3.053-6.831-6.831c0-2.069,0.938-3.915,2.397-5.17l-0.126-2.136\n  			c-2.443,1.526-4.081,4.21-4.081,7.306c0,4.77,3.865,8.642,8.641,8.642c3.515,0,6.519-2.116,7.871-5.128l-1.216-2.104\n  			C1313.5,890.77,1310.776,893.103,1307.495,893.103z"/>\n  	</g>\n  	<g id="_to_weather_trail" attr.aria-label="{{\'map.label.toweathertrail\'|translate}}" role="region">\n  		<g>\n  			<g class="st0">\n  				<g>\n  					<polygon class="st64" points="470.338,91.603 470.548,91.588 470.672,91.698"/>\n  				</g>\n  				<g>\n  					<polygon class="st65" points="470.672,91.698 467.602,108.606 467.268,108.51 470.338,91.603"/>\n  				</g>\n  				<g>\n  					<polygon class="st66" points="462.602,92.263 459.531,109.17 459.407,109.06 462.477,92.152"/>\n  				</g>\n  				<g>\n  					<polygon class="st64" points="462.477,92.152 462.687,92.138 462.602,92.263"/>\n  				</g>\n  				<g>\n  					<polygon class="st67" points="462.687,92.138 459.617,109.045 459.531,109.17 462.602,92.263"/>\n  				</g>\n  				<g>\n  					<polygon class="st65" points="473.746,94.421 470.675,111.329 464.248,109.491 467.318,92.584"/>\n  				</g>\n  				<g>\n  					<polygon class="st68" points="488.961,96.924 485.89,113.831 484.534,115.29 487.604,98.382"/>\n  				</g>\n  				<g>\n  					<polygon class="st65" points="487.604,98.382 484.534,115.29 470.675,111.329 473.746,94.421"/>\n  				</g>\n  				<g>\n  					<polygon class="st67" points="467.318,92.584 464.248,109.491 462.605,111.893 465.675,94.986"/>\n  				</g>\n  				<g>\n  					<polygon class="st67" points="465.675,94.986 462.605,111.893 459.062,117.071 462.132,100.164"/>\n  				</g>\n  				<g>\n  					<polygon class="st69" points="462.132,100.164 459.062,117.071 454.852,116.001 457.922,99.094"/>\n  				</g>\n  				<g>\n  					<polygon class="st66" points="509.46,133.779 506.39,150.686 462.605,111.893 465.675,94.986"/>\n  				</g>\n  				<g>\n  					<polygon class="st64" points="464.246,89.862 470.338,91.603 470.672,91.698 488.961,96.924 487.604,98.382 473.746,94.421\n  						467.318,92.584 465.675,94.986 462.132,100.164 457.922,99.094 462.602,92.263 462.687,92.138"/>\n  				</g>\n  				<g>\n  					<polygon class="st64" points="465.675,94.986 467.318,92.584 473.746,94.421 517.531,133.214 509.46,133.779"/>\n  				</g>\n  				<g>\n  					<polygon class="st70" points="517.531,133.214 514.46,150.122 506.39,150.686 509.46,133.779"/>\n  				</g>\n  			</g>\n  		</g>\n  	</g>\n  	<g id="ATM" attr.aria-label="{{\'map.label.atmloc\'|translate}}" role="region">\n  		<path class="st71" d="M535.401,1216.505c0,9.475-7.42,17.153-16.572,17.153c-9.15,0-16.57-7.678-16.57-17.153\n  			c0-9.47,7.42-17.149,16.57-17.149C527.981,1199.356,535.401,1207.035,535.401,1216.505z"/>\n  		<rect x="490.104" y="1209.319" class="st5" width="56.633" height="28.317"/>\n  		<text transform="matrix(0.9661 0 0 1 498.6558 1222.8046)" class="st72 st73" role="presentation">ATM</text>\n  	</g>\n  	<g id="to_picnic_area" attr.aria-label="{{\'map.label.picnicloc\'|translate}}" role="region">\n  		<g>\n  			<rect x="351.51" y="1337.653" class="st5" width="167.269" height="34.851"/>\n  			<text transform="matrix(0.9661 0 0 1 377.1329 1351.3329)" class="st28 st8" role="presentation">{{\'map.text.topicnicarea\'|translate}}</text>\n  		</g>\n  		<g id="to_picnic_area_1_">\n  			<g>\n  				<g class="st0">\n  					<g>\n  						<polygon class="st37" points="528.501,1332.812 525.43,1349.719 481.647,1310.927 484.717,1294.02"/>\n  					</g>\n  					<g>\n  						<polygon class="st38" points="544.314,1328.137 541.244,1345.044 536.574,1351.877 539.644,1334.969"/>\n  					</g>\n  					<g>\n  						<polygon class="st39" points="539.766,1335.078 539.56,1335.092 539.644,1334.969"/>\n  					</g>\n  					<g>\n  						<polygon class="st38" points="539.644,1334.969 536.574,1351.877 536.49,1352 539.56,1335.092"/>\n  					</g>\n  					<g>\n  						<polygon class="st42" points="539.766,1335.078 536.696,1351.985 536.49,1352 539.56,1335.092"/>\n  					</g>\n  					<g>\n  						<polygon class="st36" points="534.93,1334.65 531.859,1351.557 525.43,1349.719 528.501,1332.812"/>\n  					</g>\n  					<g>\n  						<polygon class="st38" points="536.571,1332.247 533.501,1349.155 531.859,1351.557 534.93,1334.65"/>\n  					</g>\n  					<g>\n  						<polygon class="st39" points="540.111,1327.067 544.314,1328.137 539.644,1334.969 539.56,1335.092 538.002,1337.372\n  							531.9,1335.628 531.574,1335.535 513.283,1330.307 514.64,1328.848 528.501,1332.812 534.93,1334.65 536.571,1332.247\n "/>\n  					</g>\n  					<g>\n  						<polygon class="st39" points="484.717,1294.02 492.788,1293.456 536.571,1332.247 534.93,1334.65 528.501,1332.812"/>\n  					</g>\n  					<g>\n  						<polygon class="st36" points="531.574,1335.535 528.504,1352.442 510.213,1347.214 513.283,1330.307"/>\n  					</g>\n  					<g>\n  						<polygon class="st36" points="531.9,1335.628 528.829,1352.535 528.504,1352.442 531.574,1335.535"/>\n  					</g>\n  					<g>\n  						<polygon class="st42" points="531.9,1335.628 528.829,1352.535 528.625,1352.55 531.696,1335.642"/>\n  					</g>\n  					<g>\n  						<polygon class="st37" points="531.696,1335.642 528.625,1352.55 528.504,1352.442 531.574,1335.535"/>\n  					</g>\n  					<g>\n  						<polygon class="st39" points="531.696,1335.642 531.574,1335.535 531.9,1335.628"/>\n  					</g>\n  					<g>\n  						<polygon class="st38" points="539.56,1335.092 536.49,1352 534.931,1354.279 538.002,1337.372"/>\n  					</g>\n  					<g>\n  						<polygon class="st36" points="538.002,1337.372 534.931,1354.279 528.829,1352.535 531.9,1335.628"/>\n  					</g>\n  				</g>\n  			</g>\n  		</g>\n  	</g>\n  	<line class="st74" x1="199.277" y1="940.59" x2="269.774" y2="1002.087"/>\n  </g>\n  <g id="Elevators_1_">\n  	<g id="Elevator_from_1st_floor_Atmosphere_exhibit" attr.aria-label="{{\'map.label.elevator1theater\'|translate}}" role="region">\n  		<rect x="616.649" y="1050.747" class="st75" width="31.667" height="33.225"/>\n  		<rect x="611.992" y="1023.7" class="st29" width="41.411" height="63.911"/>\n  		<g>\n  			<linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="614.1923" y1="1067.7449" x2="651.1466" y2="1067.7449">\n  				<stop  offset="0" style="stop-color:#5272B8"/>\n  				<stop  offset="1" style="stop-color:#3C5EAB"/>\n  			</linearGradient>\n  			<path class="st76" d="M651.145,1081.279v-27.035c0-2.728-2.163-4.937-4.923-4.937h-27.098c-2.851,0-4.925,2.239-4.925,4.935\n  				l-0.007,0.002v27.035c0,2.759,2.235,4.905,4.932,4.905l0,0h27.128c2.698,0,4.9-2.021,4.895-4.898L651.145,1081.279z\n  				 M646.04,1081.059h-26.74v-26.585h26.74V1081.059z"/>\n  			<g>\n  				<g>\n  					<linearGradient id="SVGID_2_" gradientUnits="userSpaceOnUse" x1="632.8884" y1="1036.6832" x2="650.9709" y2="1036.6832">\n  						<stop  offset="0" style="stop-color:#5272B8"/>\n  						<stop  offset="1" style="stop-color:#3C5EAB"/>\n  					</linearGradient>\n  					<path class="st77" d="M639.355,1028.382c-0.03-3.536,5.085-3.577,5.116,0l-0.078,10.731l2.752-3.371\n  						c1.898-2.085,5.239,0.822,3.177,3.177l-6.673,7.945c-1.055,1.055-2.424,1.048-3.472,0l-6.642-7.975\n  						c-2.062-2.357,1.309-5.294,3.177-3.177l2.721,3.401L639.355,1028.382z"/>\n  				</g>\n  				<g>\n  					<linearGradient id="SVGID_3_" gradientUnits="userSpaceOnUse" x1="614.3161" y1="1036.7064" x2="632.4" y2="1036.7064">\n  						<stop  offset="0" style="stop-color:#5272B8"/>\n  						<stop  offset="1" style="stop-color:#3C5EAB"/>\n  					</linearGradient>\n  					<path class="st78" d="M620.782,1045.008c-0.029,3.536,5.087,3.577,5.116,0l-0.078-10.73l2.752,3.371\n  						c1.9,2.086,5.24-0.822,3.179-3.179l-6.673-7.943c-1.055-1.054-2.426-1.048-3.474,0l-6.642,7.975\n  						c-2.062,2.355,1.311,5.295,3.179,3.177l2.72-3.401L620.782,1045.008z"/>\n  				</g>\n  			</g>\n  			<g>\n  				<g>\n  					<g>\n  						<linearGradient id="SVGID_4_" gradientUnits="userSpaceOnUse" x1="622.1575" y1="1059.0162" x2="625.6382" y2="1059.0162">\n  							<stop  offset="0" style="stop-color:#5272B8"/>\n  							<stop  offset="1" style="stop-color:#3C5EAB"/>\n  						</linearGradient>\n  						<path class="st79" d="M623.899,1060.756c0.96,0,1.739-0.779,1.739-1.739s-0.78-1.74-1.739-1.74\n  							c-0.962,0-1.741,0.779-1.741,1.74S622.937,1060.756,623.899,1060.756z"/>\n  					</g>\n  					<linearGradient id="SVGID_5_" gradientUnits="userSpaceOnUse" x1="619.8055" y1="1069.6553" x2="627.9901" y2="1069.6553">\n  						<stop  offset="0" style="stop-color:#5272B8"/>\n  						<stop  offset="1" style="stop-color:#3C5EAB"/>\n  					</linearGradient>\n  					<path class="st80" d="M625.768,1061.098l-1.869,0.001l-1.87-0.001c-1.677,0-2.224,0.432-2.224,2.259v5.34\n  						c0,1.038,1.4,1.038,1.4,0l0.12-4.884h0.359v13.374c0,1.387,1.905,1.346,1.905,0l0.12-7.763h0.378l0.12,7.763\n  						c0,1.346,1.903,1.387,1.903,0v-13.374h0.359l0.121,4.884c0,1.038,1.399,1.038,1.399,0v-5.34\n  						C627.99,1061.53,627.445,1061.098,625.768,1061.098z"/>\n  				</g>\n  				<g>\n  					<g>\n  						<linearGradient id="SVGID_6_" gradientUnits="userSpaceOnUse" x1="630.9292" y1="1059.0162" x2="634.4097" y2="1059.0162">\n  							<stop  offset="0" style="stop-color:#5272B8"/>\n  							<stop  offset="1" style="stop-color:#3C5EAB"/>\n  						</linearGradient>\n  						<path class="st81" d="M632.67,1060.756c0.96,0,1.739-0.779,1.739-1.739s-0.779-1.74-1.739-1.74\n  							c-0.962,0-1.741,0.779-1.741,1.74S631.709,1060.756,632.67,1060.756z"/>\n  					</g>\n  					<linearGradient id="SVGID_7_" gradientUnits="userSpaceOnUse" x1="628.5773" y1="1069.6553" x2="636.7618" y2="1069.6553">\n  						<stop  offset="0" style="stop-color:#5272B8"/>\n  						<stop  offset="1" style="stop-color:#3C5EAB"/>\n  					</linearGradient>\n  					<path class="st82" d="M634.54,1061.098l-1.869,0.001l-1.869-0.001c-1.677,0-2.224,0.432-2.224,2.259v5.34\n  						c0,1.038,1.4,1.038,1.4,0l0.121-4.884h0.358v13.374c0,1.387,1.905,1.346,1.905,0l0.12-7.763h0.378l0.12,7.763\n  						c0,1.346,1.905,1.387,1.905,0v-13.374h0.358l0.121,4.884c0,1.038,1.399,1.038,1.399,0v-5.34\n  						C636.762,1061.53,636.217,1061.098,634.54,1061.098z"/>\n  				</g>\n  				<g>\n  					<g>\n  						<linearGradient id="SVGID_8_" gradientUnits="userSpaceOnUse" x1="639.7007" y1="1059.0162" x2="643.1815" y2="1059.0162">\n  							<stop  offset="0" style="stop-color:#5272B8"/>\n  							<stop  offset="1" style="stop-color:#3C5EAB"/>\n  						</linearGradient>\n  						<path class="st83" d="M641.442,1060.756c0.96,0,1.74-0.779,1.74-1.739s-0.78-1.74-1.74-1.74c-0.96,0-1.741,0.779-1.741,1.74\n  							S640.482,1060.756,641.442,1060.756z"/>\n  					</g>\n  					<linearGradient id="SVGID_9_" gradientUnits="userSpaceOnUse" x1="637.3489" y1="1069.6553" x2="645.5334" y2="1069.6553">\n  						<stop  offset="0" style="stop-color:#5272B8"/>\n  						<stop  offset="1" style="stop-color:#3C5EAB"/>\n  					</linearGradient>\n  					<path class="st84" d="M643.311,1061.098l-1.87,0.001l-1.869-0.001c-1.677,0-2.224,0.432-2.224,2.259v5.34\n  						c0,1.038,1.4,1.038,1.4,0l0.121-4.884h0.358v13.374c0,1.387,1.905,1.346,1.905,0l0.12-7.763h0.378l0.12,7.763\n  						c0,1.346,1.905,1.387,1.905,0v-13.374h0.358l0.121,4.884c0,1.038,1.399,1.038,1.399,0v-5.34\n  						C645.533,1061.53,644.988,1061.098,643.311,1061.098z"/>\n  				</g>\n  			</g>\n  		</g>\n  	</g>\n  	<g id="Elevator_from_2nd_Floor_Atmosphere_exhibit" attr.aria-label="{{\'map.label.elevator2library\'|translate}}" role="region">\n  		<rect x="616.649" y="275.161" class="st75" width="31.667" height="33.225"/>\n  		<rect x="611.992" y="248.7" class="st29" width="41.411" height="63.911"/>\n  		<g>\n  			<linearGradient id="SVGID_19_" gradientUnits="userSpaceOnUse" x1="614.1923" y1="292.1584" x2="651.1466" y2="292.1584">\n  				<stop  offset="0" style="stop-color:#5272B8"/>\n  				<stop  offset="1" style="stop-color:#3C5EAB"/>\n  			</linearGradient>\n  			<path class="st94" d="M651.145,305.692v-27.035c0-2.728-2.163-4.937-4.923-4.937h-27.098c-2.851,0-4.925,2.239-4.925,4.935\n  				l-0.007,0.002v27.035c0,2.759,2.235,4.905,4.932,4.905l0,0h27.128c2.698,0,4.9-2.021,4.895-4.898L651.145,305.692z\n  				 M646.04,305.473h-26.74v-26.585h26.74V305.473z"/>\n  			<g>\n  				<g>\n  					<linearGradient id="SVGID_20_" gradientUnits="userSpaceOnUse" x1="632.8884" y1="261.0968" x2="650.9709" y2="261.0968">\n  						<stop  offset="0" style="stop-color:#5272B8"/>\n  						<stop  offset="1" style="stop-color:#3C5EAB"/>\n  					</linearGradient>\n  					<path class="st95" d="M639.355,252.796c-0.03-3.536,5.085-3.577,5.116,0l-0.078,10.731l2.752-3.371\n  						c1.898-2.085,5.239,0.822,3.177,3.177l-6.673,7.945c-1.055,1.055-2.424,1.048-3.472,0l-6.642-7.975\n  						c-2.062-2.357,1.309-5.294,3.177-3.177l2.721,3.401L639.355,252.796z"/>\n  				</g>\n  				<g>\n  					<linearGradient id="SVGID_21_" gradientUnits="userSpaceOnUse" x1="614.3161" y1="261.12" x2="632.4" y2="261.12">\n  						<stop  offset="0" style="stop-color:#5272B8"/>\n  						<stop  offset="1" style="stop-color:#3C5EAB"/>\n  					</linearGradient>\n  					<path class="st96" d="M620.782,269.421c-0.029,3.536,5.087,3.577,5.116,0l-0.078-10.73l2.752,3.371\n  						c1.9,2.085,5.24-0.822,3.179-3.179l-6.673-7.943c-1.055-1.054-2.426-1.048-3.474,0l-6.642,7.975\n  						c-2.062,2.355,1.311,5.294,3.179,3.177l2.72-3.401L620.782,269.421z"/>\n  				</g>\n  			</g>\n  			<g>\n  				<g>\n  					<g>\n  						<linearGradient id="SVGID_22_" gradientUnits="userSpaceOnUse" x1="622.1575" y1="283.4298" x2="625.6382" y2="283.4298">\n  							<stop  offset="0" style="stop-color:#5272B8"/>\n  							<stop  offset="1" style="stop-color:#3C5EAB"/>\n  						</linearGradient>\n  						<path class="st97" d="M623.899,285.169c0.96,0,1.739-0.779,1.739-1.739c0-0.96-0.78-1.739-1.739-1.739\n  							c-0.962,0-1.741,0.779-1.741,1.739C622.157,284.39,622.937,285.169,623.899,285.169z"/>\n  					</g>\n  					<linearGradient id="SVGID_23_" gradientUnits="userSpaceOnUse" x1="619.8055" y1="294.0688" x2="627.9901" y2="294.0688">\n  						<stop  offset="0" style="stop-color:#5272B8"/>\n  						<stop  offset="1" style="stop-color:#3C5EAB"/>\n  					</linearGradient>\n  					<path class="st98" d="M625.768,285.512l-1.869,0.002l-1.87-0.002c-1.677,0-2.224,0.432-2.224,2.259v5.34\n  						c0,1.038,1.4,1.038,1.4,0l0.12-4.884h0.359v13.374c0,1.387,1.905,1.346,1.905,0l0.12-7.763h0.378l0.12,7.763\n  						c0,1.346,1.903,1.387,1.903,0v-13.374h0.359l0.121,4.884c0,1.038,1.399,1.038,1.399,0v-5.34\n  						C627.99,285.944,627.445,285.512,625.768,285.512z"/>\n  				</g>\n  				<g>\n  					<g>\n  						<linearGradient id="SVGID_24_" gradientUnits="userSpaceOnUse" x1="630.9292" y1="283.4298" x2="634.4097" y2="283.4298">\n  							<stop  offset="0" style="stop-color:#5272B8"/>\n  							<stop  offset="1" style="stop-color:#3C5EAB"/>\n  						</linearGradient>\n  						<path class="st99" d="M632.67,285.169c0.96,0,1.739-0.779,1.739-1.739c0-0.96-0.779-1.739-1.739-1.739\n  							c-0.962,0-1.741,0.779-1.741,1.739C630.929,284.39,631.709,285.169,632.67,285.169z"/>\n  					</g>\n  					<linearGradient id="SVGID_25_" gradientUnits="userSpaceOnUse" x1="628.5773" y1="294.0688" x2="636.7618" y2="294.0688">\n  						<stop  offset="0" style="stop-color:#5272B8"/>\n  						<stop  offset="1" style="stop-color:#3C5EAB"/>\n  					</linearGradient>\n  					<path class="st100" d="M634.54,285.512l-1.869,0.002l-1.869-0.002c-1.677,0-2.224,0.432-2.224,2.259v5.34\n  						c0,1.038,1.4,1.038,1.4,0l0.121-4.884h0.358v13.374c0,1.387,1.905,1.346,1.905,0l0.12-7.763h0.378l0.12,7.763\n  						c0,1.346,1.905,1.387,1.905,0v-13.374h0.358l0.121,4.884c0,1.038,1.399,1.038,1.399,0v-5.34\n  						C636.762,285.944,636.217,285.512,634.54,285.512z"/>\n  				</g>\n  				<g>\n  					<g>\n  						<linearGradient id="SVGID_26_" gradientUnits="userSpaceOnUse" x1="639.7007" y1="283.4298" x2="643.1815" y2="283.4298">\n  							<stop  offset="0" style="stop-color:#5272B8"/>\n  							<stop  offset="1" style="stop-color:#3C5EAB"/>\n  						</linearGradient>\n  						<path class="st101" d="M641.442,285.169c0.96,0,1.74-0.779,1.74-1.739c0-0.96-0.78-1.739-1.74-1.739\n  							c-0.96,0-1.741,0.779-1.741,1.739C639.701,284.39,640.482,285.169,641.442,285.169z"/>\n  					</g>\n  					<linearGradient id="SVGID_27_" gradientUnits="userSpaceOnUse" x1="637.3489" y1="294.0688" x2="645.5334" y2="294.0688">\n  						<stop  offset="0" style="stop-color:#5272B8"/>\n  						<stop  offset="1" style="stop-color:#3C5EAB"/>\n  					</linearGradient>\n  					<path class="st102" d="M643.311,285.512l-1.87,0.002l-1.869-0.002c-1.677,0-2.224,0.432-2.224,2.259v5.34\n  						c0,1.038,1.4,1.038,1.4,0l0.121-4.884h0.358v13.374c0,1.387,1.905,1.346,1.905,0l0.12-7.763h0.378l0.12,7.763\n  						c0,1.346,1.905,1.387,1.905,0v-13.374h0.358l0.121,4.884c0,1.038,1.399,1.038,1.399,0v-5.34\n  						C645.533,285.944,644.988,285.512,643.311,285.512z"/>\n  				</g>\n  			</g>\n  		</g>\n  	</g>\n  	<g id="Elevator_from_2nd_floor__north_of_Climate_Exhibit" attr.aria-label="{{\'map.label.elevator2climate\'|translate}}" role="region">\n  		<rect x="1395.354" y="275.161" class="st29" width="31.667" height="33.225"/>\n  		<g>\n  			<linearGradient id="SVGID_28_" gradientUnits="userSpaceOnUse" x1="1392.8977" y1="292.1584" x2="1429.8519" y2="292.1584">\n  				<stop  offset="0" style="stop-color:#5272B8"/>\n  				<stop  offset="1" style="stop-color:#3C5EAB"/>\n  			</linearGradient>\n  			<path class="st103" d="M1429.85,305.692v-27.035c0-2.728-2.163-4.937-4.923-4.937h-27.098c-2.851,0-4.925,2.239-4.925,4.935\n  				l-0.007,0.002v27.035c0,2.759,2.235,4.905,4.932,4.905l0,0h27.128c2.698,0,4.9-2.021,4.895-4.898L1429.85,305.692z\n  				 M1424.745,305.473h-26.74v-26.585h26.74V305.473z"/>\n  			<g>\n  				<g>\n  					<linearGradient id="SVGID_29_" gradientUnits="userSpaceOnUse" x1="1411.5938" y1="261.0968" x2="1429.6763" y2="261.0968">\n  						<stop  offset="0" style="stop-color:#5272B8"/>\n  						<stop  offset="1" style="stop-color:#3C5EAB"/>\n  					</linearGradient>\n  					<path class="st104" d="M1418.06,252.796c-0.03-3.536,5.085-3.577,5.116,0l-0.078,10.731l2.752-3.371\n  						c1.898-2.085,5.239,0.822,3.177,3.177l-6.673,7.945c-1.055,1.055-2.424,1.048-3.472,0l-6.642-7.975\n  						c-2.062-2.357,1.309-5.294,3.177-3.177l2.721,3.401L1418.06,252.796z"/>\n  				</g>\n  				<g>\n  					<linearGradient id="SVGID_30_" gradientUnits="userSpaceOnUse" x1="1393.0214" y1="261.12" x2="1411.1053" y2="261.12">\n  						<stop  offset="0" style="stop-color:#5272B8"/>\n  						<stop  offset="1" style="stop-color:#3C5EAB"/>\n  					</linearGradient>\n  					<path class="st105" d="M1399.488,269.421c-0.029,3.536,5.087,3.577,5.116,0l-0.078-10.73l2.752,3.371\n  						c1.9,2.085,5.24-0.822,3.179-3.179l-6.673-7.943c-1.055-1.054-2.426-1.048-3.474,0l-6.642,7.975\n  						c-2.062,2.355,1.311,5.294,3.179,3.177l2.72-3.401L1399.488,269.421z"/>\n  				</g>\n  			</g>\n  			<g>\n  				<g>\n  					<g>\n  						<linearGradient id="SVGID_31_" gradientUnits="userSpaceOnUse" x1="1400.8628" y1="283.4298" x2="1404.3435" y2="283.4298">\n  							<stop  offset="0" style="stop-color:#5272B8"/>\n  							<stop  offset="1" style="stop-color:#3C5EAB"/>\n  						</linearGradient>\n  						<path class="st106" d="M1402.604,285.169c0.96,0,1.739-0.779,1.739-1.739c0-0.96-0.78-1.739-1.739-1.739\n  							c-0.962,0-1.741,0.779-1.741,1.739C1400.863,284.39,1401.642,285.169,1402.604,285.169z"/>\n  					</g>\n  					<linearGradient id="SVGID_32_" gradientUnits="userSpaceOnUse" x1="1398.5109" y1="294.0688" x2="1406.6954" y2="294.0688">\n  						<stop  offset="0" style="stop-color:#5272B8"/>\n  						<stop  offset="1" style="stop-color:#3C5EAB"/>\n  					</linearGradient>\n  					<path class="st107" d="M1404.473,285.512l-1.869,0.002l-1.87-0.002c-1.677,0-2.224,0.432-2.224,2.259v5.34\n  						c0,1.038,1.401,1.038,1.401,0l0.12-4.884h0.359v13.374c0,1.387,1.905,1.346,1.905,0l0.12-7.763h0.378l0.12,7.763\n  						c0,1.346,1.903,1.387,1.903,0v-13.374h0.359l0.121,4.884c0,1.038,1.399,1.038,1.399,0v-5.34\n  						C1406.695,285.944,1406.151,285.512,1404.473,285.512z"/>\n  				</g>\n  				<g>\n  					<g>\n  						<linearGradient id="SVGID_33_" gradientUnits="userSpaceOnUse" x1="1409.6345" y1="283.4298" x2="1413.1151" y2="283.4298">\n  							<stop  offset="0" style="stop-color:#5272B8"/>\n  							<stop  offset="1" style="stop-color:#3C5EAB"/>\n  						</linearGradient>\n  						<path class="st108" d="M1411.376,285.169c0.96,0,1.739-0.779,1.739-1.739c0-0.96-0.779-1.739-1.739-1.739\n  							c-0.962,0-1.741,0.779-1.741,1.739C1409.635,284.39,1410.414,285.169,1411.376,285.169z"/>\n  					</g>\n  					<linearGradient id="SVGID_34_" gradientUnits="userSpaceOnUse" x1="1407.2826" y1="294.0688" x2="1415.4672" y2="294.0688">\n  						<stop  offset="0" style="stop-color:#5272B8"/>\n  						<stop  offset="1" style="stop-color:#3C5EAB"/>\n  					</linearGradient>\n  					<path class="st109" d="M1413.245,285.512l-1.869,0.002l-1.869-0.002c-1.677,0-2.224,0.432-2.224,2.259v5.34\n  						c0,1.038,1.4,1.038,1.4,0l0.121-4.884h0.358v13.374c0,1.387,1.905,1.346,1.905,0l0.12-7.763h0.378l0.12,7.763\n  						c0,1.346,1.905,1.387,1.905,0v-13.374h0.358l0.121,4.884c0,1.038,1.399,1.038,1.399,0v-5.34\n  						C1415.467,285.944,1414.922,285.512,1413.245,285.512z"/>\n  				</g>\n  				<g>\n  					<g>\n  						<linearGradient id="SVGID_35_" gradientUnits="userSpaceOnUse" x1="1418.4061" y1="283.4298" x2="1421.8868" y2="283.4298">\n  							<stop  offset="0" style="stop-color:#5272B8"/>\n  							<stop  offset="1" style="stop-color:#3C5EAB"/>\n  						</linearGradient>\n  						<path class="st110" d="M1420.147,285.169c0.96,0,1.74-0.779,1.74-1.739c0-0.96-0.78-1.739-1.74-1.739\n  							c-0.96,0-1.741,0.779-1.741,1.739C1418.406,284.39,1419.187,285.169,1420.147,285.169z"/>\n  					</g>\n  					<linearGradient id="SVGID_36_" gradientUnits="userSpaceOnUse" x1="1416.0542" y1="294.0688" x2="1424.2388" y2="294.0688">\n  						<stop  offset="0" style="stop-color:#5272B8"/>\n  						<stop  offset="1" style="stop-color:#3C5EAB"/>\n  					</linearGradient>\n  					<path class="st111" d="M1422.017,285.512l-1.87,0.002l-1.869-0.002c-1.677,0-2.224,0.432-2.224,2.259v5.34\n  						c0,1.038,1.401,1.038,1.401,0l0.121-4.884h0.358v13.374c0,1.387,1.905,1.346,1.905,0l0.12-7.763h0.378l0.12,7.763\n  						c0,1.346,1.905,1.387,1.905,0v-13.374h0.358l0.121,4.884c0,1.038,1.399,1.038,1.399,0v-5.34\n  						C1424.239,285.944,1423.694,285.512,1422.017,285.512z"/>\n  				</g>\n  			</g>\n  		</g>\n  	</g>\n  	<g id="Elevator_from_first_floor_NCAR_Security" attr.aria-label="{{\'map.label.elevator1front\'|translate}}" role="region">\n  		<rect x="1395.354" y="982.221" class="st29" width="31.667" height="33.225"/>\n  		<g>\n  			<linearGradient id="SVGID_37_" gradientUnits="userSpaceOnUse" x1="1392.8977" y1="999.2188" x2="1429.8519" y2="999.2188">\n  				<stop  offset="0" style="stop-color:#5272B8"/>\n  				<stop  offset="1" style="stop-color:#3C5EAB"/>\n  			</linearGradient>\n  			<path class="st112" d="M1429.85,1012.752v-27.035c0-2.728-2.163-4.937-4.923-4.937h-27.098c-2.851,0-4.925,2.239-4.925,4.935\n  				l-0.007,0.002v27.035c0,2.759,2.235,4.905,4.932,4.905l0,0h27.128c2.698,0,4.9-2.021,4.895-4.898L1429.85,1012.752z\n  				 M1424.745,1012.533h-26.74v-26.585h26.74V1012.533z"/>\n  			<g>\n  				<g>\n  					<linearGradient id="SVGID_38_" gradientUnits="userSpaceOnUse" x1="1411.5938" y1="968.1571" x2="1429.6763" y2="968.1571">\n  						<stop  offset="0" style="stop-color:#5272B8"/>\n  						<stop  offset="1" style="stop-color:#3C5EAB"/>\n  					</linearGradient>\n  					<path class="st113" d="M1418.06,959.856c-0.03-3.536,5.085-3.577,5.116,0l-0.078,10.731l2.752-3.371\n  						c1.898-2.085,5.239,0.822,3.177,3.177l-6.673,7.945c-1.055,1.055-2.424,1.048-3.472,0l-6.642-7.975\n  						c-2.062-2.357,1.309-5.294,3.177-3.177l2.721,3.401L1418.06,959.856z"/>\n  				</g>\n  				<g>\n  					<linearGradient id="SVGID_39_" gradientUnits="userSpaceOnUse" x1="1393.0214" y1="968.1804" x2="1411.1053" y2="968.1804">\n  						<stop  offset="0" style="stop-color:#5272B8"/>\n  						<stop  offset="1" style="stop-color:#3C5EAB"/>\n  					</linearGradient>\n  					<path class="st114" d="M1399.488,976.481c-0.029,3.536,5.087,3.577,5.116,0l-0.078-10.73l2.752,3.371\n  						c1.9,2.085,5.24-0.822,3.179-3.179l-6.673-7.943c-1.055-1.054-2.426-1.048-3.474,0l-6.642,7.975\n  						c-2.062,2.355,1.311,5.294,3.179,3.177l2.72-3.401L1399.488,976.481z"/>\n  				</g>\n  			</g>\n  			<g>\n  				<g>\n  					<g>\n  						<linearGradient id="SVGID_40_" gradientUnits="userSpaceOnUse" x1="1400.8628" y1="990.4902" x2="1404.3435" y2="990.4902">\n  							<stop  offset="0" style="stop-color:#5272B8"/>\n  							<stop  offset="1" style="stop-color:#3C5EAB"/>\n  						</linearGradient>\n  						<path class="st115" d="M1402.604,992.23c0.96,0,1.739-0.779,1.739-1.739c0-0.96-0.78-1.739-1.739-1.739\n  							c-0.962,0-1.741,0.779-1.741,1.739C1400.863,991.45,1401.642,992.23,1402.604,992.23z"/>\n  					</g>\n  					<linearGradient id="SVGID_41_" gradientUnits="userSpaceOnUse" x1="1398.5109" y1="1001.1292" x2="1406.6954" y2="1001.1292">\n  						<stop  offset="0" style="stop-color:#5272B8"/>\n  						<stop  offset="1" style="stop-color:#3C5EAB"/>\n  					</linearGradient>\n  					<path class="st116" d="M1404.473,992.572l-1.869,0.002l-1.87-0.002c-1.677,0-2.224,0.432-2.224,2.259v5.34\n  						c0,1.038,1.401,1.038,1.401,0l0.12-4.884h0.359v13.374c0,1.387,1.905,1.346,1.905,0l0.12-7.763h0.378l0.12,7.763\n  						c0,1.346,1.903,1.387,1.903,0v-13.374h0.359l0.121,4.884c0,1.038,1.399,1.038,1.399,0v-5.34\n  						C1406.695,993.004,1406.151,992.572,1404.473,992.572z"/>\n  				</g>\n  				<g>\n  					<g>\n  						<linearGradient id="SVGID_42_" gradientUnits="userSpaceOnUse" x1="1409.6345" y1="990.4902" x2="1413.1151" y2="990.4902">\n  							<stop  offset="0" style="stop-color:#5272B8"/>\n  							<stop  offset="1" style="stop-color:#3C5EAB"/>\n  						</linearGradient>\n  						<path class="st117" d="M1411.376,992.23c0.96,0,1.739-0.779,1.739-1.739c0-0.96-0.779-1.739-1.739-1.739\n  							c-0.962,0-1.741,0.779-1.741,1.739C1409.635,991.45,1410.414,992.23,1411.376,992.23z"/>\n  					</g>\n  					<linearGradient id="SVGID_43_" gradientUnits="userSpaceOnUse" x1="1407.2826" y1="1001.1292" x2="1415.4672" y2="1001.1292">\n  						<stop  offset="0" style="stop-color:#5272B8"/>\n  						<stop  offset="1" style="stop-color:#3C5EAB"/>\n  					</linearGradient>\n  					<path class="st118" d="M1413.245,992.572l-1.869,0.002l-1.869-0.002c-1.677,0-2.224,0.432-2.224,2.259v5.34\n  						c0,1.038,1.4,1.038,1.4,0l0.121-4.884h0.358v13.374c0,1.387,1.905,1.346,1.905,0l0.12-7.763h0.378l0.12,7.763\n  						c0,1.346,1.905,1.387,1.905,0v-13.374h0.358l0.121,4.884c0,1.038,1.399,1.038,1.399,0v-5.34\n  						C1415.467,993.004,1414.922,992.572,1413.245,992.572z"/>\n  				</g>\n  				<g>\n  					<g>\n  						<linearGradient id="SVGID_44_" gradientUnits="userSpaceOnUse" x1="1418.4061" y1="990.4902" x2="1421.8868" y2="990.4902">\n  							<stop  offset="0" style="stop-color:#5272B8"/>\n  							<stop  offset="1" style="stop-color:#3C5EAB"/>\n  						</linearGradient>\n  						<path class="st119" d="M1420.147,992.23c0.96,0,1.74-0.779,1.74-1.739c0-0.96-0.78-1.739-1.74-1.739\n  							c-0.96,0-1.741,0.779-1.741,1.739C1418.406,991.45,1419.187,992.23,1420.147,992.23z"/>\n  					</g>\n  					<linearGradient id="SVGID_45_" gradientUnits="userSpaceOnUse" x1="1416.0542" y1="1001.1292" x2="1424.2388" y2="1001.1292">\n  						<stop  offset="0" style="stop-color:#5272B8"/>\n  						<stop  offset="1" style="stop-color:#3C5EAB"/>\n  					</linearGradient>\n  					<path class="st120" d="M1422.017,992.572l-1.87,0.002l-1.869-0.002c-1.677,0-2.224,0.432-2.224,2.259v5.34\n  						c0,1.038,1.401,1.038,1.401,0l0.121-4.884h0.358v13.374c0,1.387,1.905,1.346,1.905,0l0.12-7.763h0.378l0.12,7.763\n  						c0,1.346,1.905,1.387,1.905,0v-13.374h0.358l0.121,4.884c0,1.038,1.399,1.038,1.399,0v-5.34\n  						C1424.239,993.004,1423.694,992.572,1422.017,992.572z"/>\n  				</g>\n  			</g>\n  		</g>\n  	</g>\n  </g>\n  <g id="Bathrooms_1_">\n  	<g id="men_x27_s_bathroom_on_1st_floor_by_the_font_desk" attr.aria-label="{{\'map.label.brmen1front\' | translate}}" role="region">\n  		<g>\n  			<path class="st130" d="M1333.275,984.86c-2.435,0-3.804,1.257-3.804,3.826v26.475c0,2.402,1.23,3.66,3.664,3.66h26.632\n  				c2.434,0,3.667-1.195,3.667-3.66v-26.475c0-2.505-1.233-3.826-3.743-3.826C1359.692,984.86,1333.267,984.852,1333.275,984.86z"/>\n  			<linearGradient id="SVGID_55_" gradientUnits="userSpaceOnUse" x1="1347.0928" y1="984.8571" x2="1347.0928" y2="1017.5989">\n  				<stop  offset="0" style="stop-color:#5272B8"/>\n  				<stop  offset="1" style="stop-color:#3C5EAB"/>\n  			</linearGradient>\n  			<path class="st131" d="M1362.761,1017.599c0.439-0.594,0.674-1.395,0.674-2.438v-26.475c0-2.505-1.233-3.826-3.743-3.826\n  				c0,0-26.426-0.008-26.418,0c-1.053,0-1.895,0.251-2.525,0.726C1334.276,1001.537,1346.812,1014.073,1362.761,1017.599z"/>\n  		</g>\n  		<g>\n  			<path class="st29" d="M1347.109,991.735c1.207,0,2.185-0.979,2.185-2.186c0-1.205-0.978-2.185-2.185-2.185\n  				c-1.207,0-2.186,0.979-2.186,2.185C1344.923,990.756,1345.902,991.735,1347.109,991.735z"/>\n  		</g>\n  		<path class="st29" d="M1349.459,992.166l-2.35,0.001l-2.348-0.001c-2.107,0-2.793,0.543-2.793,2.837v6.71\n  			c0,1.303,1.759,1.303,1.759,0l0.152-6.137h0.451v16.8c0,1.744,2.392,1.693,2.392,0l0.152-9.752h0.474l0.15,9.752\n  			c0,1.693,2.392,1.744,2.392,0v-16.8h0.451l0.152,6.137c0,1.303,1.757,1.303,1.757,0v-6.71\n  			C1352.249,992.709,1351.565,992.166,1349.459,992.166z"/>\n  	</g>\n  	<g id="men_x27_s_bathroom_on_2nd_floor_north_of_the_climate_exhibit" attr.aria-label="{{\'map.label.brm1climate\'|translate}}" role="region">\n  		<g>\n  			<path class="st130" d="M1323.93,243.537c-2.434,0-3.804,1.257-3.804,3.826v26.475c0,2.402,1.23,3.66,3.664,3.66h26.632\n  				c2.435,0,3.667-1.195,3.667-3.66v-26.475c0-2.505-1.232-3.826-3.743-3.826C1350.348,243.537,1323.922,243.529,1323.93,243.537z"\n  				/>\n  			<linearGradient id="SVGID_56_" gradientUnits="userSpaceOnUse" x1="1337.7484" y1="243.5336" x2="1337.7484" y2="276.2755">\n  				<stop  offset="0" style="stop-color:#5272B8"/>\n  				<stop  offset="1" style="stop-color:#3C5EAB"/>\n  			</linearGradient>\n  			<path class="st132" d="M1353.417,276.276c0.439-0.594,0.674-1.395,0.674-2.438v-26.475c0-2.505-1.233-3.826-3.743-3.826\n  				c0,0-26.426-0.008-26.418,0c-1.053,0-1.895,0.251-2.525,0.726C1324.932,260.213,1337.467,272.749,1353.417,276.276z"/>\n  		</g>\n  		<g>\n  			<path class="st29" d="M1337.109,251.735c1.207,0,2.185-0.979,2.185-2.186c0-1.205-0.978-2.185-2.185-2.185\n  				c-1.207,0-2.186,0.979-2.186,2.185C1334.923,250.756,1335.902,251.735,1337.109,251.735z"/>\n  		</g>\n  		<path class="st29" d="M1339.459,252.166l-2.35,0.001l-2.348-0.001c-2.107,0-2.793,0.543-2.793,2.837v6.71\n  			c0,1.303,1.759,1.303,1.759,0l0.152-6.137h0.451v16.8c0,1.744,2.392,1.693,2.392,0l0.152-9.752h0.474l0.15,9.752\n  			c0,1.693,2.392,1.744,2.392,0v-16.8h0.451l0.152,6.137c0,1.303,1.757,1.303,1.757,0v-6.71\n  			C1342.249,252.709,1341.565,252.166,1339.459,252.166z"/>\n  	</g>\n  	<g id="men_x27_s_bathroom_on_2nd_floor_by_the_climate_exhibit_and_library" attr.aria-label="{{\'map.label.brmen2library\'|translate}}" role="region">\n  		<g>\n  			<path class="st130" d="M834.903,383.704c-2.435,0-3.804,1.257-3.804,3.826v26.475c0,2.402,1.23,3.66,3.664,3.66h26.632\n  				c2.434,0,3.667-1.195,3.667-3.66v-26.475c0-2.505-1.232-3.826-3.743-3.826C861.321,383.704,834.896,383.696,834.903,383.704z"/>\n  			<linearGradient id="SVGID_57_" gradientUnits="userSpaceOnUse" x1="848.7214" y1="383.7006" x2="848.7214" y2="416.4425">\n  				<stop  offset="0" style="stop-color:#5272B8"/>\n  				<stop  offset="1" style="stop-color:#3C5EAB"/>\n  			</linearGradient>\n  			<path class="st133" d="M864.39,416.443c0.439-0.594,0.674-1.395,0.674-2.438V387.53c0-2.505-1.233-3.826-3.743-3.826\n  				c0,0-26.426-0.008-26.418,0c-1.053,0-1.894,0.251-2.525,0.726C835.905,400.38,848.44,412.916,864.39,416.443z"/>\n  		</g>\n  		<g>\n  			<path class="st29" d="M848.082,391.902c1.207,0,2.185-0.979,2.185-2.186c0-1.205-0.978-2.185-2.185-2.185\n  				c-1.207,0-2.186,0.979-2.186,2.185C845.896,390.923,846.875,391.902,848.082,391.902z"/>\n  		</g>\n  		<path class="st29" d="M850.432,392.333l-2.35,0.001l-2.348-0.001c-2.107,0-2.793,0.543-2.793,2.837v6.71\n  			c0,1.303,1.759,1.303,1.759,0l0.152-6.137h0.451v16.8c0,1.744,2.392,1.693,2.392,0l0.152-9.752h0.474l0.15,9.752\n  			c0,1.693,2.392,1.744,2.392,0v-16.8h0.451l0.152,6.137c0,1.303,1.757,1.303,1.757,0v-6.71\n  			C853.222,392.876,852.538,392.333,850.432,392.333z"/>\n  	</g>\n  	<g id="women_x27_s_bathroom_on_2nd_floor_north_of_the_climate_exhibit" attr.aria-label="{{\'map.label.brwomen2climate\'|translate}}" role="region">\n  		<g>\n  			<path class="st130" d="M1288.208,243.537c-2.434,0-3.804,1.257-3.804,3.826v26.475c0,2.402,1.23,3.66,3.664,3.66h26.632\n  				c2.435,0,3.667-1.195,3.667-3.66v-26.475c0-2.505-1.232-3.826-3.743-3.826C1314.625,243.537,1288.2,243.529,1288.208,243.537z"/>\n  			<linearGradient id="SVGID_58_" gradientUnits="userSpaceOnUse" x1="1302.0256" y1="243.5337" x2="1302.0256" y2="276.2755">\n  				<stop  offset="0" style="stop-color:#5272B8"/>\n  				<stop  offset="1" style="stop-color:#3C5EAB"/>\n  			</linearGradient>\n  			<path class="st134" d="M1317.694,276.276c0.439-0.594,0.674-1.395,0.674-2.438v-26.475c0-2.505-1.233-3.826-3.743-3.826\n  				c0,0-26.426-0.008-26.418,0c-1.053,0-1.895,0.251-2.525,0.726C1289.209,260.213,1301.745,272.749,1317.694,276.276z"/>\n  		</g>\n  		<g>\n  			<path class="st29" d="M1301.387,252.791c1.207,0,2.185-0.932,2.185-2.081c0-1.147-0.978-2.079-2.185-2.079\n  				s-2.186,0.932-2.186,2.079C1299.201,251.859,1300.18,252.791,1301.387,252.791z"/>\n  		</g>\n  		<path class="st29" d="M1307.314,260.934l-1.875-5.875c-0.363-1.04-1.454-1.858-3.044-1.858h-2.015\n  			c-1.592,0-2.682,0.818-3.046,1.858l-1.875,5.875c-0.388,1.263,1.146,1.712,1.547,0.532l1.98-5.372h0.228\n  			c0,0-2.601,9.62-2.71,9.981c-0.055,0.18,0.023,0.31,0.223,0.31c0.124,0,2.25,0,2.25,0l0.001,6.317c0,1.285,2.021,1.285,2.021,0\n  			v-6.366h0.775l-0.002,6.366c0,1.285,2.023,1.285,2.023,0l0.001-6.317c0,0,2.126,0,2.249,0c0.2,0,0.28-0.13,0.225-0.31\n  			c-0.111-0.36-2.712-9.981-2.712-9.981h0.229l1.979,5.372C1306.17,262.646,1307.703,262.198,1307.314,260.934z"/>\n  	</g>\n  	<g id="women_x27_s_bathroom_on_2nd_floor_behind_the_library" attr.aria-label="{{\'brwomen2library\'|translate}}" role="region">\n  		<g>\n  			<path class="st130" d="M652.784,458.46c-2.435,0-3.804,1.257-3.804,3.826v26.475c0,2.402,1.23,3.66,3.664,3.66h26.632\n  				c2.435,0,3.667-1.195,3.667-3.66v-26.475c0-2.505-1.232-3.826-3.743-3.826C679.201,458.46,652.776,458.452,652.784,458.46z"/>\n  			<linearGradient id="SVGID_59_" gradientUnits="userSpaceOnUse" x1="666.6021" y1="458.4563" x2="666.6021" y2="491.1982">\n  				<stop  offset="0" style="stop-color:#5272B8"/>\n  				<stop  offset="1" style="stop-color:#3C5EAB"/>\n  			</linearGradient>\n  			<path class="st135" d="M682.271,491.198c0.439-0.594,0.674-1.395,0.674-2.438v-26.475c0-2.505-1.233-3.826-3.743-3.826\n  				c0,0-26.426-0.008-26.418,0c-1.053,0-1.895,0.251-2.525,0.726C653.786,475.136,666.321,487.672,682.271,491.198z"/>\n  		</g>\n  		<g>\n  			<g>\n  				<path class="st29" d="M665.964,466.658c1.207,0,2.185-0.979,2.185-2.186c0-1.205-0.978-2.185-2.185-2.185\n  					c-1.207,0-2.186,0.979-2.186,2.185C663.778,465.679,664.757,466.658,665.964,466.658z"/>\n  			</g>\n  			<path class="st29" d="M671.89,475.213l-1.875-6.172c-0.363-1.092-1.454-1.952-3.044-1.952h-2.015\n  				c-1.592,0-2.682,0.86-3.046,1.952l-1.875,6.172c-0.388,1.327,1.146,1.799,1.547,0.559l1.98-5.643h0.228\n  				c0,0-2.601,10.107-2.71,10.486c-0.055,0.189,0.023,0.325,0.223,0.325c0.124,0,2.25,0,2.25,0l0.001,6.636\n  				c0,1.35,2.021,1.35,2.021,0v-6.688h0.775l-0.002,6.688c0,1.35,2.023,1.35,2.023,0l0.002-6.636c0,0,2.126,0,2.249,0\n  				c0.2,0,0.28-0.136,0.225-0.325c-0.111-0.379-2.711-10.486-2.711-10.486h0.229l1.979,5.643\n  				C670.746,477.012,672.28,476.541,671.89,475.213z"/>\n  		</g>\n  	</g>\n  	<g id="women_x27_s_bathroom_on_1st_floor_by_theater" attr.aria-label="{{\'map.label.brwomen1theater\'|translate}}" role="region">\n  		<g>\n  			<path class="st130" d="M808.525,1146.831c-2.435,0-3.804,1.257-3.804,3.826v26.475c0,2.402,1.23,3.66,3.664,3.66h26.632\n  				c2.435,0,3.667-1.195,3.667-3.66v-26.475c0-2.505-1.232-3.826-3.743-3.826C834.943,1146.831,808.517,1146.823,808.525,1146.831z"\n  				/>\n  			<linearGradient id="SVGID_60_" gradientUnits="userSpaceOnUse" x1="822.3431" y1="1146.8278" x2="822.3431" y2="1179.5696">\n  				<stop  offset="0" style="stop-color:#5272B8"/>\n  				<stop  offset="1" style="stop-color:#3C5EAB"/>\n  			</linearGradient>\n  			<path class="st136" d="M838.012,1179.57c0.439-0.594,0.674-1.395,0.674-2.438v-26.475c0-2.505-1.233-3.826-3.743-3.826\n  				c0,0-26.426-0.008-26.418,0c-1.053,0-1.894,0.251-2.525,0.726C809.527,1163.507,822.062,1176.043,838.012,1179.57z"/>\n  		</g>\n  		<g>\n  			<g>\n  				<path class="st29" d="M821.705,1155.03c1.207,0,2.185-0.979,2.185-2.186c0-1.205-0.978-2.185-2.185-2.185\n  					c-1.207,0-2.186,0.979-2.186,2.185C819.519,1154.051,820.498,1155.03,821.705,1155.03z"/>\n  			</g>\n  			<path class="st29" d="M827.631,1163.585l-1.875-6.172c-0.363-1.092-1.454-1.952-3.044-1.952h-2.015\n  				c-1.592,0-2.682,0.86-3.046,1.952l-1.875,6.172c-0.388,1.327,1.146,1.799,1.547,0.559l1.98-5.643h0.228\n  				c0,0-2.601,10.107-2.71,10.486c-0.056,0.189,0.023,0.326,0.223,0.326c0.124,0,2.25,0,2.25,0l0.002,6.636\n  				c0,1.35,2.021,1.35,2.021,0v-6.688h0.775l-0.001,6.688c0,1.35,2.023,1.35,2.023,0l0.002-6.636c0,0,2.126,0,2.249,0\n  				c0.2,0,0.28-0.136,0.225-0.326c-0.111-0.379-2.711-10.486-2.711-10.486h0.229l1.979,5.643\n  				C826.487,1165.383,828.021,1164.912,827.631,1163.585z"/>\n  		</g>\n  	</g>\n  	<g id="accessible_bathroom_on_1st_floor_by_entrance" attr.aria-label="{{\'map.label.braccess1\'|translate}}" role="region">\n  		<g>\n  			<path class="st130" d="M1296.092,984.86c-2.435,0-3.804,1.256-3.804,3.825v26.476c0,2.401,1.23,3.659,3.664,3.659h26.632\n  				c2.434,0,3.667-1.195,3.667-3.659v-26.476c0-2.505-1.233-3.825-3.743-3.825C1322.51,984.86,1296.084,984.852,1296.092,984.86z"/>\n  			<linearGradient id="SVGID_61_" gradientUnits="userSpaceOnUse" x1="1309.9103" y1="984.8567" x2="1309.9103" y2="1017.5992">\n  				<stop  offset="0" style="stop-color:#5272B8"/>\n  				<stop  offset="1" style="stop-color:#3C5EAB"/>\n  			</linearGradient>\n  			<path class="st137" d="M1325.579,1017.599c0.439-0.594,0.674-1.396,0.674-2.438v-26.474c0-2.506-1.233-3.826-3.743-3.826\n  				c0,0-26.426-0.008-26.418,0c-1.053,0-1.895,0.251-2.525,0.727C1297.094,1001.537,1309.629,1014.073,1325.579,1017.599z"/>\n  		</g>\n  		<path class="st29" d="M1306.408,992.039c1.274,0,2.298-1.042,2.298-2.3c0-1.275-1.025-2.299-2.298-2.299\n  			c-1.269,0-2.3,1.024-2.3,2.299C1304.109,990.997,1305.14,992.039,1306.408,992.039z"/>\n  		<path class="st29" d="M1317.595,1009.154c0.365,0.597,1.209,0.841,1.846,0.461c0.63-0.383,0.819-1.173,0.461-1.839l-3.921-6.77\n  			c-0.243-0.407-0.67-0.638-1.111-0.651h-5.753l-0.057-2.037h4.179c0.57-0.034,1.038-0.468,1.038-1.051\n  			c0-0.577-0.455-1.024-1.038-1.044h-4.3l-0.149-1.675c-0.084-1.207-1.123-2.157-2.342-2.09c-1.229,0.068-2.157,1.127-2.098,2.347\n  			l0.404,6.981c0.1,1.225,1.125,2.093,2.337,2.093h7.457L1317.595,1009.154z"/>\n  		<path class="st29" d="M1307.887,1011.779c-3.772,0-6.831-3.053-6.831-6.831c0-2.069,0.938-3.915,2.397-5.17l-0.126-2.136\n  			c-2.443,1.526-4.081,4.21-4.081,7.306c0,4.77,3.866,8.642,8.641,8.642c3.515,0,6.519-2.116,7.871-5.128l-1.216-2.104\n  			C1313.892,1009.447,1311.169,1011.779,1307.887,1011.779z"/>\n  	</g>\n  	<g id="accessible_bathroom_on_2nd_floor_north_of_climate_exhibit" attr.aria-label="{{\'map.label.braccess2\'|translate}}" role="region">\n  		<g>\n  			<path class="st130" d="M1252.485,243.537c-2.434,0-3.804,1.256-3.804,3.825v26.476c0,2.401,1.23,3.659,3.664,3.659h26.632\n  				c2.435,0,3.667-1.195,3.667-3.659v-26.476c0-2.505-1.232-3.825-3.743-3.825C1278.902,243.537,1252.477,243.529,1252.485,243.537z\n  				"/>\n  			<linearGradient id="SVGID_62_" gradientUnits="userSpaceOnUse" x1="1266.3029" y1="243.5333" x2="1266.3029" y2="276.2758">\n  				<stop  offset="0" style="stop-color:#5272B8"/>\n  				<stop  offset="1" style="stop-color:#3C5EAB"/>\n  			</linearGradient>\n  			<path class="st138" d="M1281.971,276.276c0.439-0.594,0.674-1.396,0.674-2.438v-26.474c0-2.506-1.233-3.826-3.743-3.826\n  				c0,0-26.426-0.008-26.418,0c-1.053,0-1.895,0.251-2.525,0.727C1253.487,260.213,1266.022,272.749,1281.971,276.276z"/>\n  		</g>\n  		<path class="st29" d="M1262.408,252.039c1.274,0,2.298-1.042,2.298-2.3c0-1.275-1.025-2.299-2.298-2.299\n  			c-1.269,0-2.3,1.024-2.3,2.299C1260.109,250.997,1261.14,252.039,1262.408,252.039z"/>\n  		<path class="st29" d="M1273.595,269.154c0.365,0.597,1.209,0.841,1.846,0.461c0.63-0.383,0.819-1.173,0.461-1.839l-3.921-6.77\n  			c-0.243-0.407-0.67-0.638-1.111-0.651h-5.753l-0.057-2.037h4.179c0.57-0.034,1.038-0.468,1.038-1.051\n  			c0-0.577-0.455-1.025-1.038-1.044h-4.3l-0.149-1.675c-0.084-1.207-1.123-2.157-2.342-2.09c-1.229,0.068-2.157,1.127-2.098,2.347\n  			l0.404,6.981c0.1,1.225,1.125,2.093,2.337,2.093h7.457L1273.595,269.154z"/>\n  		<path class="st29" d="M1263.887,271.78c-3.772,0-6.831-3.053-6.831-6.831c0-2.069,0.938-3.915,2.397-5.17l-0.126-2.136\n  			c-2.443,1.526-4.081,4.21-4.081,7.306c0,4.77,3.866,8.642,8.641,8.642c3.515,0,6.519-2.116,7.871-5.128l-1.216-2.104\n  			C1269.892,269.447,1267.169,271.78,1263.887,271.78z"/>\n  	</g>\n  </g>\n  <g id="Location_markers">\n  	<g id="Marker_-_Climate_exhibit" attr.aria-label="{{\'map.label.climateexhibitloc\'|translate}}" role="region">\n  		<circle class="st139" cx="911.243" cy="315.053" r="17.067"/>\n  		<g>\n  			<path class="st139" d="M911.012,353.515c0,0-39.473-51.448,0-51.004"/>\n  			<path class="st139" d="M910.323,353.515c0,0,39.473-51.448,0-51.004"/>\n  		</g>\n  		<circle cx="910.745" cy="314.975" r="7.569"/>\n  		<g>\n  			<rect x="847.916" y="311.61" class="st5" width="260.044" height="77.035"/>\n  			<text transform="matrix(0.9661 0 0 1 934.3336 328.3305)" role="presentation"><tspan x="0" y="0" class="st72 st140">{{\'map.text.climate\' | translate }} </tspan><tspan x="3.851" y="23.361" class="st72 st140">{{\'map.text.exhibit\' | translate }}</tspan></text>\n  		</g>\n  	</g>\n  	<g id="Marker_-_Weather_trail" attr.aria-label="{{\'map.label.weathertrailloc\'|translate}}" role="region">\n  		<circle class="st139" cx="533.243" cy="102.053" r="17.067"/>\n  		<g>\n  			<path class="st139" d="M533.012,140.515c0,0-39.473-51.448,0-51.004"/>\n  			<path class="st139" d="M532.323,140.515c0,0,39.473-51.448,0-51.004"/>\n  		</g>\n  		<circle cx="532.745" cy="101.975" r="7.569"/>\n  		<g>\n  			<rect x="466.916" y="121.61" class="st5" width="260.044" height="77.035"/>\n  			<text transform="matrix(0.9661 0 0 1 547.6304 138.3305)" role="presentation"><tspan x="0" y="0" class="st72 st140">{{\'map.text.weather\' | translate }} </tspan><tspan x="24.302" y="21" class="st72 st140">{{\'map.text.trail\' | translate }}</tspan></text>\n  		</g>\n  	</g>\n  	<g id="Marker_-_NCAR_x27_s_Architecture" attr.aria-label="{{\'map.label.archloc\'|translate}}" role="region">\n  		<circle class="st139" cx="789.243" cy="619.053" r="17.067"/>\n  		<g>\n  			<path class="st139" d="M789.012,657.515c0,0-39.473-51.448,0-51.004"/>\n  			<path class="st139" d="M788.323,657.515c0,0,39.473-51.448,0-51.004"/>\n  		</g>\n  		<circle cx="788.745" cy="618.975" r="7.569"/>\n  		<g>\n  			<rect x="778.525" y="630.483" class="st5" width="175.561" height="45.845"/>\n  			<text transform="matrix(0.9661 0 0 1 824.5474 647.204)" role="presentation"><tspan x="0" y="0" class="st72 st140">{{\'map.text.ncars\' | translate }} </tspan><tspan x="-30.238" y="21" class="st72 st140">{{\'map.text.architecture\' | translate }}</tspan></text>\n  		</g>\n  	</g>\n  	<g id="Marker_-_Sun-Earth_connections" attr.aria-label="{{\'map.label.sunearthloc\'|translate}}" role="region">\n  		<circle class="st139" cx="1019.243" cy="709.053" r="17.067"/>\n  		<g>\n  			<path class="st139" d="M1019.012,747.515c0,0-39.473-51.448,0-51.004"/>\n  			<path class="st139" d="M1018.323,747.515c0,0,39.473-51.448,0-51.004"/>\n  		</g>\n  		<circle cx="1018.745" cy="708.975" r="7.569"/>\n  		<g>\n  			<rect x="1003.854" y="704.306" class="st5" width="197.485" height="63.819"/>\n  			<text transform="matrix(0.9661 0 0 1 1044.8746 721.0253)" role="presentation"><tspan x="0" y="0" class="st72 st140">{{\'map.text.sunearth\' | translate }}</tspan><tspan x="-13.152" y="21" class="st72 st140">{{\'map.text.connections\' | translate }}</tspan></text>\n  		</g>\n  	</g>\n  	<g id="Marker_-_Satellite" attr.aria-label="{{\'map.label.satelliteloc\'|translate}}" role="region">\n  		<circle class="st139" cx="821.243" cy="706.053" r="17.067"/>\n  		<g>\n  			<path class="st139" d="M821.012,744.515c0,0-39.473-51.448,0-51.004"/>\n  			<path class="st139" d="M820.323,744.515c0,0,39.473-51.448,0-51.004"/>\n  		</g>\n  		<circle cx="820.745" cy="705.975" r="7.569"/>\n  		<rect x="809.164" y="720.502" class="st5" width="148" height="122"/>\n  		<text transform="matrix(0.9661 0 0 1 835.9444 737.2216)" class="st72 st140" role="presentation">{{\'map.text.satellite\' | translate }}</text>\n  	</g>\n  	<g id="Marker_-_Weather_exhibit" attr.aria-label="{{\'map.label.weatherexhibitloc\'|translate}}" role="region">\n  		<circle class="st139" cx="861.243" cy="1083.053" r="17.067"/>\n  		<g>\n  			<path class="st139" d="M861.012,1121.515c0,0-39.473-51.448,0-51.004"/>\n  			<path class="st139" d="M860.323,1121.515c0,0,39.473-51.448,0-51.004"/>\n  		</g>\n  		<circle cx="860.745" cy="1082.975" r="7.569"/>\n  		<g>\n  			<rect x="834.854" y="1104.623" class="st5" width="267.197" height="63.814"/>\n  			<text transform="matrix(0.9661 0 0 1 876.1597 1121.3427)" class="st72 st140" role="presentation">{{\'map.text.weather\' | translate }} {{\'map.text.exhibit\' | translate }}</text>\n  		</g>\n  	</g>\n  	<g id="Marker_-_Atmosphere_1_" attr.aria-label="{{\'map.label.atmos1loc\'|translate}}" role="region">\n  		<circle class="st139" cx="611.243" cy="1107.053" r="17.067" role="presentation"/>\n  		<g>\n  			<path class="st139" d="M611.012,1145.515c0,0-39.473-51.448,0-51.004" role="presentation"/>\n  			<path class="st139" d="M610.323,1145.515c0,0,39.473-51.448,0-51.004" role="presentation"/>\n  		</g>\n  		<circle cx="610.745" cy="1106.975" r="7.569" role="presentation"/>\n  		<g>\n  			<text transform="matrix(0.9661 0 0 1 481.0916 1160.5104)" class="st72 st140" role="presentation">{{\'map.text.atmosphere\' | translate }}</text>\n  		</g>\n  	</g>\n  	<g id="Marker_-_Atmosphere" attr.aria-label="{{\'map.label.atmos2loc\'|translate}}" role="region">\n  		<circle class="st139" cx="627.243" cy="347.053" r="17.067" role="presentation"/>\n  		<g role="presentation">\n  			<path class="st139" d="M627.012,385.515c0,0-39.473-51.448,0-51.004" role="presentation"/>\n  			<path class="st139" d="M626.323,385.515c0,0,39.473-51.448,0-51.004" role="presentation"/>\n  		</g>\n  		<circle cx="626.745" cy="346.975" r="7.569" role="presentation"/>\n  		<g role="presentation">\n  			<text transform="matrix(0.9661 0 0 1 475.0916 381.5104)" class="st72 st140" role="presentation">{{\'map.text.atmosphere\' | translate }}</text>\n  		</g>\n  	</g>\n  	<g id="Marker_-_Library" attr.aria-label="{{\'map.label.libraryloc\'|translate}}" role="region">\n  		<circle class="st139" cx="739.243" cy="379.053" r="17.067" role="presentation"/>\n  		<g>\n  			<path class="st139" d="M739.012,417.515c0,0-39.473-51.448,0-51.004" role="presentation"/>\n  			<path class="st139" d="M738.323,417.515c0,0,39.473-51.448,0-51.004" role="presentation"/>\n  		</g>\n  		<circle cx="738.745" cy="378.975" r="7.569" role="presentation"/>\n  		<g>\n  			<rect x="612.178" y="399.537" class="st5" width="149.062" height="42.734"/>\n  			<text transform="matrix(0.9661 0 0 1 645.8858 416.2567)" class="st72 st140" role="presentation">{{\'map.text.library\' | translate }}</text>\n  		</g>\n  	</g>\n  	<g id="Marker_-_Air_quality" attr.aria-label="{{\'map.label.aqloc\'|translate}}" role="region">\n  		<circle class="st139" cx="1016.243" cy="1037.053" r="17.067"/>\n  		<g>\n  			<path class="st139" d="M1016.012,1075.515c0,0-39.473-51.448,0-51.004"/>\n  			<path class="st139" d="M1015.323,1075.515c0,0,39.473-51.448,0-51.004"/>\n  		</g>\n  		<circle cx="1015.745" cy="1036.975" r="7.569"/>\n  		<text transform="matrix(0.9661 0 0 1 1027.6002 1069.0428)" class="st72 st140" role="presentation">{{\'map.text.air\' | translate }} {{\'map.text.quality\' | translate }}</text>\n  	</g>\n  	<g id="Marker_-_Ozone_garden" attr.aria-label="{{\'map.label.gardenloc\'|translate}}" role="region">\n  		<circle class="st139" cx="1131.243" cy="1175.053" r="17.067"/>\n  		<g>\n  			<path class="st139" d="M1131.012,1213.515c0,0-39.473-51.448,0-51.004"/>\n  			<path class="st139" d="M1130.323,1213.515c0,0,39.473-51.448,0-51.004"/>\n  		</g>\n  		<circle cx="1130.745" cy="1174.975" r="7.569"/>\n  		<rect x="1063.164" y="1188.502" class="st5" width="240" height="96"/>\n  		<text transform="matrix(0.9661 0 0 1 1146.9259 1205.2216)" role="presentation"><tspan x="0" y="0" class="st72 st140">{{\'map.text.ozone\' | translate }}</tspan><tspan x="-5.687" y="20" class="st72 st140">{{\'map.text.garden\' | translate }}</tspan></text>\n  	</g>\n  </g>\n  </svg>\n  </div>\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <ion-buttons start>\n      <button icon-only role="button" color="positive" id="pan-left" (click)="panZoom.panBy({x:-50, y:0})" attr.aria-label="{{ \'map.buttons.panleft\' | translate }}" ion-button><ion-icon name="arrow-dropleft-circle" aria-hidden="true"></ion-icon></button>\n      <button icon-only role="button" color="positive" id="pan-left" (click)="panZoom.panBy({x:50, y:0})" attr.aria-label="{{ \'map.buttons.panright\' | translate }}" ion-button><ion-icon name="arrow-dropright-circle" aria-hidden="true"></ion-icon></button>\n      <button icon-only role="button" color="positive" id="pan-left" (click)="panZoom.panBy({x:0, y:-50})" attr.aria-label="{{ \'map.buttons.panup\' | translate }}" ion-button><ion-icon name="arrow-dropup-circle" aria-hidden="true"></ion-icon></button>\n      <button icon-only role="button" color="positive" id="pan-left" (click)="panZoom.panBy({x:0, y:50})" attr.aria-label="{{ \'map.buttons.pandown\' | translate }}" ion-button><ion-icon name="arrow-dropdown-circle" aria-hidden="true"></ion-icon></button>\n      <button icon-only role="button" color="positive" id="zoom-in" (click)="panZoom.zoomIn()" attr.aria-label="{{\'map.buttons.zoomin\' | translate}} " ion-button><ion-icon name="add-circle" aria-hidden="true"></ion-icon></button>\n      <button icon-only role="button" color="positive" id="zoom-out" (click)="panZoom.zoomOut()" attr.aria-label="{{\'map.buttons.zoomout\' | translate}}" ion-button><ion-icon name="remove-circle" aria-hidden="true"></ion-icon></button>\n    </ion-buttons>\n    <ion-buttons end>\n      <button icon-only role="button" color="danger" id="reset" (click)="panZoom.reset()" attr.aria-label="{{\'map.buttons.reset\' | translate}}" ion-button><ion-icon name="refresh" aria-hidden="true"></ion-icon></button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/Users/sclark/Documents/Development/mobile/ionic/sciedtourguide/src/pages/map/map.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_shared_vars__["a" /* SharedVars */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */]])
    ], MapPage);
    return MapPage;
}());

//# sourceMappingURL=map.js.map

/***/ })

});
//# sourceMappingURL=2.js.map