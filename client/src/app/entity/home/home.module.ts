import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import {NgbModule}from '@ng-bootstrap/ng-bootstrap';
import {NgxPaginationModule}from 'ngx-pagination'
import { NavhomeComponent } from './navhome/navhome.component'

@NgModule({
  declarations: [HomeComponent, NavhomeComponent],
  imports: [CommonModule, HomeRoutingModule, NgbModule, NgxPaginationModule],
})
export class HomeModule {}
