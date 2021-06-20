import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarsComponent } from './calendars.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [CalendarsComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
  ],
  exports: [CalendarsComponent],
})
export class CalendarsModule {}
