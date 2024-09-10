import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login-page/login.component';
import { SchedulePageComponent } from './pages/schedule-page/schedule-page.component';
import { ClientPageComponent } from './pages/client-page/client-page.component';
import { PetPageComponent } from './pages/pet-page/pet-page.component';
import { ClientRegisterPageComponent } from './pages/client-register-page/client-register-page.component';
import { PetRegisterPageComponent } from './pages/pet-register-page/pet-register-page.component';
import { ScheduleRegisterPageComponent } from './pages/schedule-register-page/schedule-register-page.component';


export const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch:'full'},

  {path: 'login', component: LoginComponent},
  {path: 'schedules', component: SchedulePageComponent},
  {path: 'clients', component: ClientPageComponent},
  {path: 'pets', component: PetPageComponent},

  {path: 'clientRegister', component: ClientRegisterPageComponent},
  {path: 'petRegister', component: PetRegisterPageComponent},
  {path: 'scheduleRegister', component: ScheduleRegisterPageComponent},

  {path: '**', redirectTo: 'schedules', pathMatch:'full'},
];
