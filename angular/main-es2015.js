(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n\t<res-header></res-header>\n\t<res-nav-anchor id=\"nav-anchor\"></res-nav-anchor>\n\t<res-columns>\n\t\t<res-column order=\"2\" width=\"75\">\n\t\t\t<res-main>\n\t\t\t\t<res-google></res-google>\n\t\t\t</res-main>\n\t\t</res-column>\n\t\t<res-column order=\"1\" width=\"25\">\n\t\t\t<res-navigation></res-navigation>\n\t\t</res-column>\n\t</res-columns>\n\t<res-footer></res-footer>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/google/google.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/google/google.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"google\">\n\t<h1 class=\"title\">Search via Google APIs Using Angular</h1>\n\t<p class=\"description\">This page is built using Angular to retrieve the first 10 search and image results from Google. The source files are accessible <a href=\"../angular-source\" class=\"link\">here</a>.</p>\n\t<res-query (search)=\"updateSearch($event)\"></res-query>\n\n\t<div *ngIf=\"searchTerm\" class=\"results\">\n\t\t<h2 class=\"results-title\">Results for “{{ searchTerm }}”</h2>\n\t\t<div class=\"column\"><res-results [results]=\"textSearchResults\" type=\"text\"></res-results></div>\n\t\t<div class=\"column\"><res-results [results]=\"imageSearchResults\" type=\"image\"></res-results></div>\n\t</div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/google/query.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/google/query.component.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"anchor\">\n\t<div [ngClass]=\"queryBoxClass\">\n\t\t<form [formGroup]=\"queryForm\" (ngSubmit)=\"submitForm($event)\">\n\t\t\t<label class=\"label\" htmlFor=\"query-input\">Enter search term:</label>\n\t\t\t<input class=\"input\" id=\"query-input\" required formControlName=\"query\" />\n\t\t\t<input class=\"button\" type=\"submit\" value=\"Search\" [disabled]=\"query.invalid\" />\n\t\t</form>\n\t</div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/google/results.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/google/results.component.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div [class]=\"listClass\">\n\t<h3 class=\"title\">{{ title }} results</h3>\n\t<ng-container *ngIf=\"results && results.success\">\n\t\t<div *ngFor=\"let result of results.items\" class=\"item\">\n\t\t\t<h4 class=\"item-title\"><a class=\"item-link\" href=\"{{ result.linkURL }}\" target=\"_blank\" innerHtml=\"{{ result.linkText }}\"></a></h4>\n\t\t\t<ng-container *ngIf=\"type == 'text'\">\n\t\t\t\t<p class=\"text\" innerHtml=\"{{ result.content }}\"></p>\n\t\t\t</ng-container>\n\t\t\t<ng-container *ngIf=\"type == 'image'\">\n\t\t\t\t<img class=\"image\" src=\"{{ result.content }}\" (error)=\"loadAlternate($event, result.errorSRC)\"/>\n\t\t\t</ng-container>\n\t\t</div>\n\t</ng-container>\n\t<div *ngIf=\"results && !results.success\" class=\"error\">Error: Results couldn&rsquo;t be provided.</div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header class=\"header\">\n\t<div class=\"user\">\n\t\t<h1 class=\"name\">{{ name }}</h1>\n\t\t<p *ngFor=\"let title of titles\" class=\"title\">{{ title }}</p>\n\t</div>\n\t<div class=\"contact-information\">\n\t\t<p class=\"navigation\"><res-nav-toggle></res-nav-toggle></p>\n\t\t<res-address-line *ngFor=\"let address of addresses\" [address]=\"address\"></res-address-line>\n\t</div>\n</header>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/navigation/navigation.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/navigation/navigation.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navigation\" [class.collapsed]=\"!visible\" [style.top]=\"position ? position + 'px' : 'auto'\">\n\t<ul class=\"list\">\n\t\t<li *ngFor=\"let item of navigation\" class=\"item\">\n\t\t\t<a *ngIf=\"!item.current\" class=\"link\" [href]=\"item.link\">{{ item.text }}</a>\n\t\t\t<strong *ngIf=\"item.current\" class=\"current\">{{ item.text }}</strong>\n\t\t</li>\n\t</ul>\n</nav>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'Michael Landis, Web Developer and Technical Translator';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _footer_footer_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer/footer.module */ "./src/app/footer/footer.module.ts");
/* harmony import */ var _google_google_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./google/google.module */ "./src/app/google/google.module.ts");
/* harmony import */ var _header_header_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header/header.module */ "./src/app/header/header.module.ts");
/* harmony import */ var _layout_layout_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./layout/layout.module */ "./src/app/layout/layout.module.ts");
/* harmony import */ var _navigation_navigation_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./navigation/navigation.module */ "./src/app/navigation/navigation.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");










let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _footer_footer_module__WEBPACK_IMPORTED_MODULE_4__["FooterModule"],
            _google_google_module__WEBPACK_IMPORTED_MODULE_5__["GoogleModule"],
            _header_header_module__WEBPACK_IMPORTED_MODULE_6__["HeaderModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _layout_layout_module__WEBPACK_IMPORTED_MODULE_7__["LayoutModule"],
            _navigation_navigation_module__WEBPACK_IMPORTED_MODULE_8__["NavigationModule"],
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".copyright {\n  margin: 1rem 0;\n  text-align: center;\n  font: normal 1rem mr-eaves-modern, sans-serif;\n}\n\n@media (min-width: 36em) {\n  .footer {\n    display: flex;\n  }\n\n  .padding {\n    width: 25%;\n    height: 30px;\n    border-radius: 0 0 30px;\n    margin-bottom: 2rem;\n    background-color: #FFF;\n  }\n\n  .copyright {\n    width: 75%;\n  }\n}\n\n/*# sourceMappingURL=footer.component.css.map */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3Njc3MvYW5ndWxhci9kZXYvc3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCIuLi8uLi9zY3NzL2luY2x1ZGVzL192YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNDLGNBQUE7RUFDQSxrQkFBQTtFQUNBLDZDQUFBO0FDREQ7O0FESUE7RUFFQztJQUNDLGFBQUE7RUNGQTs7RURNRDtJQUNDLFVBQUE7SUFDQSxZQUFBO0lBQ0EsdUJBQUE7SUFDQSxtQkFBQTtJQUNBLHNCRVhZO0VEUVo7O0VETUQ7SUFDQyxVQUFBO0VDSEE7QUFDRjs7QUFFQSwrQ0FBK0MiLCJmaWxlIjoic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");



let FooterComponent = class FooterComponent {
    constructor(service) {
        this.service = service;
    }
    ngOnInit() {
        const userSetter = (userData) => this.name = userData.name;
        this.service.getUser().subscribe(userSetter, userSetter);
    }
};
FooterComponent.ctorParameters = () => [
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }
];
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'res-footer',
        template: `
		<footer class="footer">
			<div class="padding"></div>
			<p class="copyright">Copyright &copy;2018 {{ name }}</p>
		</footer>
	`,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/footer/footer.module.ts":
/*!*****************************************!*\
  !*** ./src/app/footer/footer.module.ts ***!
  \*****************************************/
/*! exports provided: FooterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterModule", function() { return FooterModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer.component */ "./src/app/footer/footer.component.ts");




let FooterModule = class FooterModule {
};
FooterModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]
        ],
        exports: [
            _footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ],
        providers: [],
    })
], FooterModule);



/***/ }),

/***/ "./src/app/google/google.component.css":
/*!*********************************************!*\
  !*** ./src/app/google/google.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".title {\n  margin: 2rem 0 1rem;\n  font: bold 3rem/1 mr-eaves-modern, sans-serif;\n}\n\n.description {\n  margin: 0 0 1rem;\n  font: normal 1rem/1.5 mandrel-normal, serif;\n}\n\n.link, .link:link, .link:visited {\n  color: #007BFF;\n  text-decoration: none;\n}\n\n.link:hover {\n  color: #0056B3;\n  text-decoration: underline;\n}\n\n.results-title {\n  margin: 0 0 1rem;\n  font: bold 2rem/1.5 mr-eaves-modern, sans-serif;\n}\n\n@media (min-width: 64em) {\n  .results {\n    display: flex;\n    flex-flow: row wrap;\n    margin-left: -1rem;\n  }\n  .results-title {\n    width: 100%;\n    margin-left: 1rem;\n  }\n\n  .column {\n    width: 50%;\n    padding-left: 1rem;\n  }\n}\n\n/*# sourceMappingURL=google.component.css.map */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3Njc3MvYW5ndWxhci9kZXYvc3JjL2FwcC9nb29nbGUvZ29vZ2xlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9nb29nbGUvZ29vZ2xlLmNvbXBvbmVudC5jc3MiLCIuLi8uLi9zY3NzL2FuZ3VsYXIvZGV2L3NyYy9fY29tbW9uLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDQyxtQkFBQTtFQUNBLDZDQUFBO0FDREQ7O0FESUE7RUFDQyxnQkFBQTtFQUNBLDJDQUFBO0FDREQ7O0FDREM7RUFDQyxjQUFBO0VBQ0EscUJBQUE7QURJRjs7QUNEQztFQUNDLGNBQUE7RUFDQSwwQkFBQTtBREdGOztBRERBO0VBQ0MsZ0JBQUE7RUFDQSwrQ0FBQTtBQ0lEOztBRERBO0VBQ0M7SUFDQyxhQUFBO0lBQ0EsbUJBQUE7SUFDQSxrQkFBQTtFQ0lBO0VERkE7SUFDQyxXQUFBO0lBQ0EsaUJBQUE7RUNJRDs7RURBRDtJQUNDLFVBQUE7SUFDQSxrQkFBQTtFQ0dBO0FBQ0Y7O0FBRUEsK0NBQStDIiwiZmlsZSI6InNyYy9hcHAvZ29vZ2xlL2dvb2dsZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/google/google.component.ts":
/*!********************************************!*\
  !*** ./src/app/google/google.component.ts ***!
  \********************************************/
/*! exports provided: GoogleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleComponent", function() { return GoogleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_google_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/google.service */ "./src/app/services/google.service.ts");



let GoogleComponent = class GoogleComponent {
    constructor(service) {
        this.service = service;
    }
    showTextResults(results) {
        this.textSearchResults = results;
    }
    showImageResults(results) {
        this.imageSearchResults = results;
    }
    updateSearch(searchTerm) {
        this.searchTerm = searchTerm;
        this.textSearchResults = null;
        this.imageSearchResults = null;
        const textSetter = results => { this.textSearchResults = results; };
        const imageSetter = results => { this.imageSearchResults = results; };
        this.service.getTextResults(searchTerm).subscribe(textSetter, textSetter);
        this.service.getImageResults(searchTerm).subscribe(imageSetter, imageSetter);
    }
};
GoogleComponent.ctorParameters = () => [
    { type: _services_google_service__WEBPACK_IMPORTED_MODULE_2__["GoogleService"] }
];
GoogleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'res-google',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./google.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/google/google.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./google.component.css */ "./src/app/google/google.component.css")).default]
    })
], GoogleComponent);



/***/ }),

/***/ "./src/app/google/google.module.ts":
/*!*****************************************!*\
  !*** ./src/app/google/google.module.ts ***!
  \*****************************************/
/*! exports provided: GoogleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleModule", function() { return GoogleModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _google_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./google.component */ "./src/app/google/google.component.ts");
/* harmony import */ var _query_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./query.component */ "./src/app/google/query.component.ts");
/* harmony import */ var _results_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./results.component */ "./src/app/google/results.component.ts");








let GoogleModule = class GoogleModule {
};
GoogleModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _google_component__WEBPACK_IMPORTED_MODULE_5__["GoogleComponent"],
            _query_component__WEBPACK_IMPORTED_MODULE_6__["QueryComponent"],
            _results_component__WEBPACK_IMPORTED_MODULE_7__["ResultsComponent"]
        ],
        exports: [
            _google_component__WEBPACK_IMPORTED_MODULE_5__["GoogleComponent"],
            _query_component__WEBPACK_IMPORTED_MODULE_6__["QueryComponent"],
            _results_component__WEBPACK_IMPORTED_MODULE_7__["ResultsComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
        ],
        providers: [],
    })
], GoogleModule);



/***/ }),

/***/ "./src/app/google/query.component.css":
/*!********************************************!*\
  !*** ./src/app/google/query.component.css ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container--initial .button, .container .button {\n  width: 6rem;\n  height: 1.5rem;\n  border: 1px solid;\n  margin-left: 1rem;\n  color: #FFF;\n  font: normal 1.25rem/1 mr-eaves-modern, sans-serif;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n}\n\n.container--initial .button[disabled], .container .button[disabled] {\n  border-color: #999;\n  background-color: #CCC;\n  color: #333;\n}\n\n.container {\n  min-width: 100%;\n  padding: 1rem;\n  border: 1px solid #ABC;\n  margin: 0 0 1rem;\n  transition: all 0.5s;\n}\n\n.container .button {\n  border-color: #036;\n  background-color: #369;\n  transition: border-color, background-color 0.5s;\n}\n\n.container.transitted .button {\n  transition: none;\n}\n\n.container--initial {\n  min-width: 60%;\n  padding: 0;\n  border: 1px solid #EEE;\n  margin: 2rem 0;\n  transition: all 0.5s;\n}\n\n.container--initial .button {\n  border-color: #603;\n  background-color: #967;\n}\n\n.anchor {\n  display: flex;\n  justify-content: center;\n}\n\n.label {\n  display: block;\n  margin-bottom: 0.5rem;\n  font: normal 1.25rem/1 mr-eaves-modern, sans-serif;\n}\n\n.input {\n  width: calc(100% - 7rem - 4px);\n  height: 1.5rem;\n  font-size: 1rem;\n}\n\n/*# sourceMappingURL=query.component.css.map */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3Njc3MvYW5ndWxhci9kZXYvc3JjL2FwcC9nb29nbGUvcXVlcnkuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2dvb2dsZS9xdWVyeS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU9BO0VBQ0MsV0FBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGtEQUFBO0VBQ0Esd0JBQUE7RUFDQSxxQkFBQTtBQ05EOztBRFNBO0VBQ0Msa0JBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7QUNORDs7QURTQTtFQUNDLGVBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0FDTkQ7O0FEUUM7RUFFQyxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsK0NBQUE7QUNQRjs7QURVQztFQUNDLGdCQUFBO0FDUkY7O0FEZUM7RUFDQyxjQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0FDYkY7O0FEZUU7RUFFQyxrQkFBQTtFQUNBLHNCQUFBO0FDZEg7O0FEdUJBO0VBQ0MsYUFBQTtFQUNBLHVCQUFBO0FDckJEOztBRHdCQTtFQUNDLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGtEQUFBO0FDckJEOztBRHdCQTtFQUNDLDhCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUNyQkQ7O0FBRUEsOENBQThDIiwiZmlsZSI6InNyYy9hcHAvZ29vZ2xlL3F1ZXJ5LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/google/query.component.ts":
/*!*******************************************!*\
  !*** ./src/app/google/query.component.ts ***!
  \*******************************************/
/*! exports provided: QueryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueryComponent", function() { return QueryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



let QueryComponent = class QueryComponent {
    constructor() {
        this.queryForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            query: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
        this.submitted = false;
        this.transitted = false;
        this.search = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.setClasses();
    }
    get query() {
        return this.queryForm.get('query');
    }
    setClasses() {
        this.queryBoxClass = {
            'container': this.submitted,
            'container--initial': !this.submitted,
            'transitted': this.transitted
        };
    }
    submitForm(e) {
        if (this.query.valid) {
            this.search.emit(this.query.value.substring(0, 2000));
            this.submitted = true;
            this.setClasses();
            setTimeout(() => { this.transitted = true; this.setClasses(); }, 1500);
        }
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], QueryComponent.prototype, "search", void 0);
QueryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'res-query',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./query.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/google/query.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./query.component.css */ "./src/app/google/query.component.css")).default]
    })
], QueryComponent);



/***/ }),

/***/ "./src/app/google/results.component.css":
/*!**********************************************!*\
  !*** ./src/app/google/results.component.css ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".text {\n  margin: 0 0 1rem;\n  font: normal 1rem/1.5 mandrel-normal, serif;\n}\n\n@-webkit-keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n  }\n}\n\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n.list--waiting {\n  position: relative;\n  min-height: calc(4em + 50px);\n}\n\n.list--waiting:after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  z-index: 1;\n  width: 0;\n  height: 0;\n  border: 25px solid;\n  border-color: #8BF #CDE;\n  border-radius: 50%;\n  margin: -25px 0 0 -25px;\n  -webkit-animation: spin 2s linear infinite;\n  animation: spin 2s linear infinite;\n}\n\n.title {\n  margin: 0 0 0.5rem;\n  font: bold 1.5rem/1.5 mr-eaves-modern, sans-serif;\n}\n\n.item-title {\n  margin: 0;\n  font: normal 1.5rem/1 mr-eaves-modern, sans-serif;\n}\n\n.item-title b {\n  font-weight: bold;\n}\n\n.item-title a, .item-title a:link, .item-title a:visited {\n  color: #007BFF;\n  text-decoration: none;\n}\n\n.item-title a:hover {\n  color: #0056B3;\n  text-decoration: underline;\n}\n\n.text br {\n  display: none;\n}\n\n.text b {\n  font-weight: bold;\n}\n\n.image {\n  display: block;\n  width: 100%;\n  border: 1px solid #CCC;\n  margin: 0.5rem 0 1rem;\n}\n\n.error {\n  margin: 0 0 1rem;\n  font: bold 1.5rem/1.5 mr-eaves-modern, sans-serif;\n  color: #903;\n}\n\n@media (min-width: 64em) {\n  .list, .list--waiting {\n    padding: 1rem 1rem 0;\n    border: 1px solid #CCC;\n    border-radius: 1rem;\n    background-color: #F6F6F6;\n  }\n}\n\n/*# sourceMappingURL=results.component.css.map */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3Njc3MvYW5ndWxhci9kZXYvc3JjL2FwcC9nb29nbGUvcmVzdWx0cy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZ29vZ2xlL3Jlc3VsdHMuY29tcG9uZW50LmNzcyIsIi4uLy4uL3Njc3MvYW5ndWxhci9kZXYvc3JjL19jb21tb24uc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNDLGdCQUFBO0VBQ0EsMkNBQUE7QUNERDs7QURXQTtFQUNFO0lBQUssK0JBQUE7RUNQTDtFRFFBO0lBQU8saUNBQUE7RUNMUDtBQUNGOztBRE9BO0VBQ0U7SUFBSyx1QkFBQTtFQ0pMO0VES0E7SUFBTyx5QkFBQTtFQ0ZQO0FBQ0Y7O0FES0E7RUFDQyxrQkFBQTtFQUNBLDRCQUFBO0FDSEQ7O0FES0M7RUFDQyxXQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLDBDQUFBO0VBQ0Esa0NBQUE7QUNIRjs7QURPQTtFQUNDLGtCQUFBO0VBQ0EsaURBQUE7QUNKRDs7QURTQztFQUNDLFNBQUE7RUFDQSxpREFBQTtBQ05GOztBRFFFO0VBQ0MsaUJBQUE7QUNOSDs7QUM5Q0M7RUFDQyxjQUFBO0VBQ0EscUJBQUE7QURnREY7O0FDN0NDO0VBQ0MsY0FBQTtFQUNBLDBCQUFBO0FEK0NGOztBRFVDO0VBQ0MsYUFBQTtBQ1BGOztBRFVDO0VBQ0MsaUJBQUE7QUNSRjs7QURZQTtFQUNDLGNBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtBQ1REOztBRFlBO0VBQ0MsZ0JBQUE7RUFDQSxpREFBQTtFQUNBLFdBQUE7QUNURDs7QURZQTtFQUNDO0lBQ0Msb0JBQUE7SUFDQSxzQkFBQTtJQUNBLG1CQUFBO0lBQ0EseUJBQUE7RUNUQTtBQUNGOztBQUVBLGdEQUFnRCIsImZpbGUiOiJzcmMvYXBwL2dvb2dsZS9yZXN1bHRzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/google/results.component.ts":
/*!*********************************************!*\
  !*** ./src/app/google/results.component.ts ***!
  \*********************************************/
/*! exports provided: ResultsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultsComponent", function() { return ResultsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_google_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/google.service */ "./src/app/services/google.service.ts");



let ResultsComponent = class ResultsComponent {
    constructor() {
        this.listClass = 'list--waiting';
    }
    ngOnInit() {
        this.title = this.type == _services_google_service__WEBPACK_IMPORTED_MODULE_2__["SearchType"].TEXT ? 'Text' : 'Image';
    }
    ngOnChanges(changes) {
        let results = changes.results.currentValue;
        if (results !== changes.results.previousValue) {
            this.listClass = (results === null || results === undefined ? 'list--waiting' : 'list');
        }
    }
    loadAlternate(event, alternateURL) {
        let img = event.target;
        if (img.src != alternateURL) { // intentionally taking advantage of character equality vs reference identity
            img.src = alternateURL;
        }
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ResultsComponent.prototype, "type", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ResultsComponent.prototype, "results", void 0);
ResultsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'res-results',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./results.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/google/results.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./results.component.css */ "./src/app/google/results.component.css")).default]
    })
], ResultsComponent);



/***/ }),

/***/ "./src/app/header/address-line.component.css":
/*!***************************************************!*\
  !*** ./src/app/header/address-line.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".address {\n  display: inline-block;\n  padding: 0.25rem 0 0.2rem;\n  margin: 0 0.1rem 0 0.25rem;\n  font: normal 0.925rem/1.25 mr-eaves-modern, sans-serif;\n}\n\n.link, .link:link, .link:visited {\n  color: #007BFF;\n  text-decoration: none;\n}\n\n.link:hover {\n  color: #0056B3;\n  text-decoration: underline;\n}\n\n.text {\n  display: none;\n}\n\n@media (min-width: 36em) {\n  .address {\n    padding-bottom: 0;\n    font-size: 1rem;\n  }\n}\n\n@media (min-width: 48em) {\n  .address {\n    display: block;\n    padding: 0;\n    font-size: 1.25rem;\n  }\n\n  .text {\n    display: inline;\n  }\n\n  .icon {\n    display: none;\n  }\n}\n\n/*# sourceMappingURL=address-line.component.css.map */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3Njc3MvYW5ndWxhci9kZXYvc3JjL2FwcC9oZWFkZXIvYWRkcmVzcy1saW5lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9oZWFkZXIvYWRkcmVzcy1saW5lLmNvbXBvbmVudC5jc3MiLCIuLi8uLi9zY3NzL2FuZ3VsYXIvZGV2L3NyYy9fY29tbW9uLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDQyxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxzREFBQTtBQ0REOztBQ0VDO0VBQ0MsY0FBQTtFQUNBLHFCQUFBO0FEQ0Y7O0FDRUM7RUFDQyxjQUFBO0VBQ0EsMEJBQUE7QURBRjs7QUREQTtFQUNDLGFBQUE7QUNJRDs7QUREQTtFQUVDO0lBQ0MsaUJBQUE7SUFDQSxlQUFBO0VDR0E7QUFDRjs7QURDQTtFQUVDO0lBQ0MsY0FBQTtJQUNBLFVBQUE7SUFDQSxrQkFBQTtFQ0FBOztFREdEO0lBQ0MsZUFBQTtFQ0FBOztFREdEO0lBQ0MsYUFBQTtFQ0FBO0FBQ0Y7O0FBRUEscURBQXFEIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2FkZHJlc3MtbGluZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/header/address-line.component.ts":
/*!**************************************************!*\
  !*** ./src/app/header/address-line.component.ts ***!
  \**************************************************/
/*! exports provided: AddressLineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressLineComponent", function() { return AddressLineComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");



class AddressTypeAttribute {
    constructor(icon, protocol) {
        this.icon = icon;
        this.protocol = protocol;
    }
}
const AddressTypeAttributes = {
    [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["AddressType"].EMAIL]: new AddressTypeAttribute('✉️', 'mailto:'),
    [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["AddressType"].PHONE]: new AddressTypeAttribute('📞️', 'tel:')
};
let AddressLineComponent = class AddressLineComponent {
    set address(address) {
        if (address.type) {
            let attributes = AddressTypeAttributes[address.type];
            this.icon = attributes.icon;
            this.text = address.address;
            this.link = address.addressLink || (attributes.protocol + this.text);
        }
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], AddressLineComponent.prototype, "address", null);
AddressLineComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'res-address-line',
        template: `
		<p class="address">
			<a class="link" [href]="link"><span class="icon" [innerHtml]="icon"></span><span class="text" [innerHtml]="text"></span></a>
		</p>
	`,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./address-line.component.css */ "./src/app/header/address-line.component.css")).default]
    })
], AddressLineComponent);



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 1000;\n  min-height: 80px;\n  padding: 15px 15px 15px 65px;\n  background: #FFF url('logo.png') 15px/48px no-repeat;\n}\n.header:after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  top: 100%;\n  left: 0;\n  right: 0;\n  height: 15px;\n  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.05) 50%, rgba(0, 0, 0, 0) 100%);\n}\n.user {\n  flex: 1 0 auto;\n}\n.name {\n  padding-bottom: 0.25rem;\n  margin: 0 0 0 1rem;\n  font: bold 1.5rem/0.9 mr-eaves-modern, sans-serif;\n}\n.title {\n  display: inline-block;\n  padding: 0.25rem 0 0.2rem;\n  margin: 0 0 0 1rem;\n  font: normal 0.925rem/1.25 mr-eaves-modern, sans-serif;\n}\n.contact-information {\n  text-align: right;\n}\n.navigation {\n  margin: 0 0 0.25rem;\n  font-size: 100%;\n  line-height: 1;\n}\n@media (min-width: 36em) {\n  .header {\n    position: static;\n    min-height: 80px;\n    padding-left: 63px;\n  }\n  .header:after {\n    display: none;\n  }\n\n  .name {\n    padding-bottom: 0;\n    font-size: 2rem;\n    line-height: 1;\n  }\n\n  .title {\n    padding-bottom: 0;\n    font-size: 1rem;\n  }\n}\n@media (min-width: 48em) {\n  .header {\n    min-height: 130px;\n    padding-left: 115px;\n    background-size: 96px;\n    background-position: 15px 50%;\n  }\n\n  .user,\n.contact-information {\n    margin-bottom: 0.1rem;\n  }\n\n  .name {\n    font-size: 3em;\n  }\n\n  .title {\n    display: block;\n    padding: 0;\n    font-size: 1.25rem;\n  }\n\n  .navigation {\n    display: none;\n  }\n}\n/*# sourceMappingURL=header.component.css.map */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3Njc3MvYW5ndWxhci9kZXYvc3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDQyxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxxQkFBQTtFQUNBLHdCQUFBO0VBQUEsZ0JBQUE7RUFDQSxNQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7RUFDQSxvREFBQTtBQ0REO0FER0M7RUFDQyxXQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLDZHQUFBO0FDREY7QURLQTtFQUNDLGNBQUE7QUNGRDtBREtBO0VBQ0MsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlEQUFBO0FDRkQ7QURLQTtFQUNDLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLHNEQUFBO0FDRkQ7QURLQTtFQUNDLGlCQUFBO0FDRkQ7QURLQTtFQUNDLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNGRDtBREtBO0VBRUM7SUFDQyxnQkFBQTtJQUNBLGdCQUFBO0lBQ0Esa0JBQUE7RUNIQTtFREtBO0lBQ0MsYUFBQTtFQ0hEOztFRE9EO0lBQ0MsaUJBQUE7SUFDQSxlQUFBO0lBQ0EsY0FBQTtFQ0pBOztFRE9EO0lBQ0MsaUJBQUE7SUFDQSxlQUFBO0VDSkE7QUFDRjtBRFFBO0VBRUM7SUFDQyxpQkFBQTtJQUNBLG1CQUFBO0lBQ0EscUJBQUE7SUFDQSw2QkFBQTtFQ1BBOztFRFVEOztJQUVDLHFCQUFBO0VDUEE7O0VEVUQ7SUFDQyxjQUFBO0VDUEE7O0VEVUQ7SUFDQyxjQUFBO0lBQ0EsVUFBQTtJQUNBLGtCQUFBO0VDUEE7O0VEVUQ7SUFDQyxhQUFBO0VDUEE7QUFDRjtBQUVBLCtDQUErQyIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");



let HeaderComponent = class HeaderComponent {
    constructor(service) {
        // BEM classes
        this.headerClass = 'c-header';
        this.headerUserClass = this.headerClass + '__user';
        this.headerNameClass = this.headerClass + '__name';
        this.headerTitleClass = this.headerClass + '__title';
        this.headerContactClass = this.headerClass + '__contact';
        this.headerNavigationClass = this.headerClass + '__navigation';
        this.headerNavigationLinkClass = this.headerNavigationClass + '-link';
        this.headerAddressClass = this.headerClass + '__address';
        this.headerAddressLinkClass = this.headerAddressClass + '-link';
        this.headerAddressTextClass = this.headerAddressClass + '-text';
        this.headerAddressIconClass = this.headerAddressClass + '-icon';
        this.titles = [];
        this.addresses = [];
        this.service = service;
    }
    ngOnInit() {
        const userSetter = (userData) => Object.assign(this, Object.assign({}, userData));
        this.service.getUser().subscribe(userSetter, userSetter);
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }
];
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'res-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/header/header.module.ts":
/*!*****************************************!*\
  !*** ./src/app/header/header.module.ts ***!
  \*****************************************/
/*! exports provided: HeaderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderModule", function() { return HeaderModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _navigation_navigation_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../navigation/navigation.module */ "./src/app/navigation/navigation.module.ts");
/* harmony import */ var _address_line_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./address-line.component */ "./src/app/header/address-line.component.ts");
/* harmony import */ var _header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header.component */ "./src/app/header/header.component.ts");






let HeaderModule = class HeaderModule {
};
HeaderModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _address_line_component__WEBPACK_IMPORTED_MODULE_4__["AddressLineComponent"],
            _header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"]
        ],
        exports: [
            _address_line_component__WEBPACK_IMPORTED_MODULE_4__["AddressLineComponent"],
            _header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _navigation_navigation_module__WEBPACK_IMPORTED_MODULE_3__["NavigationModule"]
        ],
        providers: [],
    })
], HeaderModule);



/***/ }),

/***/ "./src/app/layout/column.component.css":
/*!*********************************************!*\
  !*** ./src/app/layout/column.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@media (min-width: 36em) {\n  :host[order=\"1\"] {\n    order: 1;\n  }\n  :host[order=\"2\"] {\n    order: 2;\n  }\n  :host[order=\"3\"] {\n    order: 3;\n  }\n  :host[order=\"4\"] {\n    order: 4;\n  }\n  :host[order=\"5\"] {\n    order: 5;\n  }\n  :host[order=\"6\"] {\n    order: 6;\n  }\n  :host[order=\"7\"] {\n    order: 7;\n  }\n  :host[order=\"8\"] {\n    order: 8;\n  }\n  :host[order=\"9\"] {\n    order: 9;\n  }\n  :host[order=\"10\"] {\n    order: 10;\n  }\n  :host[width=\"10\"] {\n    width: 10%;\n  }\n  :host[width=\"20\"] {\n    width: 20%;\n  }\n  :host[width=\"25\"] {\n    width: 25%;\n  }\n  :host[width=\"30\"] {\n    width: 30%;\n  }\n  :host[width=\"33\"] {\n    width: 33%;\n  }\n  :host[width=\"40\"] {\n    width: 40%;\n  }\n  :host[width=\"50\"] {\n    width: 50%;\n  }\n  :host[width=\"60\"] {\n    width: 60%;\n  }\n  :host[width=\"66\"] {\n    width: 66%;\n  }\n  :host[width=\"70\"] {\n    width: 70%;\n  }\n  :host[width=\"75\"] {\n    width: 75%;\n  }\n  :host[width=\"80\"] {\n    width: 80%;\n  }\n  :host[width=\"90\"] {\n    width: 90%;\n  }\n  :host[width=\"100\"] {\n    width: 100%;\n  }\n}\n\n/*# sourceMappingURL=column.component.css.map */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3Njc3MvYW5ndWxhci9kZXYvc3JjL2FwcC9sYXlvdXQvY29sdW1uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sYXlvdXQvY29sdW1uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFHRztJQUNDLFFBRmM7RUNEaEI7RURFQztJQUNDLFFBRmM7RUNFaEI7RUREQztJQUNDLFFBRmM7RUNLaEI7RURKQztJQUNDLFFBRmM7RUNRaEI7RURQQztJQUNDLFFBRmM7RUNXaEI7RURWQztJQUNDLFFBRmM7RUNjaEI7RURiQztJQUNDLFFBRmM7RUNpQmhCO0VEaEJDO0lBQ0MsUUFGYztFQ29CaEI7RURuQkM7SUFDQyxRQUZjO0VDdUJoQjtFRHRCQztJQUNDLFNBRmM7RUMwQmhCO0VEbkJDO0lBQ0MsVUFBQTtFQ3FCRjtFRHRCQztJQUNDLFVBQUE7RUN3QkY7RUR6QkM7SUFDQyxVQUFBO0VDMkJGO0VENUJDO0lBQ0MsVUFBQTtFQzhCRjtFRC9CQztJQUNDLFVBQUE7RUNpQ0Y7RURsQ0M7SUFDQyxVQUFBO0VDb0NGO0VEckNDO0lBQ0MsVUFBQTtFQ3VDRjtFRHhDQztJQUNDLFVBQUE7RUMwQ0Y7RUQzQ0M7SUFDQyxVQUFBO0VDNkNGO0VEOUNDO0lBQ0MsVUFBQTtFQ2dERjtFRGpEQztJQUNDLFVBQUE7RUNtREY7RURwREM7SUFDQyxVQUFBO0VDc0RGO0VEdkRDO0lBQ0MsVUFBQTtFQ3lERjtFRDFEQztJQUNDLFdBQUE7RUM0REY7QUFDRjs7QUFFQSwrQ0FBK0MiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvY29sdW1uLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/layout/column.component.ts":
/*!********************************************!*\
  !*** ./src/app/layout/column.component.ts ***!
  \********************************************/
/*! exports provided: ColumnComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColumnComponent", function() { return ColumnComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


/*
    While ColumnsComponent defines the container as a flex container, this
    component does all the work. It simply takes the order and width input
    attributes and makes CSS based upon their values. Thank goodness for SASS.
*/
let ColumnComponent = class ColumnComponent {
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ColumnComponent.prototype, "order", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ColumnComponent.prototype, "width", void 0);
ColumnComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'res-column',
        template: "<ng-content></ng-content>",
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./column.component.css */ "./src/app/layout/column.component.css")).default]
    })
], ColumnComponent);



/***/ }),

/***/ "./src/app/layout/columns.component.css":
/*!**********************************************!*\
  !*** ./src/app/layout/columns.component.css ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@media (min-width: 36em) {\n  :host {\n    display: flex;\n    background-color: #FFF;\n  }\n}\n\n/*# sourceMappingURL=columns.component.css.map */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3Njc3MvYW5ndWxhci9kZXYvc3JjL2FwcC9sYXlvdXQvY29sdW1ucy5jb21wb25lbnQuc2NzcyIsIi4uLy4uL3Njc3MvaW5jbHVkZXMvX3ZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9sYXlvdXQvY29sdW1ucy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0M7SUFDQyxhQUFBO0lBQ0Esc0JDSVk7RUNMWjtBQUNGOztBQUVBLGdEQUFnRCIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9jb2x1bW5zLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/layout/columns.component.ts":
/*!*********************************************!*\
  !*** ./src/app/layout/columns.component.ts ***!
  \*********************************************/
/*! exports provided: ColumnsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColumnsComponent", function() { return ColumnsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


/*
    Using flexbox layout is extremely frustrating with Angular, because of the
    intervening host/shadow elements between the flex container and the intended
    flex columns. Applying classes programmatically to the columns is impossible
    so there's no way to translate component inputs to classes.

    The alternative I've chosen is to use attribute selectors to grab the
    component inputs and forgo internal divs altogether. This requires each
    column to self-identify their widths, which I would have preferred doing
    as a 'layout type' input on this component. But oh well.

    The ColumnsComponent CSS is limited to defining this component as having
    flex layout. Most of the heavy work is in ColumnComponent.
*/
let ColumnsComponent = class ColumnsComponent {
};
ColumnsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'res-columns',
        template: "<ng-content></ng-content>",
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./columns.component.css */ "./src/app/layout/columns.component.css")).default]
    })
], ColumnsComponent);



/***/ }),

/***/ "./src/app/layout/layout.module.ts":
/*!*****************************************!*\
  !*** ./src/app/layout/layout.module.ts ***!
  \*****************************************/
/*! exports provided: LayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutModule", function() { return LayoutModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _column_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./column.component */ "./src/app/layout/column.component.ts");
/* harmony import */ var _columns_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./columns.component */ "./src/app/layout/columns.component.ts");
/* harmony import */ var _main_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main.component */ "./src/app/layout/main.component.ts");

/*
    Note that all of the layout components simply pass their content through.
    They are used for implementing CSS layouts that wrap the enclosing content.
    The CSS is applied directly to the component's host element.
*/





let LayoutModule = class LayoutModule {
};
LayoutModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _column_component__WEBPACK_IMPORTED_MODULE_3__["ColumnComponent"],
            _columns_component__WEBPACK_IMPORTED_MODULE_4__["ColumnsComponent"],
            _main_component__WEBPACK_IMPORTED_MODULE_5__["MainComponent"]
        ],
        exports: [
            _column_component__WEBPACK_IMPORTED_MODULE_3__["ColumnComponent"],
            _columns_component__WEBPACK_IMPORTED_MODULE_4__["ColumnsComponent"],
            _main_component__WEBPACK_IMPORTED_MODULE_5__["MainComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ],
        providers: [],
    })
], LayoutModule);



/***/ }),

/***/ "./src/app/layout/main.component.css":
/*!*******************************************!*\
  !*** ./src/app/layout/main.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: block;\n  padding: 0.1px 1rem;\n}\n\n@media (min-width: 36em) {\n  :host {\n    min-height: 100%;\n    border-radius: 30px 0 0;\n    background-color: #EEE;\n  }\n}\n\n/*# sourceMappingURL=main.component.css.map */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3Njc3MvYW5ndWxhci9kZXYvc3JjL2FwcC9sYXlvdXQvbWFpbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbGF5b3V0L21haW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNDLGNBQUE7RUFDQSxtQkFBQTtBQ0REOztBRElBO0VBQ0M7SUFDQyxnQkFBQTtJQUNBLHVCQUFBO0lBQ0Esc0JBQUE7RUNEQTtBQUNGOztBQUVBLDZDQUE2QyIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9tYWluLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/layout/main.component.ts":
/*!******************************************!*\
  !*** ./src/app/layout/main.component.ts ***!
  \******************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MainComponent = class MainComponent {
};
MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'res-main',
        template: '<ng-content></ng-content>',
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./main.component.css */ "./src/app/layout/main.component.css")).default]
    })
], MainComponent);



/***/ }),

/***/ "./src/app/navigation/nav-anchor.component.ts":
/*!****************************************************!*\
  !*** ./src/app/navigation/nav-anchor.component.ts ***!
  \****************************************************/
/*! exports provided: NavAnchorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavAnchorComponent", function() { return NavAnchorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_navigation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/navigation.service */ "./src/app/services/navigation.service.ts");



let NavAnchorComponent = class NavAnchorComponent {
    constructor(service) {
        this.service = service;
        this.id = 'nav-anchor';
        service.navigationAnchorId = this.id;
    }
};
NavAnchorComponent.ctorParameters = () => [
    { type: _services_navigation_service__WEBPACK_IMPORTED_MODULE_2__["NavigationService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], NavAnchorComponent.prototype, "id", void 0);
NavAnchorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'res-nav-anchor',
        template: '<div id="{{ id }}"></div>'
    })
], NavAnchorComponent);



/***/ }),

/***/ "./src/app/navigation/nav-toggle.component.css":
/*!*****************************************************!*\
  !*** ./src/app/navigation/nav-toggle.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".link, .link:link, .link:visited {\n  color: #007BFF;\n  text-decoration: none;\n}\n.link:hover {\n  color: #0056B3;\n  text-decoration: underline;\n}\n/*# sourceMappingURL=nav-toggle.component.css.map */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3Njc3MvYW5ndWxhci9kZXYvc3JjL19jb21tb24uc2NzcyIsInNyYy9hcHAvbmF2aWdhdGlvbi9uYXYtdG9nZ2xlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT0M7RUFDQyxjQUFBO0VBQ0EscUJBQUE7QUNORjtBRFNDO0VBQ0MsY0FBQTtFQUNBLDBCQUFBO0FDUEY7QUFFQSxtREFBbUQiLCJmaWxlIjoic3JjL2FwcC9uYXZpZ2F0aW9uL25hdi10b2dnbGUuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/navigation/nav-toggle.component.ts":
/*!****************************************************!*\
  !*** ./src/app/navigation/nav-toggle.component.ts ***!
  \****************************************************/
/*! exports provided: NavToggleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavToggleComponent", function() { return NavToggleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_navigation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/navigation.service */ "./src/app/services/navigation.service.ts");



let NavToggleComponent = class NavToggleComponent {
    constructor(service) {
        this.service = service;
    }
    toggleNavigation() {
        // I'd rather grab an element ID than transfer an element reference cross-component and create a leak.
        const id = this.service.navigationAnchorId;
        if (id) {
            const anchor = document.getElementById(id);
            if (anchor) {
                this.service.setPosition(this.getPageTop(anchor));
            }
        }
        this.service.toggleVisibility();
    }
    getPageTop(element) {
        let top = 0;
        while (element !== null) {
            top += element.offsetTop;
            element = element.offsetParent;
        }
        return top;
    }
};
NavToggleComponent.ctorParameters = () => [
    { type: _services_navigation_service__WEBPACK_IMPORTED_MODULE_2__["NavigationService"] }
];
NavToggleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'res-nav-toggle',
        template: '<span class="link fas fa-bars" (click)="toggleNavigation()"></span>',
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./nav-toggle.component.css */ "./src/app/navigation/nav-toggle.component.css")).default]
    })
], NavToggleComponent);



/***/ }),

/***/ "./src/app/navigation/navigation.component.css":
/*!*****************************************************!*\
  !*** ./src/app/navigation/navigation.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".current, .link {\n  display: block;\n  padding: 10px;\n  font: normal 1.25rem mr-eaves-modern, sans-serif;\n}\n\n.navigation {\n  position: fixed;\n  left: 0;\n  right: 0;\n  z-index: 1000;\n  margin: 0;\n  background-color: #FFF;\n}\n\n.navigation.collapsed {\n  visibility: hidden;\n}\n\n.list {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n}\n\n.list:after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  top: 100%;\n  z-index: 1;\n  width: 100%;\n  height: 10px;\n  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.05) 50%, rgba(0, 0, 0, 0) 100%);\n}\n\n.item {\n  margin: 0;\n  padding: 0;\n  border-bottom: 1px solid #EEE;\n}\n\n.item:first-child {\n  border-top: 1px solid #EEE;\n}\n\n.item:first-child:before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  top: 0;\n  z-index: 1;\n  width: 100%;\n  height: 5px;\n  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.05) 50%, rgba(0, 0, 0, 0) 100%);\n}\n\n.item:last-child:after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  bottom: 0;\n  z-index: 1;\n  width: 100%;\n  height: 5px;\n  background: linear-gradient(to top, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.05) 50%, rgba(0, 0, 0, 0) 100%);\n}\n\n.link, .link:link, .link:visited {\n  color: #007BFF;\n  text-decoration: none;\n}\n\n.link:hover {\n  color: #0056B3;\n  text-decoration: underline;\n}\n\n.current {\n  background-color: #EEE;\n}\n\n@media (min-width: 36em) {\n  .navigation {\n    position: static;\n    margin-top: 2rem;\n  }\n  .navigation.collapsed {\n    visibility: visible;\n  }\n\n  .list {\n    padding-left: 15px;\n  }\n  .list:after {\n    display: none;\n  }\n\n  .item:first-child:before {\n    display: none;\n  }\n  .item:last-child:after {\n    display: none;\n  }\n}\n\n@media (min-width: 48em) {\n  .link, .current {\n    padding: 15px;\n  }\n\n  .list {\n    padding-left: 0;\n  }\n}\n\n/*# sourceMappingURL=navigation.component.css.map */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3Njc3MvYW5ndWxhci9kZXYvc3JjL2FwcC9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL25hdmlnYXRpb24vbmF2aWdhdGlvbi5jb21wb25lbnQuY3NzIiwiLi4vLi4vc2Nzcy9pbmNsdWRlcy9fdmFyaWFibGVzLnNjc3MiLCIuLi8uLi9zY3NzL2FuZ3VsYXIvZGV2L3NyYy9fY29tbW9uLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDQyxjQUFBO0VBQ0EsYUFBQTtFQUNBLGdEQUFBO0FDREQ7O0FESUE7RUFDQyxlQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtFQUNBLHNCRUprQjtBREduQjs7QURHQztFQUNDLGtCQUFBO0FDREY7O0FETUE7RUFDQyxxQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FDSEQ7O0FES0M7RUFDQyxXQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDZHQUFBO0FDSEY7O0FEUUE7RUFDQyxTQUFBO0VBQ0EsVUFBQTtFQUNBLDZCQUFBO0FDTEQ7O0FET0M7RUFDQywwQkFBQTtBQ0xGOztBRE9FO0VBQ0MsV0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSw2R0FBQTtBQ0xIOztBRFNDO0VBQ0MsV0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSwwR0FBQTtBQ1BGOztBRXREQztFQUNDLGNBQUE7RUFDQSxxQkFBQTtBRnlERjs7QUV0REM7RUFDQyxjQUFBO0VBQ0EsMEJBQUE7QUZ3REY7O0FET0E7RUFFQyxzQkVwRWtCO0FEK0RuQjs7QURRQTtFQUVDO0lBQ0MsZ0JBQUE7SUFDQSxnQkFBQTtFQ05BO0VEUUE7SUFDQyxtQkFBQTtFQ05EOztFRFVEO0lBQ0Msa0JBQUE7RUNQQTtFRFNBO0lBQ0MsYUFBQTtFQ1BEOztFRFlBO0lBQ0MsYUFBQTtFQ1REO0VEWUE7SUFDQyxhQUFBO0VDVkQ7QUFDRjs7QURjQTtFQUNDO0lBQ0MsYUFBQTtFQ1pBOztFRGVEO0lBQ0MsZUFBQTtFQ1pBO0FBQ0Y7O0FBRUEsbURBQW1EIiwiZmlsZSI6InNyYy9hcHAvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/navigation/navigation.component.ts":
/*!****************************************************!*\
  !*** ./src/app/navigation/navigation.component.ts ***!
  \****************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_navigation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/navigation.service */ "./src/app/services/navigation.service.ts");



let NavigationComponent = class NavigationComponent {
    constructor(service) {
        this.service = service;
    }
    ngOnInit() {
        this.service.getNavigation().subscribe((navData) => this.navigation = navData);
        this.service.getPosition().subscribe((top) => this.position = top);
        this.service.getVisibility().subscribe((visible) => this.visible = visible);
    }
};
NavigationComponent.ctorParameters = () => [
    { type: _services_navigation_service__WEBPACK_IMPORTED_MODULE_2__["NavigationService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], NavigationComponent.prototype, "position", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], NavigationComponent.prototype, "visible", void 0);
NavigationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'res-navigation',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./navigation.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/navigation/navigation.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./navigation.component.css */ "./src/app/navigation/navigation.component.css")).default]
    })
], NavigationComponent);



/***/ }),

/***/ "./src/app/navigation/navigation.module.ts":
/*!*************************************************!*\
  !*** ./src/app/navigation/navigation.module.ts ***!
  \*************************************************/
/*! exports provided: NavigationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationModule", function() { return NavigationModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _nav_anchor_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nav-anchor.component */ "./src/app/navigation/nav-anchor.component.ts");
/* harmony import */ var _nav_toggle_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./nav-toggle.component */ "./src/app/navigation/nav-toggle.component.ts");
/* harmony import */ var _navigation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./navigation.component */ "./src/app/navigation/navigation.component.ts");






let NavigationModule = class NavigationModule {
};
NavigationModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _nav_anchor_component__WEBPACK_IMPORTED_MODULE_3__["NavAnchorComponent"],
            _nav_toggle_component__WEBPACK_IMPORTED_MODULE_4__["NavToggleComponent"],
            _navigation_component__WEBPACK_IMPORTED_MODULE_5__["NavigationComponent"]
        ],
        exports: [
            _nav_anchor_component__WEBPACK_IMPORTED_MODULE_3__["NavAnchorComponent"],
            _nav_toggle_component__WEBPACK_IMPORTED_MODULE_4__["NavToggleComponent"],
            _navigation_component__WEBPACK_IMPORTED_MODULE_5__["NavigationComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ],
        providers: [],
    })
], NavigationModule);



/***/ }),

/***/ "./src/app/services/google.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/google.service.ts ***!
  \********************************************/
/*! exports provided: SearchType, SearchResults, SearchResultsItem, GoogleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchType", function() { return SearchType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchResults", function() { return SearchResults; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchResultsItem", function() { return SearchResultsItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleService", function() { return GoogleService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");



 // found this from https://rxjs-dev.firebaseapp.com/api/index/class/Observable docs

const googleURL = 'https://www.googleapis.com/customsearch/v1', googleParams = {
    cx: '011383622957179664522:-yorextt_ze',
    key: 'AIzaSyBIUzYlw0WltElQwz1ox6QbdLWju0A5cic',
    num: '10',
    safe: 'active',
};
var SearchType;
(function (SearchType) {
    SearchType["TEXT"] = "text";
    SearchType["IMAGE"] = "image";
})(SearchType || (SearchType = {}));
;
class SearchResultsItem {
    constructor(googleResult, searchType) {
        this.linkText = googleResult.htmlTitle;
        this.linkURL = searchType === SearchType.TEXT ? googleResult.link : googleResult.image.contextLink;
        this.content = searchType === SearchType.TEXT ? googleResult.htmlSnippet : googleResult.link;
        if (searchType === SearchType.IMAGE) {
            this.altText = googleResult.snippet;
            this.errorSRC = googleResult.image.thumbnailLink;
        }
    }
}
class SearchResults {
    constructor(success, type, total) {
        this.success = success;
        if (type !== undefined) {
            this.type = type;
        }
        if (total !== undefined) {
            this.total = total;
        }
    }
}
function resultsConverter(json, resultsType) {
    let result = new SearchResults(true, resultsType, json.searchInformation.formattedTotalResults);
    result.items = json.items.map((item) => {
        return new SearchResultsItem(item, resultsType);
    });
    return result;
}
const textResultsConverter = (json, index) => resultsConverter(json, SearchType.TEXT);
const mapTextResults = Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(textResultsConverter);
const imageResultsConverter = (json, index) => resultsConverter(json, SearchType.IMAGE);
const mapImageResults = Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(imageResultsConverter);
let GoogleService = class GoogleService {
    constructor(http) {
        this.http = http;
    }
    getTextResults(term) {
        return mapTextResults(this.http.get(googleURL, { params: Object.assign({ q: term }, googleParams) }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    getImageResults(term) {
        return mapImageResults(this.http.get(googleURL, { params: Object.assign({ q: term, searchType: 'image' }, googleParams) }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    handleError(error) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(new SearchResults(false));
    }
};
GoogleService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
GoogleService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    })
], GoogleService);



/***/ }),

/***/ "./src/app/services/navigation.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/navigation.service.ts ***!
  \************************************************/
/*! exports provided: NavigationService, Navigation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationService", function() { return NavigationService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Navigation", function() { return Navigation; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");


 // found this from https://rxjs-dev.firebaseapp.com/api/index/class/Observable docs
class Navigation {
    constructor(text, link) {
        this.text = text;
        this.link = link;
        this.current = link === null;
    }
}
let NavigationService = class NavigationService {
    constructor() {
        /* Navigation retrieval */
        this.navigation = [
            new Navigation('About this site', '../'),
            new Navigation('What I offer', '../offer'),
            new Navigation('Java experience and philosophy', '../java'),
            new Navigation('Resume', '../resume'),
            new Navigation('React example', '../react'),
            new Navigation('React example 2', '../react2'),
            new Navigation('React with TypeScript', '../react-typescript'),
            new Navigation('Angular example', null)
        ];
        this.positionObservers = [];
        this.positionSubscriptionCreation = (observer) => {
            this.positionObservers.push(observer);
            if (this.position !== undefined) {
                observer.next(this.position);
            }
            return function unsubscribe() {
                let i = this.positionObservers.indexOf(observer);
                if (i !== -1) {
                    this.positionObservers.splice(i, 1);
                }
            };
        };
        /* Visibility retrieval */
        this.visible = false; // Navigation always starts closed
        this.visibilityObservers = [];
        this.visibilitySubscriptionCreation = (observer) => {
            this.visibilityObservers.push(observer);
            observer.next(this.visible);
            return function unsubscribe() {
                let i = this.visibilityObservers.indexOf(observer);
                if (i !== -1) {
                    this.visibilityObservers.splice(i, 1);
                }
            };
        };
    }
    getNavigation() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.navigation);
    }
    setPosition(newPosition) {
        this.position = newPosition;
        for (let observer of this.positionObservers) {
            observer.next(this.position);
        }
    }
    getPosition() {
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(this.positionSubscriptionCreation);
    }
    toggleVisibility() {
        this.visible = !this.visible;
        for (let observer of this.visibilityObservers) {
            observer.next(this.visible);
        }
    }
    getVisibility() {
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(this.visibilitySubscriptionCreation);
    }
};
NavigationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    })
], NavigationService);



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: AddressType, UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressType", function() { return AddressType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");



 // found this from https://rxjs-dev.firebaseapp.com/api/index/class/Observable docs

const userURL = 'assets/person.json';
var AddressType;
(function (AddressType) {
    AddressType["EMAIL"] = "email";
    AddressType["PHONE"] = "phone";
})(AddressType || (AddressType = {}));
let UserService = class UserService {
    constructor(http) {
        this.http = http;
    }
    isUserCached() {
        if (this.savedUser === null || this.savedUser === undefined) {
            return false;
        }
        if (this.savedUser.name === null || this.savedUser.name === undefined || this.savedUser.name == '') {
            return false;
        }
        return true;
    }
    getUser() {
        if (this.isUserCached()) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(this.savedUser);
        }
        else {
            return this.http.get(userURL).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
        }
    }
    handleError(error) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])({
            name: '',
            titles: [],
            addresses: []
        });
    }
};
UserService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    })
], UserService);



/***/ }),

/***/ "./src/app/shared/bemClass.pipe.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/bemClass.pipe.ts ***!
  \*****************************************/
/*! exports provided: BemClassPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BemClassPipe", function() { return BemClassPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


function isValidTerm(term) {
    return (term !== null) && (term !== undefined) && (term !== '');
}
let BemClassPipe = class BemClassPipe {
    transform(block, element, modifier) {
        let className = block;
        if (isValidTerm(element)) {
            className += '__' + element;
        }
        if (isValidTerm(modifier)) {
            className += '--' + modifier;
        }
        return className;
    }
};
BemClassPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: "bemClass" })
], BemClassPipe);



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _bemClass_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bemClass.pipe */ "./src/app/shared/bemClass.pipe.ts");




let SharedModule = class SharedModule {
};
SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _bemClass_pipe__WEBPACK_IMPORTED_MODULE_3__["BemClassPipe"]
        ],
        exports: [
            _bemClass_pipe__WEBPACK_IMPORTED_MODULE_3__["BemClassPipe"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ],
        providers: [],
    })
], SharedModule);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/michaellandis/Documents/Programming/resume/angular-source/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map