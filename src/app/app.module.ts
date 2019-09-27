import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { FeatureComponent } from './feature/feature.component';

// third party mods
import { NgxLoadingModule } from 'ngx-loading';
import { NgbModule, NgbDateAdapter, NgbDateNativeAdapter, NgbDateNativeUTCAdapter } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { ClientComponent } from './client/client.component';
import { HeaderComponent } from './layout/header/header.component';
import { LayoutComponent } from './layout/layout/layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReportsComponent } from './reports/reports.component';
import { ReleaseComponent } from './release/release.component';
import { DateStringAdapterService } from './core/services/date-string-adapter.service';
import { ManageClientComponent } from './client/manage-client/manage-client.component';
import { CollapsibleCardComponent } from './core/components/collapsible-card/collapsible-card.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    HeaderComponent,
    LayoutComponent,
    DashboardComponent,
    ReportsComponent,
    ReleaseComponent,
    FeatureComponent,
    ManageClientComponent,
    CollapsibleCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxLoadingModule.forRoot({}),
    NgbModule
  ],
  providers: [{ provide: NgbDateAdapter, useClass: DateStringAdapterService }],
  entryComponents: [
    ManageClientComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
