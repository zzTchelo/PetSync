import { Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { SchedulePageComponent } from './component/schedule-page/schedule-page.component';

export const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch:'full'},
  {path: 'login', component: LoginComponent},
  {path: 'schedule', component: SchedulePageComponent}
];
