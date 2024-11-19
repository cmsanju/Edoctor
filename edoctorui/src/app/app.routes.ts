import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { DoctorRegistrationComponent } from './components/doc-register/doc-register.component';
import { DoctordashboardComponent } from './components/doctordashboard/doctordashboard.component';
import { AdmindashboardComponent } from './components/admindashboard/admindashboard.component';
import { AppointmentlistComponent } from './components/appointmentlist/appointmentlist.component';
import { CreateAppointmentComponent } from './components/create-appointment/create-appointment.component';
import { UserdashboardComponent } from './components/userdashboard/userdashboard.component';
export const routes: Routes = [
  { path: 'homepage', component: HomepageComponent},
  { path: 'login', component: LoginComponent },
  { path:'register', component: RegisterComponent },
  { path:'doc-register', component:DoctorRegistrationComponent},
  { path:'doctor', component: DoctordashboardComponent},
  { path:'admindashboard', component: AdmindashboardComponent},
  { path: 'appointmentlist', component: AppointmentlistComponent},
  { path: 'create-appointment', component: CreateAppointmentComponent},
  { path: 'userdashboard', component: UserdashboardComponent},
  { path: '', pathMatch: 'full', redirectTo: 'homepage' }, 
];
