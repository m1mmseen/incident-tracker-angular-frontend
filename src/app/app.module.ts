import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IncidentsComponent } from './incidents/incidents.component';

import {HttpClientModule} from "@angular/common/http";
import {HttpClientInMemoryWebApiModule} from "angular-in-memory-web-api";
import {InMemoryDataService} from "./in-memory-data.service";
import { UsersComponent } from './users/users.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { SettingsComponent } from './settings/settings.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { IncidentDetailsComponent } from './incident-details/incident-details.component';
import { IncidentListComponent } from './incident-list/incident-list.component';

@NgModule({
  declarations: [
    AppComponent,
    IncidentsComponent,
    UsersComponent,
    UserDetailsComponent,
    SettingsComponent,
    IncidentDetailsComponent,
    IncidentListComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService),

    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
