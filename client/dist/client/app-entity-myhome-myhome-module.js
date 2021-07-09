(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-entity-myhome-myhome-module"],{

/***/ "0/kU":
/*!***************************************************!*\
  !*** ./src/app/entity/myhome/myhome.component.ts ***!
  \***************************************************/
/*! exports provided: MyhomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyhomeComponent", function() { return MyhomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _myhome_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./myhome.service */ "e8W+");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-pagination */ "oOf3");
/* harmony import */ var _date_calendars_calendars_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../date/calendars/calendars.component */ "c7RR");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");







function MyhomeComponent_h3_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "CU\u1ED8C THI S\u1EAEP DI\u1EC4N RA");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MyhomeComponent_h3_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "CU\u1ED8C THI \u0110\u00C3 K\u1EBET TH\u00DAC");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MyhomeComponent_div_15_div_1_img_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 31);
} if (rf & 2) {
    const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "http://localhost:3000/static/image/", item_r10.avatar, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function MyhomeComponent_div_15_div_1_img_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 32);
} }
const _c0 = function (a1) { return ["/nhacuatoi/dethi", a1]; };
function MyhomeComponent_div_15_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MyhomeComponent_div_15_div_1_img_2_Template, 1, 1, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MyhomeComponent_div_15_div_1_img_3_Template, 1, 0, "img", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, item_r10._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r10.avatar != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r10.avatar == "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r10.content.substring(0, 30).toUpperCase());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", item_r10.timeStart, " -- ", item_r10.timeEnd, "");
} }
const _c1 = function (a1, a2, a3) { return { id: "server", itemsPerPage: a1, currentPage: a2, totalItems: a3 }; };
function MyhomeComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MyhomeComponent_div_15_div_1_Template, 10, 8, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "paginate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, ctx_r3.Dethi, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](4, _c1, ctx_r3.params.limit, ctx_r3.params.current_page, ctx_r3.total_records)));
} }
function MyhomeComponent_img_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 33);
} }
function MyhomeComponent_img_29_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyhomeComponent_img_29_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](26); return _r4.previous(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MyhomeComponent_img_30_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyhomeComponent_img_30_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](26); return _r4.next(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MyhomeComponent_img_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 36);
} }
class MyhomeComponent {
    constructor(myhomeService) {
        this.myhomeService = myhomeService;
        this.Dethi = [];
        this.params = {
            current_page: 1,
            limit: 5,
            sort: '_id',
            reverse: false,
            search: '',
            state: 'true',
            id: '',
            Class: [],
            authorities: 'SV',
            createBy: '',
        };
        this.start = 0;
        this.end = 10;
    }
    ngOnInit() {
        this.getAll();
        this.loadAll(this.params.current_page);
    }
    changeTime(value) {
        // console.log(value);
        this.params.state = value;
        this.params.current_page;
        this.loadAll(this.params.current_page);
    }
    getAll() {
        // dùng để phân trang
        const stor = JSON.parse(localStorage.getItem('listProfiles'));
        this.myhomeService.getAll(stor._id, this.params.state).subscribe((res) => {
            if (res.status == 200) {
                this.total_records = res.body.data.length;
                // console.log(this.total_records);
            }
        });
    }
    loadAll(page) {
        if (page < 0 || !page) {
            page = 1;
        }
        const stor = JSON.parse(localStorage.getItem('listProfiles'));
        if (stor) {
            this.params.authorities = stor.authorities;
            if (stor.authorities == 'SV') {
                // nếu sv thì lấy đề thi theo clss
                stor.infor.Class.map((item, index) => {
                    this.params.Class.push(item.name);
                });
            }
            if (stor.authorities == 'GV') {
                // nếu Gv lầy theo đề thi của người tạo
                this.params.createBy = stor._id;
            }
        }
        // check role
        // class
        this.params.current_page = page;
        this.myhomeService.loadAll(this.params).subscribe((res) => {
            // console.log(res);
            this.Dethi = res.body.data;
            // console.log(res.body.data);
            this.findEnd();
            this.findStart();
        }, (error) => {
            console.log(error);
        });
    }
    findStart() {
        this.start = (this.params.current_page - 1) * this.params.limit;
    }
    // Limit total records
    // set value this.end
    findEnd() {
        // limit = pageSize
        const result = this.params.current_page * this.params.limit;
        result > this.total_records
            ? (this.end = this.total_records)
            : (this.end = result);
    }
}
MyhomeComponent.ɵfac = function MyhomeComponent_Factory(t) { return new (t || MyhomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_myhome_service__WEBPACK_IMPORTED_MODULE_1__["MyhomeService"])); };
MyhomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MyhomeComponent, selectors: [["app-myhome"]], decls: 34, vars: 11, consts: [[1, "mod-myhome", "d-flex", "mt-3"], [1, "w-75", "px-3", "py-4"], [1, "d-flex", "justify-content-between"], ["name", "cuothi", "id", "", 1, "w-25", "form-control", "form-control-sm", 3, "ngModel", "ngModelChange"], ["state", ""], ["value", "true"], ["value", "false"], [1, "mod-myhome-content", "p-4"], ["class", "text-center", 4, "ngIf"], ["class", "row mt-4", 4, "ngIf"], [1, "mt-5"], [1, "text-right", "my-2", "filter-table"], [1, "text-lowercase"], ["id", "server", 3, "pageChange"], ["p", "paginationApi"], [1, "custom-pagination"], ["class", " ml-2 inactive", "src", "../../../assets/Images/icon-arrow-left.svg", 4, "ngIf"], ["class", " ml-2", "src", "../../../assets/Images/icon-arrow-left.svg", 3, "click", 4, "ngIf"], ["class", " mr-5", "src", "../../../assets/Images/icon-arrow-right.svg", 3, "click", 4, "ngIf"], ["class", " mr-5 inactive", "src", "../../../assets/Images/icon-arrow-right.svg", 4, "ngIf"], [1, "w-25", "mt-5", "float-right"], [1, "text-center"], [1, "row", "mt-4"], ["class", "col-md-6  my-2", 4, "ngFor", "ngForOf"], [1, "col-md-6", "my-2"], [1, "card", "border-none", 3, "routerLink"], ["class", "d-block w-100", "alt", "...", 3, "src", 4, "ngIf"], ["src", "../../../assets/Images/text1.png", "class", "d-block w-100 h-100", "alt", "...", 4, "ngIf"], [1, "card-body", "p-1"], [1, "card-title"], [1, "card-text"], ["alt", "...", 1, "d-block", "w-100", 3, "src"], ["src", "../../../assets/Images/text1.png", "alt", "...", 1, "d-block", "w-100", "h-100"], ["src", "../../../assets/Images/icon-arrow-left.svg", 1, "ml-2", "inactive"], ["src", "../../../assets/Images/icon-arrow-left.svg", 1, "ml-2", 3, "click"], ["src", "../../../assets/Images/icon-arrow-right.svg", 1, "mr-5", 3, "click"], ["src", "../../../assets/Images/icon-arrow-right.svg", 1, "mr-5", "inactive"]], template: function MyhomeComponent_Template(rf, ctx) { if (rf & 1) {
        const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Danh s\u00E1ch c\u00E1c cu\u1ED9c thi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "select", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MyhomeComponent_Template_select_ngModelChange_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6); return ctx.changeTime(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "S\u1EAFp di\u1EC5n ra");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u0110\u00E3 k\u1EBFt th\u00FAc");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, MyhomeComponent_h3_13_Template, 2, 0, "h3", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, MyhomeComponent_h3_14_Template, 2, 0, "h3", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, MyhomeComponent_div_15_Template, 3, 8, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "hr", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " K\u1EBFt qu\u1EA3 m\u1ED7i trang");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "c\u1EE7a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "pagination-template", 13, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function MyhomeComponent_Template_pagination_template_pageChange_25_listener($event) { return ctx.loadAll($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, MyhomeComponent_img_28_Template, 1, 0, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, MyhomeComponent_img_29_Template, 1, 0, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, MyhomeComponent_img_30_Template, 1, 0, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, MyhomeComponent_img_31_Template, 1, 0, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "app-calendars");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.params.state);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.params.state == "true");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.params.state == "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Dethi);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx.start + 1, " - ", ctx.end, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.total_records, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r4.isFirstPage());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_r4.isFirstPage());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_r4.isLastPage());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r4.isLastPage());
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], ngx_pagination__WEBPACK_IMPORTED_MODULE_4__["PaginationControlsDirective"], _date_calendars_calendars_component__WEBPACK_IMPORTED_MODULE_5__["CalendarsComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"]], pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_4__["PaginatePipe"]], styles: [".mod-myhome-calender[_ngcontent-%COMP%] {\n  margin-top: 100px;\n}\n.mod-myhome-content[_ngcontent-%COMP%] {\n  background: #f5f5f5;\n  border-radius: 5px;\n  border: 1px solid #e4e3e3;\n  color: #181818 !important;\n}\n.mod-myhome-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-weight: 700;\n  text-shadow: 1px 2px 5px #fff;\n}\n.mod-myhome-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  padding: 1px;\n  cursor: pointer;\n  background: transparent !important;\n  border: none;\n  transition: all 0.4s;\n}\n.mod-myhome-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover {\n  border: blanchedalmond;\n  color: #f32c2c;\n  border: 1px solid #c0bfbf;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxteWhvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxpQkFBQTtBQUFKO0FBRUU7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtBQUFKO0FBQ0k7RUFDRSxnQkFBQTtFQUNBLDZCQUFBO0FBQ047QUFDSTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0NBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7QUFDTjtBQUFNO0VBQ0Usc0JBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7QUFFUiIsImZpbGUiOiJteWhvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubW9kLW15aG9tZSB7XHJcbiAgJi1jYWxlbmRlcntcclxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xyXG4gIH1cclxuICAmLWNvbnRlbnQge1xyXG4gICAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyMjgsIDIyNywgMjI3KTtcclxuICAgIGNvbG9yOiByZ2IoMjQsIDI0LCAyNCkgIWltcG9ydGFudDtcclxuICAgIGgzIHtcclxuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgdGV4dC1zaGFkb3c6IDFweCAycHggNXB4ICNmZmY7XHJcbiAgICB9XHJcbiAgICAuY2FyZCB7XHJcbiAgICAgIHBhZGRpbmc6IDFweDtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjRzO1xyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBib3JkZXI6IGJsYW5jaGVkYWxtb25kO1xyXG4gICAgICAgIGNvbG9yOiByZ2IoMjQzLCA0NCwgNDQpO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxOTIsIDE5MSwgMTkxKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "8Dwm":
/*!****************************************************************!*\
  !*** ./src/app/entity/myhome/thanhtich/thanhtich.component.ts ***!
  \****************************************************************/
/*! exports provided: ThanhtichComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThanhtichComponent", function() { return ThanhtichComponent; });
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _thi_thi_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../thi/thi.service */ "Z0zt");
/* harmony import */ var _myhome_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../myhome.service */ "e8W+");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");










function ThanhtichComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "S\u1EDE GD & \u0110T KH\u00C1NH H\u00D2A ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, " TR\u01AF\u1EDCNG \u0110\u1EA0I H\u1ECCC NHA TRANG");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "h6", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "M\u00D4N: M\u1EA0NG M\u00C1Y T\u00CDNH");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Gi\u00E1o vi\u00EAn ra \u0111\u1EC1: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "M\u00E3 \u0111\u1EC1: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "H\u1ECD,T\u00EAn sinh vi\u00EAn: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "L\u1EDBp: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("\u0110\u1EC0 THI H\u1ECCC K\u00CC ", ctx_r0.kThi, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("N\u0103m h\u1ECDc ", ctx_r0.namHoc, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("th\u1EDDi gian l\u00E0m b\u00E0i ", ctx_r0.time, " ph\u00FAt");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.Data.nameCreateBy);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.Data.maDeThi);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.formDethi.value.performer);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.Data.Class);
} }
function ThanhtichComponent_div_5_ng_container_6_div_1_div_5_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ThanhtichComponent_div_5_ng_container_6_div_1_div_5_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", true);
} }
function ThanhtichComponent_div_5_ng_container_6_div_1_div_5_fa_icon_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "fa-icon", 38);
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx_r13.faCheck);
} }
function ThanhtichComponent_div_5_ng_container_6_div_1_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, ThanhtichComponent_div_5_ng_container_6_div_1_div_5_div_3_Template, 2, 0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, ThanhtichComponent_div_5_ng_container_6_div_1_div_5_div_4_Template, 2, 1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "label", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, ThanhtichComponent_div_5_ng_container_6_div_1_div_5_fa_icon_7_Template, 1, 1, "fa-icon", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ans_r9 = ctx.$implicit;
    const j_r10 = ctx.index;
    const i_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).index;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroupName", j_r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r8.formDethi.get("detailTest").controls[i_r5].get("length").value > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r8.formDethi.get("detailTest").controls[i_r5].get("length").value == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ans_r9.value.answer, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ans_r9.value.bio == true);
} }
function ThanhtichComponent_div_5_ng_container_6_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, ThanhtichComponent_div_5_ng_container_6_div_1_div_5_Template, 8, 5, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const content_r4 = ctx_r15.$implicit;
    const i_r5 = ctx_r15.index;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", content_r4.value.result == true ? "bg-correct" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("id", "q", i_r5, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("C\u00E2u ", i_r5 + 1, ": ", ctx_r6.formDethi.get("detailTest").controls[i_r5].get("question").value, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", content_r4.get("answers").controls);
} }
function ThanhtichComponent_div_5_ng_container_6_div_2_div_5_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ThanhtichComponent_div_5_ng_container_6_div_2_div_5_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", true);
} }
function ThanhtichComponent_div_5_ng_container_6_div_2_div_5_fa_icon_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "fa-icon", 41);
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx_r22.faCheck);
} }
function ThanhtichComponent_div_5_ng_container_6_div_2_div_5_fa_icon_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "fa-icon", 38);
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx_r23.faCheck);
} }
function ThanhtichComponent_div_5_ng_container_6_div_2_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, ThanhtichComponent_div_5_ng_container_6_div_2_div_5_div_3_Template, 2, 0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, ThanhtichComponent_div_5_ng_container_6_div_2_div_5_div_4_Template, 2, 1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "label", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, ThanhtichComponent_div_5_ng_container_6_div_2_div_5_fa_icon_7_Template, 1, 1, "fa-icon", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, ThanhtichComponent_div_5_ng_container_6_div_2_div_5_fa_icon_8_Template, 1, 1, "fa-icon", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ans_r18 = ctx.$implicit;
    const j_r19 = ctx.index;
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    const i_r5 = ctx_r24.index;
    const content_r4 = ctx_r24.$implicit;
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroupName", j_r19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r16.formDethi.get("detailTest").controls[i_r5].get("length").value > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r16.formDethi.get("detailTest").controls[i_r5].get("length").value == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", content_r4.get("answers")["controls"][j_r19].get("answer").value, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ans_r18.value.bio == true && ans_r18.value.answer == ctx_r16.answerTrue[i_r5].answers[j_r19].answer && ctx_r16.answerTrue[i_r5].answers[j_r19].bio == false);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ans_r18.value.answer == ctx_r16.answerTrue[i_r5].answers[j_r19].answer && ctx_r16.answerTrue[i_r5].answers[j_r19].bio == true);
} }
function ThanhtichComponent_div_5_ng_container_6_div_2_div_6_ng_container_3_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const correct_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](correct_r26.answer);
} }
function ThanhtichComponent_div_5_ng_container_6_div_2_div_6_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ThanhtichComponent_div_5_ng_container_6_div_2_div_6_ng_container_3_div_1_Template, 4, 1, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const correct_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", correct_r26.bio == true);
} }
function ThanhtichComponent_div_5_ng_container_6_div_2_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\u0110\u00E1p \u00E1n \u0111\u00FAng l\u00E0:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, ThanhtichComponent_div_5_ng_container_6_div_2_div_6_ng_container_3_Template, 2, 1, "ng-container", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).index;
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r17.answerTrue[i_r5].answers);
} }
function ThanhtichComponent_div_5_ng_container_6_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, ThanhtichComponent_div_5_ng_container_6_div_2_div_5_Template, 9, 6, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, ThanhtichComponent_div_5_ng_container_6_div_2_div_6_Template, 4, 1, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const content_r4 = ctx_r31.$implicit;
    const i_r5 = ctx_r31.index;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", content_r4.value.result == false ? "bg-fail" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("id", "q", i_r5, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("C\u00E2u ", i_r5 + 1, ": ", ctx_r7.formDethi.get("detailTest").controls[i_r5].get("question").value, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", content_r4.get("answers").controls);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r7.answerTrue);
} }
function ThanhtichComponent_div_5_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ThanhtichComponent_div_5_ng_container_6_div_1_Template, 6, 5, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ThanhtichComponent_div_5_ng_container_6_div_2_Template, 7, 6, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const content_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroupName", i_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", content_r4.value.result == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", content_r4.value.result == false);
} }
function ThanhtichComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "PH\u1EA6N TR\u1EAEC NGHI\u1EC6M");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "form", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, ThanhtichComponent_div_5_ng_container_6_Template, 3, 3, "ng-container", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r1.formDethi);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.detailTest.controls);
} }
function ThanhtichComponent_div_6_ng_container_5_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const i_r37 = ctx_r40.index;
    const item_r36 = ctx_r40.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("href", "#q", i_r37, "", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", item_r36.result == false ? "border-error" : "")("pageScrollHorizontal", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](i_r37 + 1);
} }
function ThanhtichComponent_div_6_ng_container_5_a_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const i_r37 = ctx_r41.index;
    const item_r36 = ctx_r41.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("href", "#q", i_r37, "", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", item_r36.result == true ? "border-success" : "")("pageScrollHorizontal", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](i_r37 + 1);
} }
function ThanhtichComponent_div_6_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ThanhtichComponent_div_6_ng_container_5_a_1_Template, 2, 4, "a", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ThanhtichComponent_div_6_ng_container_5_a_2_Template, 2, 4, "a", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r36 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r36.result == false);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r36.result == true);
} }
function ThanhtichComponent_div_6_p_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Kh\u00F4ng tham gia cu\u1ED9c thi");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ThanhtichComponent_div_6_span_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r34.Data.time, " ph\u00FAt");
} }
function ThanhtichComponent_div_6_span_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "1 ph\u00FAt");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ThanhtichComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h5", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "B\u1EA3ng k\u1EBFt qu\u1EA3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, ThanhtichComponent_div_6_ng_container_5_Template, 3, 2, "ng-container", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, ThanhtichComponent_div_6_p_7_Template, 2, 0, "p", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "p", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "T\u1EF7 l\u1EC7 \u0111\u00FAng: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "p", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "T\u1ED5ng \u0111i\u1EC3m: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "p", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Th\u1EDDi gian \u0111\u00E3 l\u00E0m: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, ThanhtichComponent_div_6_span_18_Template, 2, 1, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, ThanhtichComponent_div_6_span_19_Template, 2, 0, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ThanhtichComponent_div_6_Template_button_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r43); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r42.backone(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, " Quay l\u1EA1i ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r2.Dethi);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.Data.time == "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate3"]("", ctx_r2.Data.truNumberQuestion, "/", ctx_r2.Data.detailTest.length, " -> ", ctx_r2.Data.percent * 100, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r2.Data.sumPoint, " \u0111i\u1EC3m");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.Data.time != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.Data.time == 0);
} }
class ThanhtichComponent {
    constructor(route, thiService, fb, myhomeService, ngmodal) {
        this.route = route;
        this.thiService = thiService;
        this.fb = fb;
        this.myhomeService = myhomeService;
        this.ngmodal = ngmodal;
        this.faCheck = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faCheck"];
        this.truethu = true;
        this.ischeckChooseAnser = false; // kiểm tran câu trả lời trống.
        this.anserUserEmpety = [];
        this.params = {
            current_page: 1,
            limit: 2,
        };
        this.start = 0;
        this.end = 10;
        this.bailam = {
            Class: '',
            performer: '',
            idDeThi: '',
            kyThi: '',
            timeStart: '',
            timeEnd: '',
            maDeThi: '',
            createBy: '',
            idPerformer: '',
            status: Boolean,
            content: '',
            avatar: '',
        };
        this.formDethi = this.fb.group({
            performer: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            Class: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            idDeThi: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            kyThi: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            idBailam: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            detailTest: this.fb.array([]),
            maDeThi: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            status: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false),
        });
    }
    ngOnInit() {
        // console.log(this.formDethi.value);
        this.loadAll();
    }
    get performer() {
        return this.formDethi.get('performer');
    }
    get Class() {
        return this.formDethi.get('Class');
    }
    get idDeThi() {
        return this.formDethi.get('idDeThi');
    }
    get maDeThi() {
        return this.formDethi.get('maDeThi');
    }
    get kyThi() {
        return this.formDethi.get('kyThi');
    }
    get idBailam() {
        return this.formDethi.get('idBailam');
    }
    get answers() {
        return this.formDethi.get('detailTest').get('answers'); // get list answer
    }
    get detailTest() {
        return this.formDethi.get('detailTest'); // get list answer
    }
    getProFiles(id) {
        this.myhomeService.getById(id).subscribe((res) => {
            // console.log(res.body.data);
            this.proFile = res.body.data;
            console.log(this.proFile);
        }, (error) => {
            console.log(error);
        });
    }
    getDateToForm(data, goc) {
        this.formDethi.get('Class').setValue(data.Class);
        this.formDethi.get('performer').setValue(data.performer);
        this.formDethi.get('idDeThi').setValue(data.idDeThi);
        this.formDethi.get('maDeThi').setValue(data.maDeThi);
        this.formDethi.get('kyThi').setValue(data.kyThi);
        this.formDethi.get('idBailam').setValue(goc._id);
        const control = this.formDethi.controls['detailTest'];
        data.detailTest.map((item, index) => {
            let fb = this.fb.group({
                question: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](item.question),
                answers: this.fb.array([]),
                answerUser: this.fb.array([]),
                length: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
                result: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](item.result),
            });
            control.push(fb);
            const fg = control.controls[index * 1].get('answers');
            // create formArray container one formGroup
            item.answers.map((ans, index) => {
                let answer = this.fb.group({
                    answer: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](ans.answer, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
                    bio: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](ans.bio),
                });
                fg.push(answer);
            });
            const ans = control.controls[index].get('answerUser');
            item.answerUser.map((ansU, index) => {
                let answerUser = this.fb.group({
                    answer: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](ansU.answer),
                });
                ans.push(answerUser);
            });
            // control.controls[index].get('length').setValue(ind);
        });
        goc.detailTest.map((item, index) => {
            var ind = 0;
            item.answers.map((ans, index) => {
                if (ans.bio == true) {
                    // phân biệt radio hay checkbox
                    ind += 1;
                }
            });
            control.controls[index].get('length').setValue(ind);
        });
        console.log(this.formDethi.value);
    }
    setTimeWork(data) {
        const dateE = data.timeEnd.split(',');
        const dateS = data.timeStart.split(',');
        const ngayStart = dateS[0];
        const timeStart = dateS[1];
        const ngayEnd = dateE[0];
        const timeEnd = dateE[1];
        // console.log(ngayEnd + ' ' + timeEnd);
        const date = new Date();
        date.setFullYear(ngayEnd.split('-')[2], ngayEnd.split('-')[1] - 1, ngayEnd.split('-')[0]);
        date.setHours(timeEnd.split(':')[0], timeEnd.split(':')[1], 0);
        const datestart = new Date();
        datestart.setFullYear(ngayStart.split('-')[2], ngayStart.split('-')[1] - 1, ngayStart.split('-')[0]);
        datestart.setHours(timeStart.split(':')[0], timeStart.split(':')[1], 0);
        this.time = (date.getTime() - datestart.getTime()) / 60000;
    }
    loadAll() {
        this.route.queryParamMap.subscribe((data) => {
            data.get('dethi');
            let id = this.route.snapshot.paramMap.get('id');
            let profile = JSON.parse(localStorage.getItem('listProfiles'));
            const data1 = {
                id: data.get('dethi'),
                idPerformer: id,
                createBy: `${profile.infor.firstName} ${profile.infor.lastName}`,
                role: `${profile.authorities}`,
            };
            // console.log(data1);
            // lấy đề thi theo người làm và ma id đề thi
            this.myhomeService.getDeThiDetailByIdandPerformer(data1).subscribe((res) => {
                if (res.body.bailam) {
                    // người dùng đã từng làm bài thi show ra bai làm
                    this.Data = res.body.data;
                    this.setTimeWork(res.body.data);
                    let text = this.Data.kyThi.split(' ');
                    this.namHoc = text[2];
                    this.kThi = text[6];
                    this.Dethi = res.body.data.detailTest;
                    this.answerTrue = res.body.data1.detailTest;
                    this.getDateToForm(res.body.data, res.body.data1);
                }
                else {
                    // nếu cguwa có bài thi thì phải tạo mới rồi cho điểm bằng 0;
                    this.getProFiles(id); // lấy thông tin người dùng
                    this.myhomeService.getDeThiDetailById(data.get('dethi')).subscribe((dethi) => {
                        // lấy ra để thi nếu sinh viên đó chưa từng làm bài
                        let firstName = this.proFile.infor.firstName;
                        let lastName = this.proFile.infor.lastName;
                        let template = '_1_ _2_';
                        var fullName = template
                            .replace('_1_', firstName)
                            .replace('_2_', lastName);
                        const Dethi = dethi.body.data;
                        // console.log(Dethi);
                        this.bailam.performer = fullName;
                        this.bailam.Class = Dethi.Class[0].name;
                        this.bailam.idDeThi = Dethi._id;
                        this.bailam.kyThi = Dethi.kyThi;
                        this.bailam.timeStart = Dethi.timeStart;
                        this.bailam.timeEnd = Dethi.timeEnd;
                        this.bailam.maDeThi = Dethi.id;
                        this.bailam.detailTest = Dethi.detailTest;
                        this.bailam.idPerformer = this.proFile._id;
                        this.bailam.status = true;
                        this.bailam.nameCreateBy = Dethi.createBy.name;
                        this.bailam.createBy = Dethi.createBy.id;
                        this.bailam.content = Dethi.content;
                        this.bailam.avatar = Dethi.avatar;
                        // console.log(this.bailam);
                        // tạo bài làm mới cho sinh viên
                        this.myhomeService.createBaiLam(this.bailam).subscribe((res) => {
                            this.myhomeService.getBailamById(res.body.data).subscribe((bl) => {
                                // hiển thị dữ liệu ra form
                                this.Data = bl.body.data;
                                this.setTimeWork(bl.body.data);
                                let text = this.Data.kyThi.split(' ');
                                this.namHoc = text[2];
                                this.kThi = text[6];
                                this.Dethi = bl.body.data.detailTest;
                                this.answerTrue = bl.body.data1.detailTest;
                                this.getDateToForm(bl.body.data, bl.body.data1);
                            }, (error) => {
                                console.log(error);
                            });
                        }, (error) => {
                            console.log(error);
                        });
                    }, (error) => {
                        console.log(error);
                    });
                }
            }, (error) => {
                console.log(error);
            });
        });
        // this.myhomeService.getDeThiDetailByIdandPerformer()
    }
    backone() {
        window.history.back();
    }
}
ThanhtichComponent.ɵfac = function ThanhtichComponent_Factory(t) { return new (t || ThanhtichComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_thi_thi_service__WEBPACK_IMPORTED_MODULE_4__["ThiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_myhome_service__WEBPACK_IMPORTED_MODULE_5__["MyhomeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"])); };
ThanhtichComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ThanhtichComponent, selectors: [["app-thanhtich"]], decls: 7, vars: 3, consts: [[1, "mod-thi", "mt-4", "p-5"], ["class", "container-fluid mod-thi-title p-3", 4, "ngIf"], [1, "container-fluid", "mod-thi-content", "p-3"], [1, "d-flex"], ["class", "w-75", 4, "ngIf"], ["class", "ml-4 w-25 mod-thi-content-ques1", 4, "ngIf"], [1, "container-fluid", "mod-thi-title", "p-3"], [1, "d-flex", "justify-content-between"], [1, "text-center"], [1, "pb-1", "mb-1"], [1, "w-100", "d-flex", "justify-content-between"], [1, "mod-thi-name"], [1, "mod-thi-dethi"], [1, "mod-thi-name", "d-flex"], [1, "w-50"], [1, "w-75"], [1, "mod-thi-content-ques"], [3, "formGroup"], ["formArrayName", "detailTest", 1, "form-group"], [3, "formGroupName", 4, "ngFor", "ngForOf"], [3, "formGroupName"], ["class", "p-3   my-2", 3, "ngClass", 4, "ngIf"], [1, "p-3", "my-2", 3, "ngClass"], ["for", "ques", 2, "word-wrap", "break-word", 3, "id"], [1, "input-group", "d-flex", "mb-2"], ["formArrayName", "answers", 1, "w-100"], ["class", "d-flex mb-1 ml-3", 3, "formGroupName", 4, "ngFor", "ngForOf"], [1, "d-flex", "mb-1", "ml-3", 3, "formGroupName"], [1, "input-group", "w-100"], [1, "input-group", "d-flex"], ["class", "align-items-center align-self-center input-group-prepend btn btn-xs  rounded-sm mr-1 p-0 btn-outline-secondary f-flex justify-content-center align-items-center", 4, "ngIf"], ["style", "height: 35px;", "class", "align-items-center align-self-center input-group-prepend btn btn-xs  rounded-sm mr-1 p-0 btn-outline-secondary f-flex justify-content-center align-items-center", 4, "ngIf"], [1, "w-75", 2, "word-wrap", "break-word"], ["class", "text-success mr-1", 3, "icon", 4, "ngIf"], [1, "align-items-center", "align-self-center", "input-group-prepend", "btn", "btn-xs", "rounded-sm", "mr-1", "p-0", "btn-outline-secondary", "f-flex", "justify-content-center", "align-items-center"], ["type", "checkbox", "disabled", "", "formControlName", "bio", 1, "input-group-text", "m-2"], [1, "align-items-center", "align-self-center", "input-group-prepend", "btn", "btn-xs", "rounded-sm", "mr-1", "p-0", "btn-outline-secondary", "f-flex", "justify-content-center", "align-items-center", 2, "height", "35px"], ["type", "radio", "disabled", "", "formControlName", "bio", 1, "input-group-text", "m-2", 3, "value"], [1, "text-success", "mr-1", 3, "icon"], [4, "ngIf"], ["class", "text-danger mr-1", 3, "icon", 4, "ngIf"], [1, "text-danger", "mr-1", 3, "icon"], [1, "m-0"], [4, "ngFor", "ngForOf"], ["class", "ml-3", 4, "ngIf"], [1, "ml-3"], [1, "text-success"], [1, "ml-4", "w-25", "mod-thi-content-ques1"], [1, "d-flex", "justify-content-center", "w-75", "mx-auto", "flex-wrap"], [1, "thanhtich", "my-3", "mx-auto"], ["class", "m-0", "style", "color: red; font-weight: 500; font-size: 18px;", 4, "ngIf"], [1, "w-100", "ques1-btn", "d-flex", "justify-content-center"], [1, "btn", "btn-sm", "mx-auto", "btn-danger", "w-auto", 3, "click"], ["pageScroll", "", 3, "ngClass", "href", "pageScrollHorizontal", 4, "ngIf"], ["pageScroll", "", 3, "ngClass", "href", "pageScrollHorizontal"], [1, "m-0", 2, "color", "red", "font-weight", "500", "font-size", "18px"]], template: function ThanhtichComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ThanhtichComponent_div_1_Template, 37, 7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, ThanhtichComponent_div_5_Template, 7, 2, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, ThanhtichComponent_div_6_Template, 23, 8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.Data);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.formDethi.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.Data);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArrayName"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupName"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FaIconComponent"]], styles: [".thanhtich[_ngcontent-%COMP%] {\n  width: 70%;\n  height: auto;\n}\n.thanhtich[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #504f4f;\n  font-weight: 500;\n}\n.thanhtich[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 400;\n  color: #f84242;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcdGhhbmh0aWNoLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBQTtFQUNBLFlBQUE7QUFDRjtBQUFFO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQUVKO0FBREk7RUFDRSxnQkFBQTtFQUNBLGNBQUE7QUFHTiIsImZpbGUiOiJ0aGFuaHRpY2guY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGhhbmh0aWNoe1xyXG4gIHdpZHRoOiA3MCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIHB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBjb2xvcjogcmdiKDgwLCA3OSwgNzkpO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIHNwYW57XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgIGNvbG9yOiByZ2IoMjQ4LCA2NiwgNjYpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "9VrN":
/*!**********************************************************!*\
  !*** ./src/app/entity/myhome/detail/detail.component.ts ***!
  \**********************************************************/
/*! exports provided: DetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailComponent", function() { return DetailComponent; });
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var src_app_share_inputpassword_inputpassword_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/share/inputpassword/inputpassword.component */ "oPBO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _myhome_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../myhome.service */ "e8W+");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");








function DetailComponent_div_0_img_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 20);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("src", "http://localhost:3000/static/image/", ctx_r1.Dethi.avatar, "", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function DetailComponent_div_0_img_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 21);
} }
function DetailComponent_div_0_td_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", ctx_r3.timeStart.split(":")[0], "h", ctx_r3.timeStart.split(":")[1], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r3.ngayStart);
} }
function DetailComponent_div_0_td_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", ctx_r4.timeEnd.split(":")[0], "h", ctx_r4.timeEnd.split(":")[1], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r4.ngayEnd);
} }
function DetailComponent_div_0_tr_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Cu\u1ED9c thi s\u1EBD b\u1EAFt \u0111\u1EA7u trong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function DetailComponent_div_0_tr_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Cu\u1ED9c thi \u0111ang di\u1EC5n ra ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function DetailComponent_div_0_tr_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Cu\u1ED9c thi \u0111\u00E3 k\u1EBFt th\u00FAc ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function DetailComponent_div_0_tbody_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, " NG\u00C0Y");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, " GI\u1EDC ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, " PH\u00DAT ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, " GI\u00C2Y ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r8.ngay);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r8.gio);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r8.phut);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r8.giay);
} }
const _c0 = function () { return ["./sinhvien"]; };
const _c1 = function () { return ["./cauhoi"]; };
const _c2 = function () { return ["./thongtin"]; };
function DetailComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Chi ti\u1EBFt \u0111\u1EC1 thi");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, DetailComponent_div_0_img_4_Template, 1, 1, "img", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, DetailComponent_div_0_img_5_Template, 1, 0, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DetailComponent_div_0_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r9.createBaiLam(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "THAM GIA NGAY ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "fa-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "table", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "B\u1EAFt \u0111\u1EA7u");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, DetailComponent_div_0_td_22_Template, 6, 3, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "table", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "K\u1EBFt th\u00FAc");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](29, DetailComponent_div_0_td_29_Template, 6, 3, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "table", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](32, DetailComponent_div_0_tr_32_Template, 3, 0, "tr", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](33, DetailComponent_div_0_tr_33_Template, 3, 0, "tr", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](34, DetailComponent_div_0_tr_34_Template, 3, 0, "tr", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](35, DetailComponent_div_0_tbody_35_Template, 22, 4, "tbody", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](36, "hr", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "Sinh vi\u00EAn tham gia ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "S\u1ED1 l\u01B0\u1EE3ng c\u00E2u h\u1ECFi ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](54, "Th\u00F4ng tin \u0111\u1EC1 thi ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](55, "hr", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](57, "router-outlet");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.Dethi.avatar != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.Dethi.avatar == "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.Dethi.content);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.Dethi.note);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx_r0.faPlay);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.timeStart);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.timeEnd);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.Tstart > ctx_r0.Tnow);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.Tstart < ctx_r0.Tnow && ctx_r0.Tend > ctx_r0.Tnow);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.Tstart < ctx_r0.Tnow && ctx_r0.Tend < ctx_r0.Tnow);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.Tstart > ctx_r0.Tnow);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](16, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.lengSv);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](17, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.lengQuesion);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](18, _c2));
} }
class DetailComponent {
    constructor(route, myhomeService, router, modal) {
        this.route = route;
        this.myhomeService = myhomeService;
        this.router = router;
        this.modal = modal;
        this.faPlay = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faPlay"];
        this.bailam = {
            Class: '',
            performer: '',
            idDeThi: '',
            kyThi: '',
            timeStart: '',
            timeEnd: '',
            maDeThi: '',
            idPerformer: '',
            content: '',
            status: Boolean,
            avatar: '',
            createBy: '',
            nameCreateBy: '',
        };
    }
    ngOnInit() {
        this.loadAll();
        this.TimeAuto();
    }
    loadAll() {
        let id = this.route.snapshot.paramMap.get('id');
        this.myhomeService.getDeThiDetailById(id).subscribe((res) => {
            // console.log(res);
            this.Dethi = res.body.data;
            this.lengSv = res.body.sinhvien.length;
            this.lengQuesion = res.body.data.detailTest.length;
        }, (error) => {
            console.log(error);
        });
    }
    TimeAuto() {
        setInterval(() => {
            this.settime();
            const dateS = this.Dethi.timeStart.split(',');
            const dateE = this.Dethi.timeEnd.split(',');
            this.ngayStart = dateS[0];
            this.ngayEnd = dateE[0];
            this.timeStart = dateS[1];
            this.timeEnd = dateE[1];
            const date = new Date();
            date.setFullYear(dateS[0].split('-')[2], dateS[0].split('-')[1] - 1, dateS[0].split('-')[0]);
            date.setHours(dateS[1].split(':')[0], dateS[1].split(':')[1], 0);
            const dateN = new Date();
            const second = date.getTime() - dateN.getTime();
            if ((date.getTime() - dateN.getTime()) / 60000 > 1440) {
                this.ngay = Math.floor((date.getTime() - dateN.getTime()) / 86400000);
                if ((date.getTime() - dateN.getTime()) % 86400000 != 0) {
                    let s = this.ngay * 86400000;
                    this.gio = Math.floor((second - s) / 3600000);
                    if ((date.getTime() - dateN.getTime() - this.ngay * 86400000) %
                        3600000 !=
                        0) {
                        let s = this.ngay * 86400000 + this.gio * 3600000;
                        this.phut = Math.floor((second - s) / 60000);
                        if ((date.getTime() -
                            dateN.getTime() -
                            (this.ngay * 86400000 + this.gio * 3600000)) %
                            60000 !=
                            0) {
                            let s = this.ngay * 86400000 + this.gio * 3600000 + this.phut * 60000;
                            this.giay = Math.floor((second - s) / 1000);
                        }
                    }
                }
            }
            else if ((date.getTime() - dateN.getTime()) / 60000 >= 60 &&
                (date.getTime() - dateN.getTime()) / 60000 <= 1440) {
                this.ngay = 0;
                // gio
                this.gio = Math.floor(second / 3600000);
                // có dư hay không nếu có thì tính phút
                if (second % 3600000 != 0) {
                    let s = this.gio * 3600000;
                    this.phut = Math.floor((second - s) / 60000);
                    if ((second - s) % 60000 != 0) {
                        let s = this.gio * 3600000 + this.phut * 60000;
                        this.giay = Math.floor((second - s) / 1000);
                    }
                }
            }
            else {
                this.ngay = 0;
                this.gio = 0;
                this.phut = Math.floor((date.getTime() - dateN.getTime()) / 60000);
                if ((date.getTime() - dateN.getTime()) % 60000 != 0) {
                    this.giay = Math.floor((date.getTime() - dateN.getTime() - this.phut * 60000) / 1000);
                }
            }
        }, 1000);
    }
    settime() {
        const dateS = this.Dethi.timeStart.split(',');
        const ngayStart = dateS[0];
        const timeStart = dateS[1];
        const date = new Date();
        const dateE = this.Dethi.timeEnd.split(',');
        const ngayEnd = dateE[0];
        const timeEnd = dateE[1];
        const datend = new Date();
        date.setFullYear(ngayStart.split('-')[2], ngayStart.split('-')[1] - 1, ngayStart.split('-')[0]);
        date.setHours(timeStart.split(':')[0], timeStart.split(':')[1], 0);
        datend.setFullYear(ngayEnd.split('-')[2], ngayEnd.split('-')[1] - 1, ngayEnd.split('-')[0]);
        datend.setHours(timeEnd.split(':')[0], timeEnd.split(':')[1], 0);
        this.Tend = datend.getTime();
        this.Tstart = date.getTime();
        const dateN = new Date();
        this.Tnow = dateN.getTime();
    }
    // [routerLink]="['/thi',Dethi._id]"
    createBaiLam() {
        this.settime();
        let profile = JSON.parse(localStorage.getItem('listProfiles'));
        const data = {
            id: this.Dethi._id,
            idPerformer: profile._id,
        };
        this.myhomeService.getDeThiDetailByIdandPerformer(data).subscribe((res) => {
            if (res.body.data.status == true) {
                alert('Bạn đã hoàn thành đề thi!');
            }
            else {
                if (this.Tend < this.Tnow) {
                    alert('Cuộc thi đã kết thúc.');
                    return;
                }
                else if (this.Tstart > this.Tnow) {
                    alert('Cuộc thi chưa bắt đầu.');
                    return;
                }
                else {
                    const md = this.modal.open(src_app_share_inputpassword_inputpassword_component__WEBPACK_IMPORTED_MODULE_1__["InputpasswordComponent"], {
                        size: 'md',
                        centered: true,
                    });
                    md.componentInstance.title = 'Bắt đầu cuộc thi';
                    md.componentInstance.text = 'Mật khẩu:';
                    md.componentInstance.password.subscribe((res) => {
                        if (res === this.Dethi.password) {
                            let proFiles = JSON.parse(localStorage.getItem('listProfiles'));
                            let firstName = proFiles.infor.firstName;
                            let lastName = proFiles.infor.lastName;
                            let template = '_1_ _2_';
                            var fullName = template
                                .replace('_1_', firstName)
                                .replace('_2_', lastName);
                            if (fullName == 'Không có') {
                                alert('Bạn cần cập nhật thông tin cá nhân đầy đủ cho tài khoản này.');
                                this.router.navigate(['/thanhvien/thaydoi', proFiles._id]);
                            }
                            else {
                                // console.log(this.Dethi);
                                this.bailam.performer = fullName;
                                this.bailam.Class = this.Dethi.Class[0].name;
                                this.bailam.idDeThi = this.Dethi._id;
                                this.bailam.kyThi = this.Dethi.kyThi;
                                this.bailam.timeStart = this.Dethi.timeStart;
                                this.bailam.timeEnd = this.Dethi.timeEnd;
                                this.bailam.maDeThi = this.Dethi.id;
                                this.bailam.avatar = this.Dethi.avatar;
                                this.bailam.content = this.Dethi.content;
                                this.bailam.detailTest = this.Dethi.detailTest;
                                this.bailam.idPerformer = proFiles._id;
                                this.bailam.createBy = this.Dethi.createBy.id;
                                this.bailam.status = false;
                                this.bailam.nameCreateBy = this.Dethi.createBy.name;
                                // console.log(this.bailam);
                                let profile = JSON.parse(localStorage.getItem('listProfiles'));
                                this.bailam.role = profile.authorities;
                                this.myhomeService.createBaiLam(this.bailam).subscribe((res) => {
                                    // console.log(res);
                                    this.router.navigate(['/lambai/thi', res.body.data]);
                                }, (error) => {
                                    console.log(error);
                                });
                            }
                        }
                        else {
                            alert('Mật khẩu đề thi không hợp lệ !');
                        }
                    });
                }
            }
        }, (error) => {
            console.log(error);
        });
    }
}
DetailComponent.ɵfac = function DetailComponent_Factory(t) { return new (t || DetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_myhome_service__WEBPACK_IMPORTED_MODULE_4__["MyhomeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"])); };
DetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: DetailComponent, selectors: [["app-detail"]], decls: 1, vars: 1, consts: [["class", "myhome-detail p-3", 4, "ngIf"], [1, "myhome-detail", "p-3"], ["class", "d-block w-100", "alt", "...", 3, "src", 4, "ngIf"], ["src", "../../../assets/Images/text1.png", "class", "d-block w-100 h-100", "alt", "...", 4, "ngIf"], [1, "row", "mb-3"], [1, "col-md-4", "myhome-detail-title"], [1, "col-md-8", "d-flex", "align-items-center", "myhome-detail-notification"], [1, "mr-3", 3, "click"], [3, "icon"], [1, "text-center", "w-25"], [4, "ngIf"], [1, "text-center", "w-25", "mx-3"], [1, "text-center", "w-75", "time"], [1, "m-0", "p-0"], [1, "myhome-detail-content"], [1, "row", "text-center"], [1, "col-md-4"], ["routerLinkActive", "nav-acvited", 1, "myhome-detail-content-one", 3, "routerLink"], [2, "font-size", "30px", "color", "rgb(231, 23, 23)"], [1, "mt-2"], ["alt", "...", 1, "d-block", "w-100", 3, "src"], ["src", "../../../assets/Images/text1.png", "alt", "...", 1, "d-block", "w-100", "h-100"], ["colspan", "4"], [1, "clo-3"]], template: function DetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, DetailComponent_div_0_Template, 58, 19, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.Dethi);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FaIconComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: [".myhome-detail[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-weight: 800;\n  color: #db2e2e;\n}\n.myhome-detail-notification[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 0.5rem;\n  height: 110px;\n  font-weight: 800;\n  border: none;\n  border-radius: 3px;\n  width: 200px;\n  color: #fff;\n  transition: all 0.4s;\n  background: #f11818;\n}\n.myhome-detail-notification[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  opacity: 0.9;\n}\n.myhome-detail-notification[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  text-align: center;\n  border-right: 1px solid #6b6a6a;\n}\n.myhome-detail-notification[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  font-weight: 800;\n  font-size: 25px;\n  color: #df2727;\n}\n.myhome-detail-notification[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  border: 1px solid #807e7e;\n}\n.myhome-detail-notification[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #807e7e;\n}\n.myhome-detail-notification[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 800;\n}\n.myhome-detail-notification[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%] {\n  background: transparent !important;\n}\n.myhome-detail-notification[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n}\n.myhome-detail-notification[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 17px;\n  font-weight: 400;\n}\n.myhome-detail-content-one[_ngcontent-%COMP%] {\n  cursor: pointer;\n  padding: 0.7rem 0;\n  transition: all 0.4s;\n}\n.myhome-detail-content-one[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #494949;\n  font-weight: 700;\n  font-size: 23px;\n}\n.myhome-detail-content-one[_ngcontent-%COMP%]:hover {\n  color: #db2828;\n  border-bottom: 2px solid #e42121;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcZGV0YWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFBSjtBQUdFO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtBQURKO0FBRUk7RUFDRSxZQUFBO0FBQU47QUFNTTtFQUNFLGtCQUFBO0VBQ0EsK0JBQUE7QUFKUjtBQUtRO0VBQ0UsZ0JBQUE7RUFDQyxlQUFBO0VBQ0EsY0FBQTtBQUhYO0FBU0U7RUFDRSx5QkFBQTtBQVBKO0FBUUk7RUFDRSxnQ0FBQTtBQU5OO0FBUVE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUFOVjtBQVVJO0VBQ0Usa0NBQUE7QUFSTjtBQVVRO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FBUlY7QUFTVTtFQUNFLGVBQUE7RUFDRixnQkFBQTtBQVBWO0FBZ0JFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUFkSjtBQWVJO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQWJOO0FBZUk7RUFDRSxjQUFBO0VBQ0EsZ0NBQUE7QUFiTiIsImZpbGUiOiJkZXRhaWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubXlob21lLWRldGFpbHtcclxuICBoMntcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgY29sb3I6IHJnYigyMTksIDQ2LCA0Nik7XHJcbiAgfVxyXG4gICYtbm90aWZpY2F0aW9ue1xyXG4gIGJ1dHRvbntcclxuICAgIHBhZGRpbmc6IDAuNXJlbTtcclxuICAgIGhlaWdodDogMTEwcHg7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC40cztcclxuICAgIGJhY2tncm91bmQ6IHJnYigyNDEsIDI0LCAyNCk7XHJcbiAgICAmOmhvdmVye1xyXG4gICAgICBvcGFjaXR5OiAwLjk7XHJcbiAgICB9XHJcbiAgfVxyXG4udGltZXtcclxuICB0Ym9keXtcclxuICAgIHRye1xyXG4gICAgICB0ZHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmdiKDEwNywgMTA2LCAxMDYpO1xyXG4gICAgICAgIGg2e1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgICAgICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICAgICAgICAgY29sb3I6IHJnYigyMjMsIDM5LCAzOSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiAgdGFibGV7XHJcbiAgICBib3JkZXI6MXB4IHNvbGlkIHJnYigxMjgsIDEyNiwgMTI2KTtcclxuICAgIHRoZWFke1xyXG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDEyOCwgMTI2LCAxMjYpO1xyXG4gICAgICB0cntcclxuICAgICAgICB0aHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0Ym9keXtcclxuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgICAgdGR7XHJcbiAgICAgICAgcHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICBzcGFue1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4mLWNvbnRlbnRcclxue1xyXG4gICYtb25le1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgcGFkZGluZzogMC43cmVtIDA7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC40cztcclxuICAgIGg0e1xyXG4gICAgICBjb2xvcjogcmdiKDczLCA3MywgNzMpO1xyXG4gICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICBmb250LXNpemU6IDIzcHg7XHJcbiAgICB9XHJcbiAgICAmOmhvdmVye1xyXG4gICAgICBjb2xvcjogcmdiKDIxOSwgNDAsIDQwKTtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHJnYigyMjgsIDMzLCAzMyk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "9gC2":
/*!***************************************************************************!*\
  !*** ./src/app/entity/myhome/detail/myhomeinfor/myhomeinfor.component.ts ***!
  \***************************************************************************/
/*! exports provided: MyhomeinforComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyhomeinforComponent", function() { return MyhomeinforComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _myhome_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../myhome.service */ "e8W+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




function MyhomeinforComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Th\u00F4ng tin \u0111\u1EC1 thi");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "H\u1ECDc ph\u1EA7n: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "M\u1EA0NG M\u00C1Y T\u00CDNH");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "K\u1EF3 thi: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Gi\u00E1o vi\u00EAn ra \u0111\u1EC1: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Gi\u00E1o vi\u00EAn ph\u00EA duy\u1EC7t: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Th\u1EDDi gian b\u1EAFt \u0111\u1EA7u: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Th\u1EDDi gian k\u1EBFt th\u00FAc: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "M\u1EADt kh\u1EA9u \u0111\u1EC1 thi: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Ghi ch\u00FA: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.Info.kyThi);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.Info.createBy.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.Info.confirmationBy);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.Info.timeStart);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.Info.timeEnd);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.Info.password);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.Info.note);
} }
class MyhomeinforComponent {
    constructor(route, myhomeService) {
        this.route = route;
        this.myhomeService = myhomeService;
    }
    ngOnInit() {
        this.loadAll();
    }
    loadAll() {
        this.route.parent.url.subscribe((urlPath) => {
            const url = urlPath[urlPath.length - 1].path;
            this.myhomeService.getDeThiDetailById(url).subscribe((res) => {
                // console.log(res);
                this.Info = res.body.data;
            }, (error) => {
                console.log(error);
            });
        });
    }
}
MyhomeinforComponent.ɵfac = function MyhomeinforComponent_Factory(t) { return new (t || MyhomeinforComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_myhome_service__WEBPACK_IMPORTED_MODULE_2__["MyhomeService"])); };
MyhomeinforComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MyhomeinforComponent, selectors: [["app-myhomeinfor"]], decls: 1, vars: 1, consts: [["class", "p-3", 4, "ngIf"], [1, "p-3"], [2, "font-weight", "700", "font-size", "23px", "color", "rgb(85, 85, 85)"], [1, "myhome-infor", "mt-2"]], template: function MyhomeinforComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MyhomeinforComponent_div_0_Template, 36, 7, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Info);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: [".myhome-infor[_ngcontent-%COMP%] {\n  color: #555555;\n}\n.myhome-infor[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 22px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXG15aG9tZWluZm9yLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtBQUNGO0FBQ0k7RUFDRSxnQkFBQTtFQUNBLGVBQUE7QUFDTiIsImZpbGUiOiJteWhvbWVpbmZvci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5teWhvbWUtaW5mb3J7XHJcbiAgY29sb3I6IHJnYig4NSwgODUsIDg1KTtcclxuICBoNXtcclxuICAgIHNwYW57XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "DDxi":
/*!*********************************************************************************!*\
  !*** ./src/app/entity/myhome/detail/myhomesinhvien/myhomesinhvien.component.ts ***!
  \*********************************************************************************/
/*! exports provided: MyhomesinhvienComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyhomesinhvienComponent", function() { return MyhomesinhvienComponent; });
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _myhome_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../myhome.service */ "e8W+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-pagination */ "oOf3");







function MyhomesinhvienComponent_table_3_tr_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 1, "general.Trong"));
} }
function MyhomesinhvienComponent_table_3_tr_31_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "td", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "fa-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MyhomesinhvienComponent_table_3_tr_31_Template_fa_icon_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const item_r3 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r5.SeeArchiverment(item_r3._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r3.infor.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", item_r3.infor.firstName, " ", item_r3.infor.lastName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r3.infor.birthDay);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r3.infor.gender);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r3.infor.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r3.infor.Class[0].name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx_r2.faTrophy);
} }
const _c0 = function (a1, a2, a3) { return { id: "server", itemsPerPage: a1, currentPage: a2, totalItems: a3 }; };
function MyhomesinhvienComponent_table_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "table", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "tr", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "th", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " H\u1ECD v\u00E0 t\u00EAn ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Ng\u00E0y sinh");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Gi\u1EDBi t\u00EDnh");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "L\u1EDBp");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "th", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "K\u1EBFt qu\u1EA3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, MyhomesinhvienComponent_table_3_tr_29_Template, 4, 3, "tr", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, MyhomesinhvienComponent_table_3_tr_31_Template, 15, 8, "tr", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](32, "paginate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.sinhviens.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](32, 2, ctx_r0.sinhviens, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](5, _c0, ctx_r0.params.limit, ctx_r0.params.current_page, ctx_r0.total_records)));
} }
class MyhomesinhvienComponent {
    constructor(route, myhomeService, router) {
        this.route = route;
        this.myhomeService = myhomeService;
        this.router = router;
        this.faTrophy = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faTrophy"];
        this.params = {
            current_page: 1,
            limit: 10,
            sort: '_id',
            reverse: false,
            search: '',
            Class: '',
        };
        this.start = 0;
        this.end = 10;
    }
    ngOnInit() {
        this.loadAll();
    }
    loadAll() {
        this.route.parent.url.subscribe((urlPath) => {
            const url = urlPath[urlPath.length - 1].path;
            this.myhomeService.getDeThiDetailById(url).subscribe((res) => {
                // console.log(res);
                this.sinhviens = res.body.sinhvien;
                this.deThi = res.body.data;
                // console.log(this.sinhviens);
            }, (error) => {
                console.log(error);
            });
        });
    }
    settime() {
        const dateS = this.deThi.timeStart.split(',');
        const ngayStart = dateS[0];
        const timeStart = dateS[1];
        const date = new Date();
        const dateE = this.deThi.timeEnd.split(',');
        const ngayEnd = dateE[0];
        const timeEnd = dateE[1];
        const datend = new Date();
        date.setFullYear(ngayStart.split('-')[2], ngayStart.split('-')[1] - 1, ngayStart.split('-')[0]);
        date.setHours(timeStart.split(':')[0], timeStart.split(':')[1], 0);
        datend.setFullYear(ngayEnd.split('-')[2], ngayEnd.split('-')[1] - 1, ngayEnd.split('-')[0]);
        datend.setHours(timeEnd.split(':')[0], timeEnd.split(':')[1], 0);
        this.Tend = datend.getTime();
        this.Tstart = date.getTime();
        const dateN = new Date();
        this.Tnow = dateN.getTime();
    }
    SeeArchiverment(mssv) {
        //  console.log(mssv);
        this.settime();
        if (this.Tnow < this.Tend) {
            // kiểm tra thời gian đã kết thúc chưa
            alert('Kết quả sẽ hiện thị khi cuộc thi đã kết thúc !');
        }
        else {
            const profile = JSON.parse(localStorage.getItem('listProfiles'));
            this.route.parent.url.subscribe((urlPath) => {
                const url = urlPath[urlPath.length - 1].path;
                if (profile.authorities != 'SV') {
                    this.router.navigate(['/nhacuatoi/thanhtich', mssv], {
                        queryParams: { dethi: url },
                    });
                }
                else {
                    if (profile._id != mssv) {
                        alert('Bạn không được phép xem kết quả bài thi của người khác. Hãy liên hệ với quản trị !');
                    }
                    else {
                        this.router.navigate(['/nhacuatoi/thanhtich', profile._id], {
                            queryParams: { dethi: url },
                        });
                    }
                }
            });
        }
    }
}
MyhomesinhvienComponent.ɵfac = function MyhomesinhvienComponent_Factory(t) { return new (t || MyhomesinhvienComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_myhome_service__WEBPACK_IMPORTED_MODULE_3__["MyhomeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
MyhomesinhvienComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MyhomesinhvienComponent, selectors: [["app-myhomesinhvien"]], decls: 4, vars: 1, consts: [[1, "myhome-sinhvien", "py-4", "px-2"], ["class", "table table-striped table-borderless table-hover table-sm", 4, "ngIf"], [1, "table", "table-striped", "table-borderless", "table-hover", "table-sm"], [1, "d-flex", "text-center"], [1, "col-1"], [1, "col-2"], ["src", "../../../assets/Images/icon-sort.svg", "alt", ""], ["class", "bg-none", 4, "ngIf"], ["class", "d-flex text-center", 4, "ngFor", "ngForOf"], [1, "bg-none"], [1, "text-center"], [1, "col-1", "id"], [2, "color", "rgb(241, 176, 77)", 3, "icon", "click"]], template: function MyhomesinhvienComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Danh s\u00E1ch sinh vi\u00EAn");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, MyhomesinhvienComponent_table_3_Template, 33, 9, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.sinhviens);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FaIconComponent"]], pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_6__["PaginatePipe"]], styles: [".myhome-sinhvien[_ngcontent-%COMP%] {\n  background: #f7f7f7;\n  border-radius: 5px;\n}\n.myhome-sinhvien[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #585858;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXG15aG9tZXNpbmh2aWVuLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtBQUNGO0FBQUU7RUFDRSxnQkFBQTtFQUNBLGNBQUE7QUFFSiIsImZpbGUiOiJteWhvbWVzaW5odmllbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5teWhvbWUtc2luaHZpZW57XHJcbiAgYmFja2dyb3VuZDogI2Y3ZjdmNztcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgaDV7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgY29sb3I6IHJnYig4OCwgODgsIDg4KTtcclxuICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "O4bw":
/*!********************************************************!*\
  !*** ./src/app/entity/myhome/myhome-routing.module.ts ***!
  \********************************************************/
/*! exports provided: MyhomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyhomeRoutingModule", function() { return MyhomeRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_core_auth_guard_auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/auth/guard-auth.guard */ "ZYSj");
/* harmony import */ var _detail_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detail/detail.component */ "9VrN");
/* harmony import */ var _detail_myhomeinfor_myhomeinfor_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./detail/myhomeinfor/myhomeinfor.component */ "9gC2");
/* harmony import */ var _detail_myhomequestion_myhomequestion_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./detail/myhomequestion/myhomequestion.component */ "egMB");
/* harmony import */ var _detail_myhomesinhvien_myhomesinhvien_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./detail/myhomesinhvien/myhomesinhvien.component */ "DDxi");
/* harmony import */ var _myhome_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./myhome.component */ "0/kU");
/* harmony import */ var _thanhtich_thanhtich_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./thanhtich/thanhtich.component */ "8Dwm");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");










const routes = [
    {
        path: '',
        component: _myhome_component__WEBPACK_IMPORTED_MODULE_6__["MyhomeComponent"],
        data: { functions: ['nhacuatoi'], pageTitle: 'tất cả câu hỏi' },
        canActivate: [src_app_core_auth_guard_auth_guard__WEBPACK_IMPORTED_MODULE_1__["GuardAuthGuard"]],
    },
    {
        path: 'thanhtich/:id',
        component: _thanhtich_thanhtich_component__WEBPACK_IMPORTED_MODULE_7__["ThanhtichComponent"],
    },
    {
        path: 'dethi/:id',
        component: _detail_detail_component__WEBPACK_IMPORTED_MODULE_2__["DetailComponent"],
        children: [
            {
                path: 'sinhvien',
                component: _detail_myhomesinhvien_myhomesinhvien_component__WEBPACK_IMPORTED_MODULE_5__["MyhomesinhvienComponent"],
            },
            {
                path: 'cauhoi',
                component: _detail_myhomequestion_myhomequestion_component__WEBPACK_IMPORTED_MODULE_4__["MyhomequestionComponent"],
            },
            {
                path: 'thongtin',
                component: _detail_myhomeinfor_myhomeinfor_component__WEBPACK_IMPORTED_MODULE_3__["MyhomeinforComponent"],
            },
        ],
    },
];
class MyhomeRoutingModule {
}
MyhomeRoutingModule.ɵfac = function MyhomeRoutingModule_Factory(t) { return new (t || MyhomeRoutingModule)(); };
MyhomeRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: MyhomeRoutingModule });
MyhomeRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](MyhomeRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "bYv9":
/*!************************************************!*\
  !*** ./src/app/entity/myhome/myhome.module.ts ***!
  \************************************************/
/*! exports provided: MyhomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyhomeModule", function() { return MyhomeModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-pagination */ "oOf3");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _myhome_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./myhome-routing.module */ "O4bw");
/* harmony import */ var _myhome_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./myhome.component */ "0/kU");
/* harmony import */ var _date_calendars_calendars_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../date/calendars/calendars.module */ "wp3R");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _detail_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./detail/detail.component */ "9VrN");
/* harmony import */ var _detail_myhomesinhvien_myhomesinhvien_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./detail/myhomesinhvien/myhomesinhvien.component */ "DDxi");
/* harmony import */ var _detail_myhomequestion_myhomequestion_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./detail/myhomequestion/myhomequestion.component */ "egMB");
/* harmony import */ var _detail_myhomeinfor_myhomeinfor_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./detail/myhomeinfor/myhomeinfor.component */ "9gC2");
/* harmony import */ var _thanhtich_thanhtich_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./thanhtich/thanhtich.component */ "8Dwm");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ "fXoL");













class MyhomeModule {
}
MyhomeModule.ɵfac = function MyhomeModule_Factory(t) { return new (t || MyhomeModule)(); };
MyhomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({ type: MyhomeModule });
MyhomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({ imports: [[
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            ngx_pagination__WEBPACK_IMPORTED_MODULE_1__["NgxPaginationModule"],
            _myhome_routing_module__WEBPACK_IMPORTED_MODULE_3__["MyhomeRoutingModule"],
            _date_calendars_calendars_module__WEBPACK_IMPORTED_MODULE_5__["CalendarsModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](MyhomeModule, { declarations: [_myhome_component__WEBPACK_IMPORTED_MODULE_4__["MyhomeComponent"], _detail_detail_component__WEBPACK_IMPORTED_MODULE_7__["DetailComponent"], _detail_myhomesinhvien_myhomesinhvien_component__WEBPACK_IMPORTED_MODULE_8__["MyhomesinhvienComponent"], _detail_myhomequestion_myhomequestion_component__WEBPACK_IMPORTED_MODULE_9__["MyhomequestionComponent"], _detail_myhomeinfor_myhomeinfor_component__WEBPACK_IMPORTED_MODULE_10__["MyhomeinforComponent"], _thanhtich_thanhtich_component__WEBPACK_IMPORTED_MODULE_11__["ThanhtichComponent"]], imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        ngx_pagination__WEBPACK_IMPORTED_MODULE_1__["NgxPaginationModule"],
        _myhome_routing_module__WEBPACK_IMPORTED_MODULE_3__["MyhomeRoutingModule"],
        _date_calendars_calendars_module__WEBPACK_IMPORTED_MODULE_5__["CalendarsModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeModule"]] }); })();


/***/ }),

/***/ "e8W+":
/*!*************************************************!*\
  !*** ./src/app/entity/myhome/myhome.service.ts ***!
  \*************************************************/
/*! exports provided: MyhomeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyhomeService", function() { return MyhomeService; });
/* harmony import */ var src_app_app_contants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/app.contants */ "7JO0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class MyhomeService {
    constructor(http) {
        this.http = http;
    }
    loadAll(data) {
        //  console.log(data);
        return this.http.post(src_app_app_contants__WEBPACK_IMPORTED_MODULE_0__["SERVER_AUTH_API_URL"] + `dethiCreateBy`, { data }, { observe: 'response' });
    }
    getAll(id, state) {
        return this.http.get(src_app_app_contants__WEBPACK_IMPORTED_MODULE_0__["SERVER_AUTH_API_URL"] + `getalldethibyid/${id}/query?state=` + state, { observe: 'response' });
    }
    getDeThiDetailById(id) {
        //  console.log(id);
        return this.http.get(src_app_app_contants__WEBPACK_IMPORTED_MODULE_0__["SERVER_AUTH_API_URL"] + `dethi/getone/${id}`, {
            observe: 'response',
        });
    }
    getDeThiDetailByIdandPerformer(data) {
        return this.http.post(src_app_app_contants__WEBPACK_IMPORTED_MODULE_0__["SERVER_AUTH_API_URL"] + `bailambyidandperformer`, { data }, {
            observe: 'response',
        });
    }
    getById(id) {
        return this.http.get(src_app_app_contants__WEBPACK_IMPORTED_MODULE_0__["SERVER_AUTH_API_URL"] + `profile/${id}`, {
            observe: 'response',
        });
    }
    getBailamById(id) {
        return this.http.get(src_app_app_contants__WEBPACK_IMPORTED_MODULE_0__["SERVER_AUTH_API_URL"] + `bailambyid/${id}`, {
            observe: 'response',
        });
    }
    createBaiLam(data) {
        return this.http.post(src_app_app_contants__WEBPACK_IMPORTED_MODULE_0__["SERVER_AUTH_API_URL"] + `bailam/create`, { data }, { observe: 'response' });
    }
}
MyhomeService.ɵfac = function MyhomeService_Factory(t) { return new (t || MyhomeService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
MyhomeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: MyhomeService, factory: MyhomeService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "egMB":
/*!*********************************************************************************!*\
  !*** ./src/app/entity/myhome/detail/myhomequestion/myhomequestion.component.ts ***!
  \*********************************************************************************/
/*! exports provided: MyhomequestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyhomequestionComponent", function() { return MyhomequestionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _myhome_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../myhome.service */ "e8W+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




const _c0 = function () { return { "color": "red" }; };
const _c1 = function () { return { "color": "#212529" }; };
function MyhomequestionComponent_div_0_div_3_li_7_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ans_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ans_r8.bio ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0) : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("a). ", ans_r8.answer, "");
} }
function MyhomequestionComponent_div_0_div_3_li_7_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ans_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ans_r8.bio ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0) : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("b). ", ans_r8.answer, "");
} }
function MyhomequestionComponent_div_0_div_3_li_7_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ans_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ans_r8.bio ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0) : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("c). ", ans_r8.answer, "");
} }
function MyhomequestionComponent_div_0_div_3_li_7_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ans_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ans_r8.bio ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0) : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("d). ", ans_r8.answer, "");
} }
function MyhomequestionComponent_div_0_div_3_li_7_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ans_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ans_r8.bio ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0) : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("e). ", ans_r8.answer, "");
} }
function MyhomequestionComponent_div_0_div_3_li_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MyhomequestionComponent_div_0_div_3_li_7_span_1_Template, 2, 4, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MyhomequestionComponent_div_0_div_3_li_7_span_2_Template, 2, 4, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MyhomequestionComponent_div_0_div_3_li_7_span_3_Template, 2, 4, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MyhomequestionComponent_div_0_div_3_li_7_span_4_Template, 2, 4, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MyhomequestionComponent_div_0_div_3_li_7_span_5_Template, 2, 4, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const j_r9 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", j_r9 == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", j_r9 == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", j_r9 == 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", j_r9 == 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", j_r9 == 4);
} }
function MyhomequestionComponent_div_0_div_3_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "M\u1EE9c \u0111\u1ED9: D\u1EC5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MyhomequestionComponent_div_0_div_3_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "M\u1EE9c \u0111\u1ED9: Trung B\u00ECnh");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MyhomequestionComponent_div_0_div_3_span_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "M\u1EE9c \u0111\u1ED9: Kh\u00F3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MyhomequestionComponent_div_0_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, MyhomequestionComponent_div_0_div_3_li_7_Template, 6, 5, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, MyhomequestionComponent_div_0_div_3_span_9_Template, 2, 0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, MyhomequestionComponent_div_0_div_3_span_10_Template, 2, 0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, MyhomequestionComponent_div_0_div_3_span_11_Template, 2, 0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("C\u00E2u ", i_r3 + 1, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2.question);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r2.answers);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r2.level == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r2.level == 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r2.level == 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Ch\u1EE7 \u0111\u1EC1: ", item_r2.theme, "");
} }
function MyhomequestionComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Danh s\u00E1ch c\u00E1c c\u00E2u h\u1ECFi");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MyhomequestionComponent_div_0_div_3_Template, 15, 7, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.Baithi.detailTest);
} }
class MyhomequestionComponent {
    constructor(route, myhomeService) {
        this.route = route;
        this.myhomeService = myhomeService;
        this.role = 'SV';
    }
    ngOnInit() {
        this.loadAll();
        let profile = JSON.parse(localStorage.getItem('listProfiles'));
        this.role = profile.authorities;
    }
    loadAll() {
        this.route.parent.url.subscribe((urlPath) => {
            const url = urlPath[urlPath.length - 1].path;
            this.myhomeService.getDeThiDetailById(url).subscribe((res) => {
                // console.log(res);
                this.Baithi = res.body.data;
            }, (error) => {
                console.log(error);
            });
        });
    }
}
MyhomequestionComponent.ɵfac = function MyhomequestionComponent_Factory(t) { return new (t || MyhomequestionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_myhome_service__WEBPACK_IMPORTED_MODULE_2__["MyhomeService"])); };
MyhomequestionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MyhomequestionComponent, selectors: [["app-myhomequestion"]], decls: 1, vars: 1, consts: [["class", "p-3", 4, "ngIf"], [1, "p-3"], [2, "font-weight", "700", "font-size", "23px", "color", "rgb(85, 85, 85)"], [4, "ngFor", "ngForOf"], [1, "list-unstyled", "myhome-question"], ["class", "pl-3", 4, "ngFor", "ngForOf"], [1, "pl-3"], [4, "ngIf"], [3, "ngStyle", 4, "ngIf"], [3, "ngStyle"]], template: function MyhomequestionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MyhomequestionComponent_div_0_Template, 4, 1, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Baithi && ctx.role != "SV");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"]], styles: [".myhome-question[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 500;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXG15aG9tZXF1ZXN0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVJO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FBRE4iLCJmaWxlIjoibXlob21lcXVlc3Rpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubXlob21lLXF1ZXN0aW9ue1xyXG4gIGxpe1xyXG4gICAgcHtcclxuICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"] });


/***/ })

}]);
//# sourceMappingURL=app-entity-myhome-myhome-module.js.map