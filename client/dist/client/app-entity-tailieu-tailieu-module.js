(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-entity-tailieu-tailieu-module"],{

/***/ "YgY1":
/*!*****************************************************!*\
  !*** ./src/app/entity/tailieu/tailieu.component.ts ***!
  \*****************************************************/
/*! exports provided: TailieuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TailieuComponent", function() { return TailieuComponent; });
/* harmony import */ var src_app_app_contants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/app.contants */ "7JO0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_share_share_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/share/share.service */ "8mU5");
/* harmony import */ var _Question_quesion_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Question/quesion.service */ "CaL8");
/* harmony import */ var _tailieu_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tailieu.service */ "05Dk");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-pagination */ "oOf3");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "tyNb");










function TailieuComponent_option_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const theme_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", theme_r9.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](theme_r9.name);
} }
const _c0 = function () { return { "color": "red", "word-wrap": "break-word" }; };
const _c1 = function () { return { "color": "#212529", "word-wrap": "break-word" }; };
function TailieuComponent_div_15_li_7_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ans_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", ans_r13.bio ? _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](2, _c0) : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](3, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("a). ", ans_r13.answer, "");
} }
function TailieuComponent_div_15_li_7_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ans_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", ans_r13.bio ? _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](2, _c0) : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](3, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("b). ", ans_r13.answer, "");
} }
function TailieuComponent_div_15_li_7_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ans_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", ans_r13.bio ? _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](2, _c0) : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](3, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("c). ", ans_r13.answer, "");
} }
function TailieuComponent_div_15_li_7_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ans_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", ans_r13.bio ? _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](2, _c0) : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](3, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("d). ", ans_r13.answer, "");
} }
function TailieuComponent_div_15_li_7_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ans_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", ans_r13.bio ? _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](2, _c0) : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](3, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("e). ", ans_r13.answer, "");
} }
function TailieuComponent_div_15_li_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TailieuComponent_div_15_li_7_span_1_Template, 2, 4, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, TailieuComponent_div_15_li_7_span_2_Template, 2, 4, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, TailieuComponent_div_15_li_7_span_3_Template, 2, 4, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, TailieuComponent_div_15_li_7_span_4_Template, 2, 4, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, TailieuComponent_div_15_li_7_span_5_Template, 2, 4, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const j_r14 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", j_r14 == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", j_r14 == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", j_r14 == 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", j_r14 == 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", j_r14 == 4);
} }
function TailieuComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ul", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, TailieuComponent_div_15_li_7_Template, 6, 5, "li", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r10 = ctx.$implicit;
    const i_r11 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("C\u00E2u ", i_r11 + 1, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r10.question);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", item_r10.answers);
} }
function TailieuComponent_img_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 35);
} }
function TailieuComponent_img_37_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "img", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TailieuComponent_img_37_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r26); _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](34); return _r2.previous(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TailieuComponent_img_38_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "img", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TailieuComponent_img_38_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r28); _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](34); return _r2.next(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TailieuComponent_img_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 38);
} }
function TailieuComponent_div_44_2_ng_template_0_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 45);
} if (rf & 2) {
    const item_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("src", "http://localhost:3000/static/image/", item_r30.avatar, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function TailieuComponent_div_44_2_ng_template_0_img_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 46);
} }
const _c2 = function (a1) { return ["/nhacuatoi/dethi", a1]; };
function TailieuComponent_div_44_2_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TailieuComponent_div_44_2_ng_template_0_img_1_Template, 1, 1, "img", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, TailieuComponent_div_44_2_ng_template_0_img_2_Template, 1, 0, "img", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c2, item_r30._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r30.avatar != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r30.avatar == "");
} }
function TailieuComponent_div_44_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, TailieuComponent_div_44_2_ng_template_0_Template, 3, 5, "ng-template", 41);
} }
function TailieuComponent_div_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ngb-carousel");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, TailieuComponent_div_44_2_Template, 1, 0, undefined, 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r7.Dethi);
} }
function TailieuComponent_div_45_6_ng_template_0_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 45);
} if (rf & 2) {
    const item_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("src", "http://localhost:3000/static/image/", item_r37.avatar, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function TailieuComponent_div_45_6_ng_template_0_img_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 46);
} }
function TailieuComponent_div_45_6_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TailieuComponent_div_45_6_ng_template_0_img_1_Template, 1, 1, "img", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, TailieuComponent_div_45_6_ng_template_0_img_2_Template, 1, 0, "img", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c2, item_r37._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r37.avatar != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r37.avatar == "");
} }
function TailieuComponent_div_45_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, TailieuComponent_div_45_6_ng_template_0_Template, 3, 5, "ng-template", 41);
} }
function TailieuComponent_div_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h5", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Cu\u1ED9c thi d\u00E0nh cho b\u1EA1n");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ngb-carousel");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, TailieuComponent_div_45_6_Template, 1, 0, undefined, 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r8.DethiUse);
} }
const _c3 = function (a1, a2, a3) { return { id: "server", itemsPerPage: a1, currentPage: a2, totalItems: a3 }; };
class TailieuComponent {
    constructor(ss, questionService, tailieuService) {
        this.ss = ss;
        this.questionService = questionService;
        this.tailieuService = tailieuService;
        this.questions = [];
        this.Dethi = [];
        this.DethiUse = [];
        this.urlImage = src_app_app_contants__WEBPACK_IMPORTED_MODULE_0__["SERVER_IMAGE"];
        this.params = {
            current_page: 1,
            limit: 5,
            sort: '_id',
            reverse: false,
            search: '',
            theme: '',
            level: '',
        };
        this.start = 0;
        this.end = 10;
        this.startS = 0;
        this.endS = 10;
    }
    ngOnInit() {
        this.loadAll(this.params.current_page);
        this.getDethibyClass();
        this.loadAllTrue(this.params.current_page);
        this.getTheme();
    }
    loadAll(page) {
        if (!page || page < 1) {
            page = 1;
        }
        this.params.current_page = page;
        this.questionService.getAll(this.params).subscribe((res) => {
            this.questions = res.body.data;
            this.questionService.getOnAll().subscribe((res) => {
                this.total_records = res.body.data.length;
            }, (err) => console.log(err));
            // console.log(this.total_records);
            this.findStart();
            this.findEnd();
        }, (error) => console.log(error));
    }
    getTheme() {
        this.ss.getAllTheme().subscribe((res) => {
            this.themes = res.body.data;
        }, (err) => {
            console.log(err.message);
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
    searchByTheme(value) {
        this.params.theme = value;
        this.params.current_page = 1;
        this.loadAll(this.params.current_page);
    }
    getDethibyClass() {
        let listProfiles = JSON.parse(localStorage.getItem('listProfiles'));
        if (listProfiles) {
            this.tailieuService.loadDethibyclass(listProfiles._id).subscribe((res) => {
                this.DethiUse = res.body.data;
                //   console.log(this.DethiUse);
            }, (error) => {
                console.log(error);
            });
        }
    }
    onChangelimit(value) {
        this.params.limit = value;
        this.params.current_page = 1;
        this.loadAll(this.params.current_page);
    }
    loadAllTrue(page) {
        // cuộc thi danh cho bạn
        if (page < 0 || !page) {
            page = 1;
        }
        this.tailieuService.loadAllDethi(this.params).subscribe((res) => {
            //  console.log(res);
            this.Dethi = res.body.data;
        }, (error) => {
            console.log(error);
        });
    }
}
TailieuComponent.ɵfac = function TailieuComponent_Factory(t) { return new (t || TailieuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_share_share_service__WEBPACK_IMPORTED_MODULE_2__["ShareService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_Question_quesion_service__WEBPACK_IMPORTED_MODULE_3__["QuesionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_tailieu_service__WEBPACK_IMPORTED_MODULE_4__["TailieuService"])); };
TailieuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TailieuComponent, selectors: [["app-tailieu"]], decls: 47, vars: 21, consts: [[1, "mod-tailieu", "float-left", "p-4", "mt-3", "w-75"], [1, "text-center"], [1, "w-100"], ["id", "them", 1, "form-control", "ml-auto", "form-control-sm", "p-0", "w-25", 3, "ngModel", "ngModelChange"], ["value", "", "disabled", "", "selected", ""], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "mod-tailieu-content", "p-4"], ["class", "mb-4 p-3 ", "style", "background-color: aliceblue;", 4, "ngFor", "ngForOf"], [1, "text-right", "mt-3", "filter-table", "pb-3"], [1, "px-2"], [3, "ngModel", "ngModelChange"], ["value", "5", 3, "selected"], ["value", "10"], ["value", "15"], [1, "text-lowercase"], ["id", "server", 3, "pageChange"], ["p", "paginationApi"], [1, "custom-pagination"], ["class", " ml-5 inactive", "src", "../../../assets/Images/icon-arrow-left.svg", 4, "ngIf"], ["class", " ml-5", "src", "../../../assets/Images/icon-arrow-left.svg", 3, "click", 4, "ngIf"], ["class", " mr-5", "src", "../../../assets/Images/icon-arrow-right.svg", 3, "click", 4, "ngIf"], ["class", " mr-5 inactive", "src", "../../../assets/Images/icon-arrow-right.svg", 4, "ngIf"], [1, "w-25", "float-right", "mod-tailieu-test", "sticky", "mt-3", "px-2"], [1, "mod-true", "px-2", "ml-1"], ["class", "mt-3", 4, "ngIf"], [4, "ngIf"], [3, "value"], [1, "mb-4", "p-3", 2, "background-color", "aliceblue"], [1, "list-unstyled", "myhome-question", "w-75"], [1, "p-0", "mb-1", 2, "word-wrap", "break-word"], ["class", "pl-3", 4, "ngFor", "ngForOf"], [1, "pl-3"], [3, "ngStyle", 4, "ngIf"], [3, "ngStyle"], ["src", "../../../assets/Images/icon-arrow-left.svg", 1, "ml-5", "inactive"], ["src", "../../../assets/Images/icon-arrow-left.svg", 1, "ml-5", 3, "click"], ["src", "../../../assets/Images/icon-arrow-right.svg", 1, "mr-5", 3, "click"], ["src", "../../../assets/Images/icon-arrow-right.svg", 1, "mr-5", "inactive"], [1, "mt-3"], [4, "ngFor", "ngForOf"], ["ngbSlide", ""], [1, "picsum-img-wrapper", 3, "routerLink"], ["class", "d-block h-100 w-100", "alt", "...", 3, "src", 4, "ngIf"], ["src", "../../../assets/Images/text7.jpg", "class", "d-block w-100 h-100", "alt", "...", 4, "ngIf"], ["alt", "...", 1, "d-block", "h-100", "w-100", 3, "src"], ["src", "../../../assets/Images/text7.jpg", "alt", "...", 1, "d-block", "w-100", "h-100"]], template: function TailieuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h5", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "T\u00C0I LI\u1EC6U ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " M\u1EA0NG M\u00C1Y T\u00CDNH ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "select", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function TailieuComponent_Template_select_ngModelChange_7_listener($event) { return ctx.searchByTheme($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "--- All ---");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "All");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " < ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, TailieuComponent_option_13_Template, 2, 2, "option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, TailieuComponent_div_15_Template, 8, 3, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](16, "paginate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "K\u1EBFt qu\u1EA3 c\u1EE7a trang");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "select", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function TailieuComponent_Template_select_ngModelChange_21_listener($event) { return ctx.onChangelimit($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "10");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "15");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Of");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "pagination-template", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("pageChange", function TailieuComponent_Template_pagination_template_pageChange_33_listener($event) { return ctx.loadAll($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](36, TailieuComponent_img_36_Template, 1, 0, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](37, TailieuComponent_img_37_Template, 1, 0, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](38, TailieuComponent_img_38_Template, 1, 0, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](39, TailieuComponent_img_39_Template, 1, 0, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "h5", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Cu\u1ED9c thi s\u1EAFp di\u1EC5n ra");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](44, TailieuComponent_div_44_Template, 3, 1, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](45, TailieuComponent_div_45_Template, 7, 1, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.params.theme);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.themes);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](16, 14, ctx.questions, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](17, _c3, ctx.params.limit, ctx.params.current_page, ctx.total_records)));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.params.limit);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("selected", ctx.params.limit == "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", ctx.start + 1, " - ", ctx.end, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.total_records, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r2.isFirstPage());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !_r2.isFirstPage());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !_r2.isLastPage());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r2.isLastPage());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.Dethi);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.DethiUse.length > 0);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], ngx_pagination__WEBPACK_IMPORTED_MODULE_7__["PaginationControlsDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgStyle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbCarousel"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbSlide"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterLink"]], pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_7__["PaginatePipe"]], styles: [".mod-tailieu[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 5px;\n}\n.mod-tailieu-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 21px;\n}\n.mod-tailieu-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.mod-tailieu-test[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 25px;\n}\n.mod-tailieu-test[_ngcontent-%COMP%]   .mod-true[_ngcontent-%COMP%] {\n  border: 1px solid #dbdada;\n  border-right: 5px;\n  min-height: 350px;\n  background: #fff;\n}\n.mod-tailieu-test[_ngcontent-%COMP%]   .mod-true[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx0YWlsaWV1LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtBQUNGO0FBRU07RUFDRSxlQUFBO0FBQVI7QUFDUTtFQUNFLGdCQUFBO0FBQ1Y7QUFLQTtFQUNFLGdCQUFBO0VBQ0EsU0FBQTtBQUZGO0FBR0U7RUFDRSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQURKO0FBRUk7RUFDRSxnQkFBQTtFQUNBLGVBQUE7QUFBTiIsImZpbGUiOiJ0YWlsaWV1LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1vZC10YWlsaWV1IHtcclxuICBiYWNrZ3JvdW5kOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICYtY29udGVudCB7XHJcbiAgICB1bCB7XHJcbiAgICAgIGxpIHtcclxuICAgICAgICBmb250LXNpemU6IDIxcHg7XHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4ubW9kLXRhaWxpZXUtdGVzdCB7XHJcbiAgcG9zaXRpb246IHN0aWNreTtcclxuICB0b3A6IDI1cHg7XHJcbiAgLm1vZC10cnVlIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyMTksIDIxOCwgMjE4KTtcclxuICAgIGJvcmRlci1yaWdodDogNXB4O1xyXG4gICAgbWluLWhlaWdodDogMzUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgaDUge1xyXG4gICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "cgu0":
/*!**********************************************************!*\
  !*** ./src/app/entity/tailieu/tailieu-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: TailieuRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TailieuRoutingModule", function() { return TailieuRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _tailieu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tailieu.component */ "YgY1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: '',
        component: _tailieu_component__WEBPACK_IMPORTED_MODULE_1__["TailieuComponent"],
    },
];
class TailieuRoutingModule {
}
TailieuRoutingModule.ɵfac = function TailieuRoutingModule_Factory(t) { return new (t || TailieuRoutingModule)(); };
TailieuRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: TailieuRoutingModule });
TailieuRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](TailieuRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "l/8U":
/*!**************************************************!*\
  !*** ./src/app/entity/tailieu/tailieu.module.ts ***!
  \**************************************************/
/*! exports provided: TailieuModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TailieuModule", function() { return TailieuModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _tailieu_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tailieu-routing.module */ "cgu0");
/* harmony import */ var _tailieu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tailieu.component */ "YgY1");
/* harmony import */ var _Question_quesion_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Question/quesion.service */ "CaL8");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-pagination */ "oOf3");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var src_app_date_calendars_calendars_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/date/calendars/calendars.module */ "wp3R");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");









class TailieuModule {
}
TailieuModule.ɵfac = function TailieuModule_Factory(t) { return new (t || TailieuModule)(); };
TailieuModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: TailieuModule });
TailieuModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ providers: [_Question_quesion_service__WEBPACK_IMPORTED_MODULE_4__["QuesionService"]], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _tailieu_routing_module__WEBPACK_IMPORTED_MODULE_2__["TailieuRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
            ngx_pagination__WEBPACK_IMPORTED_MODULE_5__["NgxPaginationModule"],
            src_app_date_calendars_calendars_module__WEBPACK_IMPORTED_MODULE_7__["CalendarsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](TailieuModule, { declarations: [_tailieu_component__WEBPACK_IMPORTED_MODULE_3__["TailieuComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _tailieu_routing_module__WEBPACK_IMPORTED_MODULE_2__["TailieuRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
        ngx_pagination__WEBPACK_IMPORTED_MODULE_5__["NgxPaginationModule"],
        src_app_date_calendars_calendars_module__WEBPACK_IMPORTED_MODULE_7__["CalendarsModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=app-entity-tailieu-tailieu-module.js.map