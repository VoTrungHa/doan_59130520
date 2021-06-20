import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account.component';
import {CreatedComponent}from './sinhvien/created/created.component';
import {SinhvienComponent}from './sinhvien/sinhvien/sinhvien.component';
import {DetailSinhvienComponent}from './sinhvien/detail-sinhvien/detail-sinhvien.component';
import { GuardAuthGuard } from 'src/app/core/auth/guard-auth.guard';
import { InforbyuserComponent } from './inforbyuser/inforbyuser.component';
const routes: Routes = [
  {
    path: 'thanhvien/sinhvien',
    component: SinhvienComponent,
    data: { functions: ['allAccount'], pageTitle: 'tạo thành viên' },
    canActivate: [GuardAuthGuard],
  },
  {
    path: 'thanhvien/giaovien',
    component: AccountComponent,
    data: { functions: ['allAccount'], pageTitle: 'tạo thành viên' },
    canActivate: [GuardAuthGuard],
  },
  {
    path: 'thanhvien/thaydoi/:id',
    component: CreatedComponent,
    data: { functions: ['updateAccount'], pageTitle: 'thay đổi thông tin' },
    canActivate: [GuardAuthGuard],
  },
  {
    path: 'thanhvien/thaydoi/thongtin/:id',
    component: CreatedComponent,
    // data: { functions: ['allAccount'], pageTitle: 'tạo thành viên' },
    // canActivate: [GuardAuthGuard],
  },
  {
    path: 'thanhvien/taotaikhoanSV',
    component: CreatedComponent,
    data: { functions: ['createAccount'], pageTitle: 'tạo thành viên' },
    canActivate: [GuardAuthGuard],
  },
  {
    path: 'thanhvien/taotaikhoanGV',
    component: CreatedComponent,
    data: { functions: ['createAccount'], pageTitle: 'tạo thành viên' },
    canActivate: [GuardAuthGuard],
  },
  {
    path: 'thanhvien/info',
    component: InforbyuserComponent,
    // data: { functions: ['createAccount'], pageTitle: 'tạo thành viên' },
    // canActivate: [GuardAuthGuard],
  },
  { path: 'thanhvien/:id', component: DetailSinhvienComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
