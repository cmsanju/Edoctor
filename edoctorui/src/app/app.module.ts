import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RouterModule,Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './components/homepage/homepage.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { DoctorRegistrationComponent } from './components/doc-register/doc-register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DoctordashboardComponent } from './components/doctordashboard/doctordashboard.component';
import { AdmindashboardComponent } from './components/admindashboard/admindashboard.component';
import { AppointmentlistComponent } from './components/appointmentlist/appointmentlist.component';
import { CreateAppointmentComponent } from './components/create-appointment/create-appointment.component';
import { AuthService } from '../services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { UserdashboardComponent } from './components/userdashboard/userdashboard.component';

@NgModule({
  declarations: [],
  imports: [
    AppComponent,LoginComponent,HomepageComponent,DoctorRegistrationComponent,
    BrowserModule,
    RouterModule,
    CommonModule,
    ReactiveFormsModule,
    DoctordashboardComponent,
    AdmindashboardComponent,
    AppointmentlistComponent,
    CreateAppointmentComponent,
    HttpClientModule,
    UserdashboardComponent,
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers: [AuthService],
})
export class AppModule { }
