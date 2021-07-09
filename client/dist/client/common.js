(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "05Dk":
/*!***************************************************!*\
  !*** ./src/app/entity/tailieu/tailieu.service.ts ***!
  \***************************************************/
/*! exports provided: TailieuService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TailieuService", function() { return TailieuService; });
/* harmony import */ var src_app_app_contants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/app.contants */ "7JO0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class TailieuService {
    constructor(http) {
        this.http = http;
    }
    loadAllDethi(data) {
        return this.http.post(src_app_app_contants__WEBPACK_IMPORTED_MODULE_0__["SERVER_AUTH_API_URL"] + `getbystatetrue`, { data }, { observe: 'response' });
    }
    loadDethibyclass(_id) {
        return this.http.post(src_app_app_contants__WEBPACK_IMPORTED_MODULE_0__["SERVER_AUTH_API_URL"] + `getbyclass`, { _id }, { observe: 'response' });
    }
}
TailieuService.ɵfac = function TailieuService_Factory(t) { return new (t || TailieuService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
TailieuService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: TailieuService, factory: TailieuService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "Z0zt":
/*!*******************************************!*\
  !*** ./src/app/entity/thi/thi.service.ts ***!
  \*******************************************/
/*! exports provided: ThiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThiService", function() { return ThiService; });
/* harmony import */ var src_app_app_contants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/app.contants */ "7JO0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class ThiService {
    constructor(http) {
        this.http = http;
    }
    create(data) {
        return this.http.post(src_app_app_contants__WEBPACK_IMPORTED_MODULE_0__["SERVER_AUTH_API_URL"] + `bailam/create`, { data }, { observe: 'response' });
    }
    getById(id) {
        return this.http.get(src_app_app_contants__WEBPACK_IMPORTED_MODULE_0__["SERVER_AUTH_API_URL"] + `bailambyid/${id}`, {
            observe: 'response',
        });
    }
    NopBai(data) {
        //  console.log(data);
        return this.http.post(src_app_app_contants__WEBPACK_IMPORTED_MODULE_0__["SERVER_AUTH_API_URL"] + `bailam/update`, { data }, { observe: 'response' });
    }
    loadAll(req) {
        return this.http.get(src_app_app_contants__WEBPACK_IMPORTED_MODULE_0__["SERVER_AUTH_API_URL"] +
            'bailam/search/query?page=' +
            req.current_page +
            '&limit=' +
            req.limit +
            '&idPerformer=' +
            req.idPerformer +
            '&sort=' +
            req.sort +
            '&reverse=' +
            req.reverse +
            '&kyThi=' +
            req.kyThi +
            '&search=' +
            req.search +
            '&createBy=' +
            req.createBy +
            '&Class=' +
            req.Class, { observe: 'response' });
    }
    loadAllPerformer(id) {
        return this.http.get(src_app_app_contants__WEBPACK_IMPORTED_MODULE_0__["SERVER_AUTH_API_URL"] + 'bailam/loadAll/' + id, { observe: 'response' });
    }
    getDataToServer(data) {
        return this.http.post(src_app_app_contants__WEBPACK_IMPORTED_MODULE_0__["SERVER_QUESTION_API_URL"] + `downloadFileXml/bailam`, data, {
            observe: 'response',
        });
    }
}
ThiService.ɵfac = function ThiService_Factory(t) { return new (t || ThiService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
ThiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ThiService, factory: ThiService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=common.js.map