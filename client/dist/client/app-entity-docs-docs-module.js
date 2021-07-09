(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-entity-docs-docs-module"],{

/***/ "/+xA":
/*!**********************************************************!*\
  !*** ./src/app/entity/docs/taodocs/taodocs.component.ts ***!
  \**********************************************************/
/*! exports provided: TaodocsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaodocsComponent", function() { return TaodocsComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var src_app_share_notification_notification_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/share/notification/notification.component */ "WdHK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _docs_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../docs.service */ "as2T");
/* harmony import */ var src_app_share_share_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/share/share.service */ "8mU5");
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-ui-loader */ "gren");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _tailieu_tailieu_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../tailieu/tailieu.service */ "05Dk");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _date_calendars_calendars_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../date/calendars/calendars.component */ "c7RR");
/* harmony import */ var ngx_file_drop__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-file-drop */ "gfTr");















function TaodocsComponent_ngx_file_drop_6_ng_template_1_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "K\u00E9o th\u1EA3 \u1EA3nh n\u1EC1n cho \u0111\u1EC1 thi t\u1EA1i \u0111\u00E2y ho\u1EB7c");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function TaodocsComponent_ngx_file_drop_6_ng_template_1_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "general.IsFileUpload"));
} }
function TaodocsComponent_ngx_file_drop_6_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "img", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, TaodocsComponent_ngx_file_drop_6_ng_template_1_span_3_Template, 2, 0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, TaodocsComponent_ngx_file_drop_6_ng_template_1_span_4_Template, 3, 3, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TaodocsComponent_ngx_file_drop_6_ng_template_1_Template_button_click_5_listener() { const openFileSelector_r5 = ctx.openFileSelector; return openFileSelector_r5(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, " Click here ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r4.isFile);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r4.isFile);
} }
function TaodocsComponent_ngx_file_drop_6_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ngx-file-drop", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onFileDrop", function TaodocsComponent_ngx_file_drop_6_Template_ngx_file_drop_onFileDrop_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r9.dropped($event, "", "", "avatar"); })("onFileOver", function TaodocsComponent_ngx_file_drop_6_Template_ngx_file_drop_onFileOver_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r11.fileOver($event); })("onFileLeave", function TaodocsComponent_ngx_file_drop_6_Template_ngx_file_drop_onFileLeave_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r12.fileLeave($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, TaodocsComponent_ngx_file_drop_6_ng_template_1_Template, 7, 2, "ng-template", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function TaodocsComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TaodocsComponent_div_7_Template_span_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r13.closeAvatar(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "X");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "img", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("src", "http://localhost:3000/static/image/", ctx_r1.TailieuFrom.value.avatar, "", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
} }
function TaodocsComponent_div_17_div_9_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TaodocsComponent_div_17_div_9_div_1_Template_span_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r24); const j_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().index; const i_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().index; const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r22.deletenoidung(i_r16, j_r19); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "x");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "N\u1ED9i dung");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "textarea", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const j_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().index;
    const i_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().index;
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx_r20.TailieuFrom.get("DsNoiDung").controls[i_r16].get("noidung")["controls"][j_r19].get("text").errors && ctx_r20.isvalidator ? "border-error" : "");
} }
function TaodocsComponent_div_17_div_9_div_2_span_2_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TaodocsComponent_div_17_div_9_div_2_span_2_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r33); const j_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).index; const i_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().index; const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r31.deletenoidung(i_r16, j_r19); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "x");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function TaodocsComponent_div_17_div_9_div_2_ngx_file_drop_3_ng_template_1_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "K\u00E9o th\u1EA3 \u1EA3nh n\u1EC1n cho \u0111\u1EC1 thi t\u1EA1i \u0111\u00E2y ho\u1EB7c");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function TaodocsComponent_div_17_div_9_div_2_ngx_file_drop_3_ng_template_1_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Xin l\u1ED7i, t\u1EA3i l\u00EAn kh\u00F4ng th\u00E0nh c\u00F4ng!.Y\u00EAu c\u1EA7u t\u1EC7p tin kh\u00F4ng h\u1EE3p l\u1EC7");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function TaodocsComponent_div_17_div_9_div_2_ngx_file_drop_3_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "img", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, TaodocsComponent_div_17_div_9_div_2_ngx_file_drop_3_ng_template_1_span_3_Template, 2, 0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, TaodocsComponent_div_17_div_9_div_2_ngx_file_drop_3_ng_template_1_span_4_Template, 2, 0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TaodocsComponent_div_17_div_9_div_2_ngx_file_drop_3_ng_template_1_Template_button_click_5_listener() { const openFileSelector_r36 = ctx.openFileSelector; return openFileSelector_r36(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, " Click here ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const j_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3).index;
    const i_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().index;
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx_r35.TailieuFrom.get("DsNoiDung").controls[i_r16].get("noidung")["controls"][j_r19].get("text").errors && ctx_r35.isvalidator ? "textError" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r35.isFile);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r35.isFile);
} }
function TaodocsComponent_div_17_div_9_div_2_ngx_file_drop_3_Template(rf, ctx) { if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ngx-file-drop", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onFileDrop", function TaodocsComponent_div_17_div_9_div_2_ngx_file_drop_3_Template_ngx_file_drop_onFileDrop_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r44); const j_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).index; const i_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().index; const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r42.dropped($event, i_r16, j_r19, "anh"); })("onFileOver", function TaodocsComponent_div_17_div_9_div_2_ngx_file_drop_3_Template_ngx_file_drop_onFileOver_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r44); const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4); return ctx_r46.fileOver($event); })("onFileLeave", function TaodocsComponent_div_17_div_9_div_2_ngx_file_drop_3_Template_ngx_file_drop_onFileLeave_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r44); const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4); return ctx_r47.fileLeave($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, TaodocsComponent_div_17_div_9_div_2_ngx_file_drop_3_ng_template_1_Template, 7, 3, "ng-template", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function TaodocsComponent_div_17_div_9_div_2_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TaodocsComponent_div_17_div_9_div_2_div_4_Template_span_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r50); const j_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).index; const i_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().index; const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r48.closeImage(i_r16, j_r19); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "X");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "img", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const nd_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("src", "http://localhost:3000/static/image/", nd_r18.value.text, "", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
} }
const _c0 = function () { return { width: " 300px" }; };
function TaodocsComponent_div_17_div_9_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, TaodocsComponent_div_17_div_9_div_2_span_2_Template, 2, 0, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, TaodocsComponent_div_17_div_9_div_2_ngx_file_drop_3_Template, 2, 0, "ngx-file-drop", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, TaodocsComponent_div_17_div_9_div_2_div_4_Template, 4, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const nd_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](4, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !nd_r18.value.text);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !nd_r18.value.text);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", nd_r18.value.text);
} }
function TaodocsComponent_div_17_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, TaodocsComponent_div_17_div_9_div_1_Template, 6, 1, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, TaodocsComponent_div_17_div_9_div_2_Template, 5, 5, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const nd_r18 = ctx.$implicit;
    const j_r19 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroupName", j_r19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", nd_r18.value.bio == "text");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", nd_r18.value.bio == "anh");
} }
function TaodocsComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    const _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TaodocsComponent_div_17_Template_span_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r55); const i_r16 = ctx.index; const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r54.deletecontent(i_r16); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "x");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Ti\u00EAu \u0111\u1EC1");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, TaodocsComponent_div_17_div_9_Template, 3, 3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TaodocsComponent_div_17_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r55); const i_r16 = ctx.index; const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r56.andnoidung(i_r16, "anh"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "fa-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TaodocsComponent_div_17_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r55); const i_r16 = ctx.index; const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r57.andnoidung(i_r16, "text"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "fa-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r16 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroupName", i_r16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx_r2.TailieuFrom.get("DsNoiDung")["controls"][i_r16].get("tieuDe").errors && ctx_r2.isvalidator ? "border-error" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r2.DsNoiDung.controls[i_r16].get("noidung").controls);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", ctx_r2.faImage);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", ctx_r2.faFileAlt);
} }
function TaodocsComponent_ng_container_19_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r65 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "input", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "input", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TaodocsComponent_ng_container_19_div_12_Template_span_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r65); const j_r62 = ctx.index; const i_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().index; const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r63.deleteAnswer(i_r59, j_r62); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "fa-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const j_r62 = ctx.index;
    const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    const content_r58 = ctx_r66.$implicit;
    const i_r59 = ctx_r66.index;
    const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroupName", j_r62);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx_r60.questionCheckbio.indexOf(content_r58.value.question) != -1 && !ctx_r60.checkbio ? "border-error" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx_r60.TailieuFrom.get("detailTest").controls[i_r59].get("answers")["controls"][j_r62].get("answer").errors && ctx_r60.isvalidator ? "border-error" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", ctx_r60.faTrash);
} }
function TaodocsComponent_ng_container_19_Template(rf, ctx) { if (rf & 1) {
    const _r68 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0, 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TaodocsComponent_ng_container_19_Template_span_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r68); const i_r59 = ctx.index; const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r67.deleteQuestion(i_r59); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "label", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "textarea", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "label", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "\u0110\u00E1p \u00E1n");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, TaodocsComponent_ng_container_19_div_12_Template, 7, 4, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TaodocsComponent_ng_container_19_Template_span_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r68); const i_r59 = ctx.index; const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r69.andAnswer(i_r59); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Th\u00EAm \u0111\u00E1p \u00E1n");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const content_r58 = ctx.$implicit;
    const i_r59 = ctx.index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroupName", i_r59);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", content_r58.value.answers.length <= 0 && !ctx_r3.checkSumAnswer ? "border-error" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("for", "question", i_r59, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("C\u00E2u ", i_r59 + 1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("id", "question", i_r59, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx_r3.TailieuFrom.get("detailTest")["controls"][i_r59].get("question").errors && ctx_r3.isvalidator ? "border-error" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r3.detailTest.controls[i_r59].get("answers").controls);
} }
class TaodocsComponent {
    constructor(docService, fb, ss, loadService, ngModel, tailieuService, router) {
        this.docService = docService;
        this.fb = fb;
        this.ss = ss;
        this.loadService = loadService;
        this.ngModel = ngModel;
        this.tailieuService = tailieuService;
        this.router = router;
        this.faImage = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faImage"];
        this.faFileAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faFileAlt"];
        this.faCandyCane = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faBan"];
        this.faSave = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faSave"];
        this.faTrash = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faTrash"];
        this.isvalidator = false;
        this.image = false;
        this.isFile = false;
        this.urlIma = '';
        this.questionCheckbio = [];
        this.checkbio = true;
        this.checkSumAnswer = true;
        this.Dethi = [];
        this.checkavatar = true;
        this.params = {
            current_page: 1,
            limit: 5,
            sort: '_id',
            reverse: false,
            search: '',
            theme: '',
            level: '',
        };
        this.TailieuFrom = this.fb.group({
            chuong: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            avatar: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            DsNoiDung: this.fb.array([
                // create formArray container one formGroup
                this.fb.group({
                    tieuDe: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
                    noidung: this.fb.array([]),
                }),
            ]),
            detailTest: this.fb.array([]),
        });
    }
    ngOnInit() { }
    get chuong() {
        return this.TailieuFrom.get('chuong');
    }
    get DsNoiDung() {
        return this.TailieuFrom.get('DsNoiDung'); // get list answer
    }
    get detailTest() {
        return this.TailieuFrom.get('detailTest'); // get list answer
    }
    addContent() {
        this.isvalidator = false;
        const control = this.TailieuFrom.get('DsNoiDung');
        let fg = this.fb.group({
            tieuDe: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            noidung: this.fb.array([
            // this.fb.group({
            //   text: new FormControl('', [Validators.required]),
            // }),
            ]),
            image: this.fb.array([]),
        });
        control.push(fg);
    }
    deletecontent(index) {
        const control = this.TailieuFrom.get('DsNoiDung');
        control.removeAt(index);
    }
    andnoidung(index, flag) {
        this.isvalidator = false;
        //flag phân biệt text hay ima
        const control = this.TailieuFrom.get('DsNoiDung');
        const fg = control.controls[index * 1].get('noidung');
        if (flag == 'text') {
            let fb = this.fb.group({
                text: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
                bio: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('text', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            });
            fg.push(fb);
        }
        if (flag == 'anh') {
            // img
            let fb = this.fb.group({
                text: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
                bio: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('anh', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            });
            fg.push(fb);
        }
    }
    deletenoidung(indexQ, index) {
        const control = this.TailieuFrom.get('DsNoiDung');
        const fg = control.controls[indexQ * 1].get('noidung');
        fg.removeAt(index);
    }
    // anh
    // addAnh(index) {
    //   const control = <FormArray>this.TailieuFrom.get('DsNoiDung');
    //   const fg = <FormArray>control.controls[index * 1].get('image');
    //   let fb = this.fb.group({
    //     name: new FormControl('', [Validators.required]),
    //   });
    //   fg.push(fb);
    // }
    // deleteAnh(indexQ, index) {
    //   const control = <FormArray>this.TailieuFrom.get('DsNoiDung');
    //   const fg = <FormArray>control.controls[indexQ * 1].get('image');
    //   fg.removeAt(index);
    // }
    //// caau hỏi
    andAnswer(index) {
        this.checkbio = true;
        this.isvalidator = false;
        this.checkSumAnswer = true;
        const control = this.TailieuFrom.get('detailTest');
        const fg = control.controls[index * 1].get('answers');
        let fb = this.fb.group({
            answer: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            bio: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](false),
        });
        fg.push(fb);
    }
    deleteAnswer(indexQ, index) {
        const control = this.TailieuFrom.get('detailTest');
        const fg = control.controls[indexQ * 1].get('answers');
        fg.removeAt(index);
    }
    addQuestion() {
        this.isvalidator = false; // để các trường còn trống
        this.checkSumAnswer = true; // check câu hỏi chưa có câu trả lời
        const control = this.TailieuFrom.get('detailTest');
        let fg = this.fb.group({
            question: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            answers: this.fb.array([
            // create formArray container one formGroup
            // this.fb.group({
            //   answer: new FormControl('', [Validators.required]),
            //   bio: new FormControl(false),
            // }),
            ]),
        });
        control.push(fg);
    }
    deleteQuestion(index) {
        const control = this.TailieuFrom.get('detailTest');
        // console.log(this.duplicate);
        control.removeAt(index);
    }
    fileOver(event) { }
    closeAvatar() {
        this.checkavatar = true;
        this.TailieuFrom.get('avatar').setValue('');
    }
    closeImage(i, h) {
        this.image = false;
        // const control = <FormArray>this.TailieuFrom.get('DsNoiDung');
        // const fg = <FormArray>control.controls[i * 1].get('image');
        // fg.controls[h].get('name').setValue('');
        const control = this.TailieuFrom.get('DsNoiDung');
        const fg = control.controls[i * 1].get('noidung');
        fg.controls[h].get('text').setValue('');
    }
    setValidator() {
        this.isvalidator = true;
        alert('Tồn tại trường còn trống !');
        // console.log(
        //   this.checkbio + ' ' + this.checkSumAnswer + ' ' + this.isvalidator
        // );
    }
    fileLeave(event) { }
    dropped(files, index, h, bio) {
        const formData = new FormData();
        const droppedFile = files[0];
        // Is it a file?
        if (droppedFile.fileEntry.isFile) {
            const fileEntry = droppedFile.fileEntry;
            fileEntry.file((file) => {
                // Here you can access the real file
                // console.log(droppedFile.relativePath, file);
                formData.append('file', file);
                let dotfile = files[0].relativePath.split('.')[1];
                if (dotfile === 'jpg' || dotfile === 'png') {
                    // console.log(file);
                    this.ss.uploadImage(formData).subscribe((res) => {
                        if (res.status == 200) {
                            if (bio == 'avatar') {
                                this.TailieuFrom.get('avatar').setValue(file.name);
                                this.checkavatar = false;
                            }
                            if (bio == 'anh') {
                                const control = this.TailieuFrom.get('DsNoiDung');
                                // console.log(control.value);
                                const fg = (control.controls[index * 1].get('noidung'));
                                fg.controls[h].get('text').setValue(file.name);
                            }
                            // this.TailieuFrom.get('avatar').setValue(file.name);
                        }
                    }, (error) => {
                        console.log(error);
                    });
                }
                else {
                    this.isFile = true;
                }
            });
        }
        else {
            // It was a directory (empty directories are added, otherwise only files)
            const fileEntry = droppedFile.fileEntry;
            this.isFile = true;
        }
    }
    cancel() {
        window.history.back();
    }
    submit() {
        this.questionCheckbio = [];
        this.success = true;
        this.TailieuFrom.value.detailTest.map((it, ind) => {
            if (it.answers.length > 0) {
                this.flas = 0;
                it.answers.map((ite, inde) => {
                    if (ite.bio == true) {
                        this.flas++;
                    }
                });
                if (this.flas == 0) {
                    this.questionCheckbio.push(it.question);
                    this.checkbio = false;
                }
            }
            else {
                this.checkSumAnswer = false;
                this.success = false;
                alert('Bài giảng có chứa câu hỏi chưa hoàn tất !');
                return;
            }
        });
        if (this.questionCheckbio.length != 0 && this.checkbio == false) {
            this.success = false;
            alert('Bài giảng có chứa câu hỏi chưa hoàn tất !');
            return;
        }
        if (this.success) {
            let modal = this.ngModel.open(src_app_share_notification_notification_component__WEBPACK_IMPORTED_MODULE_2__["NotificationComponent"], {
                size: 'md',
                centered: true,
            });
            modal.componentInstance.title = `Thêm nội dung ${this.TailieuFrom.value.chuong.substring(0, 8)}`;
            modal.componentInstance.text = `Bạn đang muốn thêm nội dung của ${this.TailieuFrom.value.chuong.substring(0, 8)} ?`;
            modal.componentInstance.comfirm.subscribe((resp) => {
                if (resp) {
                    // let id = this.router.snapshot.paramMap.get('id');
                    this.docService.create(this.TailieuFrom.value).subscribe((res) => {
                        if (res) {
                            if (res.status == 200) {
                                alert('Tạo chương mới thành công !');
                                this.loadService.start();
                            }
                        }
                        this.loadService.stop();
                        window.history.back();
                    }, (error) => {
                        alert('Tiêu đề chương đã tồn tại. Hãy kiểm tra và thử lại sau !');
                    });
                }
            });
        }
        // console.log(this.TailieuFrom.value);
    }
}
TaodocsComponent.ɵfac = function TaodocsComponent_Factory(t) { return new (t || TaodocsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_docs_service__WEBPACK_IMPORTED_MODULE_4__["DocsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_share_share_service__WEBPACK_IMPORTED_MODULE_5__["ShareService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ngx_ui_loader__WEBPACK_IMPORTED_MODULE_6__["NgxUiLoaderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_tailieu_tailieu_service__WEBPACK_IMPORTED_MODULE_8__["TailieuService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"])); };
TaodocsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: TaodocsComponent, selectors: [["app-taodocs"]], decls: 36, vars: 8, consts: [[1, "mod-docs", "my-2", "d-flex", "mx-2"], [1, "mod-docs-box", "w-75", "p-3"], [1, "mt-3", 3, "formGroup"], [1, "ml-auto", "w-50", "mod-upload-box"], ["dropZoneLabel", "Drop files here", 3, "onFileDrop", "onFileOver", "onFileLeave", 4, "ngIf"], ["class", "rs", 4, "ngIf"], [1, "form-froup", "mb-2"], ["for", "noidung"], ["formControlName", "chuong", "required", "", "autofocus", "", "rows", "2", 1, "form-control", 3, "ngClass"], [1, "form-froup", "my-1"], [1, "w-100"], ["formArrayName", "DsNoiDung", 1, "p-0", "w-100"], ["class", "d-flex mb-1", 3, "formGroupName", 4, "ngFor", "ngForOf"], ["formArrayName", "detailTest"], [3, "formGroupName", 4, "ngFor", "ngForOf"], [1, "from-group"], [1, "btn", "btn-sm", "btn-outline-success", "mr-1", 3, "click"], [1, "btn", "btn-sm", "btn-outline-primary", "ml-1", 3, "click"], [1, "d-flex", "mt-3", "justify-conten-center"], [1, "form-group", "ml-auto", "w-auto"], [1, "btn", "btn-add", "text-light", "btn-sm", "px-3", 3, "click"], [3, "icon"], [1, "form-group", "w-auto"], [1, "btn", "text-light", "btn-cancel", "btn-sm", "mx-2", "px-3", 3, "click"], [1, "w-25", "float-right", "bg-light", "px-2", "px-2"], ["dropZoneLabel", "Drop files here", 3, "onFileDrop", "onFileOver", "onFileLeave"], ["ngx-file-drop-content-tmp", "", "class", "d-flex flex-column"], ["src", "../../../assets/Images/cloud-upload-outline-blue.png", "width", "100", "alt", "upload", 1, "mt-5"], [1, "mt-4"], [4, "ngIf"], ["type", "file", 3, "click"], [1, "rs"], [1, "close", 3, "click"], ["height", "50%", "width", "100%", "alt", "", 3, "src"], [1, "d-flex", "mb-1", 3, "formGroupName"], [1, "w-100", "p-3", "mb-2", "mod-docs-box-nd", "rs"], [1, "clo1", 3, "click"], [1, "form-froup"], ["formControlName", "tieuDe", "required", "", "placeholder", "Nh\u1EADp ti\u00EAu \u0111\u1EC1 cho n\u1ED9i dung", 1, "form-control", 3, "ngClass"], ["formArrayName", "noidung"], [1, "from-group", "mt-2"], ["title", "Th\u00EAm \u1EA3nh", 1, "btn", "btn-sm", "btn-outline-success", "mr-1", 3, "click"], ["title", "Th\u00EAm n\u1ED9i dung", 1, "btn", "btn-sm", "btn-outline-primary", "ml-1", 3, "click"], [3, "formGroupName"], ["class", "form-froup rs", 4, "ngIf"], [1, "form-froup", "rs"], [1, "clo", 3, "click"], ["placeholder", "N\u1ED9i dung v\u0103n b\u1EA3n", "formControlName", "text", "required", "", "rows", "3", 1, "form-control", 3, "ngClass"], [1, "mod-upload-box", "my-2", "rs", 3, "ngStyle"], ["class", "clo2", 3, "click", 4, "ngIf"], [1, "clo2", 3, "click"], [1, "mb-2", "mt-0", 3, "ngClass"], [1, "mod-baithi-content-Ch", "mb-2", "rs", 3, "ngClass"], ["aria-hidden", "true", 1, "close", "mr-1", 3, "click"], [1, "form-gruop"], [3, "for"], ["placeholder", "n\u1ED9i dung...", "name", "", "rows", "2", "formControlName", "question", 1, "form-control", 3, "id", "ngClass"], [1, "input-group", "mt-3", "rs"], [1, "ml-2"], ["formArrayName", "answers", 1, "w-100"], ["class", "d-flex mb-1 w-100", 3, "formGroupName", 4, "ngFor", "ngForOf"], [1, "float-right", "mod-baithi-content-Ch-answer", 3, "click"], [1, "d-flex", "mb-1", "w-100", 3, "formGroupName"], [1, "input-group", "mb-2"], ["for", "bio", 1, "input-group-prepend", "btn", "btn-xs", "rounded-sm", "mr-1", "p-0", "btn-outline-secondary", "f-flex", "justify-content-center", "align-items-center", 3, "ngClass"], ["type", "checkbox", "formControlName", "bio", 1, "input-group-text", "m-2"], ["type", "text", "formControlName", "answer", 1, "form-control", "mr-1", "form-control-sm", 3, "ngClass"], [1, "btn", "ml-2", "btn-sm", "btn-outline-danger", 3, "click"]], template: function TaodocsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Th\u00EAm Ch\u01B0\u01A1ng");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, TaodocsComponent_ngx_file_drop_6_Template, 2, 0, "ngx-file-drop", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, TaodocsComponent_div_7_Template, 4, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "T\u00EAn ch\u01B0\u01A1ng");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "textarea", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "N\u1ED9i dung");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, TaodocsComponent_div_17_Template, 15, 5, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, TaodocsComponent_ng_container_19_Template, 16, 7, "ng-container", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TaodocsComponent_Template_button_click_21_listener() { return ctx.addContent(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, " Th\u00EAm n\u1ED9i dung ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TaodocsComponent_Template_button_click_23_listener() { return ctx.addQuestion(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, " Th\u00EAm c\u00E2u h\u1ECFi ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TaodocsComponent_Template_button_click_27_listener() { return ctx.chuong.errors || ctx.TailieuFrom.get("detailTest").status === "INVALID" || !ctx.checkbio || !ctx.checkSumAnswer || ctx.TailieuFrom.get("DsNoiDung").status === "INVALID" ? ctx.setValidator() : ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, " L\u01B0u ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](29, "fa-icon", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TaodocsComponent_Template_button_click_31_listener() { return ctx.cancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, " H\u1EE7y ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](33, "fa-icon", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](35, "app-calendars");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.TailieuFrom);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.checkavatar);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.checkavatar);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx.chuong.errors && ctx.isvalidator ? "border-error" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.DsNoiDung.controls);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.detailTest.controls);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", ctx.faSave);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", ctx.faCandyCane);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormArrayName"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__["FaIconComponent"], _date_calendars_calendars_component__WEBPACK_IMPORTED_MODULE_12__["CalendarsComponent"], ngx_file_drop__WEBPACK_IMPORTED_MODULE_13__["NgxFileDropComponent"], ngx_file_drop__WEBPACK_IMPORTED_MODULE_13__["NgxFileDropContentTemplateDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupName"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgStyle"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["CheckboxControlValueAccessor"]], styles: [".mod-docs-box[_ngcontent-%COMP%] {\n  border-radius: 3px;\n  background: #fff;\n  box-shadow: 1px 2px 3px #cccaca;\n}\n.mod-docs-box-nd[_ngcontent-%COMP%] {\n  border-radius: 3px;\n  border: 1px solid #f0f0f0;\n  box-shadow: 1px 1px 1px #cccaca;\n}\n.clo2[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 5px;\n  right: 10px;\n  font-size: 22px;\n  cursor: pointer;\n  transition: all 0.4s;\n}\n.clo2[_ngcontent-%COMP%]:hover {\n  opacity: 0.5;\n}\n.clo[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 30px;\n  right: 10px;\n  font-size: 22px;\n  cursor: pointer;\n  transition: all 0.4s;\n}\n.clo[_ngcontent-%COMP%]:hover {\n  opacity: 0.5;\n}\n.clo1[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  font-size: 22px;\n  cursor: pointer;\n  transition: all 0.4s;\n}\n.clo1[_ngcontent-%COMP%]:hover {\n  opacity: 0.5;\n}\n.btn-add[_ngcontent-%COMP%] {\n  border-radius: 50px;\n  background: #4a90e2;\n  box-shadow: 1px 2px 13px #757373;\n  cursor: pointer;\n  transition: all 0.4s ease-in-out;\n}\n.btn-add[_ngcontent-%COMP%]:hover {\n  box-shadow: none;\n  opacity: 0.8;\n}\n.btn-cancel[_ngcontent-%COMP%] {\n  border-radius: 50px;\n  background: #f32f2f;\n  box-shadow: 1px 2px 13px #616060;\n  cursor: pointer;\n  transition: all 0.4s ease-in-out;\n}\n.btn-cancel[_ngcontent-%COMP%]:hover {\n  box-shadow: none;\n  opacity: 0.8;\n}\n.textError[_ngcontent-%COMP%] {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcdGFvZG9jcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrQkFBQTtBQUNGO0FBQUU7RUFDRSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsK0JBQUE7QUFFSjtBQUNBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7QUFFRjtBQURFO0VBQ0UsWUFBQTtBQUdKO0FBQUE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtBQUdGO0FBRkU7RUFDRSxZQUFBO0FBSUo7QUFEQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0FBSUY7QUFIRTtFQUNFLFlBQUE7QUFLSjtBQUZDO0VBQ0csbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdDQUFBO0VBQ0EsZUFBQTtFQUtBLGdDQUFBO0FBQ0o7QUFMSTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtBQU9OO0FBSEU7RUFDRSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0NBQUE7RUFDQSxlQUFBO0VBS0EsZ0NBQUE7QUFFSjtBQU5JO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0FBUU47QUFKRTtFQUNFLFVBQUE7QUFPSiIsImZpbGUiOiJ0YW9kb2NzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1vZC1kb2NzLWJveHtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBib3gtc2hhZG93OiAxcHggMnB4IDNweCByZ2IoMjA0LCAyMDIsIDIwMik7XHJcbiAgJi1uZHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGJvcmRlcjoxcHggc29saWQgI2YwZjBmMDtcclxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggMXB4IHJnYigyMDQsIDIwMiwgMjAyKTtcclxuICB9XHJcbn1cclxuLmNsbzJ7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNXB4O1xyXG4gIHJpZ2h0OiAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XHJcbiAgJjpob3ZlcntcclxuICAgIG9wYWNpdHk6IDAuNTtcclxuICB9XHJcbn1cclxuLmNsb3tcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAzMHB4O1xyXG4gIHJpZ2h0OiAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XHJcbiAgJjpob3ZlcntcclxuICAgIG9wYWNpdHk6IDAuNTtcclxuICB9XHJcbn1cclxuLmNsbzF7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMTBweDtcclxuICByaWdodDogMTBweDtcclxuICBmb250LXNpemU6IDIycHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjRzO1xyXG4gICY6aG92ZXJ7XHJcbiAgICBvcGFjaXR5OiAwLjU7XHJcbiAgfVxyXG59XHJcbiAuYnRuLWFkZCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgYmFja2dyb3VuZDogIzRhOTBlMjtcclxuICAgIGJveC1zaGFkb3c6IDFweCAycHggMTNweCByZ2IoMTE3LCAxMTUsIDExNSk7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgb3BhY2l0eTogMC44O1xyXG4gICAgfVxyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XHJcbiAgfVxyXG4gIC5idG4tY2FuY2VsIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjQzLCA0NywgNDcpO1xyXG4gICAgYm94LXNoYWRvdzogMXB4IDJweCAxM3B4IHJnYig5NywgOTYsIDk2KTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICY6aG92ZXIge1xyXG4gICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICBvcGFjaXR5OiAwLjg7XHJcbiAgICB9XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcclxuICB9XHJcbiAgLnRleHRFcnJvcntcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgfVxyXG4iXX0= */"] });


/***/ }),

/***/ "08DL":
/*!********************************************!*\
  !*** ./src/app/entity/docs/docs.module.ts ***!
  \********************************************/
/*! exports provided: DocsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocsModule", function() { return DocsModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _docs_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./docs-routing.module */ "PXKb");
/* harmony import */ var _docs_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./docs.component */ "ZnMD");
/* harmony import */ var _taodocs_taodocs_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./taodocs/taodocs.component */ "/+xA");
/* harmony import */ var _detaildocs_detaildocs_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./detaildocs/detaildocs.component */ "1/HQ");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-pagination */ "oOf3");
/* harmony import */ var ngx_file_drop__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-file-drop */ "gfTr");
/* harmony import */ var src_app_date_calendars_calendars_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/date/calendars/calendars.module */ "wp3R");
/* harmony import */ var _show_show_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./show/show.component */ "Q84P");
/* harmony import */ var _update_docs_update_docs_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./update-docs/update-docs.component */ "lPn3");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ "fXoL");














class DocsModule {
}
DocsModule.ɵfac = function DocsModule_Factory(t) { return new (t || DocsModule)(); };
DocsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({ type: DocsModule });
DocsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _docs_routing_module__WEBPACK_IMPORTED_MODULE_1__["DocsRoutingModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            ngx_pagination__WEBPACK_IMPORTED_MODULE_7__["NgxPaginationModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            ngx_file_drop__WEBPACK_IMPORTED_MODULE_8__["NgxFileDropModule"],
            src_app_date_calendars_calendars_module__WEBPACK_IMPORTED_MODULE_9__["CalendarsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](DocsModule, { declarations: [_docs_component__WEBPACK_IMPORTED_MODULE_2__["DocsComponent"],
        _taodocs_taodocs_component__WEBPACK_IMPORTED_MODULE_3__["TaodocsComponent"],
        _detaildocs_detaildocs_component__WEBPACK_IMPORTED_MODULE_4__["DetaildocsComponent"],
        _show_show_component__WEBPACK_IMPORTED_MODULE_10__["ShowComponent"],
        _update_docs_update_docs_component__WEBPACK_IMPORTED_MODULE_11__["UpdateDocsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _docs_routing_module__WEBPACK_IMPORTED_MODULE_1__["DocsRoutingModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
        ngx_pagination__WEBPACK_IMPORTED_MODULE_7__["NgxPaginationModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
        ngx_file_drop__WEBPACK_IMPORTED_MODULE_8__["NgxFileDropModule"],
        src_app_date_calendars_calendars_module__WEBPACK_IMPORTED_MODULE_9__["CalendarsModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbModule"]] }); })();


/***/ }),

/***/ "1/HQ":
/*!****************************************************************!*\
  !*** ./src/app/entity/docs/detaildocs/detaildocs.component.ts ***!
  \****************************************************************/
/*! exports provided: DetaildocsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetaildocsComponent", function() { return DetaildocsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class DetaildocsComponent {
    constructor() { }
    ngOnInit() {
    }
}
DetaildocsComponent.ɵfac = function DetaildocsComponent_Factory(t) { return new (t || DetaildocsComponent)(); };
DetaildocsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DetaildocsComponent, selectors: [["app-detaildocs"]], decls: 2, vars: 0, template: function DetaildocsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "detaildocs works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZXRhaWxkb2NzLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "PXKb":
/*!****************************************************!*\
  !*** ./src/app/entity/docs/docs-routing.module.ts ***!
  \****************************************************/
/*! exports provided: DocsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocsRoutingModule", function() { return DocsRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _docs_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./docs.component */ "ZnMD");
/* harmony import */ var _show_show_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./show/show.component */ "Q84P");
/* harmony import */ var _update_docs_update_docs_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./update-docs/update-docs.component */ "lPn3");
/* harmony import */ var _taodocs_taodocs_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./taodocs/taodocs.component */ "/+xA");
/* harmony import */ var src_app_core_auth_guard_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/auth/guard-auth.guard */ "ZYSj");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");








const routes = [
    {
        path: '',
        component: _docs_component__WEBPACK_IMPORTED_MODULE_1__["DocsComponent"],
        data: { functions: ['baigiangs'], pageTitle: 'tất cả câu hỏi' },
        canActivate: [src_app_core_auth_guard_auth_guard__WEBPACK_IMPORTED_MODULE_5__["GuardAuthGuard"]],
    },
    {
        path: 'themtailieu',
        component: _taodocs_taodocs_component__WEBPACK_IMPORTED_MODULE_4__["TaodocsComponent"],
        data: { functions: ['thembaigiang'], pageTitle: 'tất cả câu hỏi' },
        canActivate: [src_app_core_auth_guard_auth_guard__WEBPACK_IMPORTED_MODULE_5__["GuardAuthGuard"]],
    },
    { path: 'chuong/:id', component: _show_show_component__WEBPACK_IMPORTED_MODULE_2__["ShowComponent"] },
    {
        path: 'thaydoitailieu/:id',
        component: _update_docs_update_docs_component__WEBPACK_IMPORTED_MODULE_3__["UpdateDocsComponent"],
        data: { functions: ['thaydoibaigiang'], pageTitle: 'tất cả câu hỏi' },
        canActivate: [src_app_core_auth_guard_auth_guard__WEBPACK_IMPORTED_MODULE_5__["GuardAuthGuard"]],
    },
];
class DocsRoutingModule {
}
DocsRoutingModule.ɵfac = function DocsRoutingModule_Factory(t) { return new (t || DocsRoutingModule)(); };
DocsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: DocsRoutingModule });
DocsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](DocsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "Q84P":
/*!****************************************************!*\
  !*** ./src/app/entity/docs/show/show.component.ts ***!
  \****************************************************/
/*! exports provided: ShowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowComponent", function() { return ShowComponent; });
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _docs_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../docs.service */ "as2T");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _tailieu_tailieu_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../tailieu/tailieu.service */ "05Dk");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");










const _c0 = function (a1) { return ["/baigiang/thaydoitailieu", a1]; };
function ShowComponent_div_2_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "fa-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](2, _c0, ctx_r5.Tailieu._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx_r5.faEdit);
} }
function ShowComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ShowComponent_div_2_a_1_Template, 2, 4, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.authorities != "SV" && ctx_r0.authorities != "ADMIN");
} }
function ShowComponent_img_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 14);
} }
function ShowComponent_div_7_ng_container_4_ng_container_5_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const nd_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](nd_r11.text);
} }
function ShowComponent_div_7_ng_container_4_ng_container_5_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const nd_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("src", "http://localhost:3000/static/image/", nd_r11.text, "", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function ShowComponent_div_7_ng_container_4_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ShowComponent_div_7_ng_container_4_ng_container_5_div_1_Template, 3, 1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ShowComponent_div_7_ng_container_4_ng_container_5_div_2_Template, 2, 1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const nd_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", nd_r11.bio == "text");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", nd_r11.bio == "anh");
} }
function ShowComponent_div_7_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, ShowComponent_div_7_ng_container_4_ng_container_5_Template, 3, 2, "ng-container", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r8.tieuDe);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", item_r8.noidung);
} }
function ShowComponent_div_7_ng_container_5_ng_container_4_div_6_div_2_input_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "input", 43);
} }
function ShowComponent_div_7_ng_container_5_ng_container_4_div_6_div_2_input_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "input", 44);
} }
function ShowComponent_div_7_ng_container_5_ng_container_4_div_6_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ShowComponent_div_7_ng_container_5_ng_container_4_div_6_div_2_input_1_Template, 1, 0, "input", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ShowComponent_div_7_ng_container_5_ng_container_4_div_6_div_2_input_2_Template, 1, 0, "input", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r23.checkAnserUser.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r23.checkAnserUser.length > 0);
} }
function ShowComponent_div_7_ng_container_5_ng_container_4_div_6_div_3_input_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "input", 47);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", true);
} }
function ShowComponent_div_7_ng_container_5_ng_container_4_div_6_div_3_input_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "input", 48);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", true);
} }
function ShowComponent_div_7_ng_container_5_ng_container_4_div_6_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ShowComponent_div_7_ng_container_5_ng_container_4_div_6_div_3_input_1_Template, 1, 1, "input", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ShowComponent_div_7_ng_container_5_ng_container_4_div_6_div_3_input_2_Template, 1, 1, "input", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r24.checkAnserUser.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r24.checkAnserUser.length == 0);
} }
function ShowComponent_div_7_ng_container_5_ng_container_4_div_6_label_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "label", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ans_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ans_r21.value.answer);
} }
function ShowComponent_div_7_ng_container_5_ng_container_4_div_6_label_5_fa_icon_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "fa-icon", 52);
} if (rf & 2) {
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx_r32.faCheck);
} }
function ShowComponent_div_7_ng_container_5_ng_container_4_div_6_label_5_fa_icon_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "fa-icon", 53);
} if (rf & 2) {
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx_r33.faCheck);
} }
function ShowComponent_div_7_ng_container_5_ng_container_4_div_6_label_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "label", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ShowComponent_div_7_ng_container_5_ng_container_4_div_6_label_5_fa_icon_2_Template, 1, 1, "fa-icon", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, ShowComponent_div_7_ng_container_5_ng_container_4_div_6_label_5_fa_icon_3_Template, 1, 1, "fa-icon", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const ans_r21 = ctx_r34.$implicit;
    const j_r22 = ctx_r34.index;
    const i_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().index;
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ans_r21.value.answer, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ans_r21.value.bio == true && ctx_r26.checkAnserUser[i_r19][j_r22] == true || ctx_r26.checkAnserUser[i_r19][j_r22] == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ans_r21.value.bio == true && ctx_r26.checkAnserUser[i_r19][j_r22] == false);
} }
function ShowComponent_div_7_ng_container_5_ng_container_4_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ShowComponent_div_7_ng_container_5_ng_container_4_div_6_div_2_Template, 3, 2, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, ShowComponent_div_7_ng_container_5_ng_container_4_div_6_div_3_Template, 3, 2, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, ShowComponent_div_7_ng_container_5_ng_container_4_div_6_label_4_Template, 2, 1, "label", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, ShowComponent_div_7_ng_container_5_ng_container_4_div_6_label_5_Template, 4, 3, "label", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const j_r22 = ctx.index;
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const i_r19 = ctx_r36.index;
    const content_r18 = ctx_r36.$implicit;
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroupName", j_r22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r20.typeAnswer[i_r19]._id == content_r18.value._id && ctx_r20.typeAnswer[i_r19].length > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r20.typeAnswer[i_r19]._id == content_r18.value._id && ctx_r20.typeAnswer[i_r19].length == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r20.checkAnserUser.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r20.checkAnserUser.length > 0);
} }
function ShowComponent_div_7_ng_container_5_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0, 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, ShowComponent_div_7_ng_container_5_ng_container_4_div_6_Template, 6, 5, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const content_r18 = ctx.$implicit;
    const i_r19 = ctx.index;
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroupName", i_r19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx_r17.CheckChoose.indexOf(content_r18.value._id) != -1 ? "border-error" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](content_r18.value.question);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", content_r18.get("answers").controls);
} }
function ShowComponent_div_7_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\u00D4n t\u1EADp ki\u1EBFn th\u1EE9c ch\u01B0\u01A1ng");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, ShowComponent_div_7_ng_container_5_ng_container_4_Template, 7, 4, "ng-container", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ShowComponent_div_7_ng_container_5_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r38); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r37.checkTrueFalse(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "G\u1EEDi");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r7.formDetailTest);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r7.detailTest.controls);
} }
function ShowComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, ShowComponent_div_7_ng_container_4_Template, 6, 2, "ng-container", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, ShowComponent_div_7_ng_container_5_Template, 8, 2, "ng-container", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.Tailieu.chuong);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r2.Tailieu.DsNoiDung);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.Tailieu.detailTest.length > 0);
} }
function ShowComponent_div_12_2_ng_template_0_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 59);
} if (rf & 2) {
    const item_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("src", "http://localhost:3000/static/image/", item_r40.avatar, "", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function ShowComponent_div_12_2_ng_template_0_img_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 60);
} }
const _c1 = function (a1) { return ["/nhacuatoi/dethi", a1]; };
function ShowComponent_div_12_2_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ShowComponent_div_12_2_ng_template_0_img_1_Template, 1, 1, "img", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ShowComponent_div_12_2_ng_template_0_img_2_Template, 1, 0, "img", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](3, _c1, item_r40._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r40.avatar != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r40.avatar == "");
} }
function ShowComponent_div_12_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, ShowComponent_div_12_2_ng_template_0_Template, 3, 5, "ng-template", 55);
} }
function ShowComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ngb-carousel");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ShowComponent_div_12_2_Template, 1, 0, undefined, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r3.Dethi);
} }
function ShowComponent_div_13_6_ng_template_0_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 59);
} if (rf & 2) {
    const item_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("src", "http://localhost:3000/static/image/", item_r47.avatar, "", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function ShowComponent_div_13_6_ng_template_0_img_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 60);
} }
function ShowComponent_div_13_6_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ShowComponent_div_13_6_ng_template_0_img_1_Template, 1, 1, "img", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ShowComponent_div_13_6_ng_template_0_img_2_Template, 1, 0, "img", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](3, _c1, item_r47._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r47.avatar != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r47.avatar == "");
} }
function ShowComponent_div_13_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, ShowComponent_div_13_6_ng_template_0_Template, 3, 5, "ng-template", 55);
} }
function ShowComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h5", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Cu\u1ED9c thi d\u00E0nh cho b\u1EA1n");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "ngb-carousel");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, ShowComponent_div_13_6_Template, 1, 0, undefined, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r4.DethiUse);
} }
class ShowComponent {
    constructor(docsService, router, fb, tailieuService) {
        this.docsService = docsService;
        this.router = router;
        this.fb = fb;
        this.tailieuService = tailieuService;
        this.faCheck = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faCheck"];
        this.faEdit = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faEdit"];
        this.Dethi = [];
        this.DethiUse = [];
        this.CheckChoose = [];
        this.checkAnserUser = []; // chua taats ca ddois tuong SortAnser
        this.StorAnser = []; // luu cacs ddaps ans dung
        this.params = {
            current_page: 1,
            limit: 5,
            sort: '_id',
            reverse: false,
            search: '',
            theme: '',
            level: '',
        };
        this.formDetailTest = this.fb.group({
            detailTest: this.fb.array([]),
        });
        let proFile = JSON.parse(localStorage.getItem('listProfiles'));
        this.authorities = proFile.authorities;
        this.getDocsById();
        this.getDethibyClass();
        this.loadAllTrue(1);
    }
    ngOnInit() { }
    get detailTest() {
        return this.formDetailTest.get('detailTest'); // get list answer
    }
    getDocsById() {
        let id = this.router.snapshot.paramMap.get('id');
        this.docsService.getDocsById(id).subscribe((res) => {
            // console.log(res.body.data);
            this.PassDataToForm(res.body.data);
            this.Tailieu = res.body.data;
            this.setTypeAnswer(res.body.data);
        }, (error) => {
            console.log(error);
        });
    }
    PassDataToForm(data) {
        // console.log(data);
        const controlTest = this.formDetailTest.get('detailTest');
        data.detailTest.map((item, index) => {
            let fg = this.fb.group({
                _id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](item._id),
                question: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](item.question, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
                answers: this.fb.array([]),
            });
            controlTest.push(fg);
            const ans = controlTest.controls[index * 1].get('answers');
            item.answers.map((ite, index) => {
                let noidung = this.fb.group({
                    answer: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](ite.answer, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
                    bio: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false),
                });
                ans.push(noidung);
            });
        });
    }
    checkTrueFalse() {
        this.CheckChoose = [];
        // console.log(this.formDetailTest.value);
        const data = this.formDetailTest.value.detailTest;
        data.map((item, index) => {
            this.flagCheckChoose = true;
            item.answers.map((ans, inde) => {
                if (ans.bio) {
                    this.flagCheckChoose = false;
                }
            });
            if (this.flagCheckChoose == true) {
                this.CheckChoose.push(item._id);
            }
        });
        // console.log(this.formDetailTest.value);
        // console.log(this.CheckChoose);
        if (this.CheckChoose.length == 0) {
            // console.log(this.Tailieu);
            // console.log(this.formDetailTest.value.detailTest);
            const data = this.Tailieu.detailTest;
            this.checkAnserUser = [];
            this.Tailieu.detailTest.map((item, index) => {
                this.StorAnser = [];
                item.answers.map((ans, inde) => {
                    if (data[index].answers[inde].bio &&
                        ans.bio &&
                        ans.answer == data[index].answers[inde].answer) {
                        this.StorAnser.push(true);
                    }
                    else {
                        this.StorAnser.push(false);
                    }
                });
                this.checkAnserUser.push(this.StorAnser);
            });
            // console.log(this.checkAnserUser);
            // console.log(this.formDetailTest.value);
        }
    }
    loadAllTrue(page) {
        // cuộc thi danh cho bạn
        if (page < 0 || !page) {
            page = 1;
        }
        this.tailieuService.loadAllDethi(this.params).subscribe((res) => {
            this.Dethi = res.body.data;
            // console.log(this.Dethi)
        }, (error) => {
            console.log(error);
        });
    }
    getDethibyClass() {
        let listProfiles = JSON.parse(localStorage.getItem('listProfiles'));
        if (listProfiles) {
            this.tailieuService.loadDethibyclass(listProfiles._id).subscribe((res) => {
                this.DethiUse = res.body.data;
                // console.log(this.DethiUse);
            }, (error) => {
                console.log(error);
            });
        }
    }
    setTypeAnswer(data) {
        this.typeAnswer = [];
        data.detailTest.map((nd, inde) => {
            this.checkLengthAnswerTrue = 0;
            nd.answers.map((ans, ind) => {
                if (ans.bio) {
                    this.checkLengthAnswerTrue += 1;
                }
            });
            const ans = {
                _id: nd._id,
                length: this.checkLengthAnswerTrue,
            };
            // console.log(ans);
            this.typeAnswer.push(ans);
            // console.log(this.typeAnswer);
            // console.log(this.formDetailTest);
        });
    }
}
ShowComponent.ɵfac = function ShowComponent_Factory(t) { return new (t || ShowComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_docs_service__WEBPACK_IMPORTED_MODULE_3__["DocsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_tailieu_tailieu_service__WEBPACK_IMPORTED_MODULE_5__["TailieuService"])); };
ShowComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ShowComponent, selectors: [["app-show"]], decls: 15, vars: 5, consts: [[1, "mod-show", "my-2", "d-flex"], [1, "w-75", "p-2", "mod-show-content", "py-5", "px-4"], ["class", "rs", 4, "ngIf"], [1, "d-flex", "flex-column", "w-100", "align-items-center"], ["src", "../../../../assets/Images/mmt.jpg", "width", "30%", "height", "30%", "alt", "", 4, "ngIf"], [4, "ngIf"], [1, "w-25", "float-right", "bg-light", "px-2", "px-2"], [1, "mod-true", "px-2", "py-3", "ml-1", "mod-tailieu-test"], [1, "text-center"], ["class", "mt-3", 4, "ngIf"], [1, "rs"], ["class", "btn btn-sm btn-primary update", 3, "routerLink", 4, "ngIf"], [1, "btn", "btn-sm", "btn-primary", "update", 3, "routerLink"], [3, "icon"], ["src", "../../../../assets/Images/mmt.jpg", "width", "30%", "height", "30%", "alt", ""], [1, "mod-chuong", "mt-5"], [4, "ngFor", "ngForOf"], [3, "formGroup", 4, "ngIf"], [1, "mod-noidung"], [1, "mod-tieude"], ["class", "mod-noidung-text", 4, "ngIf"], ["class", "mod-noidung-anh w-100 d-flex justify-content-center", 4, "ngIf"], [1, "mod-noidung-text"], [1, "mod-noidung-anh", "w-100", "d-flex", "justify-content-center"], ["alt", "anh", "height", "50%", "width", "70%", 1, "align-self-center", 3, "src"], [3, "formGroup"], ["formArrayName", "detailTest", 1, "form-group", "mod-cau", "p-4"], [3, "formGroupName", 4, "ngFor", "ngForOf"], [1, "ml-auto"], [1, "btn", "btn-sm", "btn-primary", 3, "click"], [3, "formGroupName"], [1, "p-3", "my-2", "mod-cauhoi", 3, "ngClass"], ["for", "ques", 1, "mod-cauhoi-question", 2, "word-wrap", "break-word"], ["formArrayName", "answers", 1, "input-group", "d-flex", "mb-2"], [1, "w-100"], ["class", "d-flex mb-1", 3, "formGroupName", 4, "ngFor", "ngForOf"], [1, "d-flex", "mb-1", 3, "formGroupName"], [1, "w-100", "d-flex"], ["class", "align-items-center align-self-center input-group-prepend btn btn-xs  rounded-sm mr-1 p-0 btn-outline-secondary f-flex justify-content-center align-items-center", 4, "ngIf"], ["style", "word-wrap: break-word", "class", "w-75", 4, "ngIf"], [1, "align-items-center", "align-self-center", "input-group-prepend", "btn", "btn-xs", "rounded-sm", "mr-1", "p-0", "btn-outline-secondary", "f-flex", "justify-content-center", "align-items-center"], ["type", "checkbox", "formControlName", "bio", "class", "input-group-text m-2 ", 4, "ngIf"], ["disabled", "", "type", "checkbox", "formControlName", "bio", "class", "input-group-text m-2 ", 4, "ngIf"], ["type", "checkbox", "formControlName", "bio", 1, "input-group-text", "m-2"], ["disabled", "", "type", "checkbox", "formControlName", "bio", 1, "input-group-text", "m-2"], ["disabled", "", "type", "radio", "formControlName", "bio", "class", "input-group-text m-2 ", 3, "value", 4, "ngIf"], ["type", "radio", "formControlName", "bio", "class", "input-group-text m-2 ", 3, "value", 4, "ngIf"], ["disabled", "", "type", "radio", "formControlName", "bio", 1, "input-group-text", "m-2", 3, "value"], ["type", "radio", "formControlName", "bio", 1, "input-group-text", "m-2", 3, "value"], [1, "w-75", 2, "word-wrap", "break-word"], ["class", "text-success mr-1", 3, "icon", 4, "ngIf"], ["class", "text-danger mr-1", 3, "icon", 4, "ngIf"], [1, "text-success", "mr-1", 3, "icon"], [1, "text-danger", "mr-1", 3, "icon"], [1, "mt-3"], ["ngbSlide", ""], [1, "picsum-img-wrapper", 3, "routerLink"], ["class", "d-block h-100 w-100", "alt", "...", 3, "src", 4, "ngIf"], ["src", "../../../assets/Images/text7.jpg", "class", "d-block w-100 h-100", "alt", "...", 4, "ngIf"], ["alt", "...", 1, "d-block", "h-100", "w-100", 3, "src"], ["src", "../../../assets/Images/text7.jpg", "alt", "...", 1, "d-block", "w-100", "h-100"]], template: function ShowComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ShowComponent_div_2_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Gi\u00E1o tr\u00ECnh Qu\u1EA3n tr\u1ECB m\u1EA1ng v\u00E0 Thi\u1EBFt b\u1ECB m\u1EA1ng");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, ShowComponent_img_6_Template, 1, 0, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, ShowComponent_div_7_Template, 6, 3, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "h5", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Cu\u1ED9c thi s\u1EAFp di\u1EC5n ra");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, ShowComponent_div_12_Template, 3, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, ShowComponent_div_13_Template, 7, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.Tailieu);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.authorities != "SV");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.Tailieu);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.Dethi);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.DethiUse.length > 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FaIconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArrayName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbCarousel"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbSlide"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"]], styles: [".mod-show[_ngcontent-%COMP%] {\n  font-family: \"Times New Roman\";\n}\n.mod-show[_ngcontent-%COMP%]   .mod-show-content[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 3px;\n  border: 1px solid #ececec;\n}\n.mod-show[_ngcontent-%COMP%]   .mod-show-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 30px;\n  text-transform: uppercase;\n  margin-bottom: 15px;\n}\n.mod-show[_ngcontent-%COMP%]   .mod-show-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 700;\n}\n.mod-show[_ngcontent-%COMP%]   .mod-show-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-weight: 600;\n  margin: 5px 0;\n}\n.mod-show[_ngcontent-%COMP%]   .mod-show-content[_ngcontent-%COMP%]   .mod-noidung-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.update[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -30px;\n  right: 10px;\n}\n.mod-cau[_ngcontent-%COMP%] {\n  background: #faf9f9;\n  border-radius: 5px;\n  border: 1px solid #e2e2e2;\n}\n.mod-cau[_ngcontent-%COMP%]   .mod-cauhoi[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 5px;\n  border: 1px solid #e2e2e2;\n}\n.mod-cau[_ngcontent-%COMP%]   .mod-cauhoi-question[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 600;\n}\n.mod-tailieu[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 5px;\n}\n.mod-tailieu-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 21px;\n}\n.mod-tailieu-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.mod-tailieu-test[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 25px;\n}\n.mod-tailieu-test[_ngcontent-%COMP%]   .mod-true[_ngcontent-%COMP%] {\n  border: 1px solid #dbdada;\n  border-right: 5px;\n  min-height: 350px;\n  background: #fff;\n}\n.mod-tailieu-test[_ngcontent-%COMP%]   .mod-true[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcc2hvdy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDhCQUFBO0FBQ0Y7QUFBQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQUVGO0FBREU7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FBR0o7QUFERTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQUdKO0FBREU7RUFDRSxnQkFBQTtFQUNBLGFBQUE7QUFHSjtBQUNNO0VBQ0UsZUFBQTtBQUNSO0FBS0E7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FBRkY7QUFJQTtFQUNBLG1CQUFBO0VBQ0Usa0JBQUE7RUFDQSx5QkFBQTtBQURGO0FBRUE7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUFBRjtBQUNFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FBQ0o7QUFJQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7QUFERjtBQUlNO0VBQ0UsZUFBQTtBQUZSO0FBR1E7RUFDRSxnQkFBQTtBQURWO0FBT0E7RUFDRSxnQkFBQTtFQUNBLFNBQUE7QUFKRjtBQUtFO0VBQ0UseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFISjtBQUlJO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FBRk4iLCJmaWxlIjoic2hvdy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tb2Qtc2hvd3tcclxuICBmb250LWZhbWlseTogJ1RpbWVzIE5ldyBSb21hbic7XHJcbi5tb2Qtc2hvdy1jb250ZW50e1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIGJvcmRlcjoxcHggc29saWQgcmdiKDIzNiwgMjM2LCAyMzYpO1xyXG4gIGgye1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gIH1cclxuICBoM3tcclxuICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgfVxyXG4gIGg0e1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIG1hcmdpbjogNXB4IDA7XHJcbiAgfVxyXG4gIC5tb2Qtbm9pZHVuZ3tcclxuICAgICYtdGV4dHtcclxuICAgICAgcHtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxufVxyXG4udXBkYXRle1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IC0zMHB4O1xyXG4gIHJpZ2h0OiAxMHB4O1xyXG59XHJcbi5tb2QtY2F1e1xyXG5iYWNrZ3JvdW5kOiByZ2IoMjUwLCAyNDksIDI0OSk7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJvcmRlcjoxcHggc29saWQgcmdiKDIyNiwgMjI2LCAyMjYpO1xyXG4ubW9kLWNhdWhvaXtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBib3JkZXI6MXB4IHNvbGlkIHJnYigyMjYsIDIyNiwgMjI2KTtcclxuICAmLXF1ZXN0aW9ue1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB9XHJcbn1cclxuXHJcbn1cclxuLm1vZC10YWlsaWV1IHtcclxuICBiYWNrZ3JvdW5kOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICYtY29udGVudCB7XHJcbiAgICB1bCB7XHJcbiAgICAgIGxpIHtcclxuICAgICAgICBmb250LXNpemU6IDIxcHg7XHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4ubW9kLXRhaWxpZXUtdGVzdCB7XHJcbiAgcG9zaXRpb246IHN0aWNreTtcclxuICB0b3A6IDI1cHg7XHJcbiAgLm1vZC10cnVlIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyMTksIDIxOCwgMjE4KTtcclxuICAgIGJvcmRlci1yaWdodDogNXB4O1xyXG4gICAgbWluLWhlaWdodDogMzUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgaDUge1xyXG4gICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4iXX0= */"] });


/***/ }),

/***/ "ZnMD":
/*!***********************************************!*\
  !*** ./src/app/entity/docs/docs.component.ts ***!
  \***********************************************/
/*! exports provided: DocsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocsComponent", function() { return DocsComponent; });
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var src_app_share_notification_notification_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/share/notification/notification.component */ "WdHK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _docs_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./docs.service */ "as2T");
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-ui-loader */ "gren");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-pagination */ "oOf3");
/* harmony import */ var _date_calendars_calendars_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../date/calendars/calendars.component */ "c7RR");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");












const _c0 = function () { return ["/baigiang/themtailieu"]; };
function DocsComponent_a_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Th\u00EAm ch\u01B0\u01A1ng");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](1, _c0));
} }
const _c1 = function (a1) { return ["/baigiang/thaydoitailieu", a1]; };
function DocsComponent_div_11_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DocsComponent_div_11_div_1_div_2_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r17); const item_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r15.delete(item_r9._id, item_r9.chuong); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "fa-icon", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "fa-icon", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx_r11.faTrash);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](3, _c1, item_r9._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx_r11.faEdit);
} }
function DocsComponent_div_11_div_1_img_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 37);
} if (rf & 2) {
    const item_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("src", "http://localhost:3000/static/image/", item_r9.avatar, "", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function DocsComponent_div_11_div_1_img_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 38);
} }
function DocsComponent_div_11_div_1_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const item_r9 = ctx_r20.$implicit;
    const i_r10 = ctx_r20.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", item_r9.DsNoiDung[0].noidung[i_r10].bio === "text" ? item_r9.DsNoiDung[0].noidung[i_r10].text.substring(0, 40) + "...." : "", "");
} }
const _c2 = function (a1) { return ["/baigiang/chuong", a1]; };
function DocsComponent_div_11_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, DocsComponent_div_11_div_1_div_2_Template, 5, 5, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, DocsComponent_div_11_div_1_img_4_Template, 1, 1, "img", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, DocsComponent_div_11_div_1_img_5_Template, 1, 0, "img", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "h5", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, DocsComponent_div_11_div_1_span_10_Template, 2, 1, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r9 = ctx.$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r8.authorities != "SV");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](6, _c2, item_r9._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r9.avatar != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r9.avatar == "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", item_r9.chuong.substring(0, 30).toUpperCase(), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r9.DsNoiDung[0].noidung.length > 0);
} }
const _c3 = function (a1, a2, a3) { return { id: "server", itemsPerPage: a1, currentPage: a2, totalItems: a3 }; };
function DocsComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, DocsComponent_div_11_div_1_Template, 11, 8, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "paginate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](2, 1, ctx_r2.Chuong, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction3"](4, _c3, ctx_r2.params.limit, ctx_r2.params.current_page, ctx_r2.total_records)));
} }
function DocsComponent_img_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 39);
} }
function DocsComponent_img_25_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "img", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DocsComponent_img_25_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r22); _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](22); return _r3.previous(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function DocsComponent_img_26_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "img", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DocsComponent_img_26_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r24); _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](22); return _r3.next(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function DocsComponent_img_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 42);
} }
class DocsComponent {
    constructor(docService, loadService, ngModel) {
        this.docService = docService;
        this.loadService = loadService;
        this.ngModel = ngModel;
        this.Chuong = [];
        this.faTrash = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faTrash"];
        this.faEdit = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faEdit"];
        this.params = {
            current_page: 1,
            limit: 6,
            search: '',
        };
        this.start = 0;
        this.end = 10;
        let proFile = JSON.parse(localStorage.getItem('listProfiles'));
        this.authorities = proFile.authorities;
        this.getAll();
        this.loadAll(this.params.current_page);
    }
    ngOnInit() { }
    getAll() {
        this.docService.loadAll().subscribe((res) => {
            if (res) {
                this.total_records = res.body.data.length;
                // console.log(res);
            }
        }, (error) => {
            console.log(error);
        });
    }
    loadAll(page) {
        if (page < 0 || !page) {
            page = 1;
        }
        // check role
        // class
        this.params.current_page = page;
        this.docService.getAll(this.params).subscribe((res) => {
            // console.log(res);
            this.Chuong = res.body.data;
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
    changeSearch(e) {
        this.params.page_current = 1;
        this.params.search = e;
        this.loadAll(this.params.page_curent);
    }
    delete(id, name) {
        let modal = this.ngModel.open(src_app_share_notification_notification_component__WEBPACK_IMPORTED_MODULE_1__["NotificationComponent"], {
            size: 'md',
            centered: true,
        });
        modal.componentInstance.title = `Xóa nội dung ${name.substring(0, 8)}`;
        modal.componentInstance.text = `Bạn đang muốn xóa nội dung của ${name.substring(0, 8)} ?`;
        modal.componentInstance.comfirm.subscribe((resp) => {
            if (resp) {
                this.docService.delete(id).subscribe((res) => {
                    // console.log(res);
                    if (res.status == 200) {
                        alert(`Xóa nội dung chương ${name.substring(0, 8)} thành công`);
                        this.loadService.start();
                        this.loadAll(1);
                    }
                    this.loadService.stop();
                }, (error) => {
                    console.log(error);
                });
            }
        });
    }
}
DocsComponent.ɵfac = function DocsComponent_Factory(t) { return new (t || DocsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_docs_service__WEBPACK_IMPORTED_MODULE_3__["DocsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_ui_loader__WEBPACK_IMPORTED_MODULE_4__["NgxUiLoaderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"])); };
DocsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: DocsComponent, selectors: [["app-docs"]], decls: 30, vars: 10, consts: [[1, "mod-myhome", "d-flex", "mt-3"], [1, "w-75", "px-3", "py-4"], [1, "d-flex", "justify-content-between"], [1, "form-input", "w-50", "d-flex"], ["type", "text", "name", "cuothi", "id", "", "placeholder", "T\u00ECm ki\u1EBFm theo ch\u01B0\u01A1ng...", "name", "", "id", "", 1, "form-control", "mr-1", "form-control-sm", 3, "ngModel", "ngModelChange"], ["state", ""], ["class", "btn form-control w-75 form-control-sm ml-1 btn-sm btn-primary", 3, "routerLink", 4, "ngIf"], [1, "mod-myhome-content", "p-4"], ["class", "row mt-2", 4, "ngIf"], [1, "mt-5"], [1, "text-right", "my-2", "filter-table"], [1, "text-lowercase"], ["id", "server", 3, "pageChange"], ["p", "paginationApi"], [1, "custom-pagination"], ["class", "ml-2 inactive", "src", "../../../assets/Images/icon-arrow-left.svg", 4, "ngIf"], ["class", "ml-2", "src", "../../../assets/Images/icon-arrow-left.svg", 3, "click", 4, "ngIf"], ["class", "mr-5", "src", "../../../assets/Images/icon-arrow-right.svg", 3, "click", 4, "ngIf"], ["class", "mr-5 inactive", "src", "../../../assets/Images/icon-arrow-right.svg", 4, "ngIf"], [1, "w-25", "mt-5", "float-right"], [1, "btn", "form-control", "w-75", "form-control-sm", "ml-1", "btn-sm", "btn-primary", 3, "routerLink"], [1, "row", "mt-2"], ["class", "col-md-4 my-2", 4, "ngFor", "ngForOf"], [1, "col-md-4", "my-2"], [1, "rs"], ["class", "chuong-btn", 4, "ngIf"], [1, "card", "border-none", 3, "routerLink"], ["class", "d-block w-100", "alt", "...", 3, "src", 4, "ngIf"], ["src", "../../../assets/Images/goc.jpg", "class", "d-block w-100 h-100", "alt", "...", 4, "ngIf"], [1, "card-body", "p-1"], [1, "card-title", "m-0", "p-0"], [1, "card-text", "m-0", "p-0", 2, "opacity", "0.7"], [4, "ngIf"], [1, "chuong-btn"], [1, "btn", "btn-sm", "btn-outline-danger", "mr-1", 3, "click"], [3, "icon"], ["routerLinkActive", "router-link-active", 1, "btn", "btn-sm", "btn-outline-primary", "ml-1", 3, "routerLink"], ["alt", "...", 1, "d-block", "w-100", 3, "src"], ["src", "../../../assets/Images/goc.jpg", "alt", "...", 1, "d-block", "w-100", "h-100"], ["src", "../../../assets/Images/icon-arrow-left.svg", 1, "ml-2", "inactive"], ["src", "../../../assets/Images/icon-arrow-left.svg", 1, "ml-2", 3, "click"], ["src", "../../../assets/Images/icon-arrow-right.svg", 1, "mr-5", 3, "click"], ["src", "../../../assets/Images/icon-arrow-right.svg", 1, "mr-5", "inactive"]], template: function DocsComponent_Template(rf, ctx) { if (rf & 1) {
        const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Danh s\u00E1ch c\u00E1c ch\u01B0\u01A1ng");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "input", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function DocsComponent_Template_input_ngModelChange_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r25); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](7); return ctx.changeSearch(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, DocsComponent_a_8_Template, 2, 2, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, DocsComponent_div_11_Template, 3, 8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "hr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, " K\u1EBFt qu\u1EA3 m\u1ED7i trang");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "c\u1EE7a");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "pagination-template", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("pageChange", function DocsComponent_Template_pagination_template_pageChange_21_listener($event) { return ctx.loadAll($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, DocsComponent_img_24_Template, 1, 0, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](25, DocsComponent_img_25_Template, 1, 0, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, DocsComponent_img_26_Template, 1, 0, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](27, DocsComponent_img_27_Template, 1, 0, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](29, "app-calendars");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.params.search);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.authorities != "SV");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.Chuong);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", ctx.start + 1, " - ", ctx.end, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.total_records, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r3.isFirstPage());
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !_r3.isFirstPage());
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !_r3.isLastPage());
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r3.isLastPage());
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], ngx_pagination__WEBPACK_IMPORTED_MODULE_8__["PaginationControlsDirective"], _date_calendars_calendars_component__WEBPACK_IMPORTED_MODULE_9__["CalendarsComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterLink"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__["FaIconComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterLinkActive"]], pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_8__["PaginatePipe"]], styles: [".mod-myhome-calender[_ngcontent-%COMP%] {\n  margin-top: 100px;\n}\n.mod-myhome-content[_ngcontent-%COMP%] {\n  background: #f5f5f5;\n  border-radius: 5px;\n  border: 1px solid #e4e3e3;\n  color: #181818 !important;\n}\n.mod-myhome-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-weight: 700;\n  text-shadow: 1px 2px 5px #fff;\n}\n.mod-myhome-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  padding: 1px;\n  cursor: pointer;\n  background: transparent !important;\n  border: none;\n  transition: all 0.4s;\n}\n.mod-myhome-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover {\n  border: blanchedalmond;\n  color: #f32c2c;\n  border: 1px solid #c0bfbf;\n}\n.chuong-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 5px;\n  right: 5px;\n  z-index: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxkb2NzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsaUJBQUE7QUFBSjtBQUVFO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7QUFBSjtBQUNJO0VBQ0UsZ0JBQUE7RUFDQSw2QkFBQTtBQUNOO0FBQ0k7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtDQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0FBQ047QUFBTTtFQUNFLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0FBRVI7QUFHQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0FBQUYiLCJmaWxlIjoiZG9jcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tb2QtbXlob21lIHtcclxuICAmLWNhbGVuZGVye1xyXG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbiAgfVxyXG4gICYtY29udGVudCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIyOCwgMjI3LCAyMjcpO1xyXG4gICAgY29sb3I6IHJnYigyNCwgMjQsIDI0KSAhaW1wb3J0YW50O1xyXG4gICAgaDMge1xyXG4gICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICB0ZXh0LXNoYWRvdzogMXB4IDJweCA1cHggI2ZmZjtcclxuICAgIH1cclxuICAgIC5jYXJkIHtcclxuICAgICAgcGFkZGluZzogMXB4O1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGJvcmRlcjogYmxhbmNoZWRhbG1vbmQ7XHJcbiAgICAgICAgY29sb3I6IHJnYigyNDMsIDQ0LCA0NCk7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDE5MiwgMTkxLCAxOTEpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi5jaHVvbmctYnRue1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDVweDtcclxuICByaWdodDogNXB4O1xyXG4gIHotaW5kZXg6IDE7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "as2T":
/*!*********************************************!*\
  !*** ./src/app/entity/docs/docs.service.ts ***!
  \*********************************************/
/*! exports provided: DocsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocsService", function() { return DocsService; });
/* harmony import */ var src_app_app_contants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/app.contants */ "7JO0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class DocsService {
    constructor(http) {
        this.http = http;
    }
    create(data) {
        return this.http.post(src_app_app_contants__WEBPACK_IMPORTED_MODULE_0__["SERVER_QUESTION_API_URL"] + `tailieu/create`, data, {
            observe: 'response',
        });
    }
    loadAll() {
        return this.http.get(src_app_app_contants__WEBPACK_IMPORTED_MODULE_0__["SERVER_AUTH_API_URL"] + `tailieu`, {
            observe: 'response',
        });
    }
    getDocsById(id) {
        console.log(id);
        return this.http.get(src_app_app_contants__WEBPACK_IMPORTED_MODULE_0__["SERVER_AUTH_API_URL"] + `tailieu/${id}`, { observe: 'response' });
    }
    update(data, id) {
        return this.http.put(src_app_app_contants__WEBPACK_IMPORTED_MODULE_0__["SERVER_AUTH_API_URL"] + `update/tailieu/${id}`, { data }, { observe: "response" });
    }
    delete(id) {
        return this.http.delete(src_app_app_contants__WEBPACK_IMPORTED_MODULE_0__["SERVER_AUTH_API_URL"] + `delete/tailieu/${id}`, { observe: 'response' });
    }
    getAll(req) {
        return this.http.get(src_app_app_contants__WEBPACK_IMPORTED_MODULE_0__["SERVER_QUESTION_API_URL"] +
            `tailieu/query?page=` +
            req.current_page +
            '&limit=' +
            req.limit +
            '&search=' +
            req.search, {
            observe: 'response',
        });
    }
}
DocsService.ɵfac = function DocsService_Factory(t) { return new (t || DocsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
DocsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: DocsService, factory: DocsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "lPn3":
/*!******************************************************************!*\
  !*** ./src/app/entity/docs/update-docs/update-docs.component.ts ***!
  \******************************************************************/
/*! exports provided: UpdateDocsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateDocsComponent", function() { return UpdateDocsComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var src_app_share_notification_notification_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/share/notification/notification.component */ "WdHK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-ui-loader */ "gren");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _docs_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../docs.service */ "as2T");
/* harmony import */ var src_app_share_share_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/share/share.service */ "8mU5");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _date_calendars_calendars_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../date/calendars/calendars.component */ "c7RR");
/* harmony import */ var ngx_file_drop__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-file-drop */ "gfTr");














function UpdateDocsComponent_ngx_file_drop_6_ng_template_1_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "K\u00E9o th\u1EA3 \u1EA3nh n\u1EC1n cho \u0111\u1EC1 thi t\u1EA1i \u0111\u00E2y ho\u1EB7c");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function UpdateDocsComponent_ngx_file_drop_6_ng_template_1_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "general.IsFileUpload"));
} }
function UpdateDocsComponent_ngx_file_drop_6_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "img", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, UpdateDocsComponent_ngx_file_drop_6_ng_template_1_span_3_Template, 2, 0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, UpdateDocsComponent_ngx_file_drop_6_ng_template_1_span_4_Template, 3, 3, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UpdateDocsComponent_ngx_file_drop_6_ng_template_1_Template_button_click_5_listener() { const openFileSelector_r5 = ctx.openFileSelector; return openFileSelector_r5(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Click here");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r4.isFile);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r4.isFile);
} }
function UpdateDocsComponent_ngx_file_drop_6_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ngx-file-drop", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onFileDrop", function UpdateDocsComponent_ngx_file_drop_6_Template_ngx_file_drop_onFileDrop_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r9.dropped($event, "", "", "avatar"); })("onFileOver", function UpdateDocsComponent_ngx_file_drop_6_Template_ngx_file_drop_onFileOver_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r11.fileOver($event); })("onFileLeave", function UpdateDocsComponent_ngx_file_drop_6_Template_ngx_file_drop_onFileLeave_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r12.fileLeave($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, UpdateDocsComponent_ngx_file_drop_6_ng_template_1_Template, 7, 2, "ng-template", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function UpdateDocsComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UpdateDocsComponent_div_7_Template_span_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r13.closeAvatar(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "X");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "img", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("src", "http://localhost:3000/static/image/", ctx_r1.TailieuFrom.value.avatar, "", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
} }
function UpdateDocsComponent_div_17_div_9_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UpdateDocsComponent_div_17_div_9_div_1_Template_span_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r24); const j_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().index; const i_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().index; const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r22.deletenoidung(i_r16, j_r19); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "x");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "N\u1ED9i dung");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "textarea", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const j_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().index;
    const i_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().index;
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx_r20.TailieuFrom.get("DsNoiDung").controls[i_r16].get("noidung")["controls"][j_r19].get("text").errors && ctx_r20.isvalidator ? "border-error" : "");
} }
function UpdateDocsComponent_div_17_div_9_div_2_span_2_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UpdateDocsComponent_div_17_div_9_div_2_span_2_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r33); const j_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).index; const i_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().index; const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r31.deletenoidung(i_r16, j_r19); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "x");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function UpdateDocsComponent_div_17_div_9_div_2_ngx_file_drop_3_ng_template_1_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "K\u00E9o th\u1EA3 \u1EA3nh n\u1EC1n cho \u0111\u1EC1 thi t\u1EA1i \u0111\u00E2y ho\u1EB7c");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function UpdateDocsComponent_div_17_div_9_div_2_ngx_file_drop_3_ng_template_1_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "general.IsFileUpload"));
} }
function UpdateDocsComponent_div_17_div_9_div_2_ngx_file_drop_3_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "img", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, UpdateDocsComponent_div_17_div_9_div_2_ngx_file_drop_3_ng_template_1_span_3_Template, 2, 0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, UpdateDocsComponent_div_17_div_9_div_2_ngx_file_drop_3_ng_template_1_span_4_Template, 3, 3, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UpdateDocsComponent_div_17_div_9_div_2_ngx_file_drop_3_ng_template_1_Template_button_click_5_listener() { const openFileSelector_r36 = ctx.openFileSelector; return openFileSelector_r36(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, " Click here");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const j_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3).index;
    const i_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().index;
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx_r35.TailieuFrom.get("DsNoiDung").controls[i_r16].get("noidung")["controls"][j_r19].get("text").errors && ctx_r35.isvalidator ? "textError" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r35.isFile);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r35.isFile);
} }
function UpdateDocsComponent_div_17_div_9_div_2_ngx_file_drop_3_Template(rf, ctx) { if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ngx-file-drop", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onFileDrop", function UpdateDocsComponent_div_17_div_9_div_2_ngx_file_drop_3_Template_ngx_file_drop_onFileDrop_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r44); const j_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).index; const i_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().index; const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r42.dropped($event, i_r16, j_r19, "anh"); })("onFileOver", function UpdateDocsComponent_div_17_div_9_div_2_ngx_file_drop_3_Template_ngx_file_drop_onFileOver_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r44); const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4); return ctx_r46.fileOver($event); })("onFileLeave", function UpdateDocsComponent_div_17_div_9_div_2_ngx_file_drop_3_Template_ngx_file_drop_onFileLeave_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r44); const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4); return ctx_r47.fileLeave($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, UpdateDocsComponent_div_17_div_9_div_2_ngx_file_drop_3_ng_template_1_Template, 7, 3, "ng-template", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function UpdateDocsComponent_div_17_div_9_div_2_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UpdateDocsComponent_div_17_div_9_div_2_div_4_Template_span_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r50); const j_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).index; const i_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().index; const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r48.closeImage(i_r16, j_r19); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "X");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "img", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const nd_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("src", "http://localhost:3000/static/image/", nd_r18.value.text, "", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
} }
function UpdateDocsComponent_div_17_div_9_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, UpdateDocsComponent_div_17_div_9_div_2_span_2_Template, 2, 0, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, UpdateDocsComponent_div_17_div_9_div_2_ngx_file_drop_3_Template, 2, 0, "ngx-file-drop", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, UpdateDocsComponent_div_17_div_9_div_2_div_4_Template, 4, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const nd_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !nd_r18.value.text);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !nd_r18.value.text);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", nd_r18.value.text);
} }
function UpdateDocsComponent_div_17_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, UpdateDocsComponent_div_17_div_9_div_1_Template, 6, 1, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, UpdateDocsComponent_div_17_div_9_div_2_Template, 5, 3, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const nd_r18 = ctx.$implicit;
    const j_r19 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroupName", j_r19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", nd_r18.value.bio == "text");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", nd_r18.value.bio == "anh");
} }
function UpdateDocsComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    const _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UpdateDocsComponent_div_17_Template_span_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r55); const i_r16 = ctx.index; const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r54.deletecontent(i_r16); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "x");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Ti\u00EAu \u0111\u1EC1");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, UpdateDocsComponent_div_17_div_9_Template, 3, 3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UpdateDocsComponent_div_17_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r55); const i_r16 = ctx.index; const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r56.andnoidung(i_r16, "anh"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "fa-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UpdateDocsComponent_div_17_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r55); const i_r16 = ctx.index; const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r57.andnoidung(i_r16, "text"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "fa-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r16 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroupName", i_r16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx_r2.TailieuFrom.get("DsNoiDung")["controls"][i_r16].get("tieuDe").errors && ctx_r2.isvalidator ? "border-error" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r2.DsNoiDung.controls[i_r16].get("noidung").controls);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", ctx_r2.faImage);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", ctx_r2.faFileAlt);
} }
function UpdateDocsComponent_ng_container_19_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r65 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "input", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "input", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UpdateDocsComponent_ng_container_19_div_12_Template_span_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r65); const j_r62 = ctx.index; const i_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().index; const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r63.deleteAnswer(i_r59, j_r62); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "fa-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const j_r62 = ctx.index;
    const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    const content_r58 = ctx_r66.$implicit;
    const i_r59 = ctx_r66.index;
    const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroupName", j_r62);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx_r60.questionCheckbio.indexOf(content_r58.value.question) != -1 && !ctx_r60.checkbio ? "border-error" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx_r60.TailieuFrom.get("detailTest").controls[i_r59].get("answers")["controls"][j_r62].get("answer").errors && ctx_r60.isvalidator ? "border-error" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", ctx_r60.faTrash);
} }
function UpdateDocsComponent_ng_container_19_Template(rf, ctx) { if (rf & 1) {
    const _r68 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0, 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UpdateDocsComponent_ng_container_19_Template_span_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r68); const i_r59 = ctx.index; const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r67.deleteQuestion(i_r59); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "label", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "textarea", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "label", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "\u0110\u00E1p \u00E1n");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, UpdateDocsComponent_ng_container_19_div_12_Template, 7, 4, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UpdateDocsComponent_ng_container_19_Template_span_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r68); const i_r59 = ctx.index; const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r69.andAnswer(i_r59); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Th\u00EAm \u0111\u00E1p \u00E1n");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const content_r58 = ctx.$implicit;
    const i_r59 = ctx.index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroupName", i_r59);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", content_r58.value.answers.length <= 0 && !ctx_r3.checkSumAnswer ? "border-error" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("for", "question", i_r59, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("C\u00E2u ", i_r59 + 1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("id", "question", i_r59, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx_r3.TailieuFrom.get("detailTest")["controls"][i_r59].get("question").errors && ctx_r3.isvalidator ? "border-error" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r3.detailTest.controls[i_r59].get("answers").controls);
} }
class UpdateDocsComponent {
    constructor(router, loadService, ngModel, docService, fb, ss) {
        this.router = router;
        this.loadService = loadService;
        this.ngModel = ngModel;
        this.docService = docService;
        this.fb = fb;
        this.ss = ss;
        this.faImage = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faImage"];
        this.faFileAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faFileAlt"];
        this.faCandyCane = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faBan"];
        this.faSave = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faSave"];
        this.faTrash = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faTrash"];
        this.isvalidator = false;
        this.image = false;
        this.isFile = false;
        this.urlIma = '';
        this.questionCheckbio = [];
        this.checkbio = true;
        this.checkSumAnswer = true;
        this.checkavatar = true;
        this.TailieuFrom = this.fb.group({
            chuong: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            avatar: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            DsNoiDung: this.fb.array([]),
            detailTest: this.fb.array([]),
        });
        this.getDocsById();
    }
    ngOnInit() { }
    get chuong() {
        return this.TailieuFrom.get('chuong');
    }
    get DsNoiDung() {
        return this.TailieuFrom.get('DsNoiDung'); // get list answer
    }
    get detailTest() {
        return this.TailieuFrom.get('detailTest'); // get list answer
    }
    addContent() {
        this.isvalidator = false;
        const control = this.TailieuFrom.get('DsNoiDung');
        let fg = this.fb.group({
            tieuDe: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            noidung: this.fb.array([
            // this.fb.group({
            //   text: new FormControl('', [Validators.required]),
            // }),
            ]),
            image: this.fb.array([]),
        });
        control.push(fg);
    }
    deletecontent(index) {
        const control = this.TailieuFrom.get('DsNoiDung');
        control.removeAt(index);
    }
    andnoidung(index, flag) {
        this.isvalidator = false;
        //flag phân biệt text hay ima
        const control = this.TailieuFrom.get('DsNoiDung');
        const fg = control.controls[index * 1].get('noidung');
        if (flag == 'text') {
            let fb = this.fb.group({
                text: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
                bio: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('text', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            });
            fg.push(fb);
        }
        if (flag == 'anh') {
            // img
            let fb = this.fb.group({
                text: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
                bio: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('anh', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            });
            fg.push(fb);
        }
    }
    deletenoidung(indexQ, index) {
        const control = this.TailieuFrom.get('DsNoiDung');
        const fg = control.controls[indexQ * 1].get('noidung');
        fg.removeAt(index);
    }
    andAnswer(index) {
        this.checkbio = true;
        this.isvalidator = false;
        this.checkSumAnswer = true;
        const control = this.TailieuFrom.get('detailTest');
        const fg = control.controls[index * 1].get('answers');
        let fb = this.fb.group({
            answer: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            bio: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](false),
        });
        fg.push(fb);
    }
    deleteAnswer(indexQ, index) {
        const control = this.TailieuFrom.get('detailTest');
        const fg = control.controls[indexQ * 1].get('answers');
        fg.removeAt(index);
    }
    addQuestion() {
        this.isvalidator = false; // để các trường còn trống
        this.checkSumAnswer = true; // check câu hỏi chưa có câu trả lời
        const control = this.TailieuFrom.get('detailTest');
        let fg = this.fb.group({
            question: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            answers: this.fb.array([
            // create formArray container one formGroup
            // this.fb.group({
            //   answer: new FormControl('', [Validators.required]),
            //   bio: new FormControl(false),
            // }),
            ]),
        });
        control.push(fg);
    }
    deleteQuestion(index) {
        const control = this.TailieuFrom.get('detailTest');
        // console.log(this.duplicate);
        control.removeAt(index);
    }
    fileOver(event) { }
    closeAvatar() {
        this.checkavatar = true;
        this.TailieuFrom.get('avatar').setValue('');
    }
    closeImage(i, h) {
        this.image = false;
        // const control = <FormArray>this.TailieuFrom.get('DsNoiDung');
        // const fg = <FormArray>control.controls[i * 1].get('image');
        // fg.controls[h].get('name').setValue('');
        const control = this.TailieuFrom.get('DsNoiDung');
        const fg = control.controls[i * 1].get('noidung');
        fg.controls[h].get('text').setValue('');
    }
    setValidator() {
        this.isvalidator = true;
        alert('Tồn tại trường còn trống !');
        console.log(this.checkbio + ' ' + this.checkSumAnswer + ' ' + this.isvalidator);
    }
    fileLeave(event) { }
    dropped(files, index, h, bio) {
        const formData = new FormData();
        const droppedFile = files[0];
        // Is it a file?
        if (droppedFile.fileEntry.isFile) {
            const fileEntry = droppedFile.fileEntry;
            fileEntry.file((file) => {
                // Here you can access the real file
                // console.log(droppedFile.relativePath, file);
                formData.append('file', file);
                let dotfile = files[0].relativePath.split('.')[1];
                if (dotfile === 'jpg' || dotfile === 'png') {
                    // console.log(file);
                    this.ss.uploadImage(formData).subscribe((res) => {
                        if (res.status == 200) {
                            if (bio == 'avatar') {
                                this.TailieuFrom.get('avatar').setValue(file.name);
                                this.checkavatar = false;
                            }
                            if (bio == 'anh') {
                                const control = this.TailieuFrom.get('DsNoiDung');
                                console.log(control.value);
                                const fg = (control.controls[index * 1].get('noidung'));
                                fg.controls[h].get('text').setValue(file.name);
                            }
                            // this.TailieuFrom.get('avatar').setValue(file.name);
                        }
                    }, (error) => {
                        console.log(error);
                    });
                }
                else {
                    this.isFile = true;
                }
            });
        }
        else {
            // It was a directory (empty directories are added, otherwise only files)
            const fileEntry = droppedFile.fileEntry;
            this.isFile = true;
        }
    }
    getDocsById() {
        let id = this.router.snapshot.paramMap.get('id');
        this.docService.getDocsById(id).subscribe((res) => {
            this.PassDataToForm(res.body.data);
            // console.log(res.body.data);
        }, (error) => {
            console.log(error);
        });
    }
    PassDataToForm(data) {
        // console.log(data);
        // chuong: new FormControl('', [Validators.required]),
        //   avatar: new FormControl(''),
        //   DsNoiDung: this.fb.array([
        //     // create formArray container one formGroup
        //     this.fb.group({
        //       tieuDe: new FormControl(''),
        //       noidung: this.fb.array([]),
        //       // image: this.fb.array([]),
        //       // video: this.fb.array([]),
        //       // anh: new FormControl(''),
        //       // video: new FormControl(''),
        //     }),
        //   ]),
        //   detailTest: this.fb.array([]),
        const control = this.TailieuFrom.get('DsNoiDung');
        this.TailieuFrom.get('chuong').setValue(data.chuong);
        this.TailieuFrom.get('avatar').setValue(data.avatar);
        const controlTest = this.TailieuFrom.get('detailTest');
        data.detailTest.map((item, index) => {
            let fg = this.fb.group({
                question: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](item.question, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
                answers: this.fb.array([]),
            });
            controlTest.push(fg);
            const ans = controlTest.controls[index * 1].get('answers');
            item.answers.map((ite, index) => {
                let noidung = this.fb.group({
                    answer: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](ite.answer, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
                    bio: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](ite.bio),
                });
                ans.push(noidung);
            });
        });
        data.DsNoiDung.map((item, index) => {
            let fg = this.fb.group({
                tieuDe: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](item.tieuDe, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
                noidung: this.fb.array([]),
            });
            control.push(fg);
            const nd = control.controls[index * 1].get('noidung');
            item.noidung.map((ite, index) => {
                let noidung = this.fb.group({
                    text: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](ite.text, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
                    bio: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](ite.bio),
                });
                nd.push(noidung);
            });
        });
    }
    cancel() {
        window.history.back();
    }
    submit() {
        this.success = true;
        this.questionCheckbio = [];
        this.TailieuFrom.value.detailTest.map((it, ind) => {
            if (it.answers.length > 0) {
                this.flas = 0;
                it.answers.map((ite, inde) => {
                    if (ite.bio == true) {
                        this.flas++;
                    }
                });
                if (this.flas == 0) {
                    this.questionCheckbio.push(it.question);
                    this.checkbio = false;
                }
            }
            else {
                this.checkSumAnswer = false;
                alert('Bài giảng có chứa câu hỏi chưa hoàn tất !');
                this.success = false;
                return;
            }
        });
        if (this.questionCheckbio.length != 0 && this.checkbio == false) {
            this.success = false;
            alert('Bài giảng có chứa câu hỏi chưa hoàn tất !');
            return;
        }
        console.log(this.success);
        if (this.success) {
            let modal = this.ngModel.open(src_app_share_notification_notification_component__WEBPACK_IMPORTED_MODULE_2__["NotificationComponent"], {
                size: 'md',
                centered: true,
            });
            modal.componentInstance.title = `Thay đổi nội dung ${this.TailieuFrom.value.chuong.substring(0, 8)}`;
            modal.componentInstance.text = `Bạn đang muốn thay đổi nội dung của ${this.TailieuFrom.value.chuong.substring(0, 8)} ?`;
            modal.componentInstance.comfirm.subscribe((resp) => {
                if (resp) {
                    let id = this.router.snapshot.paramMap.get('id');
                    this.docService.update(this.TailieuFrom.value, id).subscribe((res) => {
                        if (res) {
                            if (res.status == 200) {
                                alert('Cập nhật thành công !');
                                this.loadService.start();
                            }
                            console.log(res);
                            window.history.back();
                            this.loadService.stop();
                        }
                    }, (error) => {
                        alert('Tiêu đề chương đã tồn tại. Hãy kiểm tra và thử lại sau !');
                    });
                }
            });
        }
        console.log(this.TailieuFrom.value);
    }
}
UpdateDocsComponent.ɵfac = function UpdateDocsComponent_Factory(t) { return new (t || UpdateDocsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ngx_ui_loader__WEBPACK_IMPORTED_MODULE_5__["NgxUiLoaderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_docs_service__WEBPACK_IMPORTED_MODULE_7__["DocsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_share_share_service__WEBPACK_IMPORTED_MODULE_8__["ShareService"])); };
UpdateDocsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: UpdateDocsComponent, selectors: [["app-update-docs"]], decls: 36, vars: 8, consts: [[1, "mod-docs", "my-2", "d-flex", "mx-2"], [1, "mod-docs-box", "p-3", "w-75"], [1, "mt-3", 3, "formGroup"], [1, "ml-auto", "w-50", "mod-upload-box"], ["dropZoneLabel", "Drop files here", 3, "onFileDrop", "onFileOver", "onFileLeave", 4, "ngIf"], ["class", "rs", 4, "ngIf"], [1, "form-froup", "mb-2"], ["for", "noidung"], ["formControlName", "chuong", "required", "", "autofocus", "", "rows", "2", 1, "form-control", 3, "ngClass"], [1, "form-froup", "my-1"], [1, "w-100"], ["formArrayName", "DsNoiDung", 1, "p-0", "w-100"], ["class", "d-flex mb-1", 3, "formGroupName", 4, "ngFor", "ngForOf"], ["formArrayName", "detailTest"], [3, "formGroupName", 4, "ngFor", "ngForOf"], [1, "from-group"], [1, "btn", "btn-sm", "btn-outline-success", "mr-1", 3, "click"], [1, "btn", "btn-sm", "btn-outline-primary", "ml-1", 3, "click"], [1, "d-flex", "mt-3", "justify-conten-center"], [1, "form-group", "ml-auto", "w-auto"], [1, "btn", "btn-add", "text-light", "btn-sm", "px-3", 3, "click"], [3, "icon"], [1, "form-group", "w-auto"], [1, "btn", "text-light", "btn-cancel", "btn-sm", "mx-2", "px-3", 3, "click"], [1, "w-25", "float-right", "bg-light", "px-2", "px-2"], ["dropZoneLabel", "Drop files here", 3, "onFileDrop", "onFileOver", "onFileLeave"], ["ngx-file-drop-content-tmp", "", "class", "d-flex flex-column"], ["src", "../../../assets/Images/cloud-upload-outline-blue.png", "width", "100", "alt", "upload", 1, "mt-5"], [1, "mt-4"], [4, "ngIf"], ["type", "file", 3, "click"], [1, "rs"], [1, "close", 3, "click"], ["height", "50%", "width", "100%", "alt", "", 3, "src"], [1, "d-flex", "mb-1", 3, "formGroupName"], [1, "w-100", "p-3", "mb-2", "mod-docs-box-nd", "rs"], [1, "clo1", 3, "click"], [1, "form-froup"], ["formControlName", "tieuDe", "required", "", "placeholder", "Nh\u1EADp ti\u00EAu \u0111\u1EC1 cho n\u1ED9i dung", 1, "form-control", 3, "ngClass"], ["formArrayName", "noidung"], [1, "from-group", "mt-2"], ["title", "Th\u00EAm \u1EA3nh", 1, "btn", "btn-sm", "btn-outline-success", "mr-1", 3, "click"], ["title", "Th\u00EAm n\u1ED9i dung", 1, "btn", "btn-sm", "btn-outline-primary", "ml-1", 3, "click"], [3, "formGroupName"], ["class", "form-froup rs", 4, "ngIf"], [1, "form-froup", "rs"], [1, "clo", 3, "click"], ["placeholder", "N\u1ED9i dung v\u0103n b\u1EA3n", "formControlName", "text", "required", "", "rows", "3", 1, "form-control", 3, "ngClass"], [1, "w-25", "mod-upload-box", "my-2", "rs"], ["class", "clo2", 3, "click", 4, "ngIf"], [1, "clo2", 3, "click"], [1, "mb-2", "mt-0", 3, "ngClass"], [1, "mod-baithi-content-Ch", "mb-2", "rs", 3, "ngClass"], ["aria-hidden", "true", 1, "close", "mr-1", 3, "click"], [1, "form-gruop"], [3, "for"], ["placeholder", "n\u1ED9i dung...", "name", "", "rows", "2", "formControlName", "question", 1, "form-control", 3, "id", "ngClass"], [1, "input-group", "mt-3", "rs"], [1, "ml-2"], ["formArrayName", "answers", 1, "w-100"], ["class", "d-flex mb-1 w-100", 3, "formGroupName", 4, "ngFor", "ngForOf"], [1, "float-right", "mod-baithi-content-Ch-answer", 3, "click"], [1, "d-flex", "mb-1", "w-100", 3, "formGroupName"], [1, "input-group", "mb-2"], ["for", "bio", 1, "input-group-prepend", "btn", "btn-xs", "rounded-sm", "mr-1", "p-0", "btn-outline-secondary", "f-flex", "justify-content-center", "align-items-center", 3, "ngClass"], ["type", "checkbox", "formControlName", "bio", 1, "input-group-text", "m-2"], ["type", "text", "formControlName", "answer", 1, "form-control", "mr-1", "form-control-sm", 3, "ngClass"], [1, "btn", "ml-2", "btn-sm", "btn-outline-danger", 3, "click"]], template: function UpdateDocsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Thay \u0111\u1ED5i Ch\u01B0\u01A1ng");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, UpdateDocsComponent_ngx_file_drop_6_Template, 2, 0, "ngx-file-drop", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, UpdateDocsComponent_div_7_Template, 4, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "T\u00EAn ch\u01B0\u01A1ng");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "textarea", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "N\u1ED9i dung");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, UpdateDocsComponent_div_17_Template, 15, 5, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, UpdateDocsComponent_ng_container_19_Template, 16, 7, "ng-container", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UpdateDocsComponent_Template_button_click_21_listener() { return ctx.addContent(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Th\u00EAm n\u1ED9i dung");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UpdateDocsComponent_Template_button_click_23_listener() { return ctx.addQuestion(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "Th\u00EAm c\u00E2u h\u1ECFi");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UpdateDocsComponent_Template_button_click_27_listener() { return ctx.chuong.errors || ctx.TailieuFrom.get("detailTest").status === "INVALID" || !ctx.checkbio || !ctx.checkSumAnswer || ctx.TailieuFrom.get("DsNoiDung").status === "INVALID" ? ctx.setValidator() : ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, " L\u01B0u ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](29, "fa-icon", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UpdateDocsComponent_Template_button_click_31_listener() { return ctx.cancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, " H\u1EE7y ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](33, "fa-icon", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](35, "app-calendars");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.TailieuFrom);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.checkavatar);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.checkavatar);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx.chuong.errors && ctx.isvalidator ? "border-error" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.DsNoiDung.controls);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.detailTest.controls);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", ctx.faSave);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", ctx.faCandyCane);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormArrayName"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_10__["FaIconComponent"], _date_calendars_calendars_component__WEBPACK_IMPORTED_MODULE_11__["CalendarsComponent"], ngx_file_drop__WEBPACK_IMPORTED_MODULE_12__["NgxFileDropComponent"], ngx_file_drop__WEBPACK_IMPORTED_MODULE_12__["NgxFileDropContentTemplateDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["CheckboxControlValueAccessor"]], styles: [".mod-docs-box[_ngcontent-%COMP%] {\n  border-radius: 3px;\n  background: #fff;\n  box-shadow: 1px 2px 3px #cccaca;\n}\n.mod-docs-box-nd[_ngcontent-%COMP%] {\n  border-radius: 3px;\n  border: 1px solid #f0f0f0;\n  box-shadow: 1px 1px 1px #cccaca;\n}\n.clo2[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 5px;\n  right: 10px;\n  font-size: 22px;\n  cursor: pointer;\n  transition: all 0.4s;\n}\n.clo2[_ngcontent-%COMP%]:hover {\n  opacity: 0.5;\n}\n.clo[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 30px;\n  right: 10px;\n  font-size: 22px;\n  cursor: pointer;\n  transition: all 0.4s;\n}\n.clo[_ngcontent-%COMP%]:hover {\n  opacity: 0.5;\n}\n.clo1[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  font-size: 22px;\n  cursor: pointer;\n  transition: all 0.4s;\n}\n.clo1[_ngcontent-%COMP%]:hover {\n  opacity: 0.5;\n}\n.btn-add[_ngcontent-%COMP%] {\n  border-radius: 50px;\n  background: #4a90e2;\n  box-shadow: 1px 2px 13px #757373;\n  cursor: pointer;\n  transition: all 0.4s ease-in-out;\n}\n.btn-add[_ngcontent-%COMP%]:hover {\n  box-shadow: none;\n  opacity: 0.8;\n}\n.btn-cancel[_ngcontent-%COMP%] {\n  border-radius: 50px;\n  background: #f32f2f;\n  box-shadow: 1px 2px 13px #616060;\n  cursor: pointer;\n  transition: all 0.4s ease-in-out;\n}\n.btn-cancel[_ngcontent-%COMP%]:hover {\n  box-shadow: none;\n  opacity: 0.8;\n}\n.textError[_ngcontent-%COMP%] {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcdXBkYXRlLWRvY3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsK0JBQUE7QUFDRjtBQUFFO0VBQ0Usa0JBQUE7RUFDQSx5QkFBQTtFQUNBLCtCQUFBO0FBRUo7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0FBRUY7QUFERTtFQUNFLFlBQUE7QUFHSjtBQUFBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7QUFHRjtBQUZFO0VBQ0UsWUFBQTtBQUlKO0FBREE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtBQUlGO0FBSEU7RUFDRSxZQUFBO0FBS0o7QUFGQztFQUNHLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtFQUNBLGVBQUE7RUFLQSxnQ0FBQTtBQUNKO0FBTEk7RUFDRSxnQkFBQTtFQUNBLFlBQUE7QUFPTjtBQUhFO0VBQ0UsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdDQUFBO0VBQ0EsZUFBQTtFQUtBLGdDQUFBO0FBRUo7QUFOSTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtBQVFOO0FBSkU7RUFDRSxVQUFBO0FBT0oiLCJmaWxlIjoidXBkYXRlLWRvY3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubW9kLWRvY3MtYm94e1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGJveC1zaGFkb3c6IDFweCAycHggM3B4IHJnYigyMDQsIDIwMiwgMjAyKTtcclxuICAmLW5ke1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgYm9yZGVyOjFweCBzb2xpZCAjZjBmMGYwO1xyXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAxcHggcmdiKDIwNCwgMjAyLCAyMDIpO1xyXG4gIH1cclxufVxyXG4uY2xvMntcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1cHg7XHJcbiAgcmlnaHQ6IDEwcHg7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC40cztcclxuICAmOmhvdmVye1xyXG4gICAgb3BhY2l0eTogMC41O1xyXG4gIH1cclxufVxyXG4uY2xve1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDMwcHg7XHJcbiAgcmlnaHQ6IDEwcHg7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC40cztcclxuICAmOmhvdmVye1xyXG4gICAgb3BhY2l0eTogMC41O1xyXG4gIH1cclxufVxyXG4uY2xvMXtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAxMHB4O1xyXG4gIHJpZ2h0OiAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XHJcbiAgJjpob3ZlcntcclxuICAgIG9wYWNpdHk6IDAuNTtcclxuICB9XHJcbn1cclxuIC5idG4tYWRkIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNGE5MGUyO1xyXG4gICAgYm94LXNoYWRvdzogMXB4IDJweCAxM3B4IHJnYigxMTcsIDExNSwgMTE1KTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICY6aG92ZXIge1xyXG4gICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICBvcGFjaXR5OiAwLjg7XHJcbiAgICB9XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcclxuICB9XHJcbiAgLmJ0bi1jYW5jZWwge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgIGJhY2tncm91bmQ6IHJnYigyNDMsIDQ3LCA0Nyk7XHJcbiAgICBib3gtc2hhZG93OiAxcHggMnB4IDEzcHggcmdiKDk3LCA5NiwgOTYpO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgIG9wYWNpdHk6IDAuODtcclxuICAgIH1cclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xyXG4gIH1cclxuICAudGV4dEVycm9ye1xyXG4gICAgY29sb3I6IHJlZDtcclxuICB9XHJcbiJdfQ== */"] });


/***/ })

}]);
//# sourceMappingURL=app-entity-docs-docs-module.js.map