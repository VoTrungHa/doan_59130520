import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardAuthGuard } from 'src/app/core/auth/guard-auth.guard';
import { BangdiemComponent } from './bangdiem/bangdiem.component';
import { ThiComponent } from './thi.component';

const routes: Routes = [
  { path: 'thi/:id', component: ThiComponent },
  {
    path: 'diem',
    component: BangdiemComponent,
    data: { functions: ['xemdiem'], pageTitle: 'tất cả câu hỏi' },
    canActivate: [GuardAuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ThiRoutingModule {}
