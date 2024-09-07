import { Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { SchedulePageComponent } from './component/schedule-page/schedule-page.component';
import { ClientPageComponent } from './component/client-page/client-page.component';
import { PetPageComponent } from './component/pet-page/pet-page.component';

export const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch:'full'},
  {path: 'login', component: LoginComponent},
  {path: 'schedules', component: SchedulePageComponent},
  {path: 'clients', component: ClientPageComponent},
  {path: 'pets', component: PetPageComponent},
  {path: '**', redirectTo: 'schedules', pathMatch:'full'},
];
