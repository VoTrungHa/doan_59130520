import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BAITHI } from './baithi-routing.module';
import { BaithiComponent } from './baithi.component';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { TaobaithiComponent } from './taobaithi/taobaithi.component';
import { DetailComponent } from './detail/detail.component';
import { UpdatebaithiComponent } from './updatebaithi/updatebaithi.component';
import { NumberValidatorsService } from './NumberValidatorsService ';
import { UploadFileComponent } from './upload-file/upload-file.component';
import {NgxFileDropModule} from 'ngx-file-drop';
import { ChooseQuestionComponent } from './choose-question/choose-question.component';
import { CalendarsModule } from 'src/app/date/calendars/calendars.module';
const ROUTER = [...BAITHI];

@NgModule({
  declarations: [
    BaithiComponent,
    TaobaithiComponent,
    DetailComponent,
    UpdatebaithiComponent,
    UploadFileComponent,
    ChooseQuestionComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTER),
    FontAwesomeModule,
    TranslateModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    FormsModule,
    NgxFileDropModule,
    CalendarsModule,
  ],
  providers: [NumberValidatorsService],
})
export class BaithiModule {}
