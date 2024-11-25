import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from '../../footer/footer.component';
import { AuthService } from '../../../../services/auth.service';
@Component({
  selector: 'app-schedule',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, HeaderComponent,FooterComponent],
  templateUrl: './schedule.component.html',
  styleUrl: './schedule.component.css'
})
export class ScheduleComponent {
  form: FormGroup = new FormGroup({
  username: new FormControl(''),
  email: new FormControl(''),
  specialization: new FormControl(''),
  amslot: new FormControl(''),
  pmslot: new FormControl(''),
  date: new FormControl(''),
  patienttype: new FormControl(''),
  });
  submitted = false;
  constructor(private formBuilder: FormBuilder, private authservice: AuthService) {} 
  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        username: ['', Validators.required],
        email:['',Validators.required],
        specialization:['',Validators.required],
        amslot:['',Validators.required],
        pmslot:['',Validators.required],
        date:['',Validators.required],
        patienttype:['',Validators.required],
      }
    );
  }

  get f(): { [key: string]: AbstractControl } {
    // console.log(this.form.controls);
    //localStorage.setItem("Error",this.form.controls);
    return this.form.controls;
  }

  addSlot()
  {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }
    console.log(JSON.stringify(this.form.value, null, 2));
    const { username,email,specialization,amslot,pmslot,date,patienttype } = this.form.value;
    this.authservice.addSlots( username,email,specialization,amslot,pmslot,date,patienttype ).subscribe(isAuthnticated=>{
      if(isAuthnticated) {
      }
      else{
        alert("User already exist");
      }
    })
  }
}
