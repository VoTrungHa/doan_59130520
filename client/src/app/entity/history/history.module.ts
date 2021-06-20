import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistoryRoutingModule } from './history-routing.module';
import { SinhvienComponent } from './sinhvien/sinhvien.component';
import { GiaovienComponent } from './giaovien/giaovien.component';
import {FontAwesomeModule}from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [SinhvienComponent, GiaovienComponent],
  imports: [CommonModule, HistoryRoutingModule, FontAwesomeModule],
})
export class HistoryModule {}
