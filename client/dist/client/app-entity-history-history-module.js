(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-entity-history-history-module"],{

/***/ "3Bce":
/*!**********************************************************!*\
  !*** ./src/app/entity/history/history-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: HistoryRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryRoutingModule", function() { return HistoryRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _sinhvien_sinhvien_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sinhvien/sinhvien.component */ "XtfQ");
/* harmony import */ var _giaovien_giaovien_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./giaovien/giaovien.component */ "Kwt0");
/* harmony import */ var src_app_core_auth_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/auth/guard-auth.guard */ "ZYSj");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");






const routes = [
    {
        path: 'sinhvien',
        component: _sinhvien_sinhvien_component__WEBPACK_IMPORTED_MODULE_1__["SinhvienComponent"],
        data: { functions: ['LICHSU'], pageTitle: '' },
        canActivate: [src_app_core_auth_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__["GuardAuthGuard"]],
    },
    {
        path: 'giaovien',
        component: _giaovien_giaovien_component__WEBPACK_IMPORTED_MODULE_2__["GiaovienComponent"],
        data: { functions: ['LICHSU'], pageTitle: '' },
        canActivate: [src_app_core_auth_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__["GuardAuthGuard"]],
    },
];
class HistoryRoutingModule {
}
HistoryRoutingModule.ɵfac = function HistoryRoutingModule_Factory(t) { return new (t || HistoryRoutingModule)(); };
HistoryRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: HistoryRoutingModule });
HistoryRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](HistoryRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "Kwt0":
/*!***************************************************************!*\
  !*** ./src/app/entity/history/giaovien/giaovien.component.ts ***!
  \***************************************************************/
/*! exports provided: GiaovienComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GiaovienComponent", function() { return GiaovienComponent; });
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! file-saver */ "Iab2");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");




class GiaovienComponent {
    constructor() {
        this.faExpand = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faExpand"];
        this.faDownload = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faDownload"];
    }
    ngOnInit() { }
    clickDownload() {
        let name = 'giaovien.txt';
        file_saver__WEBPACK_IMPORTED_MODULE_1__["saveAs"](`http://localhost:3000/api/history/${name}`);
    }
}
GiaovienComponent.ɵfac = function GiaovienComponent_Factory(t) { return new (t || GiaovienComponent)(); };
GiaovienComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: GiaovienComponent, selectors: [["app-giaovien"]], decls: 9, vars: 1, consts: [[1, "rs", "p-4", "bg-light"], [1, "history-mod", "mt-4", "w-100"], ["src", "http://localhost:3000/api/history/sinhvien.txt", "title", "l\u1ECBch s\u1EED ho\u1EA1t \u0111\u1ED9ng c\u1EE7a sinh vi\u00EAn", 1, "w-100", "h-100", "m-0", "p-1"], [1, "btn", "mr-1", "mt-4", "btn-sm", "btn-outline-danger"], [3, "click"], [3, "icon"]], template: function GiaovienComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "L\u1ECBch s\u1EED ho\u1EA1t d\u1ED9ng gi\u00E1o vi\u00EAn");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "iframe", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function GiaovienComponent_Template_span_click_6_listener() { return ctx.clickDownload(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "T\u1EA3i xu\u1ED1ng ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "fa-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx.faDownload);
    } }, directives: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FaIconComponent"]], styles: [".history-mod[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  border: 1px solid #bdbcbc;\n  background: #fff;\n  height: 450px;\n  overflow-y: scroll;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcZ2lhb3ZpZW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUFDRiIsImZpbGUiOiJnaWFvdmllbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oaXN0b3J5LW1vZHtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgYm9yZGVyOjFweCBzb2xpZCByZ2IoMTg5LCAxODgsIDE4OCk7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBoZWlnaHQ6IDQ1MHB4O1xyXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "XtfQ":
/*!***************************************************************!*\
  !*** ./src/app/entity/history/sinhvien/sinhvien.component.ts ***!
  \***************************************************************/
/*! exports provided: SinhvienComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SinhvienComponent", function() { return SinhvienComponent; });
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! file-saver */ "Iab2");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _history_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../history.service */ "gkEp");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");





class SinhvienComponent {
    constructor(historyService) {
        this.historyService = historyService;
        this.faExpand = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faExpand"];
        this.faDownload = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faDownload"];
    }
    ngOnInit() { }
    clickDownload() {
        let name = 'sinhvien.txt';
        file_saver__WEBPACK_IMPORTED_MODULE_1__["saveAs"](`http://localhost:3000/api/history/${name}`);
    }
}
SinhvienComponent.ɵfac = function SinhvienComponent_Factory(t) { return new (t || SinhvienComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_history_service__WEBPACK_IMPORTED_MODULE_3__["HistoryService"])); };
SinhvienComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: SinhvienComponent, selectors: [["app-sinhvien"]], decls: 9, vars: 1, consts: [[1, "rs", "p-4", "bg-light"], [1, "history-mod", "mt-4", "w-100"], ["src", "http://localhost:3000/api/history/sinhvien.txt", "title", "l\u1ECBch s\u1EED ho\u1EA1t \u0111\u1ED9ng c\u1EE7a sinh vi\u00EAn", 1, "w-100", "h-100", "m-0", "p-1"], [1, "btn", "mr-1", "mt-4", "btn-sm", "btn-outline-danger"], [3, "click"], [3, "icon"]], template: function SinhvienComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "L\u1ECBch s\u1EED ho\u1EA1t d\u1ED9ng sinh vi\u00EAn");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "iframe", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SinhvienComponent_Template_span_click_6_listener() { return ctx.clickDownload(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "T\u1EA3i xu\u1ED1ng ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "fa-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx.faDownload);
    } }, directives: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FaIconComponent"]], styles: [".history-mod[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  border: 1px solid #bdbcbc;\n  background: #fff;\n  height: 450px;\n  overflow-y: scroll;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcc2luaHZpZW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUFDRiIsImZpbGUiOiJzaW5odmllbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oaXN0b3J5LW1vZHtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgYm9yZGVyOjFweCBzb2xpZCByZ2IoMTg5LCAxODgsIDE4OCk7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBoZWlnaHQ6IDQ1MHB4O1xyXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "ZcNX":
/*!**************************************************!*\
  !*** ./src/app/entity/history/history.module.ts ***!
  \**************************************************/
/*! exports provided: HistoryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryModule", function() { return HistoryModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _history_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./history-routing.module */ "3Bce");
/* harmony import */ var _sinhvien_sinhvien_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sinhvien/sinhvien.component */ "XtfQ");
/* harmony import */ var _giaovien_giaovien_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./giaovien/giaovien.component */ "Kwt0");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






class HistoryModule {
}
HistoryModule.ɵfac = function HistoryModule_Factory(t) { return new (t || HistoryModule)(); };
HistoryModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: HistoryModule });
HistoryModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _history_routing_module__WEBPACK_IMPORTED_MODULE_1__["HistoryRoutingModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](HistoryModule, { declarations: [_sinhvien_sinhvien_component__WEBPACK_IMPORTED_MODULE_2__["SinhvienComponent"], _giaovien_giaovien_component__WEBPACK_IMPORTED_MODULE_3__["GiaovienComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _history_routing_module__WEBPACK_IMPORTED_MODULE_1__["HistoryRoutingModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeModule"]] }); })();


/***/ }),

/***/ "gkEp":
/*!***************************************************!*\
  !*** ./src/app/entity/history/history.service.ts ***!
  \***************************************************/
/*! exports provided: HistoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryService", function() { return HistoryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class HistoryService {
    constructor(http) {
        this.http = http;
    }
}
HistoryService.ɵfac = function HistoryService_Factory(t) { return new (t || HistoryService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
HistoryService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HistoryService, factory: HistoryService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=app-entity-history-history-module.js.map