import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThiRoutingModule } from './thi-routing.module';
import { ThiComponent } from './thi.component';
import {FormsModule,ReactiveFormsModule}from '@angular/forms';
import {NgxPaginationModule}from 'ngx-pagination'
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { BangdiemComponent } from './bangdiem/bangdiem.component';
 import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
 import { TranslateModule } from '@ngx-translate/core';
@NgModule({
  declarations: [ThiComponent, BangdiemComponent],
  imports: [
    CommonModule,
    NgxPaginationModule,
    ThiRoutingModule,
    FormsModule,
    NgxPageScrollModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    TranslateModule,
  ],
})
export class ThiModule {}
