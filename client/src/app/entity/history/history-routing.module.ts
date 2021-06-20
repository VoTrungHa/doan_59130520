import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SinhvienComponent } from './sinhvien/sinhvien.component';
import { GiaovienComponent } from './giaovien/giaovien.component';
import { GuardAuthGuard } from 'src/app/core/auth/guard-auth.guard';

const routes: Routes = [
  {
    path: 'sinhvien',
    component: SinhvienComponent,
    data: { functions: ['LICHSU'], pageTitle: '' },
    canActivate: [GuardAuthGuard],
  },
  {
    path: 'giaovien',
    component: GiaovienComponent,
    data: { functions: ['LICHSU'], pageTitle: '' },
    canActivate: [GuardAuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistoryRoutingModule {}
