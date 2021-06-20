import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ShareRoutingModule } from './share-routing.module';
import { LoginComponent } from './login/login.component';
import {ReactiveFormsModule,FormsModule}from '@angular/forms';
import { NotificationComponent } from './notification/notification.component';
import { UploadFileComponent } from './upload-file/upload-file.component';
import { NgxFileDropModule } from 'ngx-file-drop';
import { DownloadQuestionComponent } from './download-question/download-question.component';
import { RegisterComponent } from './register/register.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { InputpasswordComponent } from './inputpassword/inputpassword.component';
import { DownloadbailamComponent } from './downloadbailam/downloadbailam.component';

@NgModule({
  declarations: [
    LoginComponent,
    NotificationComponent,
    UploadFileComponent,
    DownloadQuestionComponent,
    RegisterComponent,
    InputpasswordComponent,
    DownloadbailamComponent,

  ],
  imports: [
    CommonModule,
    TranslateModule,
    ShareRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgxFileDropModule,
    FontAwesomeModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ShareModule {}
