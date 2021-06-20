import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule,ReactiveFormsModule}from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import{TranslateModule,TranslateLoader}from '@ngx-translate/core';
import{TranslateHttpLoader}from "@ngx-translate/http-loader";
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import {
  NgxWebstorageModule,
  LocalStorageService,
  SessionStorageService,
} from 'ngx-webstorage';
import { NgxFileDropModule } from 'ngx-file-drop';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HearderComponent } from './layout/hearder/hearder.component';
import { MainComponent } from './layout/main/main.component';
import { NavleftComponent } from './layout/navleft/navleft.component';
import { ShareModule } from './share/share.module';
import { HttpClient,HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './block/app.interceptor';
import { EntityModule } from './entity/entity.module';
import { ErrorComponent } from './layout/error/error.component';
import { AccountModule } from './entity/account/account.module';
import { CalendarsModule } from './date/calendars/calendars.module';
import { MyhomeModule } from './entity/myhome/myhome.module';
import { HomeModule } from './entity/home/home.module';
import { FooterComponent } from './layout/footer/footer.component';
import { TailieuModule } from './entity/tailieu/tailieu.module';
import { ThiModule } from './entity/thi/thi.module';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { BangdiemModule } from './entity/bangdiem/bangdiem.module';


export function HttpLoaderFactory(http: HttpClient) {
  // i18n
  return new TranslateHttpLoader(http, './assets/i18n/', '.json'); // path container file translate
}

@NgModule({
  declarations: [
    MainComponent,
    HearderComponent,
    MainComponent,
    NavleftComponent,
    ErrorComponent,
    FooterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    NgxUiLoaderModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),

    NgxWebstorageModule.forRoot({ prefix: 'token', separator: '-' }),
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    NgxWebstorageModule,
    NgxFileDropModule,
    ShareModule,
    EntityModule,
    AccountModule,
    CalendarModule,
    NgxPageScrollCoreModule.forRoot({ duration: 500 }),
    CalendarsModule,
    BrowserAnimationsModule,
    HomeModule,
    NgxPageScrollModule,



  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
      deps: [LocalStorageService, SessionStorageService],
    },
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [MainComponent],
})
export class AppModule {}
