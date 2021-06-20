import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardAuthGuard } from 'src/app/core/auth/guard-auth.guard';
import { QuestionComponent } from '../Question/question.component';
export const ROUTERQUESTION: Routes = [
  {
    path: 'questions',
    component: QuestionComponent,
    data: { functions: ['allQuestion'], pageTitle: 'tất cả câu hỏi' },
    canActivate: [GuardAuthGuard],
  },
];
