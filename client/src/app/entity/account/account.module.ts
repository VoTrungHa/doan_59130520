import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent } from './account.component';
import { SinhvienComponent } from './sinhvien/sinhvien/sinhvien.component';
import { DetailSinhvienComponent } from './sinhvien/detail-sinhvien/detail-sinhvien.component';
import { CreatedComponent } from './sinhvien/created/created.component';
import {NgxPaginationModule}from "ngx-pagination"
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TranslateModule } from '@ngx-translate/core';
import { CalendarsModule } from 'src/app/date/calendars/calendars.module';
import { InforbyuserComponent } from './inforbyuser/inforbyuser.component';
import { NgxFileDropModule } from 'ngx-file-drop';
@NgModule({
  declarations: [
    AccountComponent,
    SinhvienComponent,
    DetailSinhvienComponent,
    CreatedComponent,
    InforbyuserComponent,
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    FormsModule,
    FontAwesomeModule,
    TranslateModule,
    CalendarsModule,
    NgxFileDropModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AccountModule {}
