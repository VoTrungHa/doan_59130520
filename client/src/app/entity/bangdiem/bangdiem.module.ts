import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BangdiemRoutingModule } from './bangdiem-routing.module';
import { BangdiemComponent } from './bangdiem.component';
import {FormsModule,ReactiveFormsModule}from '@angular/forms'
import {FontAwesomeModule}from '@fortawesome/angular-fontawesome'
import {TranslateModule}from '@ngx-translate/core';
import {NgxPaginationModule}from 'ngx-pagination'
@NgModule({
  declarations: [BangdiemComponent],
  imports: [
    CommonModule,
    BangdiemRoutingModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    TranslateModule,
  ],
})
export class BangdiemModule {}
