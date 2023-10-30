import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {IncidentsComponent} from "./incidents/incidents.component";
import {UsersComponent} from "./users/users.component";
import {UserDetailsComponent} from "./user-details/user-details.component";
import {SettingsComponent} from "./settings/settings.component";
import {IncidentDetailsComponent} from "./incident-details/incident-details.component";

const routes: Routes = [
    {
    path: 'incidents', component: IncidentsComponent
    },
    {
    path: 'users', component: UsersComponent
    },
    {
    path: 'user-details/:id', component: UserDetailsComponent
    },
    {
    path: 'settings', component: SettingsComponent
    },
    {
    path: 'new-user', component: UserDetailsComponent
    },
    {
        path: 'incident-details/:id', component: IncidentDetailsComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
