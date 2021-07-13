import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { AdminComponent } from './admin/admin.component';
import { XoaadminComponent } from './xoaadmin/xoaadmin.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'taoadmin', component: AdminComponent },
  { path: 'xoaadmin', component: XoaadminComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
