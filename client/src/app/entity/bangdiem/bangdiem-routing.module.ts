import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardAuthGuard } from 'src/app/core/auth/guard-auth.guard';
import { BangdiemComponent } from 'src/app/entity/bangdiem/bangdiem.component';

const routes: Routes = [
  {
    path: '',
    component: BangdiemComponent,
    data: { functions: ['Bangdiems'], pageTitle: 'tất cả câu hỏi' },
    canActivate: [GuardAuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BangdiemRoutingModule { }
