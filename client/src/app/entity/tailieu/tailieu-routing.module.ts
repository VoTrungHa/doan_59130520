import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TailieuComponent}from './tailieu.component';
const routes: Routes = [
  {
    path: '',
    component: TailieuComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TailieuRoutingModule { }
