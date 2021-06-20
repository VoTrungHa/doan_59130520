import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ErrorComponent}from './layout/error/error.component'
import {HomeComponent}from '../app/entity/home/home.component';
const routes: Routes = [
  {
    path: 'lambai',
    loadChildren: () =>
      import('../app/entity/thi/thi.module').then((m) => m.ThiModule),
  },
  {
    path: 'bangdiem',
    loadChildren: () =>
      import('../app/entity/bangdiem/bangdiem.module').then(
        (m) => m.BangdiemModule
      ),
  },
  {
    path: 'tailieu',
    loadChildren: () =>
      import('../app/entity/tailieu/tailieu.module').then(
        (m) => m.TailieuModule
      ),
  },
  {
    path: 'nhacuatoi',
    loadChildren: () =>
      import('../app/entity/myhome/myhome.module').then((m) => m.MyhomeModule),
  },
  {
    path: 'lichsu',
    loadChildren: () =>
      import('../app/entity/history/history.module').then(
        (m) => m.HistoryModule
      ),
  },
  {
    path: 'baigiang',
    loadChildren: () =>
      import('../app/entity/docs/docs.module').then(
        (m) => m.DocsModule
      ),
  },

  {
    path: 'error',
    component: ErrorComponent,
    data: {
      authorities: [],
      pageTitle: 'Kikker Energie',
      error403: true,
    },
  },
  {
    path: 'trangchu',
    component: HomeComponent,
  },
  {
    path: '',
    redirectTo: 'trangchu',
    pathMatch: 'full',
  },

  // {
  //   path: 'crisis-center',
  //   loadChildren: () =>
  //     import('./crisis-center/crisis-center.module').then(
  //       (m) => m.CrisisCenterModule
  //     ),
  //   data: { preload: true }, // preload data
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
