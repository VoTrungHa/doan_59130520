import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocsRoutingModule } from './docs-routing.module';
import { DocsComponent } from './docs.component';
import { TaodocsComponent } from './taodocs/taodocs.component';
import { DetaildocsComponent } from './detaildocs/detaildocs.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxFileDropModule } from 'ngx-file-drop';
import { CalendarsModule } from 'src/app/date/calendars/calendars.module';
import { ShowComponent } from './show/show.component';
import { UpdateDocsComponent } from './update-docs/update-docs.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    DocsComponent,
    TaodocsComponent,
    DetaildocsComponent,
    ShowComponent,
    UpdateDocsComponent,
  ],
  imports: [
    CommonModule,
    DocsRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    FormsModule,
    NgxFileDropModule,
    CalendarsModule,
    NgbModule,
  ],
})
export class DocsModule {}
