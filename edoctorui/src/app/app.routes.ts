import { Routes } from '@angular/router';
import { LoginComponent } from './components/mainpage/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomepageComponent } from './components/mainpage/homepage/homepage.component';
import { DoctorRegistrationComponent } from './components/doc-register/doc-register.component';
import { DoctordashboardComponent } from './components/Doctor/doctordashboard/doctordashboard.component';
import { AdmindashboardComponent } from './components/admin/admindashboard/admindashboard.component';
import { AppointmentlistComponent } from './components/appointmentlist/appointmentlist.component';
import { CreateAppointmentComponent } from './components/user/create-appointment/create-appointment.component';
import { UserdashboardComponent } from './components/user/userdashboard/userdashboard.component';
import { ScheduleComponent } from './components/Doctor/schedule/schedule.component';
import { DoctorupdateComponent } from './components/Doctor/doctorupdate/doctorupdate.component';
import { PatientupdateComponent } from './components/user/patientupdate/patientupdate.component';
import { AdminupdateComponent } from './components/admin/adminupdate/adminupdate.component';
import { DoctorslistComponent } from './components/user/doctorslist/doctorslist.component';

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
  { path:'schedule', component: ScheduleComponent},
  { path: 'doctorupdate', component: DoctorupdateComponent},
  { path: 'patientupdate', component: PatientupdateComponent},
  { path: 'adminupdate', component: AdminupdateComponent},
  { path: 'doctorslist', component: DoctorslistComponent},
  { path: '', pathMatch: 'full', redirectTo: 'homepage' }, 
];
