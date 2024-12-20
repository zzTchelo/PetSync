import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login-page/login.component';
import { SchedulePageComponent } from './pages/schedule/schedule-page/schedule-page.component';
import { ClientPageComponent } from './pages/client/client-page/client-page.component';
import { PetPageComponent } from './pages/pet/pet-page/pet-page.component';
import { ClientRegisterPageComponent } from './pages/client/client-register-page/client-register-page.component';
import { PetRegisterPageComponent } from './pages/pet/pet-register-page/pet-register-page.component';
import { ClientUpdateComponent } from './pages/client/client-update-page/client-update-page.component';
import { PetUpdatePageComponent } from './pages/pet/pet-update-page/pet-update-page.component';
import { LoginRegisterPageComponent } from './pages/login/login-register-page/login-register-page.component';
import { LoginUpdatePageComponent } from './pages/login/login-update-page/login-update-page.component';


export const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch:'full'},

  {path: 'login', component: LoginComponent},
  {path: 'loginRegister', component: LoginRegisterPageComponent},
  {path: 'loginUpdate', component: LoginUpdatePageComponent},


  {path: 'clients', component: ClientPageComponent},
  {path: 'clientRegister', component: ClientRegisterPageComponent},
  {path: 'clients/:id', component: ClientUpdateComponent},

  {path: 'pets', component: PetPageComponent},
  {path: 'petRegister', component: PetRegisterPageComponent},
  {path: 'pets/:id', component: PetUpdatePageComponent},

  {path: 'schedules', component: SchedulePageComponent},

  {path: '**', redirectTo: 'schedules', pathMatch:'full'},
];
