import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardAuthGuard } from 'src/app/core/auth/guard-auth.guard';
import { DetailComponent } from './detail/detail.component';
import { MyhomeinforComponent } from './detail/myhomeinfor/myhomeinfor.component';
import { MyhomequestionComponent } from './detail/myhomequestion/myhomequestion.component';
import { MyhomesinhvienComponent } from './detail/myhomesinhvien/myhomesinhvien.component';

import { MyhomeComponent } from './myhome.component';
import { ThanhtichComponent } from './thanhtich/thanhtich.component';

const routes: Routes = [
  {
    path: '',
    component: MyhomeComponent,
    data: { functions: ['nhacuatoi'], pageTitle: 'tất cả câu hỏi' },
    canActivate: [GuardAuthGuard],
  },
  {
    path: 'thanhtich/:id',
    component: ThanhtichComponent,

  },
  {
    path: 'dethi/:id',
    component: DetailComponent,
    children: [
      {
        path: 'sinhvien',
        component: MyhomesinhvienComponent,
      },
      {
        path: 'cauhoi',
        component: MyhomequestionComponent,
      },
      {
        path: 'thongtin',
        component: MyhomeinforComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyhomeRoutingModule { }
