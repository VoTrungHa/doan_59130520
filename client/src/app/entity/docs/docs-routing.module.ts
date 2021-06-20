import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocsComponent } from './docs.component';
import { ShowComponent } from './show/show.component';
import { UpdateDocsComponent } from './update-docs/update-docs.component';
import { TaodocsComponent } from './taodocs/taodocs.component';
import { GuardAuthGuard } from 'src/app/core/auth/guard-auth.guard';
const routes: Routes = [
  {
    path: '',
    component: DocsComponent,
    data: { functions: ['baigiangs'], pageTitle: 'tất cả câu hỏi' },
    canActivate: [GuardAuthGuard],
  },
  {
    path: 'themtailieu',
    component: TaodocsComponent,
    data: { functions: ['thembaigiang'], pageTitle: 'tất cả câu hỏi' },
    canActivate: [GuardAuthGuard],
  },
  { path: 'chuong/:id', component: ShowComponent },
  {
    path: 'thaydoitailieu/:id',
    component: UpdateDocsComponent,
    data: { functions: ['thaydoibaigiang'], pageTitle: 'tất cả câu hỏi' },
    canActivate: [GuardAuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DocsRoutingModule {}
