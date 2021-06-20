import { Routes } from '@angular/router';
import { BaithiComponent } from './baithi.component';
import { UpdatebaithiComponent } from '../baithi/updatebaithi/updatebaithi.component';
import { TaobaithiComponent } from '../baithi/taobaithi/taobaithi.component';
import { DetailComponent } from '../baithi/detail/detail.component';
import { GuardAuthGuard } from 'src/app/core/auth/guard-auth.guard';
export const BAITHI: Routes = [
  {
    path: 'baithi',
    component: BaithiComponent,
    data: { functions: ['allBaiThi'], pageTitle: 'Settings' },
    canActivate: [GuardAuthGuard],
  },
  {
    path: 'taobaithi',
    component: TaobaithiComponent,
    data: { functions: ['createBaiThi'], pageTitle: 'Settings' },
    canActivate: [GuardAuthGuard],
  },
  {
    path: 'baithi/:id',
    component: DetailComponent,
    data: { functions: ['detailBaiThi'], pageTitle: 'Settings' },
    canActivate: [GuardAuthGuard],
  },
  {
    path: 'baithi/thaydoi/:id',
    component: UpdatebaithiComponent,
    data: { functions: ['updateBaiThi'], pageTitle: 'Settings' },
    canActivate: [GuardAuthGuard],
  },
];
